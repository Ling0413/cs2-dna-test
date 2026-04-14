// ═══════════════════════════════════════════════════════════
//  questions.js  —  CS2 DNA 题目库
//  共 36 题，9 个可见维度 + 1 个隐藏维度（bt）
//  - 位置维度：突破手 / 狙击手 / 指挥 / 自由人 / 大哥位
//  - 性格维度：胜负欲 / 抗压性 / 纪律性 / 激进度
//  - 隐藏维度：非人类（bt，仅累加，用于决定最终模板形态）
//
//  ⚠️  如需修改或新增题目，直接编辑此文件即可。
//
//  分值说明：
//  - 每个选项都会对全部 10 个维度进行打分（其中 bt 只做累加，不做负分）
//  - 单维分值范围约为 -3 ~ +3
//  - 最终由 app.js 动态归一化到 0~100
// ═══════════════════════════════════════════════════════════

const QUESTIONS = [

  // ══════════════════════════════════════
  //  位置维度1：突破手（4题）
  // ══════════════════════════════════════

  {
    id: 'entry_1', dimLabel: '💥 突破手',
    text: 'Inferno T 方默认开局，你是最靠前的人。在吃完雷火闪套餐后，你冲到了石板后。这时对手封了颗烟，你会怎么处理？',
    options: [
      { text: '烟？这不得钻？', scores: { entry: 3, awp: -1, igl: 0, lurker: 2, star: 1, win: 2, nerve: 0, discipline: -2, aggr: 3, bt: 1 } },
      //karrigan的回答
      { text: '先不急，指挥队友来钻烟拉枪线', scores: { entry: 1, awp: 0, igl: 1, lurker: 0, star: 2, win: 1, nerve: 1, discipline: 0, aggr: 1, bt: 1 } },
      { text: '按兵不动，结合去A点的队友有没有送再做决定', scores: { entry: 0, awp: 0, igl: 2, lurker: 0, star: 1, win: 0, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '再封一颗烟', scores: { entry: 0, awp: 0, igl: 0, lurker: 1, star: 1, win: 0, nerve: 2, discipline: 0, aggr: 0, bt: 3 } },
    ],
  },
  {
    id: 'entry_2', dimLabel: '💥 突破手',
    text: 'Rush前，由于身位，你知道自己是第一个飞进包点的人。你最像哪种心态？',
    options: [
      { text: '我是好色闪光，早点死了可以看短视频😋', scores: { entry: 3, awp: 0, igl: 0, lurker: -2, star: 1, win: 0, nerve: 2, discipline: 0, aggr: 3, bt: 2 } },
      { text: '跳出去，然后旋转跳回来', scores: { entry: 0, awp: 0, igl: 1, lurker: 1, star: 1, win: -1, nerve: 1, discipline: -2, aggr: 0, bt: 3 } },
      { text: '我是黑色闪光，其实我更想当第二拍，让第一身位先把信息送出来', scores: { entry: 0, awp: 1, igl: 1, lurker: 0, star: 3, win: 0, nerve: 1, discipline: -1, aggr: -1, bt: 0 } },
      { text: '我是黄色闪光，我（眼前一片白色）', scores: { entry: 3, awp: 0, igl: 0, lurker: 1, star: 0, win: 2, nerve: 1, discipline: 3, aggr: -2, bt: 0 } },
    ],
  },
  {
    id: 'entry_3', dimLabel: '💥 突破手',
    text: '半起局想找突破口时，你最自然的承担方式是什么？',
    options: [
      { text: '拿tec-9直接顶第一身位，死也要把口子撞出来', scores: { entry: 3, awp: -1, igl: 0, lurker: -2, star: 0, win: 2, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '我会拿沙鹰抢一个前点timing，先争取白赚一枪', scores: { entry: 2, awp: 0, igl: 0, lurker: 1, star: 1, win: 1, nerve: 1, discipline: -1, aggr: 2, bt: 0 } },
      { text: '半起更要讲配合，先把资源和冲点顺序说清楚，必要时刻可以无甲发ak', scores: { entry: 0, awp: -1, igl: 2, lurker: -1, star: 0, win: 1, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '我更想单摸和找timing，不愿意跟大部队正面送', scores: { entry: -1, awp: 0, igl: 0, lurker: 3, star: 0, win: 0, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'entry_4', dimLabel: '💥 突破手',
    text: 'CT 回防 3v3，对面刚下包，队友说“谁先进去找人”？你会？',
    options: [
      { text: '我先冲了，我管你这那', scores: { entry: 3, awp: -1, igl: 0, lurker: -1, star: 1, win: 2, nerve: 1, discipline: -2, aggr: 3, bt: 0 } },
      { text: '我可以拉，给我补枪', scores: { entry: 2, awp: 0, igl: 1, lurker: -1, star: 1, win: 1, nerve: 1, discipline: 1, aggr: 1, bt: 0 } },
      { text: '别急着冲，等我的道具和闪光，我说321开团', scores: { entry: -1, awp: 0, igl: 2, lurker: 0, star: 0, win: 0, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '你们等等我，我绕个后', scores: { entry: 0, awp: 0, igl: 0, lurker: 3, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  位置维度2：狙击手（4题）
  // ══════════════════════════════════════

  {
    id: 'awp_1', dimLabel: '🎯 狙击手',
    text: 'CT 长枪局你在 Mirage 刷到中路最好身位，队里把 AWP 给了你。第一时间你更想怎么打？',
    options: [
      { text: '先抢中路第一枪，拿到过点或匪口信息后立刻回收', scores: { entry: -1, awp: 3, igl: 0, lurker: 0, star: 1, win: 1, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '吃队友一颗反清闪主动去要前点压制，打完就退第二枪位', scores: { entry: 1, awp: 2, igl: -1, lurker: -1, star: 1, win: 2, nerve: 1, discipline: -1, aggr: 2, bt: 0 } },
      { text: '先稳住窗口和拱门联动，看队友信息再决定要不要二次前压', scores: { entry: 0, awp: 2, igl: 1, lurker: 1, star: 0, win: 1, nerve: 2, discipline: 2, aggr: -1, bt: 0 } },
      { text: '不执着抢第一时间，优先把中路控制和后续转点补位做好', scores: { entry: -1, awp: 1, igl: 2, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'awp_2', dimLabel: '🎯 狙击手',
    text: 'T 方默认局你拿到唯一一把 AWP，这把枪最像会被你怎么用？',
    options: [
      { text: '先控最值钱的远点，把 CT 的第一层视野和前压都按住', scores: { entry: -1, awp: 3, igl: 1, lurker: 0, star: 1, win: 1, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '配一颗闪主动找首杀，只要开门了全队就顺势提速', scores: { entry: 2, awp: 2, igl: -1, lurker: -1, star: 1, win: 2, nerve: 1, discipline: -1, aggr: 2, bt: 0 } },
      { text: '围绕这把枪做默认，让队友帮我卡补位和二次道具，把压力持续给足', scores: { entry: 0, awp: 2, igl: 3, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '先不急着亮枪，后半段再带去单边抓 rotation 和回防 timing', scores: { entry: 0, awp: 1, igl: 0, lurker: 3, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'awp_3', dimLabel: '🎯 狙击手',
    text: '残局 1v2，包已经下好，你手里是 AWP。对面开始双人回防时，你最自然的处理是？',
    options: [
      { text: '先把最远那条拆包枪线卡死，不给对面轻易逼近换枪', scores: { entry: -1, awp: 3, igl: 0, lurker: 0, star: 1, win: 1, nerve: 3, discipline: 2, aggr: -1, bt: 0 } },
      { text: '先打一枪再马上换位，让回防的人一直猜我下一枪会在哪', scores: { entry: 1, awp: 2, igl: 0, lurker: 1, star: 1, win: 2, nerve: 2, discipline: 0, aggr: 1, bt: 0 } },
      { text: '先算时间、烟雾和补枪路线，再决定自己卡主点还是假放包', scores: { entry: -1, awp: 2, igl: 2, lurker: 0, star: 0, win: 1, nerve: 3, discipline: 3, aggr: -1, bt: 0 } },
      { text: '如果地形太差，我会主动找机会贴近点，不想被 AWP 锁死身法', scores: { entry: 1, awp: -1, igl: 0, lurker: 1, star: 1, win: 0, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
    ],
  },
  {
    id: 'awp_4', dimLabel: '🎯 狙击手',
    text: '你在 Mirage A 点拿 AWP 守 ticket，对面一套爆弹已经给出来了。你更像怎么处理？',
    options: [
      { text: '退到能看过点和包点的第二枪位，优先保证自己还有下一枪', scores: { entry: -1, awp: 3, igl: 0, lurker: 0, star: 1, win: 1, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '趁烟闪还没完全展开，主动在 ticket 边缘偷一枪再撤', scores: { entry: 1, awp: 2, igl: -1, lurker: 0, star: 1, win: 2, nerve: 1, discipline: -1, aggr: 2, bt: 0 } },
      { text: '先等队友的火或反清闪，自己负责守最关键的过点和补枪线', scores: { entry: 0, awp: 2, igl: 2, lurker: 0, star: 0, win: 1, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '如果点位被完全挤掉，我会立刻保枪线和身位，准备 retake 再打', scores: { entry: -1, awp: 2, igl: 1, lurker: 1, star: 0, win: 0, nerve: 2, discipline: 2, aggr: -2, bt: 0 } },
    ],
  }

  // ══════════════════════════════════════
  //  位置维度3：指挥（4题）
  // ══════════════════════════════════════

  {
    id: 'igl_1', dimLabel: '📣 指挥',
    text: 'Freeze time 最后十秒，你脑子里最先整理的内容通常是什么？',
    options: [
      { text: '资源分配、默认路线、出事后的第二套预案', scores: { entry: -1, awp: 0, igl: 3, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '先看哪位队友手感最好，这局最后球要不要做给他', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 2, win: 2, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '我更在意自己第一波怎么打，战术先走着看', scores: { entry: 2, awp: 0, igl: -1, lurker: -1, star: 1, win: 1, nerve: 0, discipline: -1, aggr: 2, bt: 0 } },
      { text: '先想边线和 timing，看对面哪里最可能露空档', scores: { entry: 0, awp: 0, igl: 1, lurker: 3, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'igl_2', dimLabel: '📣 指挥',
    text: 'Mirage 中路突然失守，队友给出的信息还互相冲突。你更像怎么处理？',
    options: [
      { text: '我先整合信息并直接拍板，哪怕有风险也不能犹豫', scores: { entry: 0, awp: 0, igl: 3, lurker: 0, star: 0, win: 2, nerve: 2, discipline: 3, aggr: 0, bt: 0 } },
      { text: '先抢一条线验证真假，再决定全队怎么动', scores: { entry: 1, awp: 1, igl: 1, lurker: 1, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 1, bt: 0 } },
      { text: '先稳住阵型，让每个人把当前位置守好再说', scores: { entry: -1, awp: 0, igl: 2, lurker: 0, star: 0, win: 0, nerve: 2, discipline: 3, aggr: -2, bt: 0 } },
      { text: '谁信息最硬我就听谁，别再现场重新设计了', scores: { entry: 0, awp: 0, igl: -1, lurker: 0, star: 1, win: 0, nerve: 0, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'igl_3', dimLabel: '📣 指挥',
    text: '连输三局后暂停，你在队里最像说哪类话？',
    options: [
      { text: '先别急，我把下局默认、资源和提速点重新说一遍', scores: { entry: -1, awp: 0, igl: 3, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '球往手热的人身上做，先把关键分抢回来', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 2, win: 2, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
      { text: '给我两颗闪，我先去把气势和人数打回来', scores: { entry: 2, awp: 0, igl: -1, lurker: -1, star: 1, win: 2, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '我去换一条边线试试，看能不能把对面调起来', scores: { entry: 0, awp: 0, igl: 1, lurker: 3, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'igl_4', dimLabel: '📣 指挥',
    text: 'T 方默认打到一半，原计划机会一般，但你突然读到对面可能漏了一个点。你会？',
    options: [
      { text: '先统一沟通，再让全队一起改，不接受各自动', scores: { entry: 0, awp: 0, igl: 3, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 3, aggr: 0, bt: 0 } },
      { text: '我会把人和资源立刻压到最值钱的点，快速转节奏', scores: { entry: 1, awp: 0, igl: 2, lurker: 0, star: 1, win: 2, nerve: 1, discipline: 1, aggr: 1, bt: 0 } },
      { text: '让一名自由人先摸实，再决定要不要全改计划', scores: { entry: 0, awp: 0, igl: 2, lurker: 2, star: 0, win: 1, nerve: 2, discipline: 2, aggr: -1, bt: 0 } },
      { text: '我更信现场感觉，自己先动，队友能跟上最好', scores: { entry: 1, awp: 0, igl: -2, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -3, aggr: 2, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  位置维度4：自由人（4题）
  // ══════════════════════════════════════

  {
    id: 'lurker_1', dimLabel: '🕶️ 自由人',
    text: '默认局里队友在正面做声势时，你最想承担哪种任务？',
    options: [
      { text: '单走一条边线，用 timing 和脚步把对面切开', scores: { entry: 0, awp: 0, igl: 0, lurker: 3, star: 1, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
      { text: '留在正面第二层，等对面被逼出来再吃掉回防', scores: { entry: 1, awp: 0, igl: 0, lurker: 1, star: 2, win: 1, nerve: 1, discipline: 1, aggr: 1, bt: 0 } },
      { text: '我会更多帮全图沟通，防止正面和边线脱节', scores: { entry: -1, awp: 0, igl: 2, lurker: 1, star: 0, win: 1, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '不喜欢单摸，我宁可跟着大部队一起把正面打穿', scores: { entry: 2, awp: 0, igl: 0, lurker: -2, star: 1, win: 1, nerve: 0, discipline: 0, aggr: 2, bt: 0 } },
    ],
  },
  {
    id: 'lurker_2', dimLabel: '🕶️ 自由人',
    text: 'Ancient 默认打很久了，对面回防总是很快。你最像怎么破这个局？',
    options: [
      { text: '我去摸最远的边线，专门抓第一个回防的人', scores: { entry: 0, awp: 0, igl: 0, lurker: 3, star: 1, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
      { text: '先做假动作把对面调动，再从最薄的位置切入', scores: { entry: 0, awp: 0, igl: 2, lurker: 2, star: 0, win: 1, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '别磨了，直接提速打一边，让他们来不及回防', scores: { entry: 2, awp: 0, igl: 0, lurker: -1, star: 1, win: 2, nerve: 0, discipline: -1, aggr: 3, bt: 0 } },
      { text: '把最后收口的球做给核心，我更愿意做外围托底', scores: { entry: -1, awp: 0, igl: 1, lurker: 2, star: 1, win: 1, nerve: 1, discipline: 2, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'lurker_3', dimLabel: '🕶️ 自由人',
    text: 'Nuke 外场这局对面给得很少，但你总觉得有空档。你会？',
    options: [
      { text: '慢慢摸进去吃 timing，不确认前尽量不暴露脚步', scores: { entry: 0, awp: 0, igl: 0, lurker: 3, star: 1, win: 1, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '先抢一条线验证，真有空档就继续往里切', scores: { entry: 1, awp: 1, igl: 0, lurker: 2, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 1, bt: 0 } },
      { text: '我会先跟队友确认补枪距离，不想单人冒险送掉地图', scores: { entry: -1, awp: 0, igl: 1, lurker: 1, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '有感觉就直接压，把犹豫时间换成枪战', scores: { entry: 2, awp: 0, igl: -1, lurker: 1, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
    ],
  },
  {
    id: 'lurker_4', dimLabel: '🕶️ 自由人',
    text: 'CT 方守点时，对面一侧道具很多，但另一侧突然很安静。你通常会？',
    options: [
      { text: '偷看安静那条边线，专抓他们埋伏的 timing', scores: { entry: 0, awp: 0, igl: 0, lurker: 3, star: 0, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
      { text: '先换到能同时兼顾两条线的位置，尽量信息最大化', scores: { entry: -1, awp: 1, igl: 1, lurker: 2, star: 0, win: 1, nerve: 2, discipline: 2, aggr: -1, bt: 0 } },
      { text: '先和队友协调站位，一边动一边必须有人能补', scores: { entry: -1, awp: 0, igl: 2, lurker: 1, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '主动反清正面，用侵略性直接打断他们的节奏', scores: { entry: 2, awp: 0, igl: -1, lurker: -1, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  位置维度5：大哥位（4题）
  // ══════════════════════════════════════

  {
    id: 'star_1', dimLabel: '👑 大哥位',
    text: '关键长枪局，队里只能优先喂一个人资源。你最认同哪种思路？',
    options: [
      { text: '最好的资源应该给最能终结这局的人，我愿意扛这个责任', scores: { entry: 1, awp: 1, igl: 0, lurker: 0, star: 3, win: 3, nerve: 2, discipline: 0, aggr: 1, bt: 0 } },
      { text: '资源可以集中，但前提是不能把队伍结构弄散', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 2, win: 2, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '我更愿意把资源让给团队里更适配这张图和这波战术的人', scores: { entry: -1, awp: 0, igl: 1, lurker: 1, star: -1, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '别固定喂一个，谁先拿到机会谁就接着打', scores: { entry: 1, awp: 0, igl: -1, lurker: 1, star: 1, win: 1, nerve: 1, discipline: -1, aggr: 1, bt: 0 } },
    ],
  },
  {
    id: 'star_2', dimLabel: '👑 大哥位',
    text: '比赛胶着到最后几分，队友都默认这一局会围着你打。你的感觉更像？',
    options: [
      { text: '可以，把最关键的一拍交给我，我就吃这种球', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 3, win: 3, nerve: 2, discipline: 0, aggr: 1, bt: 0 } },
      { text: '我能接，但得先把道具、补枪和残局站位全部配好', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 2, win: 2, nerve: 2, discipline: 2, aggr: 0, bt: 0 } },
      { text: '我不排斥当核心，但不希望全队脑子里只剩“做给我”', scores: { entry: 0, awp: 0, igl: 2, lurker: 1, star: 1, win: 1, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '我更愿意让真正手热的人接球，别为了名义核心硬做', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: -1, win: 0, nerve: 1, discipline: 2, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'star_3', dimLabel: '👑 大哥位',
    text: 'T 方已经打进包点，局面变成 3v3。你最舒服的残局定位是什么？',
    options: [
      { text: '把最关键的 trade 位留给我，我来收最硬的枪', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 3, win: 2, nerve: 2, discipline: 0, aggr: 1, bt: 0 } },
      { text: '我可以去最值钱的枪位，用位置优势把回防掐死', scores: { entry: 0, awp: 1, igl: 0, lurker: 0, star: 2, win: 2, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
      { text: '先把交叉火力和补枪关系定清楚，残局不能靠感觉乱打', scores: { entry: -1, awp: 0, igl: 2, lurker: 0, star: 0, win: 1, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '我想去侧面做变化，用 timing 把回防线切碎', scores: { entry: 0, awp: 0, igl: 0, lurker: 2, star: 1, win: 1, nerve: 2, discipline: 1, aggr: 0, bt: 0 } },
    ],
  },
  {
    id: 'star_4', dimLabel: '👑 大哥位',
    text: '你心里的 CS 完美五人组:',
    options: [
      { text: '怀念最好的五个人：千早爱烟，偷摸rain，长期监视，疯穿箱子，ro叶睦', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 0, win: 0, nerve: 1, discipline: -1, aggr: 0, bt: 3 } },
      { text: '某个王朝战队那种，谁站哪、谁干嘛、谁来擦屁股，全都明明白白', scores: { entry: -1, awp: 0, igl: 2, lurker: 0, star: 1, win: 2, nerve: 2, discipline: 3, aggr: -1, bt: 0 } },
      { text: '总监总监总监总监总监，场上就得一直有人管着，开宫没有回头监', scores: { entry: 0, awp: 0, igl: 2, lurker: 0, star: 0, win: 2, nerve: 1, discipline: 2, aggr: 1, bt: 2 } },
      { text: 'ZywOo、s1mple、device、m0NESY、molodoy 直接摞一桌，先把天赋和大狙味儿拉满', scores: { entry: 1, awp: 3, igl: 0, lurker: -1, star: 3, win: 3, nerve: 1, discipline: -2, aggr: 2, bt: 1 } },
    ],
  },

  // ══════════════════════════════════════
  //  性格维度1：胜负欲（4题）
  // ══════════════════════════════════════

  {
    id: 'win_1', dimLabel: '🏆 胜负欲',
    text: '打天梯、5E 或内战时，你对输赢的真实态度更像？',
    options: [
      { text: '娱乐归娱乐，但我真不喜欢输，能赢一定要赢', scores: { entry: 1, awp: 0, igl: 1, lurker: 0, star: 2, win: 3, nerve: 0, discipline: 1, aggr: 1, bt: 0 } },
      { text: '最好赢，输了会不爽，但还能保持理性', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '输赢都行，只要这把内容打得值就可以', scores: { entry: 0, awp: 0, igl: 0, lurker: 1, star: 0, win: -1, nerve: 1, discipline: 0, aggr: -1, bt: 0 } },
      { text: '纯玩，输赢真的不会太影响我心情', scores: { entry: -1, awp: 0, igl: -1, lurker: 0, star: -1, win: -3, nerve: -1, discipline: -1, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'win_2', dimLabel: '🏆 胜负欲',
    text: '比赛大比分落后时，你的内心更像哪种状态？',
    options: [
      { text: '越落后越想翻，脑子里只剩“这局必须咬回来”', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 2, win: 3, nerve: 0, discipline: 0, aggr: 2, bt: 0 } },
      { text: '会更认真，但尽量不让情绪压过判断', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 2, aggr: 0, bt: 0 } },
      { text: '会告诉自己放平，把这局当练内容来打', scores: { entry: 0, awp: 0, igl: 0, lurker: 1, star: 0, win: -1, nerve: 1, discipline: 1, aggr: -1, bt: 0 } },
      { text: '落后太多我容易松掉，胜负感会快速下降', scores: { entry: -1, awp: 0, igl: -1, lurker: 0, star: -1, win: -3, nerve: -2, discipline: -1, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'win_3', dimLabel: '🏆 胜负欲',
    text: '你刚输掉一个本来能赢的残局，下一局你的心理更像？',
    options: [
      { text: '必须马上找回来，不然这口气很难咽下去', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 2, win: 3, nerve: -1, discipline: 0, aggr: 2, bt: 0 } },
      { text: '会记住这分，但尽量把情绪转成专注', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '复盘一下失误就行，不会一直被这分吊着', scores: { entry: 0, awp: 0, igl: 1, lurker: 1, star: 0, win: -1, nerve: 2, discipline: 2, aggr: -1, bt: 0 } },
      { text: '很快翻篇，下一局赢不赢也没那么重要了', scores: { entry: -1, awp: 0, igl: -1, lurker: 0, star: -1, win: -3, nerve: 0, discipline: -1, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'win_4', dimLabel: '🏆 胜负欲',
    text: '队友说“这把随便玩吧”，你第一反应通常是？',
    options: [
      { text: '不行，我不太接受“随便玩”这三个字', scores: { entry: 1, awp: 0, igl: 1, lurker: 0, star: 1, win: 3, nerve: 0, discipline: 2, aggr: 1, bt: 0 } },
      { text: '可以轻松点，但该赢还是得想办法赢', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '如果气氛轻松我也能接受，没必要一直绷太紧', scores: { entry: 0, awp: 0, igl: 0, lurker: 1, star: 0, win: -1, nerve: 1, discipline: 0, aggr: -1, bt: 0 } },
      { text: '我反而喜欢这种感觉，输了也完全不难受', scores: { entry: -1, awp: 0, igl: -1, lurker: 0, star: -1, win: -3, nerve: -1, discipline: -1, aggr: 0, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  性格维度2：抗压性（4题）
  // ══════════════════════════════════════

  {
    id: 'nerve_1', dimLabel: '🧱 抗压性',
    text: '在被对面“友好互动”后，你在一个1v1残局中战胜对手，此时你会？',
    options: [
      { text: '直接开鞭，这是善意的鞭，鞭的不是尸是💩，是cncs腐朽的黑暗，这点要分清楚', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: -1, discipline: 2, aggr: 3, bt: 1 } },
      { text: '公频：就这？', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 0, discipline: 1, aggr: 2, bt: 0 } },
      { text: 'CN最后的残局大师原来是我啊，我还以为是帮玩机器收拾残局的咬人猫呢', scores: { entry: 0, awp: 0, igl: 0, lurker: 2, star: 1, win: 0, nerve: 1, discipline: 0, aggr: 0, bt: 0 } },
      { text: '和队友麦里说一句：EZ', scores: { entry: 0, awp: 0, igl: 1, lurker: 3, star: 1, win: 2, nerve: 3, discipline: 1, aggr: 1, bt: 0 } },
    ],
  },
  {
    id: 'nerve_2', dimLabel: '🧱 抗压性',
    text: '决胜局最后两分时，你更像哪种人？',
    options: [
      { text: '这种局面对我反而是加成，越关键越能静下来', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 2, win: 2, nerve: 3, discipline: 2, aggr: 0, bt: 0 } },
      { text: '会紧张，但还能把该做的东西做完整', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '手会开始硬，打法会比平时更保守', scores: { entry: -1, awp: 0, igl: 0, lurker: 0, star: -1, win: 0, nerve: -1, discipline: 1, aggr: -2, bt: 0 } },
      { text: '会明显慌，脑子里总怕自己成为背锅的人', scores: { entry: 0, awp: 0, igl: -1, lurker: -1, star: -2, win: -1, nerve: -3, discipline: -1, aggr: -2, bt: 0 } },
    ],
  },
  {
    id: 'nerve_3', dimLabel: '🧱 抗压性',
    text: '队友语音里一炸锅时，你一般会怎么样？',
    options: [
      { text: '我会先把自己稳住，外面再吵也不影响判断', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 1, win: 1, nerve: 3, discipline: 2, aggr: -1, bt: 0 } },
      { text: '多少会受影响，但还能继续正常沟通', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 1, aggr: 0, bt: 0 } },
      { text: '会开始烦躁，注意力很难完全留在局里', scores: { entry: 0, awp: 0, igl: -1, lurker: 0, star: -1, win: 0, nerve: -1, discipline: -1, aggr: 1, bt: 0 } },
      { text: '一旦气氛炸了，我连操作都会跟着变形', scores: { entry: 0, awp: 0, igl: -1, lurker: -1, star: -2, win: -1, nerve: -3, discipline: -2, aggr: -1, bt: 0 } },
    ],
  },
  {
    id: 'nerve_4', dimLabel: '🧱 抗压性',
    text: '1v4 残局，语音里已经有人开始给你上压力了。你这会儿身体状态更像？',
    options: [
      { text: '摸了下裤裆，是汗，手心也一起出，但人还在线', scores: { entry: 0, awp: 0, igl: 0, lurker: 0, star: 0, win: 1, nerve: -1, discipline: 0, aggr: 0, bt: 1 } },
      { text: '摸了下裤裆，有点兴奋，这种局我反而想狠狠干一票大的', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 1, win: 2, nerve: 2, discipline: -1, aggr: 2, bt: 1 } },
      { text: '摸了下裤裆，是尿，脑子和准星已经不在一个服务器了', scores: { entry: 0, awp: 0, igl: -1, lurker: 0, star: -1, win: 0, nerve: -3, discipline: -1, aggr: -2, bt: 2 } },
      { text: '没空摸裤裆，脑子已经在切时间、枪位和第一个必打点了', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 1, win: 1, nerve: 3, discipline: 2, aggr: -1, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  性格维度3：纪律性（4题）
  // ══════════════════════════════════════

  {
    id: 'discipline_1', dimLabel: '📐 纪律性',
    text: 'IGL 的 call 和你的读图感觉相反时，你通常会？',
    options: [
      { text: '先执行，除非有绝对关键信息，否则不擅自改计划', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '我会给出判断，但最终还是按统一口令走', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 2, aggr: 0, bt: 0 } },
      { text: '如果我很确定，就会自己改路线试一把', scores: { entry: 1, awp: 0, igl: -1, lurker: 1, star: 1, win: 1, nerve: 0, discipline: -1, aggr: 1, bt: 0 } },
      { text: '我更相信自己的感觉，经常先动了再说', scores: { entry: 2, awp: 0, igl: -2, lurker: 0, star: 1, win: 0, nerve: -1, discipline: -3, aggr: 2, bt: 0 } },
    ],
  },
  {
    id: 'discipline_2', dimLabel: '📐 纪律性',
    text: '半起局队里说好统一资源，但你其实够起一把不错的枪。你会？',
    options: [
      { text: '不单起，统一比个人舒服更重要', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '先问一句，如果队里同意我才会买', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 2, aggr: 0, bt: 0 } },
      { text: '我会买，只要我觉得这把自己能打出价值', scores: { entry: 1, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -1, aggr: 1, bt: 0 } },
      { text: '基本不会问，能起就起，打赢了就是对的', scores: { entry: 2, awp: 0, igl: -2, lurker: 0, star: 1, win: 1, nerve: -1, discipline: -3, aggr: 2, bt: 0 } },
    ],
  },
  {
    id: 'discipline_3', dimLabel: '📐 纪律性',
    text: '一套默认打到一半机会一般，但原计划还没完全结束时，你更像？',
    options: [
      { text: '继续按结构走完，除非出现明确信号才改', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '会沟通一下，看是不是全队一起调整', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 2, aggr: 0, bt: 0 } },
      { text: '我会先根据自己这边的信息做一点主动变化', scores: { entry: 1, awp: 0, igl: 0, lurker: 1, star: 1, win: 1, nerve: 0, discipline: -1, aggr: 1, bt: 0 } },
      { text: '拖着结构没意义，我通常会自己先找新机会', scores: { entry: 1, awp: 0, igl: -2, lurker: 1, star: 1, win: 0, nerve: -1, discipline: -3, aggr: 2, bt: 0 } },
    ],
  },
  {
    id: 'discipline_4', dimLabel: '📐 纪律性',
    text: '你怎么理解“打得舒服”和“打得对”之间的关系？',
    options: [
      { text: '打得对永远优先，个人舒服要让位给团队结构', scores: { entry: -1, awp: 0, igl: 2, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 3, aggr: -1, bt: 0 } },
      { text: '大部分时候先打对，偶尔也要照顾个人状态', scores: { entry: 0, awp: 0, igl: 1, lurker: 0, star: 0, win: 1, nerve: 1, discipline: 2, aggr: 0, bt: 0 } },
      { text: '如果不舒服就很难打好，所以我会优先调成自己顺手', scores: { entry: 1, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -1, aggr: 0, bt: 0 } },
      { text: '我更信自己的节奏，体系不该卡住我发挥', scores: { entry: 1, awp: 0, igl: -2, lurker: 0, star: 2, win: 1, nerve: -1, discipline: -3, aggr: 1, bt: 0 } },
    ],
  },

  // ══════════════════════════════════════
  //  性格维度4：激进度（4题）
  // ══════════════════════════════════════

  {
    id: 'aggr_1', dimLabel: '⚔️ 激进度',
    text: 'CT 方守点时，如果对面连续几局都没来，你更容易怎么做？',
    options: [
      { text: '主动反清找信息，不想继续原地等', scores: { entry: 2, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '会试着前顶一点，但保留退路和补枪距离', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
      { text: '还是以稳守为主，没必要自己送节奏', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 2, aggr: -1, bt: 0 } },
      { text: '绝不乱动，宁可信息少也不愿意把位置送掉', scores: { entry: -2, awp: 0, igl: 1, lurker: 0, star: -1, win: -1, nerve: 1, discipline: 2, aggr: -3, bt: 0 } },
    ],
  },
  {
    id: 'aggr_2', dimLabel: '⚔️ 激进度',
    text: 'T 方默认一分多钟没打开局面时，你第一反应更像？',
    options: [
      { text: '提速强撞，拖越久越容易被读死', scores: { entry: 2, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '找个小窗口提一波速，把节奏主动抓回来', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
      { text: '继续磨信息，能不赌就尽量不赌', scores: { entry: -1, awp: 0, igl: 1, lurker: 1, star: 0, win: 0, nerve: 1, discipline: 2, aggr: -1, bt: 0 } },
      { text: '我更倾向打满时间，把所有风险压到最低', scores: { entry: -2, awp: 0, igl: 1, lurker: 0, star: -1, win: -1, nerve: 1, discipline: 3, aggr: -3, bt: 0 } },
    ],
  },
  {
    id: 'aggr_3', dimLabel: '⚔️ 激进度',
    text: '你领先时的比赛风格通常会怎么变化？',
    options: [
      { text: '会更敢做动作，优势就该继续压着打', scores: { entry: 2, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '会适度增加主动性，但不会离谱上头', scores: { entry: 1, awp: 0, igl: 0, lurker: 0, star: 1, win: 1, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
      { text: '还是按原本节奏打，领先不代表该乱冲', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 1, discipline: 2, aggr: -1, bt: 0 } },
      { text: '我反而会更保守，领先时最怕的就是给机会', scores: { entry: -2, awp: 0, igl: 1, lurker: 0, star: -1, win: 0, nerve: 1, discipline: 3, aggr: -3, bt: 0 } },
    ],
  },
  {
    id: 'aggr_4', dimLabel: '⚔️ 激进度',
    text: '1v1 信息并不完整时，你更像哪种残局处理？',
    options: [
      { text: '主动抢先手，让对面来不及把残局变复杂', scores: { entry: 2, awp: 0, igl: -1, lurker: 0, star: 1, win: 1, nerve: 0, discipline: -2, aggr: 3, bt: 0 } },
      { text: '先做一点假动作，再趁对面犹豫时动手', scores: { entry: 1, awp: 0, igl: 0, lurker: 1, star: 1, win: 1, nerve: 1, discipline: 0, aggr: 1, bt: 0 } },
      { text: '优先守信息和时间，不急着把主动权交出去', scores: { entry: -1, awp: 0, igl: 1, lurker: 0, star: 0, win: 0, nerve: 2, discipline: 2, aggr: -1, bt: 0 } },
      { text: '能不先动就不先动，我宁可等到更确定再打', scores: { entry: -2, awp: 0, igl: 1, lurker: 0, star: -1, win: -1, nerve: 2, discipline: 3, aggr: -3, bt: 0 } },
    ],
  },

];
