// js/app.js — Utilitaires partagés + rendu de la page d'accueil

const STATS_KEY = 'eng-hub-stats';

function getStats() {
    try {
        return JSON.parse(localStorage.getItem(STATS_KEY)) || {};
    } catch (e) {
        return {};
    }
}

function saveStats(stats) {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

// Appelé depuis quiz.js à la fin d'une session
function updateLessonStat(lessonId, score, total) {
    const stats = getStats();
    if (!stats[lessonId]) stats[lessonId] = { bestScore: 0, attempts: 0 };
    const pct = Math.round((score / total) * 100);
    if (pct > stats[lessonId].bestScore) stats[lessonId].bestScore = pct;
    stats[lessonId].attempts++;
    saveStats(stats);
}

// ─── Rendu Homepage ───────────────────────────────────────────────────────────

function renderLessons() {
    const grid = document.getElementById('lessons-grid');
    if (!grid) return;

    const stats = getStats();

    const lessonCards = Object.values(LESSONS).map(lesson => {
        // Destination : page théorie ou quiz selon le module
        const href = lesson.theoryPage
            ? `pages/${lesson.theoryPage}`
            : `pages/quiz.html?lesson=${lesson.id}`;

        const s        = stats[lesson.id];
        const best     = s ? s.bestScore : null;
        const attempts = s ? s.attempts : 0;

        // Badge type (Théorie / Quiz / Théorie + Quiz)
        let typeBadge = '';
        if (lesson.theoryPage && !lesson.hasQuiz) {
            typeBadge = `<span class="lesson-type-badge theory-badge">📖 Théorie</span>`;
        } else if (lesson.theoryPage && lesson.hasQuiz) {
            typeBadge = `<span class="lesson-type-badge">📖 + ✏️</span>`;
        }

        // Stats quiz (uniquement si le module a un quiz)
        let starsHtml = '';
        if (lesson.hasQuiz || (!lesson.theoryPage)) {
            if (best !== null) {
                const stars = best >= 90 ? '⭐⭐⭐' : best >= 70 ? '⭐⭐' : '⭐';
                starsHtml = `
                    <div class="lesson-stats">
                        <span class="stars">${stars}</span>
                        <span class="best-score">${best}%</span>
                        <span class="attempts">${attempts} essai${attempts > 1 ? 's' : ''}</span>
                    </div>`;
            } else {
                starsHtml = `<div class="lesson-stats"><span class="not-done">Jamais fait</span></div>`;
            }
        }

        const metaText = lesson.questionCount
            ? `${lesson.questionCount} phrases`
            : 'Nouvelle leçon';

        return `
            <div class="lesson-card" onclick="window.location.href='${href}'" style="--card-color:${lesson.color}">
                <div class="lesson-icon">${lesson.icon}</div>
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <p>${lesson.subtitle}</p>
                    <span class="lesson-meta">${metaText} ${typeBadge}</span>
                </div>
                ${starsHtml}
                <div class="lesson-arrow">→</div>
            </div>`;
    }).join('');

    // Cartes "bientôt disponible"
    const comingSoon = `
        <div class="lesson-card coming-soon">
            <div class="lesson-icon">🔒</div>
            <div class="lesson-info">
                <h3>Bientôt disponible</h3>
                <p>Les temps du passé</p>
                <span class="lesson-meta">? phrases</span>
            </div>
        </div>
        <div class="lesson-card coming-soon">
            <div class="lesson-icon">🔒</div>
            <div class="lesson-info">
                <h3>Bientôt disponible</h3>
                <p>Vocabulaire avancé</p>
                <span class="lesson-meta">? phrases</span>
            </div>
        </div>`;

    grid.innerHTML = lessonCards + comingSoon;
}

function renderStats() {
    const el = document.getElementById('header-stats');
    if (!el) return;

    const stats = getStats();
    let totalAttempts = 0;
    let bestPct = 0;

    Object.values(stats).forEach(s => {
        totalAttempts += s.attempts || 0;
        if (s.bestScore > bestPct) bestPct = s.bestScore;
    });

    if (totalAttempts > 0) {
        el.innerHTML = `
            <div class="stat-pill">🏆 ${bestPct}%</div>
            <div class="stat-pill">📚 ${totalAttempts} session${totalAttempts > 1 ? 's' : ''}</div>`;
    }
}
