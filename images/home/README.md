# 首頁圖片資源說明

## 📁 圖片位置

所有圖片資源存放在 `public/images/home/` 目錄下，可以直接透過 URL 路徑訪問。

## 📋 圖片清單

### Logo
- **dyu_logo.jpg** (141KB)
  - 用途：網站 Logo
  - 使用：`/images/home/dyu_logo.jpg`

### 主視覺橫幅
- **hero_banner.png** (6.4MB)
  - 用途：首頁 Hero 區塊背景圖片
  - 原檔名：大葉招生主視覺.png
  - 使用：`/images/home/hero_banner.png`
  - 注意：檔案較大，建議使用時進行優化或壓縮

### Banner 圖片
- **banner_1.jpg** (717KB)
  - 用途：最新消息頁面 Banner
  - 使用：`/images/home/banner_1.jpg`

- **banner_2.jpg** (9.8MB)
  - 用途：招生資訊頁面 Banner
  - 使用：`/images/home/banner_2.jpg`
  - 注意：檔案較大，建議使用時進行優化或壓縮

- **banner_3.jpg** (669KB)
  - 用途：短期交流頁面 Banner
  - 使用：`/images/home/banner_3.jpg`

### Exchange 相關圖片
- **exchange_1.jpg** (98KB)
  - 用途：姊妹校交流區塊
  - 使用：`/images/home/exchange_1.jpg`

- **exchange_2.jpg** (192KB)
  - 用途：TEEP 計畫區塊
  - 使用：`/images/home/exchange_2.jpg`

- **exchange_3.jpg** (247KB)
  - 用途：文化體驗營區塊
  - 使用：`/images/home/exchange_3.jpg`

- **exchange_4.jpg** (86KB)
  - 用途：特色課程體驗區塊
  - 使用：`/images/home/exchange_4.jpg`

## 💻 使用方式

### 在 React 組件中使用

```tsx
// 方式 1: 直接使用路徑
<img src="/images/home/dyu_logo.jpg" alt="Da-Yeh University Logo" />

// 方式 2: 使用 import（需要放在 src/assets 目錄）
import logo from '@/assets/images/dyu_logo.jpg';
<img src={logo} alt="Logo" />
```

### 在 CSS/SCSS 中使用

```scss
.hero-section {
  background-image: url('/images/home/hero_banner.png');
  background-size: cover;
  background-position: center;
}
```

### 在 HTML 中使用

```html
<img src="/images/home/dyu_logo.jpg" alt="Logo" />
```

## ⚠️ 注意事項

1. **檔案大小**：
   - `hero_banner.png` (6.4MB) 和 `banner_2.jpg` (9.8MB) 檔案較大
   - 建議在生產環境中進行圖片優化或壓縮
   - 可以考慮使用 WebP 格式以減少檔案大小

2. **圖片優化建議**：
   - 使用圖片壓縮工具（如 TinyPNG、ImageOptim）
   - 考慮使用響應式圖片（srcset）
   - 實現懶加載（lazy loading）

3. **路徑說明**：
   - 所有圖片放在 `public/` 目錄下，可以直接透過絕對路徑訪問
   - 不需要使用 `import`，直接使用 `/images/home/檔名` 即可

## 📥 圖片來源

所有圖片均從 https://dyu-enroll.netlify.app 下載，已獲得使用許可。

## 🔄 更新記錄

- 2025-02-06: 初始下載，所有圖片資源已準備完成

