# 興裕通訊現代化網站

這是原始 Weebly 匯出網站的 Astro 重構版本。舊頁面內容已轉成結構化資料與正式元件，透過新導覽、響應式版型與共用樣式呈現。

## 開發

```bash
npm install
npm run dev
npm run build
```

`postbuild` 會將既有的 `uploads/`、`files/` 與 `apps/` 資產同步到 `dist/`，因此 build 後的目錄可以直接部署。

舊匯出圖片由 `src/lib/images.ts` 統一正規化；產品列表與詳情頁會使用可確認的本地產品圖，沒有可靠對應的舊圖則顯示圖片整理提示，不直接引用失效外部網址。

剩餘舊頁面的標題、段落與圖片已轉成 `src/data/migrated-pages.json`，並由 `MigratedPage` 元件渲染。Astro 建置不再依賴 repository 根目錄的舊 HTML，也不再保留 legacy snapshot；原始檔案已封存至 `../archive/legacy-html/`。

正式部署前請設定 `SITE_URL`，例如 `SITE_URL=https://example.com`，用於產生 sitemap 與 robots.txt。`public/_redirects` 適用 Netlify；其他伺服器請依同一份對照表設定 301 redirect。

## GitHub Pages

專案根目錄已提供 `.github/workflows/deploy.yml`，會在 `main` push 後自動建置並部署到 GitHub Pages。此 repository 的預設 project site URL 是 `https://sutsagent-cloud.github.io/my-website/`；若改用 custom domain，請同步調整 workflow 的 `SITE_URL`，並移除或修改 `astro.config.mjs` 的 `base` 設定。

## 遷移原則

- 舊版 HTML 已移至 `archive/legacy-html/` 封存；舊網址由 Astro 產生的相容頁面與 redirect map 處理。
- 新增頁面放在 `src/pages`，共用版型放在 `src/layouts`，網站設定放在 `src/data`。
- 產品頁目前由 `ProductCard` / `ProductDetail` 元件渲染；其他歷史頁面由 `MigratedPage` 搭配結構化 JSON 渲染。
- 部署時需一併提供根目錄的 `uploads/` 資產，或將資產搬至 `modern/public/uploads/`。
