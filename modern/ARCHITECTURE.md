# 網站重構評估

## 現況

- 57 個 HTML 全部放在 repository 根目錄，頁面由 Weebly 匯出而來。
- 每頁都重複完整導覽、內嵌 style 與版型標記；修改 header、選單或 footer 需要同步大量檔案。
- 檔名同時使用數字 ID、品牌名稱、產品型號與 `_copy`，URL 缺少一致的資訊架構。
- `files/main_style.css` 約 27 KB，包含大量 Weebly 專用 selector；根目錄頁面又有大量 inline style。
- 產品內容、品牌分類與產品頁沒有資料模型，導致同系列頁面難以批次更新，也容易出現型號與頁面標題不一致。
- `uploads/` 內混合原始圖檔、縮圖、GIF 與多份同圖檔，資產命名與頁面內容沒有可追蹤的關聯。

## 目標架構

```text
modern/
  src/
    data/       網站設定、導覽、產品資料
    layouts/    SiteLayout、產品／文章版型
    components/ Header、Footer、ProductCard、Breadcrumb
    pages/      首頁、分類頁、產品頁、聯絡頁
    lib/        舊頁面匯入與資料轉換工具（過渡期）
    styles/     design tokens 與全站樣式
```

Astro 負責靜態輸出；內容頁不需要瀏覽器端框架，只有手機導覽等互動才使用少量原生 JavaScript。這符合產品型錄網站的效能、SEO 與部署需求。

## URL／檔名規則

新頁面採用小寫 kebab-case：

| 類型 | 新路徑範例 | 舊頁面 |
| --- | --- | --- |
| 首頁 | `/` | `index.html` |
| 產品分類 | `/products/phone-systems/` | `38651354413231727231-201322556327231.html` |
| 品牌 | `/brands/panasonic/` | `222833855529260-panasonic1.html` |
| 產品 | `/products/panasonic/kx-tda50/` | `kx-tda50.html` |
| 聯絡 | `/contact/` | `32879323632510520497.html` |
| 文章 | `/blog/` | `blog.html` |

舊 `.html` 路徑在正式切換期間保留 redirect 或 alias，避免搜尋引擎與既有連結失效。產品型號可以保留在 slug 中，因為它是使用者搜尋與辨識產品的重要資訊。

## 分階段執行

1. 先以 `src/lib/legacy.ts` 讀取所有舊頁面，讓新版 layout 接管整站。
2. 建立產品資料 schema，先搬 Panasonic、NEC、Tecom 等重複度高的產品群組。
3. 將品牌、產品分類與聯絡頁轉成乾淨的 Astro pages/components。
4. 將圖片搬到 `modern/public/uploads/`，依 `products/{brand}/{model}/` 分類並建立 alt text。
5. 建立舊網址 redirect map，檢查 sitemap、canonical、404 與行動版導覽後，再移除 legacy adapter。
