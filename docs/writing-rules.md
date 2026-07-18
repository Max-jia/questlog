# QuestLog 攻略寫作規範

> 每次新增或修改 `content/guides/` 下的文章前必讀。已涵蓋全部正式規則和隱性慣例（從 2026-07-13 至今 27+ 篇文章中提取）。

---

## 一、檔案命名

```
{遊戲slug}-{主題slug}.md
```

- 遊戲 slug：`meccha-chameleon`、`gta-6`、`moonlight-peaks` 等
- 主題用連字號分隔，全小寫，英文
- 範例：`ac-black-flag-story-walkthrough.md`、`moonlight-peaks-farming-guide.md`

---

## 二、Frontmatter（文章頭部資訊）

每篇文章必須包含以下欄位，**順序固定**：

```yaml
---
title: "{遊戲全名} {主題}: {副標題}"
excerpt: "{1-2 句摘要，150 字以下，包含關鍵搜尋詞}"
game: {遊戲slug}
gameName: "{遊戲正式全名}"
date: "{YYYY-MM-DD}"
category: Guides
section: {分類}
verified: verified
gameVersion: "1.0"
tldr:
  - "{要點 1 —— 最具操作性的建議}"
  - "{要點 2}"
  - "{要點 3}"
tags:
  - {標籤1}
  - {標籤2}
  - {標籤3}
sources:
  - name: "{來源名稱}"
    url: "{完整網址}"
  - name: "{來源名稱 2}"
    url: "{完整網址 2}"
---
```

### 欄位規範

| 欄位 | 規則 |
|------|------|
| `title` | 格式固定：`{遊戲名} {主題}: {副標題}`。中間用冒號分隔。遊戲名用正式全名（如 `Assassin's Creed Black Flag Resynced`，非簡稱 `AC Black Flag`）。 |
| `excerpt` | 1-2 句。含關鍵字。150 字以下。結尾不加句號。 |
| `game` | 遊戲 slug，與檔案名中的遊戲 slug 一致 |
| `gameName` | 遊戲正式全名，與 title 中的遊戲名一致 |
| `date` | YYYY-MM-DD 格式，實際撰寫日期 |
| `category` | 固定為 `Guides` |
| `section` | 從已使用的分類中選一個：`Beginner`、`Combat`、`Systems`、`Farming`、`Collectibles`、`Reference`、`Maps`、`Walkthrough`、`Lore`、`Romance`、`Progression`。**
- (table continued)
| `verified` | 固定為 `verified` |
| `tldr` | **3 點**。不是摘要——是「玩家最需要知道的操作性建議」。每點一句話，不用術語解釋，直接告訴他們做什麼。 |
| `tags` | 3-6 個。首字母大寫。不使用遊戲名作為標籤（那是分類層級的事） |
| `sources` | 至少 2 個真實存在的來源。`name` 用 `來源網站: 頁面標題` 格式。`url` 是完整網址。 |

### section 分類對照

| section | 適用內容 |
|---------|---------|
| `Beginner` | 新手入門、基礎教學 |
| `Combat` | 戰鬥、武器、船戰 |
| `Systems` | 金錢、製作、升級、經濟 |
| `Farming` | 種田、作物、牲畜 |
| `Collectibles` | 收集品、隱藏物品 |
| `Reference` | 參考手冊、清單 |
| `Maps` | 地圖相關 |
| `Walkthrough` | 主線／支線任務攻略 |
| `Lore` | 角色介紹、故事背景 |
| `Romance` | 戀愛系統、NPC 關係 |
| `Progression` | 升級路線、解鎖條件 |

---

## 三、配圖規則（強制）

1. **禁止跨文章重複配圖**。每篇文章的配圖必須是該文章專屬的，不得與同遊戲其他文章共用同一張截圖。這是最重要的規則。

2. **截圖不夠時，寧可少配圖，也不要重複。**（2026-07-17 記錄：Subnautica 2 的 35 篇文章輪流使用同 3 張截圖，導致 13 篇被 Google 判定頁面同質化，已爬取但未收錄。）

3. 圖片檔名使用**描述性命名**：`hero-beginner-guide.jpg`、`hero-fort-capture.jpg`。禁止 `screenshot-01.jpg` 這類無意義編號。

4. 圖片路徑格式：`/images/{遊戲slug}/screenshots/{描述性檔名}.jpg`

5. Alt 文字要有意義，描述圖片內容：`![Black Flag fort capture](/images/ac-black-flag/screenshots/hero-fort-capture.jpg)`

6. 圖片放在正文第一段之前（frontmatter 結束後的第一行），作為文章 Hero 圖。

7. 圖片來源：優先使用 Steam 官方截圖（`store.steampowered.com/api/appdetails?appids={id}&filters=screenshots`），因版權合規且品質高。若 Steam 不可用，可用第三方媒體的官方新聞稿配圖。

---

## 四、正文結構規則

1. **每篇文章結構必須不同**。不要所有文章用同樣的「一段文字＋一個表格＋Related Guides」。可用的結構模板（輪流使用）：
   - 10 條清單式（如 beginner guide）
   - 表格參考手冊式（如 farming guide）
   - NPC 卡片式（如 romance guide）
   - 配方書式（如 magic/potions guide）
   - 三階段收入策略式（如 money guide）
   - 逐關卡攻略式（如 story walkthrough）
   - 剋制矩陣式（如 naval combat advanced）
   - 區域分類清單式（如 sea shanties）
   - 系統教學＋最優路線式（如 assassin contracts）
   - 公式+分級式（如 fort capture）
   - 角色介紹式（如 characters guide）
   - 食譜/配方查詢式（如 crafting guide）
   - 逐點攻略式（如 diving bell locations）

2. **文章結尾**統一使用 `## Related Guides`（二級標題），但不放具體連結——由網站前端自動填充。

3. **正文語言**：繁體中文為主，遊戲專有名詞保留英文。不使用純機翻中文。

4. **段落長度**：每個段落 3-5 句。避免超過 8 句的大段落。

5. **表格**：用於資料密集型內容（對比、排名、數據）。純敘述內容不用表格。

6. **字數要求**：每篇 800 字以上（英文以 `wc -w` 計算的單詞數）。農場模擬等內容密集型遊戲可達 1000+。

---

## 五、發文節奏規則

1. **禁止爆發式發文**：不要一次性發佈幾十篇。新站期（2026 年內）保持每週穩定新增數篇。

2. 同一天內新增不超過 5 篇（以 `date` 欄位為準）。

3. 分批發布：每批 5 篇，隔天再發下一批。讓 Google 看到「持續更新」而非「批量傾倒」。

---

## 六、SEO 標題公式

```
{遊戲全名} {主題關鍵字}: {具體副標題}
```

範例：
- ✅ `Moonlight Peaks Farming Guide: Best Crops, Livestock & Layout Strategy`
- ✅ `AC Black Flag Resynced Fort Capture Guide: Conquer Every Fortress`
- ❌ `Black Flag Forts`（太短、沒有副標題、遊戲名用簡稱）

關鍵字選擇規則：用玩家實際會搜的字（「guide」「walkthrough」「how to」「all locations」），不用行銷用語（「ultimate」「amazing」「incredible」）。

---

## 七、內容深度基準

每篇文章必須包含：
- ✅ 可操作的具體建議（數字、%數、金額）
- ✅ 玩家常犯錯誤／避坑提示
- ✅ 至少一個表格或結構化資料（對比、排名、清單）
- ✅ 至少 2 個真實外部來源
- ❌ 禁止純主觀感想（「這遊戲很好玩」）
- ❌ 禁止空洞建議（「多練習就會了」）
