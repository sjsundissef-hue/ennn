// js/quiz.js — Moteur du quiz

// ─── Son (Web Audio API) ──────────────────────────────────────────────────────

const SoundFX = {
    ctx: null,
    _init() {
        if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    },
    play(type) {
        try {
            this._init();
            const ctx = this.ctx;

            if (type === 'correct') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.12);
                gain.gain.setValueAtTime(0.25, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
                osc.start(); osc.stop(ctx.currentTime + 0.45);

            } else if (type === 'wrong') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(220, ctx.currentTime);
                osc.frequency.setValueAtTime(180, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.15, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
                osc.start(); osc.stop(ctx.currentTime + 0.3);

            } else if (type === 'complete') {
                [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                    const o = ctx.createOscillator();
                    const g = ctx.createGain();
                    o.connect(g); g.connect(ctx.destination);
                    o.frequency.value = freq;
                    const t = ctx.currentTime + i * 0.13;
                    g.gain.setValueAtTime(0.2, t);
                    g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
                    o.start(t); o.stop(t + 0.4);
                });
            }
        } catch (e) { /* son désactivé silencieusement */ }
    }
};

// ─── État du quiz ─────────────────────────────────────────────────────────────

const quiz = {
    lesson: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    streak: 0,
    maxStreak: 0,
    skipped: 0,
    state: "typing",   // "typing" | "feedback"
    soundEnabled: true
};

// ─── Utilitaires ──────────────────────────────────────────────────────────────

function normalizeText(text) {
    return text.toLowerCase()
               .replace(/[.,?!]/g, '')
               .replace(/\s+/g, ' ')
               .trim();
}

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function escapeChar(ch) {
    return ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch === '&' ? '&amp;' : ch;
}

// ─── Initialisation ───────────────────────────────────────────────────────────

function initQuiz(lesson) {
    quiz.lesson      = lesson;
    quiz.questions   = shuffleArray(lesson.questions);
    quiz.currentIndex = 0;
    quiz.score       = 0;
    quiz.streak      = 0;
    quiz.maxStreak   = 0;
    quiz.skipped     = 0;
    quiz.state       = "typing";

    document.getElementById('total-display').textContent = quiz.questions.length;
    document.getElementById('total-q').textContent = quiz.questions.length;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('end-screen').style.display = 'none';

    updateScore();
    loadQuestion();
}

// ─── Chargement d'une question ────────────────────────────────────────────────

function loadQuestion() {
    quiz.state = "typing";
    const q = quiz.questions[quiz.currentIndex];

    // Progression
    document.getElementById('current-q').textContent = quiz.currentIndex + 1;
    const pct = (quiz.currentIndex / quiz.questions.length) * 100;
    document.getElementById('progress-bar-fill').style.width = pct + '%';

    // Badge de structure
    const structureNames   = { 1: "Volonté", 2: "Politesse", 3: "Regret" };
    const structureColors  = { 1: "#3b82f6", 2: "#8b5cf6",   3: "#f59e0b" };
    const badge = document.getElementById('structure-badge');
    if (q.structure) {
        badge.textContent        = `Structure ${q.structure} — ${structureNames[q.structure]}`;
        badge.style.background   = structureColors[q.structure] + '18';
        badge.style.color        = structureColors[q.structure];
        badge.style.display      = 'inline-block';
    } else {
        badge.style.display = 'none';
    }

    // Texte de la question (avec animation)
    const questionEl = document.getElementById('question-text');
    questionEl.style.opacity   = '0';
    questionEl.style.transform = 'translateY(12px)';
    setTimeout(() => {
        questionEl.textContent     = q.fr;
        questionEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        questionEl.style.opacity   = '1';
        questionEl.style.transform = 'translateY(0)';
    }, 50);

    // Reset input
    const input = document.getElementById('answer-input');
    input.value    = '';
    input.disabled = false;
    input.className = '';

    // Reset live feedback
    const liveBox = document.getElementById('live-feedback');
    liveBox.style.display = 'none';
    liveBox.innerHTML     = '';

    // Reset boutons
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Vérifier ✓';
    btn.className   = 'action-btn';

    document.getElementById('skip-btn').style.display = 'inline-flex';

    // Reset feedback box
    const fb = document.getElementById('feedback-box');
    fb.style.display = 'none';
    fb.className     = 'feedback';

    updateStreakDisplay();
    setTimeout(() => input.focus(), 80);
}

// ─── Vérification de la réponse ───────────────────────────────────────────────

function checkAnswer() {
    if (quiz.state === "feedback") {
        nextQuestion();
        return;
    }

    const input      = document.getElementById('answer-input');
    const userAnswer = input.value.trim();
    if (!userAnswer) return;

    const q          = quiz.questions[quiz.currentIndex];
    const isCorrect  = q.en.some(a => normalizeText(a) === normalizeText(userAnswer));

    const fb     = document.getElementById('feedback-box');
    const fbMsg  = document.getElementById('feedback-msg');
    const fbCorr = document.getElementById('feedback-correction');
    const btn    = document.getElementById('submit-btn');
    const liveBox = document.getElementById('live-feedback');

    if (isCorrect) {
        quiz.score++;
        quiz.streak++;
        if (quiz.streak > quiz.maxStreak) quiz.maxStreak = quiz.streak;
        if (quiz.soundEnabled) SoundFX.play('correct');

        quiz.state      = "feedback";
        input.disabled  = true;
        btn.textContent = 'Continuer →';
        document.getElementById('skip-btn').style.display = 'none';
        liveBox.style.display = 'none';

        fb.className    = 'feedback correct';
        const combo     = quiz.streak >= 3 ? `  🔥 Combo ×${quiz.streak} !` : '';
        fbMsg.textContent  = '✅ Parfait !' + combo;
        fbCorr.textContent = '';

    } else {
        quiz.streak = 0;
        if (quiz.soundEnabled) SoundFX.play('wrong');

        // Shake animation
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);

        fb.className       = 'feedback incorrect';
        fbMsg.textContent  = '❌ Pas tout à fait, essaie encore !';
        fbCorr.textContent = '';

        input.focus();
    }

    fb.style.display = 'block';
    updateScore();
    updateStreakDisplay();
}

// ─── Voir la réponse (passer) ─────────────────────────────────────────────────

function showAnswer() {
    if (quiz.state === "feedback") return;

    const q     = quiz.questions[quiz.currentIndex];
    const input = document.getElementById('answer-input');
    const fb    = document.getElementById('feedback-box');
    const btn   = document.getElementById('submit-btn');

    quiz.streak = 0;
    quiz.skipped++;
    quiz.state      = "feedback";
    input.value     = q.en[0];
    input.disabled  = true;
    btn.textContent = 'Continuer →';
    document.getElementById('skip-btn').style.display    = 'none';
    document.getElementById('live-feedback').style.display = 'none';

    fb.className = 'feedback incorrect';
    document.getElementById('feedback-msg').textContent  = '⏭️ Question passée.';
    document.getElementById('feedback-correction').textContent = 'Réponse attendue : ' + q.en[0];
    fb.style.display = 'block';

    updateScore();
    updateStreakDisplay();
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function nextQuestion() {
    quiz.currentIndex++;
    if (quiz.currentIndex < quiz.questions.length) {
        loadQuestion();
    } else {
        showEndScreen();
    }
}

// ─── Écran de fin ─────────────────────────────────────────────────────────────

function showEndScreen() {
    if (quiz.soundEnabled) SoundFX.play('complete');

    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('end-screen').style.display     = 'block';
    document.getElementById('progress-bar-fill').style.width = '100%';

    const total = quiz.questions.length;
    const pct   = Math.round((quiz.score / total) * 100);
    const grade = pct === 100 ? '🏆 PARFAIT !'
                : pct >= 90  ? '⭐⭐⭐ Excellent !'
                : pct >= 70  ? '⭐⭐ Bien joué !'
                : pct >= 50  ? '⭐ Continue !'
                :               '📚 Révise encore.';

    document.getElementById('final-grade').textContent   = grade;
    document.getElementById('final-score').textContent   = `${quiz.score} / ${total}`;
    document.getElementById('final-pct').textContent     = `${pct}%`;
    document.getElementById('final-streak').textContent  = quiz.maxStreak;
    document.getElementById('final-skipped').textContent = quiz.skipped;

    // Sauvegarde dans localStorage
    if (typeof updateLessonStat === 'function') {
        updateLessonStat(quiz.lesson.id, quiz.score, total);
    }
}

// ─── Affichage score & streak ─────────────────────────────────────────────────

function updateScore() {
    document.getElementById('score-display').textContent = quiz.score;
}

function updateStreakDisplay() {
    const el = document.getElementById('streak-display');
    if (!el) return;
    if (quiz.streak >= 2) {
        el.textContent    = `🔥 ×${quiz.streak}`;
        el.style.display  = 'inline-block';
        el.className      = 'streak-badge';
        // Re-trigger animation
        void el.offsetWidth;
        el.className      = 'streak-badge active';
    } else {
        el.style.display  = 'none';
    }
}

// ─── Modal Aide ───────────────────────────────────────────────────────────────

function openHelp() {
    document.getElementById('help-modal').style.display = 'flex';
}

function closeHelp(e) {
    if (e) e.stopPropagation();
    document.getElementById('help-modal').style.display = 'none';
    if (quiz.state === "typing") {
        setTimeout(() => document.getElementById('answer-input')?.focus(), 80);
    }
}

// ─── Son on/off ───────────────────────────────────────────────────────────────

function toggleSound() {
    quiz.soundEnabled = !quiz.soundEnabled;
    const btn = document.getElementById('sound-btn');
    btn.textContent  = quiz.soundEnabled ? '🔊' : '🔇';
    btn.style.opacity = quiz.soundEnabled ? '1' : '0.45';
}

// ─── Live Feedback (aperçu caractère par caractère) ───────────────────────────

(function attachListeners() {
    const input = document.getElementById('answer-input');
    if (!input) return;  // garde : quiz.js uniquement chargé sur quiz.html

    input.addEventListener('input', function () {
        if (quiz.state !== "typing") return;

        const userText = this.value;
        const q        = quiz.questions[quiz.currentIndex];
        const liveBox  = document.getElementById('live-feedback');

        if (!q || userText.length === 0) {
            liveBox.style.display = 'none';
            liveBox.innerHTML     = '';
            return;
        }

        liveBox.style.display = 'block';

        // Trouver la réponse valide dont le préfixe match le mieux
        let bestTarget = q.en[0];
        let maxMatches = -1;

        for (const target of q.en) {
            let m   = 0;
            const len = Math.min(userText.length, target.length);
            for (let i = 0; i < len; i++) {
                if (userText[i].toLowerCase() === target[i].toLowerCase()) m++;
                else break;
            }
            if (m > maxMatches) { maxMatches = m; bestTarget = target; }
        }

        // Rendu coloré caractère par caractère
        let html = '';
        for (let i = 0; i < userText.length; i++) {
            const ch  = userText[i] === ' ' ? '&nbsp;' : escapeChar(userText[i]);
            const ok  = i < bestTarget.length && userText[i].toLowerCase() === bestTarget[i].toLowerCase();
            html += ok
                ? `<span class="char-correct">${ch}</span>`
                : `<span class="char-incorrect">${ch}</span>`;
        }
        liveBox.innerHTML = html;
    });

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkAnswer();
    });
})();
