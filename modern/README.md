# 興裕通訊現代化網站

這是原始 Weebly 匯出網站的 Astro 遷移層。它會在建置時讀取根目錄既有的 HTML，抽出內容並套用單一 `SiteLayout`，因此 57 個舊頁面可先用新導覽、響應式版型與共用樣式呈現。

## 開發

```bash
npm install
npm run dev
npm run build
```

`postbuild` 會將既有的 `uploads/`、`files/` 與 `apps/` 資產同步到 `dist/`，因此 build 後的目錄可以直接部署。

正式部署前請設定 `SITE_URL`，例如 `SITE_URL=https://example.com`，用於產生 sitemap 與 robots.txt。`public/_redirects` 適用 Netlify；其他伺服器請依同一份對照表設定 301 redirect。

## 遷移原則

- 既有根目錄 HTML 保留作為相容來源，避免舊網址立即失效。
- 新增頁面放在 `src/pages`，共用版型放在 `src/layouts`，網站設定放在 `src/data`。
- 產品頁下一階段應把 HTML 內容轉為產品資料，再由 `ProductCard` / `ProductDetail` 元件渲染；完成後即可移除 `src/lib/legacy.ts`。
- 部署時需一併提供根目錄的 `uploads/` 資產，或將資產搬至 `modern/public/uploads/`。
