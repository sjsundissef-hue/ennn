// Script de création du site — exécuter avec: node create-site.js
const fs = require('fs');
const base = 'C:/Projets/ENG';

const files = {};

// ============================================================
// lessons.js
// ============================================================
files['lessons.js'] = `const LESSONS = {
  "structures-1": {
    id: "structures-1",
    title: "Structures Clés",
    subtitle: "Would, Could, Should",
    icon: "🏗️",
    color: "#3b82f6",
    questionCount: 25,
    theoryPage: null,
    hasQuiz: true,
    questions: [
      {fr:"Je voudrais un café, s'il vous plaît.",en:["I would like a coffee, please."],structure:1},
      {fr:"Est-ce que tu voudrais venir avec nous ?",en:["Would you like to come with us?"],structure:1},
      {fr:"Il aimerait apprendre le piano.",en:["He would like to learn the piano.","He would love to learn the piano."],structure:1},
      {fr:"Nous voudrions réserver une table pour ce soir.",en:["We would like to book a table for tonight.","We would like to reserve a table for tonight."],structure:1},
      {fr:"Elle préférerait rester à la maison.",en:["She would prefer to stay at home.","She would rather stay at home."],structure:1},
      {fr:"Je veux vraiment aller à Paris un jour.",en:["I would really like to go to Paris one day.","I really want to go to Paris one day."],structure:1},
      {fr:"Ils voudraient un remboursement.",en:["They would like a refund."],structure:1},
      {fr:"Est-ce que vous voudriez quelque chose à boire ?",en:["Would you like something to drink?"],structure:1},
      {fr:"J'aimerais vraiment te voir bientôt.",en:["I would really like to see you soon.","I would love to see you soon."],structure:1},
      {fr:"Pourriez-vous m'aider, s'il vous plaît ?",en:["Could you help me, please?"],structure:2},
      {fr:"Est-ce que tu pourrais fermer la fenêtre ?",en:["Could you close the window?","Could you please close the window?"],structure:2},
      {fr:"Serait-il possible de changer ma réservation ?",en:["Could I change my reservation?","Would it be possible to change my reservation?"],structure:2},
      {fr:"Pourriez-vous parler plus lentement ?",en:["Could you speak more slowly?","Could you please speak more slowly?"],structure:2},
      {fr:"Est-ce que je pourrais avoir l'addition ?",en:["Could I have the bill?","Could I get the check?"],structure:2},
      {fr:"Ce serait bien si tu pouvais venir.",en:["It would be nice if you could come."],structure:2},
      {fr:"Pourrait-il rappeler plus tard ?",en:["Could he call back later?"],structure:2},
      {fr:"Est-ce que tu pourrais me prêter ton stylo ?",en:["Could you lend me your pen?","Could you borrow me your pen?"],structure:2},
      {fr:"J'aurais dû étudier plus tôt.",en:["I should have studied earlier."],structure:3},
      {fr:"Il aurait dû appeler avant de venir.",en:["He should have called before coming."],structure:3},
      {fr:"Nous aurions dû prendre un parapluie.",en:["We should have taken an umbrella.","We should have brought an umbrella."],structure:3},
      {fr:"Tu n'aurais pas dû dire ça.",en:["You should not have said that.","You shouldn't have said that."],structure:3},
      {fr:"Elle aurait dû partir plus tôt.",en:["She should have left earlier."],structure:3},
      {fr:"Ils auraient dû lire les instructions.",en:["They should have read the instructions."],structure:3},
      {fr:"J'aurais dû me souvenir de son anniversaire.",en:["I should have remembered her birthday.","I should have remembered his birthday."],structure:3},
      {fr:"On aurait dû réserver à l'avance.",en:["We should have booked in advance.","We should have reserved in advance."],structure:3}
    ]
  },
  "prepositions-1": {
    id: "prepositions-1",
    title: "Prépositions de lieu",
    subtitle: "AT / ON / IN — L'Espace",
    icon: "📍",
    color: "#10b981",
    questionCount: 15,
    theoryPage: "theory-prepositions.html",
    hasQuiz: true,
    questions: []
  }
};`;

// ============================================================
// prepositions-space.js
// ============================================================
files['prepositions-space.js'] = `const SPACE_QUIZ = {
  level1: [
    {fr:"Le chat est ___ la boîte.",prep:"IN",hint:"Dedans, à l'intérieur"},
    {fr:"Je suis ___ l'école.",prep:"AT",hint:"Un lieu précis, un point"},
    {fr:"Le livre est ___ la table.",prep:"ON",hint:"Posé sur une surface"},
    {fr:"Elle habite ___ Paris.",prep:"IN",hint:"Dans une ville / un pays"},
    {fr:"Il est ___ l'arrêt de bus.",prep:"AT",hint:"Un point de rendez-vous"},
    {fr:"Le chat dort ___ le canapé.",prep:"ON",hint:"Sur une surface"},
    {fr:"Nous sommes ___ la salle de classe.",prep:"IN",hint:"À l'intérieur d'un espace fermé"},
    {fr:"Le tableau est ___ le mur.",prep:"ON",hint:"Fixé sur une surface"},
    {fr:"Je t'attends ___ l'entrée.",prep:"AT",hint:"À un point précis"},
    {fr:"Il y a une mouche ___ mon verre.",prep:"IN",hint:"À l'intérieur"},
    {fr:"Elle est ___ la plage.",prep:"ON",hint:"Sur une surface étendue"},
    {fr:"Les clés sont ___ ma poche.",prep:"IN",hint:"À l'intérieur d'un contenant"},
    {fr:"Je travaille ___ le bureau.",prep:"AT",hint:"À un poste, un endroit de travail"},
    {fr:"Il y a des nuages ___ le ciel.",prep:"IN",hint:"Dans un espace étendu"},
    {fr:"Le chien est ___ le jardin.",prep:"IN",hint:"À l'intérieur d'un espace délimité"}
  ],
  level2: [
    {fr:"Le chat est dans la boîte.",en:["The cat is in the box."]},
    {fr:"Je suis à l'école.",en:["I am at school."]},
    {fr:"Le livre est sur la table.",en:["The book is on the table."]},
    {fr:"Elle habite à Paris.",en:["She lives in Paris."]},
    {fr:"Il est à l'arrêt de bus.",en:["He is at the bus stop."]},
    {fr:"Le chat dort sur le canapé.",en:["The cat is sleeping on the sofa.","The cat sleeps on the sofa.","The cat is sleeping on the couch."]},
    {fr:"Nous sommes dans la salle de classe.",en:["We are in the classroom."]},
    {fr:"Le tableau est sur le mur.",en:["The painting is on the wall.","The picture is on the wall.","The board is on the wall."]},
    {fr:"Je t'attends à l'entrée.",en:["I am waiting for you at the entrance.","I'll wait for you at the entrance."]},
    {fr:"Il y a une mouche dans mon verre.",en:["There is a fly in my glass.","There's a fly in my glass."]},
    {fr:"Elle est sur la plage.",en:["She is on the beach."]},
    {fr:"Les clés sont dans ma poche.",en:["The keys are in my pocket."]},
    {fr:"Je travaille au bureau.",en:["I work at the office.","I am working at the office."]},
    {fr:"Il y a des nuages dans le ciel.",en:["There are clouds in the sky.","There's clouds in the sky."]},
    {fr:"Le chien est dans le jardin.",en:["The dog is in the garden.","The dog is in the yard."]}
  ]
};`;

// ============================================================
// styles.css
// ============================================================
files['styles.css'] = `*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#0f172a;color:#e2e8f0;min-height:100vh;}
a{color:inherit;text-decoration:none;}

/* ── Header ── */
.site-header{background:linear-gradient(135deg,#1e3a5f,#0f172a);padding:2rem 1.5rem;text-align:center;border-bottom:1px solid #1e293b;}
.site-header h1{font-size:2rem;font-weight:800;background:linear-gradient(135deg,#60a5fa,#a78bfa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
.site-header p{color:#94a3b8;margin-top:.4rem;}
.header-stats{display:flex;gap:.75rem;justify-content:center;margin-top:1rem;flex-wrap:wrap;}
.stat-pill{background:#1e293b;border:1px solid #334155;border-radius:999px;padding:.35rem .9rem;font-size:.85rem;font-weight:600;color:#60a5fa;}

/* ── Lessons grid ── */
.main-content{max-width:900px;margin:0 auto;padding:2rem 1.5rem;}
.section-title{font-size:1.1rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;margin-bottom:1rem;}
.lessons-grid{display:grid;gap:1rem;}
.lesson-card{display:flex;align-items:center;gap:1rem;background:#1e293b;border:1px solid #334155;border-radius:16px;padding:1.25rem 1.5rem;cursor:pointer;transition:transform .15s,box-shadow .15s;position:relative;overflow:hidden;}
.lesson-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--card-color,#3b82f6);border-radius:4px 0 0 4px;}
.lesson-card:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.4);}
.lesson-card.coming-soon{opacity:.45;cursor:default;}
.lesson-card.coming-soon:hover{transform:none;box-shadow:none;}
.lesson-icon{font-size:2rem;width:3rem;text-align:center;flex-shrink:0;}
.lesson-info{flex:1;min-width:0;}
.lesson-info h3{font-size:1.05rem;font-weight:700;color:#f1f5f9;}
.lesson-info p{font-size:.85rem;color:#94a3b8;margin-top:.2rem;}
.lesson-meta{font-size:.75rem;color:#64748b;margin-top:.3rem;display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;}
.lesson-type-badge{background:#1e3a5f;color:#60a5fa;border-radius:999px;padding:.1rem .5rem;font-size:.7rem;font-weight:600;}
.lesson-stats{display:flex;align-items:center;gap:.5rem;flex-shrink:0;}
.stars{font-size:.9rem;}
.best-score{font-weight:700;color:#fbbf24;font-size:.9rem;}
.attempts{font-size:.75rem;color:#64748b;}
.not-done{font-size:.75rem;color:#64748b;font-style:italic;}
.lesson-arrow{color:#334155;font-size:1.2rem;flex-shrink:0;}

/* ── Quiz page ── */
.quiz-page{max-width:680px;margin:0 auto;padding:1.5rem;}
.back-btn{display:inline-flex;align-items:center;gap:.4rem;color:#94a3b8;font-size:.9rem;padding:.4rem .8rem;border-radius:8px;background:#1e293b;border:1px solid #334155;margin-bottom:1.5rem;transition:color .15s;}
.back-btn:hover{color:#f1f5f9;}
.quiz-header{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;}
.quiz-title{font-size:1.4rem;font-weight:800;flex:1;}
.quiz-controls{display:flex;gap:.5rem;align-items:center;}
.icon-btn{background:#1e293b;border:1px solid #334155;border-radius:8px;width:2.2rem;height:2.2rem;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font-size:1rem;transition:background .15s;}
.icon-btn:hover{background:#334155;}
.progress-bar{height:6px;background:#1e293b;border-radius:999px;margin-bottom:1.5rem;overflow:hidden;}
.progress-bar-fill{height:100%;background:linear-gradient(90deg,#3b82f6,#8b5cf6);border-radius:999px;transition:width .4s ease;}
.score-bar{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap;}
.score-display{display:flex;align-items:center;gap:.4rem;font-size:.9rem;color:#94a3b8;}
.score-display span:last-child{font-weight:700;color:#60a5fa;}
.streak-badge{background:#f97316;color:#fff;border-radius:999px;padding:.2rem .7rem;font-size:.85rem;font-weight:700;}
.streak-badge.active{animation:pop .25s ease;}
@keyframes pop{0%{transform:scale(1)}50%{transform:scale(1.25)}100%{transform:scale(1)}}
.question-card{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:2rem;margin-bottom:1rem;}
.structure-badge{display:inline-block;border-radius:999px;padding:.3rem .8rem;font-size:.8rem;font-weight:700;margin-bottom:1rem;}
.question-text{font-size:1.3rem;font-weight:600;line-height:1.5;color:#f1f5f9;}
.answer-area{margin-top:1.5rem;}
.answer-input{width:100%;background:#0f172a;border:2px solid #334155;border-radius:10px;padding:.9rem 1.1rem;font-size:1rem;color:#f1f5f9;outline:none;transition:border-color .15s;}
.answer-input:focus{border-color:#3b82f6;}
.answer-input.shake{animation:shake .4s ease;}
@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
.live-feedback{font-size:1rem;margin-top:.5rem;min-height:1.5rem;letter-spacing:.02em;font-family:monospace;}
.char-correct{color:#4ade80;}
.char-incorrect{color:#f87171;}
.action-row{display:flex;gap:.75rem;margin-top:.75rem;align-items:center;}
.action-btn{flex:1;background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border:none;border-radius:10px;padding:.85rem;font-size:1rem;font-weight:700;cursor:pointer;transition:opacity .15s;}
.action-btn:hover{opacity:.9;}
.skip-btn{background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:10px;padding:.85rem 1rem;font-size:.9rem;cursor:pointer;transition:background .15s;display:inline-flex;align-items:center;gap:.3rem;}
.skip-btn:hover{background:#334155;}
.feedback{border-radius:12px;padding:1rem 1.25rem;margin-top:.75rem;display:none;}
.feedback.correct{background:#052e16;border:1px solid #16a34a;color:#4ade80;}
.feedback.incorrect{background:#1c0505;border:1px solid #dc2626;color:#fca5a5;}
.feedback-correction{margin-top:.3rem;font-size:.9rem;opacity:.8;}

/* ── End screen ── */
.end-screen{text-align:center;padding:2rem;display:none;}
.end-grade{font-size:2rem;font-weight:800;margin-bottom:.5rem;}
.end-scores{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0;}
.end-score-item{background:#1e293b;border-radius:12px;padding:1rem;}
.end-score-item .label{font-size:.75rem;color:#94a3b8;text-transform:uppercase;letter-spacing:.06em;}
.end-score-item .value{font-size:1.5rem;font-weight:800;color:#60a5fa;margin-top:.3rem;}
.restart-btn{background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border:none;border-radius:12px;padding:1rem 2.5rem;font-size:1.05rem;font-weight:700;cursor:pointer;margin:.5rem;}
.restart-btn:hover{opacity:.9;}
.home-btn{background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:12px;padding:1rem 2rem;font-size:1rem;cursor:pointer;margin:.5rem;}
.home-btn:hover{background:#334155;color:#f1f5f9;}

/* ── Help modal ── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;z-index:100;padding:1rem;}
.modal-box{background:#1e293b;border:1px solid #334155;border-radius:20px;padding:2rem;max-width:460px;width:100%;}
.modal-box h3{font-size:1.2rem;font-weight:800;margin-bottom:1rem;}
.modal-box ul{list-style:none;display:flex;flex-direction:column;gap:.6rem;}
.modal-box li{font-size:.9rem;color:#cbd5e1;}
.modal-box li strong{color:#f1f5f9;}
.modal-close{margin-top:1.5rem;width:100%;background:#334155;border:none;border-radius:10px;padding:.75rem;color:#f1f5f9;font-size:.95rem;cursor:pointer;}
.modal-close:hover{background:#475569;}

@media(max-width:500px){
  .end-scores{grid-template-columns:1fr 1fr;}
  .quiz-title{font-size:1.1rem;}
}`;

// ============================================================
// theory.css
// ============================================================
files['theory.css'] = `/* Theory page styles */
.reading-bar{position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#10b981,#3b82f6);width:0%;z-index:999;transition:width .1s;}
.theory-page{max-width:760px;margin:0 auto;padding:1.5rem;}
.back-btn{display:inline-flex;align-items:center;gap:.4rem;color:#94a3b8;font-size:.9rem;padding:.4rem .8rem;border-radius:8px;background:#1e293b;border:1px solid #334155;margin-bottom:1.5rem;transition:color .15s;}
.back-btn:hover{color:#f1f5f9;}
.theory-hero{text-align:center;padding:2rem 0 1rem;}
.theory-hero h1{font-size:2rem;font-weight:900;}
.theory-hero p{color:#94a3b8;margin-top:.5rem;font-size:1rem;}

/* Sticky nav */
.sticky-nav{position:sticky;top:0;background:#0f172a;border-bottom:1px solid #1e293b;padding:.6rem 0;z-index:50;margin:1rem -1.5rem;padding-left:1.5rem;padding-right:1.5rem;}
.sticky-nav-inner{display:flex;gap:.5rem;overflow-x:auto;scrollbar-width:none;}
.sticky-nav-inner::-webkit-scrollbar{display:none;}
.nav-tab{background:#1e293b;border:1px solid #334155;border-radius:999px;padding:.4rem 1rem;font-size:.85rem;color:#94a3b8;white-space:nowrap;cursor:pointer;transition:all .15s;}
.nav-tab.active{background:#10b981;border-color:#10b981;color:#fff;font-weight:700;}

/* Sections */
.theory-section{margin-bottom:3rem;}
.theory-section h2{font-size:1.35rem;font-weight:800;margin-bottom:1.25rem;display:flex;align-items:center;gap:.6rem;}
.theory-section h2 span{font-size:1.5rem;}

/* Prep cards */
.prep-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin-bottom:1.5rem;}
.prep-card{background:#1e293b;border-radius:16px;padding:1.5rem;border-top:4px solid var(--pc,#3b82f6);}
.prep-card h3{font-size:1.5rem;font-weight:900;color:var(--pc,#3b82f6);margin-bottom:.5rem;}
.prep-card ul{list-style:none;display:flex;flex-direction:column;gap:.4rem;}
.prep-card li{font-size:.9rem;color:#cbd5e1;}
.prep-card .example{font-size:.85rem;color:#64748b;font-style:italic;margin-top:.6rem;}

/* Transport widget */
.transport-widget{background:#1e293b;border-radius:16px;padding:1.5rem;margin-bottom:1.5rem;}
.transport-widget h4{font-size:1rem;font-weight:700;margin-bottom:1rem;color:#94a3b8;}
.transport-grid{display:flex;gap:.75rem;flex-wrap:wrap;}
.transport-item{background:#0f172a;border-radius:12px;padding:.75rem 1rem;cursor:pointer;border:2px solid transparent;transition:all .15s;flex:1;min-width:120px;text-align:center;}
.transport-item:hover{border-color:#334155;}
.transport-item .icon{font-size:1.5rem;margin-bottom:.3rem;}
.transport-item .name{font-size:.8rem;color:#94a3b8;}
.transport-item .rule{font-size:.75rem;font-weight:700;margin-top:.2rem;}
.transport-item.on-prep .rule{color:#3b82f6;}
.transport-item.in-prep .rule{color:#8b5cf6;}

/* Time pyramid */
.time-pyramid{margin-bottom:1.5rem;}
.time-row{display:flex;align-items:center;gap:1rem;margin-bottom:.6rem;}
.time-prep{font-size:1.1rem;font-weight:900;width:2.5rem;flex-shrink:0;}
.time-prep.at{color:#10b981;}
.time-prep.on{color:#3b82f6;}
.time-prep.in{color:#8b5cf6;}
.time-bar{background:#1e293b;border-radius:8px;padding:.5rem 1rem;flex:1;font-size:.85rem;color:#cbd5e1;}
.time-examples{font-size:.75rem;color:#64748b;margin-top:.2rem;}

/* Collapsible */
.nuance-block{background:#1e293b;border-radius:12px;margin-bottom:.75rem;overflow:hidden;}
.nuance-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.25rem;cursor:pointer;font-weight:600;}
.nuance-header:hover{background:#293548;}
.nuance-chevron{transition:transform .2s;}
.nuance-header.open .nuance-chevron{transform:rotate(180deg);}
.nuance-body{padding:0 1.25rem;max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s;}
.nuance-body.open{max-height:300px;padding:0 1.25rem 1rem;}
.nuance-body p{font-size:.9rem;color:#94a3b8;margin-bottom:.5rem;}
.nuance-body .example-row{font-size:.85rem;margin-bottom:.3rem;}
.nuance-body .example-row .fr{color:#64748b;}
.nuance-body .example-row .en{color:#60a5fa;}

/* FOR cards */
.for-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;}
.for-card{background:#1e293b;border-radius:14px;padding:1.25rem;}
.for-card h4{font-size:.9rem;font-weight:700;color:#f59e0b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.75rem;}
.for-card ul{list-style:none;display:flex;flex-direction:column;gap:.4rem;}
.for-card li{font-size:.85rem;color:#cbd5e1;}

/* Prerequisites */
.prereq-box{background:#1e293b;border-left:4px solid #3b82f6;border-radius:0 12px 12px 0;padding:1rem 1.25rem;}
.prereq-box p{font-size:.9rem;color:#94a3b8;}

/* CTA */
.cta-section{text-align:center;padding:2rem 0;}
.cta-btn{display:inline-block;background:linear-gradient(135deg,#10b981,#059669);color:#fff;border-radius:14px;padding:1rem 2.5rem;font-size:1.1rem;font-weight:800;cursor:pointer;border:none;transition:opacity .15s;}
.cta-btn:hover{opacity:.9;}

@media(max-width:500px){
  .prep-cards{grid-template-columns:1fr;}
  .for-cards{grid-template-columns:1fr;}
}`;

// ============================================================
// app.js
// ============================================================
files['app.js'] = `const STATS_KEY = 'eng-hub-stats';
function getStats() { try { return JSON.parse(localStorage.getItem(STATS_KEY)) || {}; } catch(e) { return {}; } }
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }
function updateLessonStat(id, score, total) {
    const s = getStats(); if (!s[id]) s[id] = {bestScore:0, attempts:0};
    const p = Math.round(score/total*100); if (p > s[id].bestScore) s[id].bestScore = p;
    s[id].attempts++; saveStats(s);
}
function renderLessons() {
    const grid = document.getElementById('lessons-grid'); if (!grid) return;
    const stats = getStats();
    grid.innerHTML = Object.values(LESSONS).map(lesson => {
        const href = lesson.theoryPage ? lesson.theoryPage : 'quiz.html?lesson=' + lesson.id;
        const s = stats[lesson.id]; const best = s ? s.bestScore : null; const att = s ? s.attempts : 0;
        let badge = lesson.theoryPage && lesson.hasQuiz ? '<span class="lesson-type-badge">📖 + ✏️</span>' : lesson.theoryPage ? '<span class="lesson-type-badge">📖 Théorie</span>' : '';
        let stars = best !== null ? '<div class="lesson-stats"><span class="stars">' + (best>=90?'⭐⭐⭐':best>=70?'⭐⭐':'⭐') + '</span><span class="best-score">' + best + '%</span><span class="attempts">' + att + ' essai' + (att>1?'s':'') + '</span></div>' : '<div class="lesson-stats"><span class="not-done">Jamais fait</span></div>';
        const meta = lesson.questionCount ? lesson.questionCount + ' phrases' : 'Nouvelle leçon';
        return '<div class="lesson-card" onclick="location.href=\'' + href + '\'" style="--card-color:' + lesson.color + '"><div class="lesson-icon">' + lesson.icon + '</div><div class="lesson-info"><h3>' + lesson.title + '</h3><p>' + lesson.subtitle + '</p><span class="lesson-meta">' + meta + ' ' + badge + '</span></div>' + stars + '<div class="lesson-arrow">→</div></div>';
    }).join('') + '<div class="lesson-card coming-soon"><div class="lesson-icon">🔒</div><div class="lesson-info"><h3>Bientôt disponible</h3><p>Les temps du passé</p></div></div><div class="lesson-card coming-soon"><div class="lesson-icon">🔒</div><div class="lesson-info"><h3>Bientôt disponible</h3><p>Vocabulaire avancé</p></div></div>';
}
function renderStats() {
    const el = document.getElementById('header-stats'); if (!el) return;
    const stats = getStats(); let tot = 0, best = 0;
    Object.values(stats).forEach(s => { tot += s.attempts||0; if(s.bestScore>best) best=s.bestScore; });
    if (tot > 0) el.innerHTML = '<div class="stat-pill">🏆 ' + best + '%</div><div class="stat-pill">📚 ' + tot + ' session' + (tot>1?'s':'') + '</div>';
}`;

// ============================================================
// quiz.js
// ============================================================
files['quiz.js'] = `const SoundFX = {
    ctx:null, _init(){ if(!this.ctx) this.ctx=new(window.AudioContext||window.webkitAudioContext)(); },
    play(type){ try{ this._init(); const ctx=this.ctx;
        if(type==='correct'){ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.frequency.setValueAtTime(523.25,ctx.currentTime); o.frequency.setValueAtTime(783.99,ctx.currentTime+0.12); g.gain.setValueAtTime(0.25,ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.45); o.start();o.stop(ctx.currentTime+0.45); }
        else if(type==='wrong'){ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.type='sawtooth'; o.frequency.setValueAtTime(220,ctx.currentTime); g.gain.setValueAtTime(0.15,ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3); o.start();o.stop(ctx.currentTime+0.3); }
        else if(type==='complete'){ [523.25,659.25,783.99,1046.5].forEach((f,i)=>{ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.frequency.value=f; const t=ctx.currentTime+i*0.13; g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.4); o.start(t);o.stop(t+0.4); }); }
    }catch(e){} }
};
const quiz={lesson:null,questions:[],currentIndex:0,score:0,streak:0,maxStreak:0,skipped:0,state:"typing",soundEnabled:true};
function normalizeText(t){ return t.toLowerCase().replace(/[.,?!]/g,'').replace(/\\s+/g,' ').trim(); }
function shuffleArray(a){ const r=a.slice(); for(let i=r.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; }
function escapeChar(c){ return c==='<'?'&lt;':c==='>'?'&gt;':c==='&'?'&amp;':c; }
function initQuiz(lesson){
    quiz.lesson=lesson; quiz.questions=shuffleArray(lesson.questions);
    quiz.currentIndex=0;quiz.score=0;quiz.streak=0;quiz.maxStreak=0;quiz.skipped=0;quiz.state="typing";
    document.getElementById('total-display').textContent=quiz.questions.length;
    document.getElementById('total-q').textContent=quiz.questions.length;
    document.getElementById('quiz-container').style.display='block';
    document.getElementById('end-screen').style.display='none';
    updateScore(); loadQuestion();
}
function loadQuestion(){
    quiz.state="typing"; const q=quiz.questions[quiz.currentIndex];
    document.getElementById('current-q').textContent=quiz.currentIndex+1;
    document.getElementById('progress-bar-fill').style.width=(quiz.currentIndex/quiz.questions.length*100)+'%';
    const sn={1:"Volonté",2:"Politesse",3:"Regret"}, sc={1:"#3b82f6",2:"#8b5cf6",3:"#f59e0b"};
    const badge=document.getElementById('structure-badge');
    if(q.structure){badge.textContent='Structure '+q.structure+' — '+sn[q.structure];badge.style.background=sc[q.structure]+'18';badge.style.color=sc[q.structure];badge.style.display='inline-block';}else{badge.style.display='none';}
    const qEl=document.getElementById('question-text');
    qEl.style.opacity='0';qEl.style.transform='translateY(12px)';
    setTimeout(()=>{qEl.textContent=q.fr;qEl.style.transition='opacity 0.3s ease,transform 0.3s ease';qEl.style.opacity='1';qEl.style.transform='translateY(0)';},50);
    const inp=document.getElementById('answer-input');inp.value='';inp.disabled=false;inp.className='answer-input';
    const lb=document.getElementById('live-feedback');lb.style.display='none';lb.innerHTML='';
    document.getElementById('submit-btn').textContent='Vérifier ✓';document.getElementById('submit-btn').className='action-btn';
    document.getElementById('skip-btn').style.display='inline-flex';
    const fb=document.getElementById('feedback-box');fb.style.display='none';fb.className='feedback';
    updateStreakDisplay(); setTimeout(()=>inp.focus(),80);
}
function checkAnswer(){
    if(quiz.state==="feedback"){nextQuestion();return;}
    const inp=document.getElementById('answer-input'); const ua=inp.value.trim(); if(!ua)return;
    const q=quiz.questions[quiz.currentIndex]; const ok=q.en.some(a=>normalizeText(a)===normalizeText(ua));
    const fb=document.getElementById('feedback-box'),fbM=document.getElementById('feedback-msg'),fbC=document.getElementById('feedback-correction');
    const btn=document.getElementById('submit-btn'),lb=document.getElementById('live-feedback');
    if(ok){
        quiz.score++;quiz.streak++;if(quiz.streak>quiz.maxStreak)quiz.maxStreak=quiz.streak;
        if(quiz.soundEnabled)SoundFX.play('correct');
        quiz.state="feedback";inp.disabled=true;btn.textContent='Continuer →';
        document.getElementById('skip-btn').style.display='none';lb.style.display='none';
        fb.className='feedback correct';fbM.textContent='✅ Parfait!'+(quiz.streak>=3?' 🔥 Combo ×'+quiz.streak+' !':'');fbC.textContent='';
    }else{
        quiz.streak=0;if(quiz.soundEnabled)SoundFX.play('wrong');
        inp.classList.add('shake');setTimeout(()=>inp.classList.remove('shake'),400);
        fb.className='feedback incorrect';fbM.textContent='❌ Pas tout à fait, essaie encore !';fbC.textContent='';inp.focus();
    }
    fb.style.display='block';updateScore();updateStreakDisplay();
}
function showAnswer(){
    if(quiz.state==="feedback")return; const q=quiz.questions[quiz.currentIndex];
    const inp=document.getElementById('answer-input');
    quiz.streak=0;quiz.skipped++;quiz.state="feedback";inp.value=q.en[0];inp.disabled=true;
    document.getElementById('submit-btn').textContent='Continuer →';
    document.getElementById('skip-btn').style.display='none';document.getElementById('live-feedback').style.display='none';
    const fb=document.getElementById('feedback-box');fb.className='feedback incorrect';
    document.getElementById('feedback-msg').textContent='⏭️ Question passée.';
    document.getElementById('feedback-correction').textContent='Réponse : '+q.en[0];
    fb.style.display='block';updateScore();updateStreakDisplay();
}
function nextQuestion(){ quiz.currentIndex++; if(quiz.currentIndex<quiz.questions.length)loadQuestion();else showEndScreen(); }
function showEndScreen(){
    if(quiz.soundEnabled)SoundFX.play('complete');
    document.getElementById('quiz-container').style.display='none';document.getElementById('end-screen').style.display='block';
    document.getElementById('progress-bar-fill').style.width='100%';
    const tot=quiz.questions.length,pct=Math.round(quiz.score/tot*100);
    const grade=pct===100?'🏆 PARFAIT !':pct>=90?'⭐⭐⭐ Excellent !':pct>=70?'⭐⭐ Bien joué !':pct>=50?'⭐ Continue !':'📚 Révise encore.';
    document.getElementById('final-grade').textContent=grade;
    document.getElementById('final-score').textContent=quiz.score+' / '+tot;
    document.getElementById('final-pct').textContent=pct+'%';
    document.getElementById('final-streak').textContent=quiz.maxStreak;
    document.getElementById('final-skipped').textContent=quiz.skipped;
    if(typeof updateLessonStat==='function')updateLessonStat(quiz.lesson.id,quiz.score,tot);
}
function updateScore(){document.getElementById('score-display').textContent=quiz.score;}
function updateStreakDisplay(){
    const el=document.getElementById('streak-display');if(!el)return;
    if(quiz.streak>=2){el.textContent='🔥 ×'+quiz.streak;el.style.display='inline-block';el.className='streak-badge';void el.offsetWidth;el.className='streak-badge active';}else{el.style.display='none';}
}
function openHelp(){document.getElementById('help-modal').style.display='flex';}
function closeHelp(e){if(e)e.stopPropagation();document.getElementById('help-modal').style.display='none';if(quiz.state==="typing")setTimeout(()=>document.getElementById('answer-input')?.focus(),80);}
function toggleSound(){quiz.soundEnabled=!quiz.soundEnabled;const b=document.getElementById('sound-btn');b.textContent=quiz.soundEnabled?'🔊':'🔇';b.style.opacity=quiz.soundEnabled?'1':'0.45';}
(function(){
    const inp=document.getElementById('answer-input');if(!inp)return;
    inp.addEventListener('input',function(){
        if(quiz.state!=="typing")return; const ut=this.value; const q=quiz.questions[quiz.currentIndex]; const lb=document.getElementById('live-feedback');
        if(!q||!ut){lb.style.display='none';lb.innerHTML='';return;} lb.style.display='block';
        let best=q.en[0],max=-1;
        for(const t of q.en){let m=0;for(let i=0;i<Math.min(ut.length,t.length);i++){if(ut[i].toLowerCase()===t[i].toLowerCase())m++;else break;}if(m>max){max=m;best=t;}}
        let html='';for(let i=0;i<ut.length;i++){const ch=ut[i]===' '?'&nbsp;':escapeChar(ut[i]);const ok=i<best.length&&ut[i].toLowerCase()===best[i].toLowerCase();html+=ok?'<span class="char-correct">'+ch+'</span>':'<span class="char-incorrect">'+ch+'</span>';}
        lb.innerHTML=html;
    });
    inp.addEventListener('keypress',e=>{if(e.key==='Enter')checkAnswer();});
})();`;

// ============================================================
// index.html
// ============================================================
files['index.html'] = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>ENG Hub — Tableau de bord</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header class="site-header">
  <h1>🇬🇧 ENG Hub</h1>
  <p>Entraîne-toi à traduire des phrases en anglais</p>
  <div class="header-stats" id="header-stats"></div>
</header>
<main class="main-content">
  <p class="section-title">Mes leçons</p>
  <div class="lessons-grid" id="lessons-grid"></div>
</main>
<script src="lessons.js"></script>
<script src="app.js"></script>
<script>renderLessons();renderStats();</script>
</body>
</html>`;

// ============================================================
// quiz.html
// ============================================================
files['quiz.html'] = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Quiz — ENG Hub</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="quiz-page">
  <a href="index.html" class="back-btn">← Accueil</a>
  <div id="quiz-container" style="display:none">
    <div class="quiz-header">
      <div class="quiz-title" id="quiz-title">Quiz</div>
      <div class="quiz-controls">
        <button class="icon-btn" id="sound-btn" onclick="toggleSound()" title="Son">🔊</button>
        <button class="icon-btn" onclick="openHelp()" title="Aide">❓</button>
      </div>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" id="progress-bar-fill"></div></div>
    <div class="score-bar">
      <div class="score-display">Score : <span id="score-display">0</span> / <span id="total-display">0</span></div>
      <div class="score-display">Question <span id="current-q">1</span> / <span id="total-q">0</span></div>
      <span class="streak-badge" id="streak-display" style="display:none"></span>
    </div>
    <div class="question-card">
      <span class="structure-badge" id="structure-badge" style="display:none"></span>
      <div class="question-text" id="question-text"></div>
      <div class="answer-area">
        <input type="text" id="answer-input" class="answer-input" placeholder="Écris la traduction..." autocomplete="off" spellcheck="false">
        <div class="live-feedback" id="live-feedback"></div>
        <div class="action-row">
          <button class="action-btn" id="submit-btn" onclick="checkAnswer()">Vérifier ✓</button>
          <button class="skip-btn" id="skip-btn" onclick="showAnswer()">⏭️ Passer</button>
        </div>
        <div class="feedback" id="feedback-box">
          <div id="feedback-msg"></div>
          <div class="feedback-correction" id="feedback-correction"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="end-screen" id="end-screen">
    <div class="end-grade" id="final-grade"></div>
    <div class="end-scores">
      <div class="end-score-item"><div class="label">Score</div><div class="value" id="final-score"></div></div>
      <div class="end-score-item"><div class="label">Résultat</div><div class="value" id="final-pct"></div></div>
      <div class="end-score-item"><div class="label">Meilleure série</div><div class="value" id="final-streak"></div></div>
    </div>
    <div>Passées : <span id="final-skipped">0</span></div>
    <div style="margin-top:1.5rem">
      <button class="restart-btn" onclick="location.reload()">🔄 Recommencer</button>
      <button class="home-btn" onclick="location.href='index.html'">🏠 Accueil</button>
    </div>
  </div>
</div>
<div class="modal-overlay" id="help-modal" onclick="closeHelp(event)">
  <div class="modal-box" onclick="event.stopPropagation()">
    <h3>💡 Comment jouer</h3>
    <ul>
      <li><strong>Tape</strong> la traduction anglaise et appuie sur <strong>Entrée</strong></li>
      <li>La coloration <strong style="color:#4ade80">verte/rouge</strong> t'indique si tu es sur la bonne voie</li>
      <li>Tu peux avoir plusieurs essais avant de passer</li>
      <li><strong>⏭️ Passer</strong> révèle la réponse mais ne compte pas de point</li>
    </ul>
    <button class="modal-close" onclick="closeHelp()">Fermer</button>
  </div>
</div>
<script src="lessons.js"></script>
<script src="app.js"></script>
<script src="quiz.js"></script>
<script>
const params = new URLSearchParams(location.search);
const lid = params.get('lesson');
if (lid && LESSONS[lid]) {
    document.getElementById('quiz-title').textContent = LESSONS[lid].title;
    initQuiz(LESSONS[lid]);
} else {
    document.getElementById('quiz-container').innerHTML = '<p style="color:#f87171">Leçon introuvable.</p>';
    document.getElementById('quiz-container').style.display = 'block';
}
</script>
</body>
</html>`;

// ============================================================
// theory-prepositions.html
// ============================================================
files['theory-prepositions.html'] = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Prépositions de lieu — ENG Hub</title>
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="theory.css">
</head>
<body>
<div class="reading-bar" id="reading-bar"></div>
<div class="theory-page">
  <a href="index.html" class="back-btn">← Accueil</a>
  <div class="theory-hero">
    <h1>📍 AT / ON / IN</h1>
    <p>Maîtrise les prépositions de lieu et de temps</p>
  </div>

  <nav class="sticky-nav">
    <div class="sticky-nav-inner">
      <button class="nav-tab active" data-target="space">L'Espace</button>
      <button class="nav-tab" data-target="time">Le Temps</button>
      <button class="nav-tab" data-target="for">FOR</button>
      <button class="nav-tab" data-target="prereq">Prérequis</button>
    </div>
  </nav>

  <!-- BLOC 1: L'ESPACE -->
  <section class="theory-section" id="space">
    <h2><span>🗺️</span> L'Espace — Où se trouve quelque chose ?</h2>
    <div class="prep-cards">
      <div class="prep-card" style="--pc:#10b981">
        <h3>AT</h3>
        <ul>
          <li>Un point précis, une adresse</li>
          <li>Un lieu fonctionnel</li>
          <li>Un événement</li>
        </ul>
        <p class="example">at school · at the bus stop · at the concert · at 5 Main Street</p>
      </div>
      <div class="prep-card" style="--pc:#3b82f6">
        <h3>ON</h3>
        <ul>
          <li>Sur une surface</li>
          <li>Sur un axe (rue, étage)</li>
          <li>Médias, appareils</li>
        </ul>
        <p class="example">on the table · on the wall · on the 3rd floor · on TV · on the phone</p>
      </div>
      <div class="prep-card" style="--pc:#8b5cf6">
        <h3>IN</h3>
        <ul>
          <li>À l'intérieur d'un espace</li>
          <li>Ville, pays, région</li>
          <li>Contenant</li>
        </ul>
        <p class="example">in the box · in Paris · in France · in my pocket · in the sky</p>
      </div>
    </div>

    <div class="transport-widget">
      <h4>🚀 Les transports — ON ou IN ?</h4>
      <div class="transport-grid">
        <div class="transport-item on-prep"><div class="icon">🚌</div><div class="name">bus</div><div class="rule">ON the bus</div></div>
        <div class="transport-item on-prep"><div class="icon">🚂</div><div class="name">train</div><div class="rule">ON the train</div></div>
        <div class="transport-item on-prep"><div class="icon">✈️</div><div class="name">avion</div><div class="rule">ON the plane</div></div>
        <div class="transport-item on-prep"><div class="icon">🚲</div><div class="name">vélo</div><div class="rule">ON the bike</div></div>
        <div class="transport-item in-prep"><div class="icon">🚗</div><div class="name">voiture</div><div class="rule">IN the car</div></div>
        <div class="transport-item in-prep"><div class="icon">🚕</div><div class="name">taxi</div><div class="rule">IN a taxi</div></div>
      </div>
    </div>
  </section>

  <!-- BLOC 2: LE TEMPS -->
  <section class="theory-section" id="time">
    <h2><span>🕐</span> Le Temps — Quand ?</h2>
    <div class="time-pyramid">
      <div class="time-row"><span class="time-prep at">AT</span><div class="time-bar">Heure précise, moment exact<div class="time-examples">at 3pm · at midnight · at noon · at Christmas</div></div></div>
      <div class="time-row"><span class="time-prep on">ON</span><div class="time-bar">Jour, date, occasion spéciale<div class="time-examples">on Monday · on 5th May · on my birthday · on New Year's Day</div></div></div>
      <div class="time-row"><span class="time-prep in">IN</span><div class="time-bar">Période longue (mois, saison, année)<div class="time-examples">in January · in summer · in 2024 · in the morning</div></div></div>
    </div>

    <div class="nuance-block">
      <div class="nuance-header" onclick="toggleNuance(this)">
        <span>🌅 in the morning / at night — pourquoi différent ?</span>
        <span class="nuance-chevron">▼</span>
      </div>
      <div class="nuance-body">
        <p>La nuit est vue comme un point dans le temps, pas une période.</p>
        <div class="example-row"><span class="fr">Le matin / soir / après-midi :</span> <span class="en">in the morning / evening / afternoon</span></div>
        <div class="example-row"><span class="fr">La nuit :</span> <span class="en">at night (pas "in the night" sauf contexte spécifique)</span></div>
      </div>
    </div>

    <div class="nuance-block">
      <div class="nuance-header" onclick="toggleNuance(this)">
        <span>🎄 at Christmas vs on Christmas Day</span>
        <span class="nuance-chevron">▼</span>
      </div>
      <div class="nuance-body">
        <p><strong>at Christmas</strong> = la période des fêtes (quelques jours)</p>
        <p><strong>on Christmas Day</strong> = le 25 décembre spécifiquement</p>
        <div class="example-row"><span class="fr">Je voyage à Noël.</span> <span class="en">I travel at Christmas.</span></div>
        <div class="example-row"><span class="fr">On ouvre les cadeaux le jour de Noël.</span> <span class="en">We open presents on Christmas Day.</span></div>
      </div>
    </div>
  </section>

  <!-- BLOC 3: FOR -->
  <section class="theory-section" id="for">
    <h2><span>⏳</span> FOR — La durée</h2>
    <div class="for-cards">
      <div class="for-card">
        <h4>Durée passée</h4>
        <ul>
          <li>I waited <strong>for 2 hours</strong>.</li>
          <li>She lived there <strong>for 10 years</strong>.</li>
        </ul>
      </div>
      <div class="for-card">
        <h4>Durée présente</h4>
        <ul>
          <li>I have lived here <strong>for 3 months</strong>.</li>
          <li>He has been working <strong>for an hour</strong>.</li>
        </ul>
      </div>
      <div class="for-card">
        <h4>Durée future</h4>
        <ul>
          <li>I will stay <strong>for a week</strong>.</li>
          <li>Can you wait <strong>for 5 minutes</strong>?</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- PREREQ -->
  <section class="theory-section" id="prereq">
    <h2><span>📚</span> Prérequis</h2>
    <div class="prereq-box">
      <p>Pour cette leçon, tu devrais connaître : les articles (a/an/the), la construction SVO de base (Sujet + Verbe + Objet) et les formes du verbe être (am/is/are).</p>
    </div>
  </section>

  <div class="cta-section">
    <button class="cta-btn" onclick="location.href='space-quiz.html'">✏️ Pratiquer L'Espace →</button>
  </div>
</div>

<script>
window.addEventListener('scroll',()=>{
    const h=document.documentElement;
    const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
    document.getElementById('reading-bar').style.width=pct+'%';
});
function toggleNuance(header){
    const body=header.nextElementSibling;
    header.classList.toggle('open');
    body.classList.toggle('open');
}
(function(){
    const tabs=document.querySelectorAll('.nav-tab');
    const sections=document.querySelectorAll('.theory-section');
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(e=>{
            if(e.isIntersecting){
                tabs.forEach(t=>t.classList.toggle('active',t.dataset.target===e.target.id));
            }
        });
    },{threshold:0.3});
    sections.forEach(s=>observer.observe(s));
    tabs.forEach(tab=>tab.addEventListener('click',()=>{
        document.getElementById(tab.dataset.target)?.scrollIntoView({behavior:'smooth'});
    }));
})();
</script>
</body>
</html>`;

// ============================================================
// space-quiz.html
// ============================================================
files['space-quiz.html'] = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Quiz Espace — ENG Hub</title>
<link rel="stylesheet" href="styles.css">
<style>
.level-badge{display:inline-block;background:#1e293b;border:1px solid #334155;border-radius:999px;padding:.3rem .9rem;font-size:.8rem;font-weight:700;color:#94a3b8;margin-bottom:1rem;}
.prep-btns{display:flex;gap:.75rem;margin-top:1.25rem;flex-wrap:wrap;}
.prep-btn{flex:1;min-width:80px;padding:1rem;font-size:1.3rem;font-weight:900;border:none;border-radius:14px;cursor:pointer;transition:transform .1s,opacity .15s;}
.prep-btn:active{transform:scale(.95);}
.prep-btn.at{background:#10b981;color:#fff;}
.prep-btn.on{background:#3b82f6;color:#fff;}
.prep-btn.in{background:#8b5cf6;color:#fff;}
.prep-btn:disabled{opacity:.5;cursor:default;}
.hint-tag{display:inline-block;background:#1e293b;border:1px solid #334155;border-radius:8px;padding:.3rem .7rem;font-size:.8rem;color:#94a3b8;margin-top:.75rem;}
.transition-screen{text-align:center;padding:3rem 1rem;display:none;}
.transition-screen h2{font-size:1.5rem;font-weight:800;margin-bottom:.5rem;}
.transition-screen p{color:#94a3b8;margin-bottom:1.5rem;}
.mini-stats{display:flex;gap:1rem;justify-content:center;margin-bottom:2rem;flex-wrap:wrap;}
.mini-stat{background:#1e293b;border-radius:12px;padding:.75rem 1.25rem;text-align:center;}
.mini-stat .val{font-size:1.4rem;font-weight:800;color:#60a5fa;}
.mini-stat .lbl{font-size:.75rem;color:#64748b;margin-top:.2rem;}
.recall-btn{background:#1e293b;border:1px solid #334155;color:#94a3b8;border-radius:10px;padding:.5rem 1rem;font-size:.85rem;cursor:pointer;margin-bottom:1.5rem;}
.recall-btn:hover{background:#293548;}
.recall-modal{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:100;padding:1rem;}
.recall-box{background:#1e293b;border:1px solid #334155;border-radius:16px;padding:1.5rem;max-width:360px;width:100%;}
.recall-box h4{font-weight:800;margin-bottom:1rem;}
.recall-rule{display:flex;align-items:center;gap:.75rem;margin-bottom:.6rem;font-size:.9rem;}
.recall-rule .rp{font-size:1.1rem;font-weight:900;width:2rem;}
.recall-rule .rp.at{color:#10b981;}
.recall-rule .rp.on{color:#3b82f6;}
.recall-rule .rp.in{color:#8b5cf6;}
.recall-close{margin-top:1rem;width:100%;background:#334155;border:none;border-radius:10px;padding:.65rem;color:#f1f5f9;cursor:pointer;}
</style>
</head>
<body>
<div class="quiz-page">
  <a href="theory-prepositions.html" class="back-btn">← Théorie</a>

  <!-- LEVEL 1 -->
  <div id="level1-screen">
    <div class="quiz-header">
      <div class="quiz-title">📍 L'Espace — Niveau 1</div>
      <div class="quiz-controls">
        <button class="icon-btn" id="sound-btn-l1" onclick="toggleSoundL1()" title="Son">🔊</button>
      </div>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" id="pb1"></div></div>
    <div class="score-bar">
      <div class="score-display">Score : <span id="s1">0</span> / <span id="t1">0</span></div>
      <div class="score-display">Question <span id="q1">1</span> / <span id="qt1">0</span></div>
    </div>
    <div class="question-card">
      <div class="level-badge">Niveau 1 — QCM</div>
      <div class="question-text" id="q1-text"></div>
      <div id="hint-area"></div>
      <div class="prep-btns">
        <button class="prep-btn at" onclick="answerL1('AT')">AT</button>
        <button class="prep-btn on" onclick="answerL1('ON')">ON</button>
        <button class="prep-btn in" onclick="answerL1('IN')">IN</button>
      </div>
      <div class="feedback" id="fb1" style="display:none">
        <div id="fb1-msg"></div>
        <div class="feedback-correction" id="fb1-hint"></div>
      </div>
    </div>
  </div>

  <!-- TRANSITION -->
  <div class="transition-screen" id="transition-screen">
    <div style="font-size:3rem;margin-bottom:1rem;">🎯</div>
    <h2>Niveau 1 terminé !</h2>
    <p>Tu passes maintenant à l'écriture complète.</p>
    <div class="mini-stats">
      <div class="mini-stat"><div class="val" id="tr-score"></div><div class="lbl">Score</div></div>
      <div class="mini-stat"><div class="val" id="tr-pct"></div><div class="lbl">Résultat</div></div>
    </div>
    <button class="cta-btn" style="background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;border:none;border-radius:14px;padding:1rem 2.5rem;font-size:1.1rem;font-weight:800;cursor:pointer;" onclick="startLevel2()">Continuer vers le Niveau 2 →</button>
  </div>

  <!-- LEVEL 2 -->
  <div id="level2-screen" style="display:none">
    <div class="quiz-header">
      <div class="quiz-title">✏️ L'Espace — Niveau 2</div>
      <div class="quiz-controls">
        <button class="icon-btn" id="sound-btn-l2" onclick="toggleSoundL2()" title="Son">🔊</button>
        <button class="recall-btn" onclick="openRecall()">💡 Rappel</button>
      </div>
    </div>
    <div class="progress-bar"><div class="progress-bar-fill" id="pb2"></div></div>
    <div class="score-bar">
      <div class="score-display">Score : <span id="s2">0</span> / <span id="t2">0</span></div>
      <div class="score-display">Question <span id="q2">1</span> / <span id="qt2">0</span></div>
      <span class="streak-badge" id="streak2" style="display:none"></span>
    </div>
    <div class="question-card">
      <div class="level-badge">Niveau 2 — Écriture libre</div>
      <div class="question-text" id="q2-text"></div>
      <div class="answer-area">
        <input type="text" id="ans2" class="answer-input" placeholder="Écris la traduction complète..." autocomplete="off" spellcheck="false">
        <div class="live-feedback" id="lf2"></div>
        <div class="action-row">
          <button class="action-btn" id="sub2" onclick="checkL2()">Vérifier ✓</button>
          <button class="skip-btn" id="skip2" onclick="skipL2()" style="display:inline-flex">⏭️ Passer</button>
        </div>
        <div class="feedback" id="fb2" style="display:none">
          <div id="fb2-msg"></div>
          <div class="feedback-correction" id="fb2-cor"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- END -->
  <div class="end-screen" id="end-screen">
    <div class="end-grade" id="end-grade"></div>
    <div style="color:#94a3b8;margin-bottom:1.5rem;">Quiz des prépositions terminé !</div>
    <div class="end-scores">
      <div class="end-score-item"><div class="label">Niveau 1</div><div class="value" id="end-s1"></div></div>
      <div class="end-score-item"><div class="label">Niveau 2</div><div class="value" id="end-s2"></div></div>
      <div class="end-score-item"><div class="label">Total</div><div class="value" id="end-tot"></div></div>
    </div>
    <div style="margin-top:1.5rem">
      <button class="restart-btn" onclick="location.reload()">🔄 Recommencer</button>
      <button class="home-btn" onclick="location.href='index.html'">🏠 Accueil</button>
    </div>
  </div>
</div>

<!-- Recall modal -->
<div class="recall-modal" id="recall-modal" onclick="closeRecall()">
  <div class="recall-box" onclick="event.stopPropagation()">
    <h4>💡 Rappel rapide</h4>
    <div class="recall-rule"><span class="rp at">AT</span><span>Point précis, lieu fonctionnel<br><small style="color:#64748b">at school, at the bus stop</small></span></div>
    <div class="recall-rule"><span class="rp on">ON</span><span>Sur une surface, axe<br><small style="color:#64748b">on the table, on the wall</small></span></div>
    <div class="recall-rule"><span class="rp in">IN</span><span>À l'intérieur, ville/pays<br><small style="color:#64748b">in the box, in Paris</small></span></div>
    <button class="recall-close" onclick="closeRecall()">Fermer</button>
  </div>
</div>

<script src="lessons.js"></script>
<script src="app.js"></script>
<script src="prepositions-space.js"></script>
<script>
const SFX={ctx:null,_init(){if(!this.ctx)this.ctx=new(window.AudioContext||window.webkitAudioContext)();},
play(type){try{this._init();const ctx=this.ctx;
if(type==='correct'){const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.setValueAtTime(523.25,ctx.currentTime);o.frequency.setValueAtTime(783.99,ctx.currentTime+0.12);g.gain.setValueAtTime(0.25,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.45);o.start();o.stop(ctx.currentTime+0.45);}
else if(type==='wrong'){const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type='sawtooth';o.frequency.setValueAtTime(220,ctx.currentTime);g.gain.setValueAtTime(0.15,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);o.start();o.stop(ctx.currentTime+0.3);}
else if(type==='complete'){[523.25,659.25,783.99,1046.5].forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.frequency.value=f;const t=ctx.currentTime+i*0.13;g.gain.setValueAtTime(0.2,t);g.gain.exponentialRampToValueAtTime(0.001,t+0.4);o.start(t);o.stop(t+0.4);});}
}catch(e){}}};

const st={soundL1:true,soundL2:true,
  l1:{qs:[],i:0,score:0},
  l2:{qs:[],i:0,score:0,streak:0,maxStreak:0,skipped:0,state:"typing"}};

function shuffle(a){const r=a.slice();for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function norm(t){return t.toLowerCase().replace(/[.,?!]/g,'').replace(/\\s+/g,' ').trim();}
function esc(c){return c==='<'?'&lt;':c==='>'?'&gt;':c==='&'?'&amp;':c;}
function toggleSoundL1(){st.soundL1=!st.soundL1;document.getElementById('sound-btn-l1').textContent=st.soundL1?'🔊':'🔇';}
function toggleSoundL2(){st.soundL2=!st.soundL2;document.getElementById('sound-btn-l2').textContent=st.soundL2?'🔊':'🔇';}
function openRecall(){document.getElementById('recall-modal').style.display='flex';}
function closeRecall(){document.getElementById('recall-modal').style.display='none';}

// LEVEL 1
function initL1(){
  st.l1.qs=shuffle(SPACE_QUIZ.level1);st.l1.i=0;st.l1.score=0;
  document.getElementById('t1').textContent=st.l1.qs.length;
  document.getElementById('qt1').textContent=st.l1.qs.length;
  loadL1();
}
function loadL1(){
  const q=st.l1.qs[st.l1.i];
  document.getElementById('q1').textContent=st.l1.i+1;
  document.getElementById('pb1').style.width=(st.l1.i/st.l1.qs.length*100)+'%';
  document.getElementById('q1-text').textContent=q.fr;
  document.getElementById('hint-area').innerHTML='';
  document.getElementById('fb1').style.display='none';
  document.querySelectorAll('.prep-btn').forEach(b=>b.disabled=false);
}
function answerL1(prep){
  const q=st.l1.qs[st.l1.i];
  const ok=prep===q.prep;
  document.querySelectorAll('.prep-btn').forEach(b=>b.disabled=true);
  if(ok)st.l1.score++;
  if(st.soundL1)SFX.play(ok?'correct':'wrong');
  const fb=document.getElementById('fb1');
  document.getElementById('fb1-msg').textContent=ok?'✅ Correct !':'❌ Pas tout à fait !';
  document.getElementById('fb1-hint').textContent=ok?q.hint:'Réponse : '+q.prep+' — '+q.hint;
  fb.className='feedback '+(ok?'correct':'incorrect');fb.style.display='block';
  document.getElementById('hint-area').innerHTML='<span class="hint-tag">'+q.hint+'</span>';
  document.getElementById('s1').textContent=st.l1.score;
  setTimeout(()=>nextL1(),ok?1300:2200);
}
function nextL1(){
  st.l1.i++;
  if(st.l1.i<st.l1.qs.length)loadL1();
  else showTransition();
}
function showTransition(){
  document.getElementById('level1-screen').style.display='none';
  document.getElementById('pb1').style.width='100%';
  const pct=Math.round(st.l1.score/st.l1.qs.length*100);
  document.getElementById('tr-score').textContent=st.l1.score+' / '+st.l1.qs.length;
  document.getElementById('tr-pct').textContent=pct+'%';
  document.getElementById('transition-screen').style.display='block';
}

// LEVEL 2
function startLevel2(){
  document.getElementById('transition-screen').style.display='none';
  document.getElementById('level2-screen').style.display='block';
  st.l2.qs=shuffle(SPACE_QUIZ.level2);st.l2.i=0;st.l2.score=0;st.l2.streak=0;st.l2.maxStreak=0;st.l2.skipped=0;st.l2.state="typing";
  document.getElementById('t2').textContent=st.l2.qs.length;
  document.getElementById('qt2').textContent=st.l2.qs.length;
  loadL2();
}
function loadL2(){
  st.l2.state="typing";const q=st.l2.qs[st.l2.i];
  document.getElementById('q2').textContent=st.l2.i+1;
  document.getElementById('pb2').style.width=(st.l2.i/st.l2.qs.length*100)+'%';
  const qEl=document.getElementById('q2-text');
  qEl.style.opacity='0';qEl.style.transform='translateY(10px)';
  setTimeout(()=>{qEl.textContent=q.fr;qEl.style.transition='opacity .3s,transform .3s';qEl.style.opacity='1';qEl.style.transform='translateY(0)';},50);
  const inp=document.getElementById('ans2');inp.value='';inp.disabled=false;inp.className='answer-input';
  document.getElementById('lf2').style.display='none';document.getElementById('lf2').innerHTML='';
  document.getElementById('sub2').textContent='Vérifier ✓';document.getElementById('sub2').className='action-btn';
  document.getElementById('skip2').style.display='inline-flex';
  document.getElementById('fb2').style.display='none';document.getElementById('fb2').className='feedback';
  updateStreak2();setTimeout(()=>inp.focus(),80);
}
function checkL2(){
  if(st.l2.state==="feedback"){nextL2();return;}
  const inp=document.getElementById('ans2');const ua=inp.value.trim();if(!ua)return;
  const q=st.l2.qs[st.l2.i];const ok=q.en.some(a=>norm(a)===norm(ua));
  if(ok){
    st.l2.score++;st.l2.streak++;if(st.l2.streak>st.l2.maxStreak)st.l2.maxStreak=st.l2.streak;
    if(st.soundL2)SFX.play('correct');
    st.l2.state="feedback";inp.disabled=true;document.getElementById('sub2').textContent='Continuer →';
    document.getElementById('skip2').style.display='none';document.getElementById('lf2').style.display='none';
    const fb=document.getElementById('fb2');fb.className='feedback correct';
    document.getElementById('fb2-msg').textContent='✅ Parfait!'+(st.l2.streak>=3?' 🔥 Combo ×'+st.l2.streak+' !':'');
    document.getElementById('fb2-cor').textContent='';fb.style.display='block';
  }else{
    st.l2.streak=0;if(st.soundL2)SFX.play('wrong');
    inp.classList.add('shake');setTimeout(()=>inp.classList.remove('shake'),400);
    const fb=document.getElementById('fb2');fb.className='feedback incorrect';
    document.getElementById('fb2-msg').textContent='❌ Pas tout à fait, essaie encore !';
    document.getElementById('fb2-cor').textContent='';fb.style.display='block';inp.focus();
  }
  document.getElementById('s2').textContent=st.l2.score;updateStreak2();
}
function skipL2(){
  if(st.l2.state==="feedback")return;
  const q=st.l2.qs[st.l2.i];const inp=document.getElementById('ans2');
  st.l2.streak=0;st.l2.skipped++;st.l2.state="feedback";inp.value=q.en[0];inp.disabled=true;
  document.getElementById('sub2').textContent='Continuer →';
  document.getElementById('skip2').style.display='none';document.getElementById('lf2').style.display='none';
  const fb=document.getElementById('fb2');fb.className='feedback incorrect';
  document.getElementById('fb2-msg').textContent='⏭️ Question passée.';
  document.getElementById('fb2-cor').textContent='Réponse : '+q.en[0];fb.style.display='block';
  document.getElementById('s2').textContent=st.l2.score;updateStreak2();
}
function nextL2(){st.l2.i++;if(st.l2.i<st.l2.qs.length)loadL2();else showEnd();}
function updateStreak2(){
  const el=document.getElementById('streak2');if(!el)return;
  if(st.l2.streak>=2){el.textContent='🔥 ×'+st.l2.streak;el.style.display='inline-block';el.className='streak-badge';void el.offsetWidth;el.className='streak-badge active';}else{el.style.display='none';}
}
function showEnd(){
  if(st.soundL2)SFX.play('complete');
  document.getElementById('level2-screen').style.display='none';
  document.getElementById('end-screen').style.display='block';
  const tot=st.l1.qs.length+st.l2.qs.length;
  const total=st.l1.score+st.l2.score;
  const pct=Math.round(total/tot*100);
  const grade=pct===100?'🏆 PARFAIT !':pct>=90?'⭐⭐⭐ Excellent !':pct>=70?'⭐⭐ Bien joué !':pct>=50?'⭐ Continue !':'📚 Révise encore.';
  document.getElementById('end-grade').textContent=grade;
  document.getElementById('end-s1').textContent=st.l1.score+'/'+st.l1.qs.length;
  document.getElementById('end-s2').textContent=st.l2.score+'/'+st.l2.qs.length;
  document.getElementById('end-tot').textContent=pct+'%';
  if(typeof updateLessonStat==='function')updateLessonStat('prepositions-1',total,tot);
}

// Live feedback L2
(function(){
  const inp=document.getElementById('ans2');if(!inp)return;
  inp.addEventListener('input',function(){
    if(st.l2.state!=="typing")return;const ut=this.value;const q=st.l2.qs[st.l2.i];const lb=document.getElementById('lf2');
    if(!q||!ut){lb.style.display='none';lb.innerHTML='';return;}lb.style.display='block';
    let best=q.en[0],max=-1;
    for(const t of q.en){let m=0;for(let i=0;i<Math.min(ut.length,t.length);i++){if(ut[i].toLowerCase()===t[i].toLowerCase())m++;else break;}if(m>max){max=m;best=t;}}
    let html='';for(let i=0;i<ut.length;i++){const ch=ut[i]===' '?'&nbsp;':esc(ut[i]);const ok=i<best.length&&ut[i].toLowerCase()===best[i].toLowerCase();html+=ok?'<span class="char-correct">'+ch+'</span>':'<span class="char-incorrect">'+ch+'</span>';}
    lb.innerHTML=html;
  });
  inp.addEventListener('keypress',e=>{if(e.key==='Enter')checkL2();});
})();

initL1();
</script>
</body>
</html>`;

// ============================================================
// Write all files
// ============================================================
Object.entries(files).forEach(([name, content]) => {
    fs.writeFileSync(base + '/' + name, content, 'utf8');
    console.log('OK: ' + name);
});
console.log('All files created!');
