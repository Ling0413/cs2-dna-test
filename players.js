// ═══════════════════════════════════════════════════════════
//  players.js  —  CS2 DNA 选手档案库
//  数据来源：HLTV 2025年度 Top 20 选手榜单
//  角色体系：突破手 / 道具手 / 自由人 / IGL / 主狙
//
//  ⚠️  如需修改选手数据，直接编辑此文件即可。
//  每位选手字段说明：
//    ign         : 游戏ID
//    team        : 所属战队
//    nationality : 国籍（带 emoji 旗帜）
//    role        : 内部角色标识（entry/support/lurker/igl/awp/star）
//    role_label  : 显示用角色名
//    color       : 选手代表色（HEX）
//    tagline     : 一句话人格标签
//    tags        : 标签数组（显示在结果页）
//    desc        : 结果页详细描述（100~120字）
//    scores      : 七维度分值（0~100）
//      aggr   进攻侵略性
//      role   角色执行力
//      eco    经济纪律
//      clutch 残局心理
//      team   团队意识
//      util   道具使用
//      meme   整活指数
// ═══════════════════════════════════════════════════════════

const DIMENSIONS = [
  { id: 'aggr',   name: '侵略性',   icon: '⚔️' },
  { id: 'role',   name: '角色执行', icon: '🎯' },
  { id: 'eco',    name: '经济纪律', icon: '💰' },
  { id: 'clutch', name: '残局心理', icon: '🧠' },
  { id: 'team',   name: '团队意识', icon: '🤝' },
  { id: 'util',   name: '道具使用', icon: '💣' },
  { id: 'meme',   name: '整活指数', icon: '🤡' },
];

const PLAYERS = [

  // ───────────────────────────────────────
  //  #1  ZywOo — Vitality — 主狙
  // ───────────────────────────────────────
  {
    ign: 'ZywOo',
    team: 'Vitality', nationality: '🇫🇷 法国',
    role: 'awp', role_label: '主狙',
    color: '#f7c600',
    tagline: '四届年度最佳，AWP界的天花板',
    tags: ['主狙', '稳定输出', '节奏掌控'],
    desc: '你端起AWP不靠冲动靠计算。Mirage A大一个定点守，Inferno B小一个slow peek，对面永远不知道你下一步在哪。低调但致命，从不多说一句话，但AWP的枪声就是你的回答。',
    scores: { aggr: 50, role: 96, eco: 72, clutch: 94, team: 68, util: 58, meme: 42 },
  },

  // ───────────────────────────────────────
  //  #2  donk — Spirit — 突破手/核心
  // ───────────────────────────────────────
  {
    ign: 'donk',
    team: 'Spirit', nationality: '🇷🇺 俄罗斯',
    role: 'entry', role_label: '突破手',
    color: '#08979c',
    tagline: '2024年世界第一，但他才20岁',
    tags: ['突破手', '天才型', 'Rating怪'],
    desc: '你打CS靠的是本能加天赋。进A包不考虑线路，感觉对了就进；角度该不该抢，直觉说抢就抢。这种打法在别人身上叫莽，在你身上叫天赋。Inferno、Nuke、Ancient，到哪都是最高分那个。',
    scores: { aggr: 90, role: 82, eco: 54, clutch: 94, team: 64, util: 58, meme: 88 },
  },

  // ───────────────────────────────────────
  //  #3  ropz — Vitality — 自由人
  // ───────────────────────────────────────
  {
    ign: 'ropz',
    team: 'Vitality', nationality: '🇪🇪 爱沙尼亚',
    role: 'lurker', role_label: '自由人',
    color: '#389e0d',
    tagline: '最安静的那把刀，插在最疼的地方',
    tags: ['自由人', '信息收割', '克制精准'],
    desc: '你从不急着亮出自己。Nuke B侧一个绕后、Dust2中路一个插刀，队友还在正面对枪的时候你已经到了对面背后。保枪意识极强，死亡换死亡的买卖你不做。',
    scores: { aggr: 46, role: 88, eco: 88, clutch: 90, team: 74, util: 70, meme: 20 },
  },

  // ───────────────────────────────────────
  //  #4  m0NESY — Falcons — 主狙
  // ───────────────────────────────────────
  {
    ign: 'm0NESY',
    team: 'Falcons', nationality: '🇷🇺 俄罗斯',
    role: 'awp', role_label: '主狙',
    color: '#eb2f96',
    tagline: '最激进的AWP，进攻型狙手天花板',
    tags: ['主狙', '激进AWP', '进攻型'],
    desc: '你的AWP不是用来守角的，是用来进攻的。Nuke A侧硬推进，Mirage mid一个aggressive peek，你把AWP打出了突破手的感觉。对面以为你会守，结果你已经在他们脸上了。',
    scores: { aggr: 82, role: 91, eco: 60, clutch: 88, team: 64, util: 54, meme: 92 },
  },

  // ───────────────────────────────────────
  //  #5  sh1ro — Spirit — 主狙
  // ───────────────────────────────────────
  {
    ign: 'sh1ro',
    team: 'Spirit', nationality: '🇷🇺 俄罗斯',
    role: 'awp', role_label: '主狙',
    color: '#531dab',
    tagline: '枪声是他最多的表达',
    tags: ['主狙', '克制型', '锚点稳定'],
    desc: '你守点的时候可以一局一句话不说，但那把AWP会替你说话。Overpass A斜坡一个卡角，Mirage B侧大窗一个压制，不主动找对面，但谁进来谁死。稳定得像一座墙。',
    scores: { aggr: 40, role: 94, eco: 74, clutch: 90, team: 70, util: 62, meme: 18 },
  },

  // ───────────────────────────────────────
  //  #6  molodoy — FURIA — 主狙（新秀）
  // ───────────────────────────────────────
  {
    ign: 'molodoy',
    team: 'FURIA', nationality: '🇰🇿 哈萨克斯坦',
    role: 'awp', role_label: '主狙',
    color: '#1677ff',
    tagline: '2025年度最佳新秀，AWP界的新星',
    tags: ['主狙', '新秀王', '上升型'],
    desc: '你还在证明自己，但已经证明得很好。没有前辈的包袱，打起AWP来反而更自由，该守的时候守，该冲的时候比老将更敢冲。FURIA的进攻体系让你如鱼得水。',
    scores: { aggr: 66, role: 84, eco: 65, clutch: 80, team: 72, util: 60, meme: 70 },
  },

  // ───────────────────────────────────────
  //  #7  flameZ — Vitality — 突破手
  // ───────────────────────────────────────
  {
    ign: 'flameZ',
    team: 'Vitality', nationality: '🇮🇱 以色列',
    role: 'entry', role_label: '突破手',
    color: '#d46b08',
    tagline: '以色列突破手，冲进去是一种艺术',
    tags: ['突破手', '进攻执行', '爆发力强'],
    desc: '你是队里第一个进A大的人，也是死得最快的那个——但你换来的信息让队友赢了这局。Inferno A大跳坑，Ancient A包点强冲，你不需要完美的线路，只需要比对面快0.3秒。',
    scores: { aggr: 86, role: 88, eco: 52, clutch: 72, team: 74, util: 60, meme: 78 },
  },

  // ───────────────────────────────────────
  //  #8  frozen — FaZe — 自由人
  // ───────────────────────────────────────
  {
    ign: 'frozen',
    team: 'FaZe', nationality: '🇸🇰 斯洛伐克',
    role: 'lurker', role_label: '自由人',
    color: '#40a9ff',
    tagline: '表情和走路一样平静，但输出从没掉线',
    tags: ['自由人', '枪法型', '冷静克制'],
    desc: '你拿起枪的时候脸上看不出任何情绪，但输出一直在线。Mirage中路1v1，Ancient A侧1v2，你用纯枪法解决了战术解决不了的问题。不冲不稳，刚刚好的那种自由人。',
    scores: { aggr: 64, role: 84, eco: 74, clutch: 90, team: 72, util: 62, meme: 30 },
  },

  // ───────────────────────────────────────
  //  #9  KSCERATO — FURIA — 自由人
  // ───────────────────────────────────────
  {
    ign: 'KSCERATO',
    team: 'FURIA', nationality: '🇧🇷 巴西',
    role: 'lurker', role_label: '自由人',
    color: '#13c2c2',
    tagline: '巴西式自由人：激进但有脑子',
    tags: ['自由人', '巴西风格', '侵略性lurk'],
    desc: '你不走寻常路，但每条路都走得很硬。Nuke外围的绕背，Train B侧的反A，你的游走带着巴西人特有的侵略性——不是躲着走，是主动找打。对面永远不知道你从哪冒出来。',
    scores: { aggr: 76, role: 84, eco: 64, clutch: 86, team: 70, util: 66, meme: 74 },
  },

  // ───────────────────────────────────────
  //  #10  Spinx — MOUZ — 突破手/核心
  // ───────────────────────────────────────
  {
    ign: 'Spinx',
    team: 'MOUZ', nationality: '🇮🇱 以色列',
    role: 'entry', role_label: '突破手',
    color: '#cf1322',
    tagline: 'MOUZ攻坚的第一把刀',
    tags: ['突破手', '高爆发', '进攻核心'],
    desc: '你是那种打突破手打出享受感的人。进A包不犹豫，一颗闪光进去，对面闪好了你已经清了两个角。Inferno A大、Ancient B侧，你的进场路线干净利落，进去就不回头。',
    scores: { aggr: 85, role: 86, eco: 56, clutch: 76, team: 70, util: 62, meme: 68 },
  },

  // ───────────────────────────────────────
  //  #11  Twistzz — FaZe — 自由人
  // ───────────────────────────────────────
  {
    ign: 'Twistzz',
    team: 'FaZe', nationality: '🇨🇦 加拿大',
    role: 'lurker', role_label: '自由人',
    color: '#0050b3',
    tagline: '最优雅的游走，慢动作里的一把刀',
    tags: ['自由人', '优雅打法', '关键时刻型'],
    desc: '你的游走从不慌张——绕到位了再动，时机到了再出。Ancient B侧一个反包，Inferno上T道一个切入，你像一把慢动作的刀，但刺进去就是致命的。节奏感是你最大的武器。',
    scores: { aggr: 54, role: 86, eco: 80, clutch: 86, team: 76, util: 68, meme: 38 },
  },

  // ───────────────────────────────────────
  //  #12  mezii — Vitality — 道具手
  // ───────────────────────────────────────
  {
    ign: 'mezii',
    team: 'Vitality', nationality: '🇬🇧 英国',
    role: 'support', role_label: '道具手',
    color: '#096dd9',
    tagline: '年度最佳锚点，每颗烟都是为别人开的路',
    tags: ['道具手', '锚点', '默默贡献'],
    desc: '你的烟雾弹扔得比谁都准，闪光弹打得比谁都有节奏感。Mirage A包的双烟、Inferno中路的cut烟，你默默做好该做的每件事。KDA不高，但少了你队伍根本转不起来。',
    scores: { aggr: 38, role: 82, eco: 82, clutch: 62, team: 96, util: 96, meme: 22 },
  },

  // ───────────────────────────────────────
  //  #13  Senzu — The MongolZ — 突破手
  // ───────────────────────────────────────
  {
    ign: 'Senzu',
    team: 'The MongolZ', nationality: '🇲🇳 蒙古',
    role: 'entry', role_label: '突破手',
    color: '#7cb305',
    tagline: '蒙古铁骑的先锋，快攻体系的刀刃',
    tags: ['突破手', '快攻型', '亚洲速度'],
    desc: '你打的是速度和节奏。MongolZ的快攻体系里你是第一个进包点的人，Mirage B一套秒进，Dust2 A侧一个闪冲，对面的信息永远落后你半秒——那半秒就够了。',
    scores: { aggr: 88, role: 84, eco: 58, clutch: 74, team: 76, util: 64, meme: 76 },
  },

  // ───────────────────────────────────────
  //  #14  XANTARES — Aurora — 突破手
  // ───────────────────────────────────────
  {
    ign: 'XANTARES',
    team: 'Aurora', nationality: '🇹🇷 土耳其',
    role: 'entry', role_label: '突破手',
    color: '#fa8c16',
    tagline: '土耳其冲击波，手速打破一切',
    tags: ['突破手', '爆发型', '极速手枪'],
    desc: '你的手速是天赋，进攻节奏是练出来的。Inferno A大一个闪进，Dust2 B包点硬推，靠着极短的反应时间把对面所有的预瞄全打乱。停不下来就是你的风格。',
    scores: { aggr: 94, role: 86, eco: 46, clutch: 76, team: 60, util: 50, meme: 84 },
  },

  // ───────────────────────────────────────
  //  #15  YEKINDAR — FURIA — 突破手
  // ───────────────────────────────────────
  {
    ign: 'YEKINDAR',
    team: 'FURIA', nationality: '🇱🇻 拉脱维亚',
    role: 'entry', role_label: '突破手',
    color: '#ff4d4f',
    tagline: '我不是在莽，我是在"战术突破"',
    tags: ['突破手', '混乱制造者', '最激进'],
    desc: '你制造的混乱是一种战术，不是失控。Mirage A小一个单冲，Overpass B侧硬进，对面备好了你也冲，没备好你更冲。不按套路出牌是你打破对面节奏最有效的方式。',
    scores: { aggr: 98, role: 80, eco: 32, clutch: 66, team: 60, util: 44, meme: 96 },
  },

  // ───────────────────────────────────────
  //  #16  xertioN — MOUZ — 道具手/支援
  // ───────────────────────────────────────
  {
    ign: 'xertioN',
    team: 'MOUZ', nationality: '🇩🇰 丹麦',
    role: 'support', role_label: '道具手',
    color: '#722ed1',
    tagline: 'MOUZ道具库的管理员',
    tags: ['道具手', '支援位', '高配合度'],
    desc: '你的价值在KDA里看不出来，但赢球的时候少不了你。Overpass香蕉路的封烟、Ancient mid的cut烟，你的道具用在刀刃上，每颗都给队友创造了半秒优势——那就够了。',
    scores: { aggr: 36, role: 80, eco: 80, clutch: 60, team: 94, util: 94, meme: 26 },
  },

  // ───────────────────────────────────────
  //  #17  torzsi — MOUZ — 主狙
  // ───────────────────────────────────────
  {
    ign: 'torzsi',
    team: 'MOUZ', nationality: '🇭🇺 匈牙利',
    role: 'awp', role_label: '主狙',
    color: '#d4380d',
    tagline: '每一枪都在告诉你他不紧张',
    tags: ['主狙', '稳健型', '冷静狙手'],
    desc: '你端起AWP的时候呼吸是稳的。Mirage A大一个定点守，Ancient B侧一个slow peek，节奏不快但每枪都踩在点上。不轻易主动出击，但主动出击时100%有把握。',
    scores: { aggr: 54, role: 90, eco: 76, clutch: 86, team: 74, util: 58, meme: 34 },
  },

  // ───────────────────────────────────────
  //  #18  NiKo — Falcons — 自由人/核心
  // ───────────────────────────────────────
  {
    ign: 'NiKo',
    team: 'Falcons', nationality: '🇧🇦 波黑',
    role: 'star', role_label: '自由人',
    color: '#722ed1',
    tagline: '步枪之神，我行我素但每枪都打进去',
    tags: ['自由人', '个人carry', '步枪神'],
    desc: '你对自己的枪法有充分的自信，有时候甚至让队友"先等一下，让我来"。Mirage中路一个A冲，Inferno香蕉路一个强进，靠着纯枪法解决了战术解决不了的问题。',
    scores: { aggr: 78, role: 76, eco: 60, clutch: 92, team: 54, util: 56, meme: 72 },
  },

  // ───────────────────────────────────────
  //  #19  iM — NAVI — IGL
  // ───────────────────────────────────────
  {
    ign: 'iM',
    team: 'Natus Vincere', nationality: '🇺🇦 乌克兰',
    role: 'igl', role_label: 'IGL',
    color: '#fadb14',
    tagline: 'NAVI的新大脑，战术严谨派',
    tags: ['IGL', '战术体系', '严谨派'],
    desc: '你脑子里永远有下一步计划：对面rush了怎么接，超时了走哪边，哪个位置该扔烟——全都提前想好了。打法偏稳健，相信战术体系大于个人发挥，是队里的中枢。',
    scores: { aggr: 40, role: 78, eco: 90, clutch: 76, team: 96, util: 84, meme: 30 },
  },

  // ───────────────────────────────────────
  //  #20  b1t — NAVI — 突破手
  // ───────────────────────────────────────
  {
    ign: 'b1t',
    team: 'Natus Vincere', nationality: '🇺🇦 乌克兰',
    role: 'entry', role_label: '突破手',
    color: '#faad14',
    tagline: '进包点就是进包点，没有"等一等"',
    tags: ['突破手', '主动进攻', '快节奏'],
    desc: '你是最先进包点的那个人，不管配合到不到位。Inferno A大跳坑，Mirage B侧强突，靠反应速度和胆量硬吃信息。有时候死得早，但你换来的信息让队友赢了这局。',
    scores: { aggr: 88, role: 88, eco: 50, clutch: 72, team: 66, util: 54, meme: 64 },
  },

  // ───────────────────────────────────────
  //  额外选手：经典角色补充
  // ───────────────────────────────────────

  {
    ign: 'karrigan',
    team: 'FaZe', nationality: '🇩🇰 丹麦',
    role: 'igl', role_label: 'IGL',
    color: '#c41d7f',
    tagline: 'CS界最会用人的IGL',
    tags: ['IGL', '经验型', '大赛指挥'],
    desc: '你打CS靠脑子。知道什么时候激进、什么时候稳、什么时候超时打对面一个措手不及。Mirage A小的假烟走B、Dust2 mid的拿控换进攻——这些细节是你赢球的方式。',
    scores: { aggr: 50, role: 78, eco: 86, clutch: 84, team: 96, util: 80, meme: 82 },
  },
  {
    ign: 'broky',
    team: 'FaZe', nationality: '🇨🇿 捷克',
    role: 'awp', role_label: '主狙',
    color: '#006d75',
    tagline: '越到大赛越准的AWP',
    tags: ['主狙', '大赛型', '稳定AWP'],
    desc: '你的AWP在大赛才真正发光。普通比赛按部就班，关键局突然一把5K，对面还没回过神你已经换好AK了。Nuke主道、Ancient mid，守的每个角度都经过精密计算。',
    scores: { aggr: 56, role: 91, eco: 76, clutch: 91, team: 72, util: 60, meme: 66 },
  },
  {
    ign: 'Aleksib',
    team: 'Natus Vincere', nationality: '🇫🇮 芬兰',
    role: 'igl', role_label: 'IGL',
    color: '#fadb14',
    tagline: '战术板上从不写"随机应变"',
    tags: ['IGL', '体系型', '严格执行'],
    desc: '你是那种会让队友背下来进包路线的IGL。Mirage B的标准道具进包、Inferno A侧慢推节奏，你的战术体系严密，不允许即兴发挥。但执行到位的时候，赢得比谁都干净。',
    scores: { aggr: 40, role: 80, eco: 90, clutch: 74, team: 96, util: 84, meme: 24 },
  },
  {
    ign: 'FalleN',
    team: 'FURIA', nationality: '🇧🇷 巴西',
    role: 'igl_awp', role_label: 'IGL / 主狙',
    color: '#52c41a',
    tagline: 'CS传奇，AWP+战术双修的教父',
    tags: ['IGL', '主狙', '经验型', '带队核心'],
    desc: '你是打完一局还会复盘的人。AWP架着的同时脑子里想着战术，沙鹰局从不慌。Inferno CT端永远守得比别人好一分，因为比别人多想了一步。经验和天赋二合一。',
    scores: { aggr: 60, role: 91, eco: 84, clutch: 90, team: 86, util: 76, meme: 72 },
  },
  {
    ign: 'arT',
    team: 'Legacy', nationality: '🇧🇷 巴西',
    role: 'igl', role_label: 'IGL / 突破手',
    color: '#ad2102',
    tagline: '世界最激进的IGL，带头冲的那种',
    tags: ['IGL', '突破手', '极限激进'],
    desc: '你的战术就是"冲"，而且是IGL带头冲。对面以为你在设战术，结果你Overpass先上水管了。完全靠侵略性打乱对面节奏，激进是战术不是莽撞——这是你对自己打法的解释。',
    scores: { aggr: 98, role: 70, eco: 30, clutch: 80, team: 72, util: 46, meme: 99 },
  },

];
