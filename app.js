const STATS_KEY = 'eng-hub-stats';
function getStats() { try { return JSON.parse(localStorage.getItem(STATS_KEY)) || {}; } catch(e) { return {}; } }
function saveStats(s) { localStorage.setItem(STATS_KEY, JSON.stringify(s)); }

const FAV_KEY = 'eng-hub-favs';
function getFavs() { try { return JSON.parse(localStorage.getItem(FAV_KEY)) || {}; } catch(e) { return {}; } }
function saveFavs(f) { localStorage.setItem(FAV_KEY, JSON.stringify(f)); }
function getFavLesson() {
    const qs=Object.values(getFavs()); if(!qs.length)return null;
    return {id:'favorites',title:'Mes Favoris',subtitle:qs.length+' phrase'+(qs.length>1?'s':'')+' likée'+(qs.length>1?'s':''),icon:'❤️',color:'#e11d48',questions:qs,questionCount:qs.length};
}
function updateLessonStat(id, score, total) {
    const s = getStats(); if (!s[id]) s[id] = {bestScore:0, attempts:0};
    const p = Math.round(score/total*100); if (p > s[id].bestScore) s[id].bestScore = p;
    s[id].attempts++; saveStats(s);
}
function renderLessons() {
    const grid = document.getElementById('lessons-grid'); if (!grid) return;
    const stats = getStats();
    const fl = getFavLesson();
    const favCard = fl ? '<div class="lesson-card fav-card" onclick="location.href=\'quiz.html?lesson=favorites\'" style="--card-color:#e11d48"><div class="lesson-icon">❤️</div><div class="lesson-info"><h3>Mes Favoris</h3><p>' + fl.subtitle + '</p></div><div class="lesson-arrow">→</div></div>' : '';
    grid.innerHTML = favCard + Object.values(LESSONS).filter(l => !l.hidden).map(lesson => {
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
}