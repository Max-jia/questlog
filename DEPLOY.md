# Vercel 部署規則

> 最後更新：2026-07-14（血淚經驗總結）

## 日常部署（永遠用這條）

```bash
npm run build && npx vercel --prod --yes
```

就這樣。不要加任何其他參數。

## 禁止事項

| 禁止 | 原因 |
|------|------|
| ❌ `vercel --force` | 會永久損壞專案 Build Command 設定 |
| ❌ `vercel.json` 改專案名稱 | 會創建重複專案，域名指向混亂 |
| ❌ 刪除 `.vercel` 目錄 | 失去專案連結，部署到錯誤專案 |
| ❌ 改 Dashboard Build Settings | 除非確切知道在幹嘛 |

## 如果部署失敗

1. 先檢查 `.vercel/project.json` 確認連結到正確專案
2. 確認 `vercel.json` 不存在（日常部署不需要它）
3. 確認 `node_modules` 存在且 `npm run build` 成功
4. 確認已 `git push` 最新程式碼

## 專案識別

| 專案名 | 用途 | 域名 |
|--------|------|------|
| game-guides | 主網站 | questlog.site |
