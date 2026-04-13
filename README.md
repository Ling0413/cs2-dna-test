# 🎮 CS2 DNA — 打法基因测试

> 通过 30 道高还原度的 CS2 场景题，定位你与哪位职业选手打法最相似。

**在线体验：** https://ling0413.github.io/cs2-dna-test/

---

## 📁 代码目录

```
cs2-dna-test/
├── index.html      # 页面结构 + 完整 CSS 样式系统
├── players.js      # ✏️ 职业选手档案库（25 位，可自由增删）
├── questions.js    # ✏️ 题目库（30 题，6 维度，可自由修改）
└── app.js          # 核心逻辑：答题控制、匹配算法、雷达图绘制
```

> **日常维护只需关注 `players.js` 和 `questions.js`，其余文件无需改动。**

---

## 🧠 核心逻辑

### 1. 六维评分体系

每道题对应一个维度，答案选项携带该维度的分值（-3 ~ +3）：

| 维度 ID | 中文名 | 说明 |
|---------|--------|------|
| `aggression` | 战术攻击性 | 激进冲杀 vs 稳健等待 |
| `role` | 角色定位 | 突破手 / 道具手 / 自由人 / IGL / 主狙 |
| `economy` | 经济纪律 | 严格 eco vs 随性买枪 |
| `mental` | 心理韧性 | 逆境抗压、残局处置 |
| `teamplay` | 团队协作 | 团队配合 vs 个人 carry |
| `weapon` | 武器偏好 | 步枪 / 狙击 / 道具 / 手枪局 |

用户完成 30 题后，系统对每个维度累计原始分，再归一化到 **0 ~ 100**。

### 2. 选手匹配算法

使用 **余弦相似度（60%）+ 欧式距离相似度（40%）** 混合计算：

```js
// 余弦相似度：衡量方向一致性
cosineSimilarity(userVec, playerVec)

// 欧式距离相似度：衡量数值接近程度
euclidSimilarity = 1 - RMSD / 100

// 最终得分
finalScore = cosine * 0.6 + euclidSim * 0.4
```

对全部 25 位选手排序后，取得分最高者为主匹配，第 2-4 名展示为"其他接近选手"。

### 3. 结果展示

- **环形进度条**：展示与主匹配选手的相似度百分比
- **Canvas 雷达图**：用户六维分布（橙色）vs 选手参考（选手主色）叠加对比
- **选手档案卡**：国籍、战队、角色、风格标签、人物描述
- **其他匹配**：前 3 名其他相似选手卡片

---

## ✏️ 如何修改题目（questions.js）

每道题的数据结构如下：

```js
{
  id: 'q01',           // 唯一 ID，不要重复
  dim: 'aggression',   // 对应维度（见上表）
  dimLabel: '⚔️ 战术攻击性',
  text: '题目文字...',
  options: [
    { text: 'A 选项文字', scores: { aggression: 3 } },
    { text: 'B 选项文字', scores: { aggression: 1 } },
    { text: 'C 选项文字', scores: { aggression: -1 } },
    { text: 'D 选项文字', scores: { aggression: -3 } },
  ]
}
```

**scores 填写规则：**
- `+3` = 强烈倾向该维度高分方向
- `+1` = 轻微倾向
- `-1` = 轻微倾向低分
- `-3` = 强烈倾向低分
- 每题只需填写主维度分值即可

---

## ✏️ 如何新增选手（players.js）

复制以下模板，填入对应数据：

```js
{
  ign: 'PlayerName',           // 游戏 ID
  fullName: '真实姓名',
  nationality: '🇺🇦 乌克兰',
  team: 'NAVI',
  role: 'entry',               // entry / support / lurker / igl / awper
  role_label: '突破手',
  color: '#F5A623',            // 选手专属主色（用于雷达图和高亮）
  tags: ['激进', '个人carry'],  // 风格标签（2-4个）
  tagline: '一句话风格描述',
  desc: '详细的选手打法描述（2-3句话）',
  scores: {                    // 六维分值，0-100
    aggression: 95,
    role:       80,
    economy:    45,
    mental:     85,
    teamplay:   60,
    weapon:     70,
  }
}
```

**scores 标定参考：**
- `aggression`：激进程度，arT/YEKINDAR ≈ 95，Jame ≈ 10
- `role`：角色中心性，越高越倾向个人 carry，IGL 通常较低
- `economy`：经济纪律，Jame ≈ 95（极度保守），arT ≈ 20
- `mental`：逆境表现，s1mple/ZywOo ≈ 95
- `teamplay`：团队依赖度越高分越高，IGL 通常 85+
- `weapon`：步枪倾向越高分越高，纯 AWP 手通常 10-30

---

## 🚀 部署方式

### 方式一：GitHub Pages（当前使用，推荐）

**首次部署（已完成）：**

```bash
git init
git add .
git commit -m "first commit"
gh repo create cs2-dna-test --public --source=. --push
gh api repos/你的用户名/cs2-dna-test/pages \
  --method POST -f "source[branch]=master" -f "source[path]=/"
```

访问地址：`https://你的用户名.github.io/cs2-dna-test/`

**日常更新（修改题目/选手后）：**

```bash
git add .
git commit -m "更新题目/选手数据"
git push
```

推送后约 1-2 分钟自动生效。

---

### 方式二：绑定自定义域名

如果你有自己的域名（如 `cs2dna.com`），按以下步骤操作：

**Step 1：在 DNS 服务商添加 CNAME 记录**

| 类型 | 主机记录 | 记录值 |
|------|----------|--------|
| CNAME | `@` 或 `www` | `ling0413.github.io` |

> 如果用根域名（`@`），部分 DNS 服务商需要改用 A 记录，指向 GitHub 的 IP：
> `185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`

**Step 2：在仓库根目录创建 `CNAME` 文件**

```bash
echo "你的域名" > CNAME   # 例如：cs2dna.com
git add CNAME
git commit -m "add custom domain"
git push
```

**Step 3：在 GitHub 仓库设置中填写域名**

进入 `仓库 → Settings → Pages → Custom domain`，填入你的域名，勾选 `Enforce HTTPS`。

DNS 生效需要 5 分钟 ~ 24 小时，之后直接用你的域名访问即可。

---

## 🛠️ 本地开发

```bash
# 在项目目录启动本地服务器
cd cs2-dna-test
python3 -m http.server 8080

# 浏览器访问
open http://localhost:8080
```

> 必须通过 HTTP 服务器访问，不能直接双击 `index.html`（否则 JS 文件加载会被浏览器安全策略拦截）。

---

## 📊 选手列表

| 选手 | 战队 | 角色 | 国籍 |
|------|------|------|------|
| ZywOo | Vitality | 主狙 | 🇫🇷 法国 |
| donk | Spirit | 突破手 | 🇷🇺 俄罗斯 |
| NiKo | Falcons | 自由人 | 🇧🇦 波黑 |
| m0NESY | Falcons | 主狙 | 🇷🇺 俄罗斯 |
| ropz | Vitality | 自由人 | 🇪🇪 爱沙尼亚 |
| sh1ro | Spirit | 主狙 | 🇷🇺 俄罗斯 |
| Jame | PARIVISION | 主狙/IGL | 🇰🇿 哈萨克斯坦 |
| karrigan | FaZe | IGL | 🇩🇰 丹麦 |
| apEX | Vitality | IGL | 🇫🇷 法国 |
| YEKINDAR | FURIA | 突破手 | 🇱🇻 拉脱维亚 |
| arT | Legacy | 突破手/IGL | 🇧🇷 巴西 |
| b1t | NAVI | 突破手 | 🇺🇦 乌克兰 |
| torzsi | MOUZ | 主狙 | 🇭🇺 匈牙利 |
| FalleN | FURIA | 主狙/IGL | 🇧🇷 巴西 |
| XANTARES | Aurora | 突破手 | 🇹🇷 土耳其 |
| HooXi | Astralis | IGL | 🇩🇰 丹麦 |
| Twistzz | FaZe | 突破手 | 🇨🇦 加拿大 |
| broky | FaZe | 主狙 | 🇱🇻 拉脱维亚 |
| frozen | FaZe | 自由人 | 🇸🇰 斯洛伐克 |
| flameZ | ... | 突破手 | 🇮🇱 以色列 |
| Spinx | ... | 自由人 | 🇮🇱 以色列 |
| mezii | Vitality | 道具手 | 🇬🇧 英国 |
| KSCERATO | FURIA | 道具手 | 🇧🇷 巴西 |
| jabbi | Astralis | 突破手 | 🇩🇰 丹麦 |
| Aleksib | NAVI | IGL | 🇫🇮 芬兰 |

---

## License

MIT — 随意使用、修改、分发。
