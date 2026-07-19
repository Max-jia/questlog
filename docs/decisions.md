# 產品決策記錄

## 2026-07-19b：內容質量優化——Common Mistakes + FAQ 擴張

- **決策**：基於競品調研（56% 文章缺 common mistakes、僅 2 篇 FAQ），做兩輪內容改動：
  1. **6 篇加 Common Mistakes**：Palworld、Meccha Chameleon、AC Black Flag、Moonlight Peaks 的 beginner guide，Subnautica 2 leviathan survival，AC Black Flag legendary ships。每篇 5 條具體錯誤+正確做法。
  2. **5 篇加 FAQ Section**：Subnautica 2 best practices、Palworld breeding、Meccha Chameleon pro tips、GTA 6 preorder guide、AC Black Flag naval combat advanced。每篇 4 個 Q&A。
  3. **FAQPage schema 擴張**：從僅 FAQ-category 文章 → 所有含 `**Q:**`/`A:` 格式的文章自動生成。
  4. **dateModified 支援**：content.ts 從檔案 mtime 自動偵測修改日期；文章頁展示「Updated」日期。

- **理由**：玩家搜尋以問句為主，FAQ 格式優先被 Google AI Overview 引用；玩家最恨「漏掉關鍵條件」的攻略，Common Mistakes 直接回應此痛點。
- **已知限制**：本次未改動所有 140 篇文章，僅覆蓋高流量文章。

## 2026-07-19：競品調研後的功能優化（Phase 1+2）

- **決策**：基於 Reddit/論壇/競品調研，實施 4 項優化：
  1. **站內搜索**：API 路由 + Header 搜尋彈窗（Cmd+K 快捷鍵）+ `/search` 結果頁
  2. **Schema.org 結構化數據**：Article + BreadcrumbList + WebSite(SearchAction) + FAQPage，提升 Google AI Overview 引用率
  3. **文章目錄導航（TOC）**：桌面端右側懸浮目錄，提取 h2/h3 標題，IntersectionObserver 高亮當前章節
  4. **劇透折疊**：支援 `<details>` HTML 標籤，前端渲染為可點擊展開的 Spoiler 區塊
- **理由**：調研發現玩家最大痛點為：找不到特定資訊（無搜索）、SEO 垃圾站氾濫（需要結構化數據突圍）、長文章難導航、怕劇透。
- **已知限制**：TOC 僅在 ≥3 個標題時顯示，且僅桌面端可見。

## 2026-07-17：遊戲主頁封面背景動效——嘗試後放棄

- **決策**：曾嘗試在遊戲主頁頂部背景疊加 30% 濃度的封面圖（漂移＋呼吸動效），本地預覽後認為不好看，已回滾，未上線。
- **教訓**：遊戲頁頂部維持「漸層色＋粒子動畫」的現有設計。若日後想再加封面元素，考慮其他形式（如右側卡片、小圖章），不再用全幅背景疊圖。

## 2026-07-16：首頁改用環形畫廊展示遊戲

- **決策**：在首頁加入 React Bits 的 CircularGallery（環形畫廊）元件，展示各遊戲封面，作為首頁吸睛門面。
- **理由**：元件原始碼已到手、成本低；環形滑動效果與遊戲封面素材天生契合；全站只放這一個 WebGL 元件，性能可控。
- **範圍**：只改首頁；元件需小幅改造以支援「點擊卡片跳轉到遊戲頁」（原版只能滑不能點）。
- **已知限制**：ac-black-flag 和 gta-6 目前沒有封面圖（只有攻略截圖），首波畫廊先上 3 款有封面的遊戲。
