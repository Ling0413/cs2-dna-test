// ═══════════════════════════════════════════════════════════
//  questions.js  —  CS2 DNA 题目库
//  共 35 题，7 个维度，每维度 5 题
//
//  ⚠️  如需修改或新增题目，直接编辑此文件即可。
//
//  维度说明：
//    aggr   进攻侵略性  —— 主动进攻倾向 vs 稳健防守
//    role   角色执行力  —— 执行角色职责的专注度
//    eco    经济纪律    —— 对枪支/经济的管理意识
//    clutch 残局心理    —— 1vN 或落后时的抗压能力
//    team   团队意识    —— 配合 vs 个人英雄主义
//    util   道具使用    —— 烟雾弹/闪光弹/燃烧瓶的重视程度
//    meme   整活维度    —— 节目效果 / 非常规操作 / 临场整活
//
//  分值说明：
//    每个选项对各维度加减 -3 ~ +3
//    每维度最多 ±15（5题 × ±3）
//    最终归一化到 0~100
// ═══════════════════════════════════════════════════════════

const QUESTIONS = [

  // ══════════════════════════════════════
  //  维度1：进攻侵略性（5题）
  // ══════════════════════════════════════

  {
    id: 'aggr_1', dimLabel: '⚔️ 进攻侵略性',
    text: '在Inferno T方进攻B包点，你是第一身位，队友还在做默认。这时你已经到了香蕉道入口，你会？',
    options: [
      { text: '冲锋，先拿信息再说', scores: { aggr: 3, role: 1, eco: -2, clutch: 1, team: -2, util: -1 } },
      { text: '在匪口默认，等大家到位后第二时间进', scores: { aggr: -2, role: 2, eco: 1, clutch: 0, team: 3, util: 1 } },
      { text: '在香蕉道默认，扔烟封木桶，等队友跟上', scores: { aggr: 0, role: 2, eco: 0, clutch: 0, team: 2, util: 3 } },
      { text: '假进香蕉道逼出信息，看情况再决定', scores: { aggr: 1, role: 3, eco: 1, clutch: 2, team: 1, util: 0 } },
    ],
  },

  {
    id: 'aggr_2', dimLabel: '⚔️ 进攻侵略性',
    text: '在Dust2 CT方防守A包点，你在A斜坡，对面已经连续两局没有威胁B包点。你会？',
    options: [
      { text: '主动反推A大打信息，反压匪口', scores: { aggr: 3, role: 1, eco: -1, clutch: 1, team: -1, util: 0 } },
      { text: '继续守斜坡，B包点没动静不代表没人', scores: { aggr: -2, role: 2, eco: 2, clutch: 1, team: 1, util: 0 } },
      { text: '跟队友说一声，考虑移到中路支援', scores: { aggr: 0, role: 2, eco: 1, clutch: 0, team: 3, util: 1 } },
      { text: '上推到A小，主动找人打', scores: { aggr: 2, role: 2, eco: -1, clutch: 2, team: 0, util: 0 } },
    ],
  },

  {
    id: 'aggr_3', dimLabel: '⚔️ 进攻侵略性',
    text: '在Dust2 T方进攻A门，你是第一身位，CT方非常喜欢抢A大，队友扔了A大闪光。你的第一反应是？',
    options: [
      { text: '闪光一给立刻冲，直接冲到A大拐角，不给对面喘息时间', scores: { aggr: 3, role: 3, eco: -1, clutch: 1, team: 1, util: 0 } },
      { text: '闪光一给立刻出A门，蓝箱自保', scores: { aggr: 1, role: 2, eco: 0, clutch: 1, team: 2, util: 2 } },
      { text: '观察对面道具，组织队友第二时间出A门', scores: { aggr: -1, role: 1, eco: 1, clutch: 0, team: 2, util: 0 } },
      { text: '对面A大人多，兄弟们转B！', scores: { aggr: -2, role: 1, eco: 1, clutch: 2, team: 1, util: 0 } },
    ],
  },

  {
    id: 'aggr_4', dimLabel: '⚔️ 进攻侵略性',
    text: '你在Ancient CT方守B包点，对面已经开始打B了，你要先手吗？',
    options: [
      { text: '立刻 push 水管外反打，不让他们进来', scores: { aggr: 3, role: 2, eco: -1, clutch: 2, team: -1, util: 0 } },
      { text: '守在水管里等，等他们进来后出', scores: { aggr: -1, role: 2, eco: 1, clutch: 3, team: 1, util: 0 } },
      { text: '水管外卡位，守住入口不让进场', scores: { aggr: 1, role: 3, eco: 1, clutch: 2, team: 1, util: 0 } },
      { text: '呼叫队友来支援，自己先拖时间', scores: { aggr: -2, role: 1, eco: 1, clutch: 1, team: 3, util: 1 } },
    ],
  },

  {
    id: 'aggr_5', dimLabel: '⚔️ 进攻侵略性',
    text: '比赛打到加时赛，连续几局T端没有进展，你会建议？',
    options: [
      { text: '全队强冲一边，靠气势打穿', scores: { aggr: 3, role: 1, eco: -2, clutch: 1, team: 1, util: -1 } },
      { text: '找到对面漏洞，一侧用快速道具偷包', scores: { aggr: 1, role: 3, eco: 0, clutch: 1, team: 2, util: 3 } },
      { text: '慢打，拉超时，消磨 CT 神经', scores: { aggr: -2, role: 2, eco: 2, clutch: 2, team: 2, util: 1 } },
      { text: '各自随机应变，不要太固定', scores: { aggr: 0, role: 1, eco: 0, clutch: 2, team: -1, util: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度2：角色执行力（5题）
  // ══════════════════════════════════════

  {
    id: 'role_1', dimLabel: '🎯 角色执行力',
    text: '你在队里最认同哪个角色定位？',
    options: [
      { text: '突破手：我是第一个进 A 包 / B 包的人', scores: { aggr: 3, role: 3, eco: -1, clutch: 1, team: 1, util: 0 } },
      { text: '主狙：我来控制关键角度，压制对面节奏', scores: { aggr: 0, role: 3, eco: 1, clutch: 2, team: 1, util: 0 } },
      { text: 'IGL：我来决定打哪边、什么时候进', scores: { aggr: 0, role: 2, eco: 2, clutch: 1, team: 3, util: 2 } },
      { text: '道具手：我来保证进场路线上的烟和闪都到位', scores: { aggr: -1, role: 3, eco: 1, clutch: 0, team: 3, util: 3 } },
    ],
  },

  {
    id: 'role_2', dimLabel: '🎯 角色执行力',
    text: '打 Nuke，进攻主打上场还是下场？',
    options: [
      { text: '必打上场，下场 CT 位太难突破', scores: { aggr: 1, role: 2, eco: 0, clutch: 0, team: 1, util: 1 } },
      { text: '先骚扰下场外围，消耗 CT 资源再主打上场', scores: { aggr: 0, role: 3, eco: 1, clutch: 0, team: 2, util: 2 } },
      { text: '假打一边，真打另一边，看 CT 怎么动', scores: { aggr: 1, role: 3, eco: 0, clutch: 1, team: 2, util: 2 } },
      { text: '看对面读图习惯，哪边人少打哪边', scores: { aggr: 0, role: 2, eco: 1, clutch: 2, team: 2, util: 1 } },
    ],
  },

  {
    id: 'role_3', dimLabel: '🎯 角色执行力',
    text: '你是自由人，这局 IGL 让你去古堡侧打信息，但你感觉对面全压 A 了，你会？',
    options: [
      { text: '按计划走，IGL 的判断比感觉准', scores: { aggr: -1, role: 2, eco: 1, clutch: 0, team: 3, util: 1 } },
      { text: '喊麦告诉 IGL 我的判断，他说怎么做就怎么做', scores: { aggr: 0, role: 2, eco: 0, clutch: 1, team: 2, util: 0 } },
      { text: '自己决定改走 A 侧，结果自己负责', scores: { aggr: 2, role: 2, eco: 0, clutch: 2, team: -2, util: 0 } },
      { text: '灵活走中路，两边都留退路', scores: { aggr: 1, role: 3, eco: 0, clutch: 2, team: 1, util: 0 } },
    ],
  },

  {
    id: 'role_4', dimLabel: '🎯 角色执行力',
    text: '你拿着 AWP 在 Mirage A 大位守，对面冲烟进来了，烟里有走动声，你选？',
    options: [
      { text: '主动推到烟边缘，抢一个近距离角度', scores: { aggr: 3, role: 2, eco: -1, clutch: 2, team: 0, util: 0 } },
      { text: '退后守烟出来的角，等他出来再打', scores: { aggr: -1, role: 3, eco: 1, clutch: 2, team: 0, util: 0 } },
      { text: '换手枪，AWP 太近没法用', scores: { aggr: 0, role: 2, eco: -1, clutch: 2, team: 0, util: 0 } },
      { text: '扔一颗 HE 进烟里，搞信息再做决定', scores: { aggr: 0, role: 2, eco: 0, clutch: 1, team: 1, util: 3 } },
    ],
  },

  {
    id: 'role_5', dimLabel: '🎯 角色执行力',
    text: '快结束局，你是 CT，对面已经在 A 包下包，队友全死光了，只剩你一个人，你会？',
    options: [
      { text: '直接冲进包快拆，赌一把', scores: { aggr: 3, role: 2, eco: -1, clutch: 3, team: 0, util: 0 } },
      { text: '扔烟隔断，分段清人再拆包', scores: { aggr: 0, role: 2, eco: 0, clutch: 2, team: 0, util: 3 } },
      { text: '根据包点位置判断进攻路线，不死冲', scores: { aggr: 1, role: 3, eco: 0, clutch: 3, team: 0, util: 1 } },
      { text: '时间快到了就保枪，下局有枪才有机会', scores: { aggr: -2, role: 1, eco: 3, clutch: 2, team: 0, util: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度3：经济纪律（5题）
  // ══════════════════════════════════════

  {
    id: 'eco_1', dimLabel: '💰 经济纪律',
    text: '连输两局，现在是 eco 局，你的打法是？',
    options: [
      { text: '全力冲，eco 局拼一把，换人就赚了', scores: { aggr: 3, role: 0, eco: -3, clutch: 1, team: -1, util: -2 } },
      { text: '买一把沙鹰，平衡输出和保枪', scores: { aggr: 0, role: 1, eco: 1, clutch: 1, team: 1, util: 0 } },
      { text: '全保，稳稳等下局全买', scores: { aggr: -3, role: 1, eco: 3, clutch: 0, team: 2, util: 0 } },
      { text: '看全队状态，大家保持一致就行', scores: { aggr: -1, role: 1, eco: 2, clutch: 0, team: 3, util: 0 } },
    ],
  },

  {
    id: 'eco_2', dimLabel: '💰 经济纪律',
    text: '手枪局赢了，下局强势买，但你的钱只够买 M4 或者 Deagle + 一套道具，你选？',
    options: [
      { text: '买 M4，枪比道具重要', scores: { aggr: 1, role: 1, eco: 0, clutch: 1, team: 0, util: -2 } },
      { text: '买 Deagle + 全套道具，支援队友进包', scores: { aggr: -1, role: 2, eco: 1, clutch: 0, team: 2, util: 3 } },
      { text: '问队里缺什么，按需决定', scores: { aggr: -1, role: 1, eco: 1, clutch: 0, team: 3, util: 1 } },
      { text: '找队友借一把，下局补回来', scores: { aggr: 0, role: 1, eco: -1, clutch: 0, team: 2, util: 0 } },
    ],
  },

  {
    id: 'eco_3', dimLabel: '💰 经济纪律',
    text: '你保住了一把 AWP，现在队友全死了，你是 CT，还有时间，你会？',
    options: [
      { text: '拆包保枪，不冒险打残局', scores: { aggr: -2, role: 2, eco: 3, clutch: 2, team: 0, util: 0 } },
      { text: '单挑，能赢就赢，AWP 要物尽其用', scores: { aggr: 2, role: 2, eco: -2, clutch: 2, team: 0, util: 0 } },
      { text: '看剩几个人和位置，判断是否值得打', scores: { aggr: 0, role: 3, eco: 2, clutch: 3, team: 0, util: 0 } },
      { text: '先扔道具消耗，再决定要不要冲', scores: { aggr: 0, role: 2, eco: 0, clutch: 2, team: 0, util: 3 } },
    ],
  },

  {
    id: 'eco_4', dimLabel: '💰 经济纪律',
    text: '全队 eco，但 A 包的位置拿到了，T 端要不要下包？',
    options: [
      { text: '下包，逼对面来拆包反攻更占优势', scores: { aggr: 1, role: 2, eco: 1, clutch: 1, team: 2, util: 1 } },
      { text: '不下包，eco 局能换人就值了', scores: { aggr: 0, role: 1, eco: 3, clutch: 0, team: 1, util: 0 } },
      { text: '能换人就下，换不了就带着包跑', scores: { aggr: 2, role: 2, eco: 1, clutch: 1, team: 1, util: 0 } },
      { text: '看包点好不好守，好守就下，不好守就算了', scores: { aggr: 0, role: 3, eco: 2, clutch: 1, team: 1, util: 1 } },
    ],
  },

  {
    id: 'eco_5', dimLabel: '💰 经济纪律',
    text: '你的 M4 这局被 rush 打死掉包了，下局经济怎么处理？',
    options: [
      { text: '直接强买，掉包的亏要靠赢回来', scores: { aggr: 1, role: 1, eco: -2, clutch: 0, team: 0, util: 0 } },
      { text: '跟队里说掉包了，大家一起重算经济', scores: { aggr: -1, role: 1, eco: 2, clutch: 0, team: 3, util: 0 } },
      { text: '自己硬扛，不拖累队伍', scores: { aggr: 0, role: 1, eco: 1, clutch: 1, team: 1, util: 0 } },
      { text: '看队里大盘，按队伍策略走', scores: { aggr: -1, role: 2, eco: 3, clutch: 0, team: 3, util: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度4：残局心理（5题）
  // ══════════════════════════════════════

  {
    id: 'clutch_1', dimLabel: '🧠 残局心理',
    text: '1v3 残局，你有 AK，对面还没下包，剩 30 秒，你怎么打？',
    options: [
      { text: '直接冲包点，速战速决', scores: { aggr: 3, role: 1, eco: -1, clutch: 2, team: 0, util: 0 } },
      { text: '声东击西，假进 A 逼 B 侧出来', scores: { aggr: 1, role: 2, eco: 0, clutch: 3, team: 0, util: 1 } },
      { text: '稳步推进，分段清人，不乱冲', scores: { aggr: -1, role: 2, eco: 1, clutch: 3, team: 0, util: 1 } },
      { text: '扔烟进包点，烟里强拆', scores: { aggr: 0, role: 2, eco: 0, clutch: 2, team: 0, util: 3 } },
    ],
  },

  {
    id: 'clutch_2', dimLabel: '🧠 残局心理',
    text: '比赛大分落后 5:10，下半场你的状态是？',
    options: [
      { text: '没变化，一局一局打，追回来也说不定', scores: { aggr: 0, role: 2, eco: 1, clutch: 3, team: 2, util: 0 } },
      { text: '反而更放松，反正没啥压力，冲起来', scores: { aggr: 2, role: 1, eco: -1, clutch: 2, team: 0, util: 0 } },
      { text: '跟队友沟通，找出哪里出了问题', scores: { aggr: -1, role: 2, eco: 1, clutch: 2, team: 3, util: 1 } },
      { text: '确实难受，但绷住，不能崩', scores: { aggr: -1, role: 1, eco: 0, clutch: 2, team: 1, util: 0 } },
    ],
  },

  {
    id: 'clutch_3', dimLabel: '🧠 残局心理',
    text: '你连续三局死得很早，手感很差。下一局你怎么调整？',
    options: [
      { text: '换更激进的打法，主动出击找手感', scores: { aggr: 3, role: 0, eco: -1, clutch: 1, team: -1, util: 0 } },
      { text: '稳一稳，打简单的，先把准心打回来', scores: { aggr: -2, role: 2, eco: 1, clutch: 2, team: 1, util: 0 } },
      { text: '跟队友说让我打道具手，不承担核心压力', scores: { aggr: -2, role: 2, eco: 1, clutch: 1, team: 3, util: 2 } },
      { text: '不调整，状态正常会波动，保持自己打法', scores: { aggr: 0, role: 1, eco: 1, clutch: 3, team: 1, util: 0 } },
    ],
  },

  {
    id: 'clutch_4', dimLabel: '🧠 残局心理',
    text: '1v1 沙鹰对 AK，你在 Inferno 香蕉路里对峙，第一反应？',
    options: [
      { text: '主动 peek，沙鹰换 AK 对我有利', scores: { aggr: 3, role: 1, eco: 1, clutch: 2, team: 0, util: 0 } },
      { text: '等他来，守角比主动出击更稳', scores: { aggr: -2, role: 2, eco: 1, clutch: 3, team: 0, util: 0 } },
      { text: '扔烟隔断，绕到另一个角度重新打', scores: { aggr: 0, role: 2, eco: 0, clutch: 3, team: 0, util: 3 } },
      { text: '快速变换位置，打乱对面的准心预判', scores: { aggr: 1, role: 2, eco: 0, clutch: 3, team: 0, util: 1 } },
    ],
  },

  {
    id: 'clutch_5', dimLabel: '🧠 残局心理',
    text: '你刚靠 1v2 把局拿下来了，队友语音里炸了。下一局你会？',
    options: [
      { text: '乘胜追击，这股气势不能停', scores: { aggr: 2, role: 1, eco: -1, clutch: 1, team: 1, util: 0 } },
      { text: '回到正常节奏，别因为一个 clutch 飘了', scores: { aggr: -1, role: 2, eco: 1, clutch: 3, team: 1, util: 0 } },
      { text: '感受了一下，然后当没发生过', scores: { aggr: -1, role: 2, eco: 1, clutch: 3, team: 0, util: 0 } },
      { text: '鼓励队友，把气氛继续带起来', scores: { aggr: 0, role: 1, eco: 0, clutch: 1, team: 3, util: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度5：团队意识（5题）
  // ══════════════════════════════════════

  {
    id: 'team_1', dimLabel: '🤝 团队意识',
    text: '你这局状态特别好，但 IGL 要你去放烟打道具手，你真实的反应是？',
    options: [
      { text: '没问题，团队需要什么我就打什么', scores: { aggr: -1, role: 3, eco: 0, clutch: 0, team: 3, util: 2 } },
      { text: '跟 IGL 说我状态好，让我打核心位', scores: { aggr: 1, role: 1, eco: 0, clutch: 1, team: 0, util: 0 } },
      { text: '执行，但有点委屈', scores: { aggr: -1, role: 2, eco: 0, clutch: 0, team: 2, util: 1 } },
      { text: '先问清楚为什么，理解了再全力做', scores: { aggr: 0, role: 2, eco: 0, clutch: 0, team: 2, util: 1 } },
    ],
  },

  {
    id: 'team_2', dimLabel: '🤝 团队意识',
    text: '打 Mirage，队友在中路失守了，对面控制了 mid。你怎么反应？',
    options: [
      { text: '立刻分人去支援 mid，mid 不能丢', scores: { aggr: 1, role: 1, eco: 0, clutch: 0, team: 3, util: 1 } },
      { text: '守好自己的位置，mid 没了就换打法', scores: { aggr: -1, role: 2, eco: 1, clutch: 1, team: 1, util: 0 } },
      { text: '让 IGL 出方案，大家统一应对', scores: { aggr: -1, role: 1, eco: 1, clutch: 0, team: 3, util: 0 } },
      { text: '主动 push mid 抢回控制权', scores: { aggr: 2, role: 2, eco: 0, clutch: 1, team: 1, util: 1 } },
    ],
  },

  {
    id: 'team_3', dimLabel: '🤝 团队意识',
    text: '队友反复在同一个位置被抓，你会？',
    options: [
      { text: '喊麦提醒他换位置，别死在同一个坑里', scores: { aggr: 0, role: 1, eco: 0, clutch: 0, team: 3, util: 0 } },
      { text: '主动给他做闪光掩护，帮他创造机会', scores: { aggr: 0, role: 2, eco: 0, clutch: 0, team: 3, util: 3 } },
      { text: '不干涉，他自己会想明白的', scores: { aggr: 0, role: 1, eco: 0, clutch: 1, team: 0, util: 0 } },
      { text: '跟 IGL 说，统一调整站位', scores: { aggr: -1, role: 1, eco: 0, clutch: 0, team: 2, util: 0 } },
    ],
  },

  {
    id: 'team_4', dimLabel: '🤝 团队意识',
    text: '打 Dust2，你主张走 B 侧，但 IGL 叫打 A 侧，你的选择？',
    options: [
      { text: '说出我的判断，但最终听 IGL 的', scores: { aggr: 0, role: 2, eco: 0, clutch: 0, team: 2, util: 0 } },
      { text: '闭嘴执行就是了，IGL 做决定不是我的事', scores: { aggr: -1, role: 2, eco: 0, clutch: 0, team: 2, util: 0 } },
      { text: '据理力争，我的理由更充分', scores: { aggr: 1, role: 1, eco: 0, clutch: 1, team: 0, util: 0 } },
      { text: '打完这局再讨论，先把这局打完', scores: { aggr: -1, role: 2, eco: 1, clutch: 0, team: 3, util: 0 } },
    ],
  },

  {
    id: 'team_5', dimLabel: '🤝 团队意识',
    text: '什么情况下你会主动打破原来的战术计划？',
    options: [
      { text: '发现明显空位立刻改，机会不等人', scores: { aggr: 2, role: 2, eco: 0, clutch: 1, team: -1, util: 0 } },
      { text: '原则上不改，擅自改计划风险太高', scores: { aggr: -2, role: 2, eco: 1, clutch: 0, team: 2, util: 0 } },
      { text: '先喊麦告诉 IGL，他同意了再改', scores: { aggr: -1, role: 1, eco: 0, clutch: 0, team: 3, util: 0 } },
      { text: '只有明显被对面读穿的时候才改', scores: { aggr: 0, role: 3, eco: 1, clutch: 2, team: 2, util: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度6：道具使用（5题）
  // ══════════════════════════════════════

  {
    id: 'util_1', dimLabel: '💣 道具使用',
    text: 'T攻 Inferno A 包，你会优先用什么道具进场？',
    options: [
      { text: '烟封 CT + 天台，再扔闪光进', scores: { aggr: 0, role: 3, eco: 0, clutch: 0, team: 2, util: 3 } },
      { text: '直接扔闪光进去，速战速决', scores: { aggr: 2, role: 2, eco: 0, clutch: 1, team: 0, util: 1 } },
      { text: 'HE 先消血，再闪进', scores: { aggr: 1, role: 2, eco: 0, clutch: 0, team: 1, util: 2 } },
      { text: '没有固定顺序，看当时情况临时决定', scores: { aggr: 1, role: 1, eco: 0, clutch: 2, team: 0, util: 0 } },
    ],
  },

  {
    id: 'util_2', dimLabel: '💣 道具使用',
    text: '你的烟雾弹不够完全封住 Inferno 香蕉路，你会？',
    options: [
      { text: '叫队友补一颗，配合一起扔', scores: { aggr: -1, role: 2, eco: 0, clutch: 0, team: 3, util: 2 } },
      { text: '扔了再说，能封多少封多少', scores: { aggr: 1, role: 1, eco: 0, clutch: 1, team: 0, util: 1 } },
      { text: '改打 B 侧，不强行走香蕉', scores: { aggr: -1, role: 3, eco: 0, clutch: 0, team: 1, util: 0 } },
      { text: '用闪光代替，逼 CT 缩进去再打', scores: { aggr: 1, role: 2, eco: 0, clutch: 1, team: 1, util: 2 } },
    ],
  },

  {
    id: 'util_3', dimLabel: '💣 道具使用',
    text: '你有一颗燃烧瓶，T 攻 Dust2 B 包，最优先的用法是？',
    options: [
      { text: '扔进 B 包内，逼 CT 出角，配合突破手进场', scores: { aggr: 0, role: 3, eco: 0, clutch: 0, team: 3, util: 3 } },
      { text: '留着 CT 守角用，反击时更有价值', scores: { aggr: -1, role: 2, eco: 1, clutch: 1, team: 1, util: 2 } },
      { text: '扔 B 门口，阻断 CT 出来绕背', scores: { aggr: 0, role: 3, eco: 0, clutch: 1, team: 2, util: 3 } },
      { text: '不扔，留到残局或 1vN 更值', scores: { aggr: -1, role: 1, eco: 2, clutch: 2, team: 0, util: 1 } },
    ],
  },

  {
    id: 'util_4', dimLabel: '💣 道具使用',
    text: '你确定对面藏在 Nuke 下场的夹角里，但看不见，你会？',
    options: [
      { text: '扔燃烧瓶把他逼出来', scores: { aggr: 1, role: 2, eco: 0, clutch: 1, team: 1, util: 3 } },
      { text: '直接冲进去枪打，快进快出', scores: { aggr: 3, role: 1, eco: -1, clutch: 2, team: 0, util: -1 } },
      { text: '叫队友扔闪光配合，双人清点', scores: { aggr: 0, role: 2, eco: 0, clutch: 0, team: 3, util: 2 } },
      { text: '佯攻另一侧，等他主动出来', scores: { aggr: 0, role: 3, eco: 0, clutch: 2, team: 1, util: 0 } },
    ],
  },

  {
    id: 'util_5', dimLabel: '💣 道具使用',
    text: '你对自己的道具水平评价是？',
    options: [
      { text: '很熟，我专门练过各图的烟，每个包点都扔得到', scores: { aggr: -1, role: 2, eco: 1, clutch: 0, team: 2, util: 3 } },
      { text: '一般，基础的会，复杂的线路不深究', scores: { aggr: 0, role: 1, eco: 0, clutch: 0, team: 1, util: 1 } },
      { text: '比较薄弱，我更依赖枪法和反应', scores: { aggr: 2, role: 1, eco: 0, clutch: 1, team: -1, util: -2 } },
      { text: '在学，知道道具很重要，但还没系统练', scores: { aggr: 0, role: 1, eco: 0, clutch: 0, team: 1, util: 1 } },
    ],
  },

  // ══════════════════════════════════════
  //  维度7：整活维度（5题）
  // ══════════════════════════════════════

  {
    id: 'meme_1', dimLabel: '🤡 整活维度',
    text: '地上有一把“永恒大狙”，你手里是 AK，队友还说“别捡，会掉节奏”。你会？',
    options: [
      { text: '捡，哪怕这局不会用，也得先开一枪过把瘾', scores: { aggr: 1, role: 0, eco: -1, clutch: 0, team: -1, util: 0, meme: 3 } },
      { text: '先问队友谁更会用，没人要我再拿起来整一把', scores: { aggr: 0, role: 1, eco: 1, clutch: 0, team: 2, util: 0, meme: 1 } },
      { text: '不捡，枪在地上再帅，也没有当前站位重要', scores: { aggr: -1, role: 2, eco: 2, clutch: 1, team: 1, util: 0, meme: -2 } },
      { text: '看比分，领先很多就捡着玩，关键局绝对不碰', scores: { aggr: 0, role: 1, eco: 1, clutch: 2, team: 1, util: 0, meme: 0 } },
    ],
  },

  {
    id: 'meme_2', dimLabel: '🤡 整活维度',
    text: '热身时你在 Mirage 中路连了两个穿烟爆头，队友起哄“正赛也这样打”。你会？',
    options: [
      { text: '下局直接来一把同路线复刻，节目效果拉满', scores: { aggr: 2, role: 1, eco: -1, clutch: 1, team: 0, util: 0, meme: 3 } },
      { text: '嘴上说行，开局还是先按战术默认', scores: { aggr: -1, role: 2, eco: 1, clutch: 1, team: 2, util: 0, meme: -1 } },
      { text: '让队友先给道具配合，真能成再整', scores: { aggr: 0, role: 2, eco: 0, clutch: 1, team: 2, util: 2, meme: 1 } },
      { text: '先观察对面有没有防备，没机会就不硬演', scores: { aggr: 0, role: 3, eco: 1, clutch: 2, team: 1, util: 0, meme: 0 } },
    ],
  },

  {
    id: 'meme_3', dimLabel: '🤡 整活维度',
    text: 'Eco 局队友突然提议“五把 Tec-9 一起冲烟刀一个”，你第一反应是？',
    options: [
      { text: '冲，eco 局不整活那什么时候整', scores: { aggr: 3, role: 0, eco: -2, clutch: 1, team: 1, util: 0, meme: 3 } },
      { text: '可以整，但我得先丢颗闪，不然像白给', scores: { aggr: 1, role: 2, eco: -1, clutch: 0, team: 2, util: 2, meme: 1 } },
      { text: '别闹，eco 局能换枪就已经很赚了', scores: { aggr: -2, role: 2, eco: 3, clutch: 1, team: 1, util: 0, meme: -2 } },
      { text: '如果比分大优我陪你们玩，胶着局别搞', scores: { aggr: 0, role: 1, eco: 1, clutch: 2, team: 1, util: 0, meme: 0 } },
    ],
  },

  {
    id: 'meme_4', dimLabel: '🤡 整活维度',
    text: '你在 Nuke CT 外场拿着鸟狙，对面刚暂停回来。你会怎么站？',
    options: [
      { text: '前顶红箱，打一个就是本局集锦', scores: { aggr: 2, role: 1, eco: -1, clutch: 2, team: 0, util: 0, meme: 3 } },
      { text: '正常守默认点，鸟狙也要当正经枪用', scores: { aggr: -1, role: 2, eco: 1, clutch: 1, team: 1, util: 0, meme: -2 } },
      { text: '让队友补颗闪，我去找个非常规角度偷一个', scores: { aggr: 1, role: 2, eco: 0, clutch: 1, team: 2, util: 2, meme: 1 } },
      { text: '看对面上一局外场节奏，真有空档再换位整活', scores: { aggr: 0, role: 3, eco: 1, clutch: 2, team: 1, util: 0, meme: 0 } },
    ],
  },

  {
    id: 'meme_5', dimLabel: '🤡 整活维度',
    text: '你刚打出一个穿烟爆头，语音里全在刷“这也行？”。下一局你会？',
    options: [
      { text: '乘胜追击，再找一个更离谱的 timing', scores: { aggr: 2, role: 1, eco: -1, clutch: 1, team: 0, util: 0, meme: 3 } },
      { text: '收一收，刚才那球是高光，不是常规打法', scores: { aggr: -1, role: 2, eco: 1, clutch: 2, team: 1, util: 0, meme: -1 } },
      { text: '提醒队友别上头，先把信息和默认做好', scores: { aggr: -1, role: 2, eco: 1, clutch: 1, team: 3, util: 0, meme: -2 } },
      { text: '可以继续找非常规机会，但前提是先沟通', scores: { aggr: 0, role: 3, eco: 0, clutch: 2, team: 2, util: 0, meme: 1 } },
    ],
  },

];
