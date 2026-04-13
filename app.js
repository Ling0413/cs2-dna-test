// ─────────────────────────────────────────
//  CS2 打法基因测试 — 应用逻辑  v3.0
// ─────────────────────────────────────────

/* ── 状态 ── */
let currentQ = 0;
let answers  = {};   // { qId: optionIndex }
let locked   = {};   // 已选题目

/* ══ Landing 初始化：无缝滚动选手条 ══ */
(function initStrip() {
  const strip = document.getElementById('playerStrip');
  // 渲染两份，CSS 动画只需把第一份滚完
  function renderChips() {
    return PLAYERS.map(p => {
      const chip = document.createElement('div');
      chip.className = 'player-chip';
      chip.innerHTML = `<span class="chip-dot" style="background:${p.color}"></span>${p.ign}`;
      return chip;
    });
  }
  renderChips().forEach(c => strip.appendChild(c));
  renderChips().forEach(c => strip.appendChild(c)); // 复制一份
})();

/* ══ 开始测试 ══ */
function startQuiz() {
  currentQ = 0;
  answers  = {};
  locked   = {};
  showPage('quiz');
  renderQuestion();
}

/* ══ 渲染题目 ══ */
function renderQuestion() {
  const q      = QUESTIONS[currentQ];
  const total  = QUESTIONS.length;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  // 更新导航信息
  document.getElementById('dimLabel').textContent      = q.dimLabel;
  document.getElementById('progressCount').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('progressFill').style.width  = `${((currentQ + 1) / total) * 100}%`;

  // 题目
  document.getElementById('questionDimLabel').textContent = q.dimLabel;
  document.getElementById('questionText').textContent     = q.text;

  // 卡片动画重置
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  void card.offsetHeight;
  card.style.animation = '';

  // 选项
  const list     = document.getElementById('optionsList');
  list.innerHTML = '';
  const isLocked = !!locked[q.id];

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (isLocked)          btn.classList.add('locked');
    if (answers[q.id] === i) btn.classList.add('selected');
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt.text}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    list.appendChild(btn);
  });

  // 导航按钮
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  btnPrev.disabled = currentQ === 0;
  btnNext.disabled = answers[q.id] === undefined;
  btnNext.textContent = currentQ === total - 1 ? '查看结果 →' : '下一题 →';
}

/* ══ 选择选项 ══ */
function selectOption(idx) {
  const q = QUESTIONS[currentQ];
  if (locked[q.id]) return;

  answers[q.id] = idx;
  locked[q.id]  = true;

  // 视觉反馈
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((b, i) => {
    b.classList.toggle('selected', i === idx);
    b.classList.add('locked');
  });
  document.getElementById('btnNext').disabled = false;

  // 自动前进
  setTimeout(() => {
    if (currentQ < QUESTIONS.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 300);
}

function nextQ() {
  if (answers[QUESTIONS[currentQ].id] === undefined) return;
  if (currentQ < QUESTIONS.length - 1) { currentQ++; renderQuestion(); }
  else showResult();
}
function prevQ() {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
}

/* ══ 计算用户得分 ══ */
function calcUserScores() {
  const acc = {};
  const minAcc = {};
  const maxAcc = {};
  DIMENSIONS.forEach(d => {
    acc[d.id] = 0;
    minAcc[d.id] = 0;
    maxAcc[d.id] = 0;
  });

  QUESTIONS.forEach(q => {
    const perDimMin = {};
    const perDimMax = {};

    q.options.forEach(opt => {
      DIMENSIONS.forEach(d => {
        const val = opt.scores[d.id] || 0;
        if (!(d.id in perDimMin)) {
          perDimMin[d.id] = val;
          perDimMax[d.id] = val;
        } else {
          perDimMin[d.id] = Math.min(perDimMin[d.id], val);
          perDimMax[d.id] = Math.max(perDimMax[d.id], val);
        }
      });
    });

    DIMENSIONS.forEach(d => {
      minAcc[d.id] += perDimMin[d.id] || 0;
      maxAcc[d.id] += perDimMax[d.id] || 0;
    });

    const idx = answers[q.id];
    if (idx === undefined) return;
    Object.entries(q.options[idx].scores).forEach(([dim, val]) => {
      if (dim in acc) acc[dim] += val;
    });
  });

  const norm = {};
  DIMENSIONS.forEach(d => {
    const min = minAcc[d.id];
    const max = maxAcc[d.id];
    const span = max - min;
    norm[d.id] = span > 0
      ? Math.round(Math.min(100, Math.max(0, ((acc[d.id] - min) / span) * 100)))
      : 50;
  });
  return norm;
}

/* ══ 匹配算法（余弦60% + 欧式40%）══ */
function cosineSim(a, b) {
  const keys = Object.keys(a);
  let dot = 0, na = 0, nb = 0;
  keys.forEach(k => { dot += a[k]*b[k]; na += a[k]*a[k]; nb += b[k]*b[k]; });
  return (na && nb) ? dot / (Math.sqrt(na) * Math.sqrt(nb)) : 0;
}
function euclidSim(a, b) {
  const keys = Object.keys(a);
  let sum = 0;
  keys.forEach(k => { const d = a[k]-b[k]; sum += d*d; });
  return Math.max(0, 1 - Math.sqrt(sum / keys.length) / 100);
}
function matchPlayers(userScores) {
  return PLAYERS
    .map(p => ({
      player: p,
      score:  cosineSim(userScores, p.scores) * 0.6 + euclidSim(userScores, p.scores) * 0.4,
    }))
    .sort((a, b) => b.score - a.score);
}

/* ══ 展示结果 ══ */
function showResult() {
  const userScores = calcUserScores();
  const ranked     = matchPlayers(userScores);
  const best       = ranked[0];
  const matchPct   = Math.round(best.score * 100);

  showPage('result');

  // 基本信息
  document.getElementById('resName').textContent    = best.player.ign;
  document.getElementById('resTagline').textContent = best.player.tagline;
  document.getElementById('resMeta').innerHTML = `
    <span class="meta-chip">${best.player.nationality}</span>
    <span class="meta-chip">${best.player.team}</span>
    <span class="meta-chip role">${best.player.role_label}</span>
    ${best.player.tags.map(t => `<span class="meta-chip">${t}</span>`).join('')}
  `;
  document.getElementById('resDesc').textContent = best.player.desc;

  // 环形进度条
  const circumference = 2 * Math.PI * 45; // ~283
  setTimeout(() => {
    const ring = document.getElementById('ringFill');
    ring.style.strokeDashoffset = circumference * (1 - matchPct / 100);
    ring.style.stroke           = best.player.color;
    document.getElementById('ringPct').textContent = matchPct + '%';
  }, 120);

  // 雷达图 & 图例
  drawRadar(userScores, best.player.scores, best.player.color);
  renderLegend(userScores);

  // 其他匹配
  document.getElementById('otherMatchesGrid').innerHTML = ranked.slice(1, 4).map(r => `
    <div class="other-card">
      <span class="other-dot" style="background:${r.player.color}"></span>
      <div class="other-card-name">${r.player.ign}</div>
      <div class="other-card-sim">${Math.round(r.score * 100)}% 匹配</div>
      <div class="other-card-role">${r.player.role_label}</div>
    </div>
  `).join('');
}

/* ══ Canvas 雷达图 ══ */
function drawRadar(userScores, playerScores, playerColor) {
  const canvas = document.getElementById('radarCanvas');
  const dpr    = window.devicePixelRatio || 1;
  const size   = 240;
  canvas.width  = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width  = size + 'px';
  canvas.style.height = size + 'px';

  const ctx  = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const cx = size / 2, cy = size / 2;
  const R  = size * 0.34;
  const N  = DIMENSIONS.length;

  ctx.clearRect(0, 0, size, size);

  // 网格圆
  for (let lv = 1; lv <= 4; lv++) {
    const r = R * lv / 4;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const a = (Math.PI * 2 * i / N) - Math.PI / 2;
      i === 0 ? ctx.moveTo(cx + r*Math.cos(a), cy + r*Math.sin(a))
              : ctx.lineTo(cx + r*Math.cos(a), cy + r*Math.sin(a));
    }
    ctx.closePath();
    ctx.strokeStyle = lv === 4 ? '#ddd' : '#f0f0f0';
    ctx.lineWidth   = lv === 4 ? 1.5 : 1;
    ctx.stroke();
  }

  // 轴线
  for (let i = 0; i < N; i++) {
    const a = (Math.PI * 2 * i / N) - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
    ctx.strokeStyle = '#e8e8e8';
    ctx.lineWidth   = 1;
    ctx.stroke();
  }

  // 选手参考多边形
  ctx.beginPath();
  DIMENSIONS.forEach((d, i) => {
    const a = (Math.PI * 2 * i / N) - Math.PI / 2;
    const v = playerScores[d.id] / 100;
    i === 0 ? ctx.moveTo(cx + R*v*Math.cos(a), cy + R*v*Math.sin(a))
            : ctx.lineTo(cx + R*v*Math.cos(a), cy + R*v*Math.sin(a));
  });
  ctx.closePath();
  ctx.fillStyle   = playerColor + '22';
  ctx.strokeStyle = playerColor + '66';
  ctx.lineWidth   = 1.5;
  ctx.fill(); ctx.stroke();

  // 用户多边形
  ctx.beginPath();
  DIMENSIONS.forEach((d, i) => {
    const a = (Math.PI * 2 * i / N) - Math.PI / 2;
    const v = userScores[d.id] / 100;
    i === 0 ? ctx.moveTo(cx + R*v*Math.cos(a), cy + R*v*Math.sin(a))
            : ctx.lineTo(cx + R*v*Math.cos(a), cy + R*v*Math.sin(a));
  });
  ctx.closePath();
  ctx.fillStyle   = 'rgba(255,92,26,.18)';
  ctx.strokeStyle = '#ff5c1a';
  ctx.lineWidth   = 2.5;
  ctx.fill(); ctx.stroke();

  // 节点
  DIMENSIONS.forEach((d, i) => {
    const a = (Math.PI * 2 * i / N) - Math.PI / 2;
    const v = userScores[d.id] / 100;
    ctx.beginPath();
    ctx.arc(cx + R*v*Math.cos(a), cy + R*v*Math.sin(a), 4, 0, Math.PI * 2);
    ctx.fillStyle   = '#ff5c1a';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 2;
    ctx.stroke();
  });

  // 标签
  const fs = Math.round(size * 0.052);
  ctx.font      = `700 ${fs}px -apple-system, sans-serif`;
  ctx.fillStyle = '#333';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  DIMENSIONS.forEach((d, i) => {
    const a = (Math.PI * 2 * i / N) - Math.PI / 2;
    const dist = R * 1.28;
    ctx.fillText(d.name, cx + dist * Math.cos(a), cy + dist * Math.sin(a));
  });
}

/* ══ 图例条 ══ */
function renderLegend(userScores) {
  const legend = document.getElementById('radarLegend');
  legend.innerHTML = DIMENSIONS.map(d => `
    <div class="legend-item">
      <span class="legend-name">${d.icon} ${d.name}</span>
      <div class="legend-bar-wrap">
        <div class="legend-bar-fill" style="width:0%" data-v="${userScores[d.id]}"></div>
      </div>
      <span class="legend-val">${userScores[d.id]}</span>
    </div>
  `).join('');
  // 动画
  requestAnimationFrame(() => {
    setTimeout(() => {
      legend.querySelectorAll('.legend-bar-fill').forEach(el => {
        el.style.width = el.dataset.v + '%';
      });
    }, 180);
  });
}

/* ══ 工具函数 ══ */
function showPage(name) {
  ['landing', 'quiz', 'result'].forEach(p =>
    document.getElementById('page-' + p).classList.toggle('hidden', p !== name)
  );
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareResult() {
  const name = document.getElementById('resName').textContent;
  const pct  = document.getElementById('ringPct').textContent;
  const text = `我的 CS2 打法基因测试结果：与 ${name} 匹配度 ${pct}！来测测你是哪位职业选手？`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.querySelector('.btn-share');
      const ori = btn.textContent;
      btn.textContent = '✅ 已复制！';
      setTimeout(() => { btn.textContent = ori; }, 2000);
    });
  } else {
    alert(text);
  }
}

function retryQuiz() { startQuiz(); }
