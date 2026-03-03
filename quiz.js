const SoundFX = {
    ctx:null, _init(){ if(!this.ctx) this.ctx=new(window.AudioContext||window.webkitAudioContext)(); },
    play(type){ try{ this._init(); const ctx=this.ctx;
        if(type==='correct'){ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.frequency.setValueAtTime(523.25,ctx.currentTime); o.frequency.setValueAtTime(783.99,ctx.currentTime+0.12); g.gain.setValueAtTime(0.25,ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.45); o.start();o.stop(ctx.currentTime+0.45); }
        else if(type==='wrong'){ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.type='sawtooth'; o.frequency.setValueAtTime(220,ctx.currentTime); g.gain.setValueAtTime(0.15,ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3); o.start();o.stop(ctx.currentTime+0.3); }
        else if(type==='complete'){ [523.25,659.25,783.99,1046.5].forEach((f,i)=>{ const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination); o.frequency.value=f; const t=ctx.currentTime+i*0.13; g.gain.setValueAtTime(0.2,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.4); o.start(t);o.stop(t+0.4); }); }
    }catch(e){} }
};
const STRUCTURE_HELP={
  1:{
    name:"Would — Volonté & Désir",color:"#3b82f6",
    pattern:"Sujet + <strong>would</strong> + like / prefer / love + <em>to</em> + verbe",
    example:{fr:"Je voudrais un café.",en:"I <strong>would like</strong> a coffee."},
    tip:"Utilise <strong>would like / prefer / love</strong> pour exprimer un souhait poli ou une préférence.",
    errorHint:"Vérifie : <strong>would + like/prefer/love</strong>. Pour les questions, inverse : <strong>Would you…?</strong> N'oublie pas le <em>to</em> devant l'infinitif !",
    why:"On utilise <strong>would</strong> car c'est le conditionnel de politesse — il transforme un désir direct (<em>I want</em>) en souhait poli et atténué. C'est comme dire <em>\"je voudrais\"</em> plutôt que <em>\"je veux\"</em>.",
    audio:"Quand tu entends <strong>would like / would prefer</strong>, pense directement à <em>\"j'aimerais / je préférerais\"</em>. C'est plus doux et plus poli que <em>want</em>.",
    altModal:{word:"could",sentence:"She <strong>could</strong> stay at home.",fr:"Elle <strong>pourrait</strong> rester à la maison.",note:"On parlerait d'une possibilité ou d'une capacité — plus une préférence."}
  },
  2:{
    name:"Could — Politesse & Demande",color:"#8b5cf6",
    pattern:"<strong>Could</strong> + sujet + verbe ? &nbsp;·&nbsp; Sujet + <strong>could</strong> + verbe",
    example:{fr:"Pourriez-vous m'aider ?",en:"<strong>Could</strong> you help me?"},
    tip:"Utilise <strong>could</strong> pour faire une demande polie ou exprimer une possibilité.",
    errorHint:"Pour les questions, pense à l'inversion : <strong>Could + sujet + verbe ?</strong> Le sujet vient <em>après</em> could.",
    why:"On utilise <strong>could</strong> (passé de <em>can</em>) au conditionnel pour adoucir la demande. <em>\"Can you…?\"</em> est direct, parfois sec. <em>\"Could you…?\"</em> est beaucoup plus respectueux et poli.",
    audio:"Quand tu entends <strong>Could you…?</strong>, pense à <em>\"Pourriez-vous… / Est-ce que tu pourrais…\"</em>. C'est la formule de demande polie par excellence en anglais.",
    altModal:{word:"would",sentence:"<strong>Would</strong> you close the window?",fr:"<strong>Voudriez-vous</strong> fermer la fenêtre ?",note:"Ça exprime davantage un souhait qu'une demande d'action concrète."}
  },
  3:{
    name:"Should have — Regret",color:"#f59e0b",
    pattern:"Sujet + <strong>should have</strong> + participe passé",
    example:{fr:"J'aurais dû étudier.",en:"I <strong>should have</strong> studied."},
    tip:"Utilise <strong>should have + participe passé</strong> pour exprimer un regret sur quelque chose qui ne s'est pas passé.",
    errorHint:"N'oublie pas le <strong>have</strong> après <em>should</em> ! Et vérifie le participe passé (studied, taken, called…).",
    why:"On utilise <strong>should have + participe passé</strong> car c'est la seule façon d'exprimer un regret passé en anglais. Le <em>have</em> est obligatoire — il indique qu'on parle d'une action qui aurait dû se faire dans le passé.",
    audio:"Quand tu entends <strong>should have…</strong>, pense directement à <em>\"j'aurais dû…\"</em>. C'est toujours un regret — quelque chose qui ne s'est pas passé mais qui aurait dû.",
    altModal:{word:"could have",sentence:"We <strong>could have</strong> taken an umbrella.",fr:"On <strong>aurait pu</strong> prendre un parapluie.",note:"On parlerait d'une possibilité passée — sans le sentiment de regret ou d'obligation."}
  },
  4:{
    name:"Present Perfect",color:"#10b981",
    pattern:"Sujet + <strong>have / has</strong> + participe passé",
    example:{fr:"J'ai mangé.",en:"I <strong>have</strong> eat<strong>en</strong>."},
    tip:"Utilise <strong>have/has + PP</strong> pour une action passée liée au présent. <em>have</em> avec I/you/we/they, <em>has</em> avec he/she/it.",
    errorHint:"N'oublie pas <strong>have/has</strong> avant le PP ! Et vérifie la forme PP — <em>eaten</em> et non <em>ate</em>.",
    why:"On utilise <strong>have/has + PP</strong> car l'action passée a un lien avec le présent — différent du simple past qui parle d'un moment précis et terminé.",
    audio:"Quand tu entends <strong>have/has + PP</strong>, pense à <em>\"j'ai mangé / elle a fini\"</em> — mais avec l'idée que ça touche encore le présent.",
    altModal:{word:"simple past",sentence:"I <strong>ate</strong> yesterday.",fr:"J'ai mangé <em>hier</em>.",note:"Simple past = action passée à un moment précis et terminé, souvent avec une date ou heure."}
  },
  5:{
    name:"Past Perfect — Plus-que-parfait",color:"#6366f1",
    pattern:"Sujet + <strong>had</strong> + participe passé",
    example:{fr:"Il avait déjà mangé.",en:"He <strong>had</strong> already eat<strong>en</strong>."},
    tip:"Utilise <strong>had + PP</strong> pour une action qui s'est passée AVANT une autre action passée.",
    errorHint:"N'oublie pas <strong>had</strong> (pas <em>have</em> !) avant le PP. <em>had</em> ne change pas avec he/she/it.",
    why:"On utilise <strong>had + PP</strong> pour remonter encore plus loin dans le passé — montrer qu'une action est arrivée avant une autre action passée.",
    audio:"Quand tu entends <strong>had + PP</strong>, pense à <em>\"il avait déjà mangé quand je suis arrivé\"</em> — c'est le plus-que-parfait.",
    altModal:{word:"present perfect",sentence:"He <strong>has</strong> already eaten.",fr:"Il <strong>a</strong> déjà mangé <em>(lié au présent)</em>.",note:"Present perfect = lien avec le présent. Past perfect = action encore plus ancienne."}
  },
  6:{
    name:"Modal + have — Regret · Possibilité · Certitude",color:"#f59e0b",
    pattern:"Sujet + <strong>should / could / must / would</strong> + have + participe passé",
    example:{fr:"J'aurais dû appeler.",en:"I <strong>should have</strong> call<strong>ed</strong>."},
    tip:"Utilise <strong>modal + have + PP</strong> pour un regret (should), une possibilité (could) ou une certitude (must) sur le passé.",
    errorHint:"N'oublie pas le <strong>have</strong> entre le modal et le PP ! Sans lui, tu parles du présent, pas du passé.",
    why:"Le <strong>have</strong> est obligatoire — c'est lui qui indique qu'on parle du passé. Sans lui, la phrase parlerait du présent ou du futur.",
    audio:"Quand tu entends <strong>should have / could have / must have</strong>, pense à <em>\"j'aurais dû / j'aurais pu / il a dû\"</em>.",
    altModal:{word:"should (sans have)",sentence:"You <strong>should</strong> call.",fr:"Tu <strong>devrais</strong> appeler.",note:"Sans <em>have</em>, on parle du présent ou du futur — pas du passé."}
  },
  7:{
    name:"Voix passive",color:"#ec4899",
    pattern:"Sujet + <strong>be</strong> (conjugué) + participe passé",
    example:{fr:"La fenêtre a été cassée.",en:"The window <strong>was</strong> brok<strong>en</strong>."},
    tip:"Utilise <strong>be + PP</strong> quand on s'intéresse à l'objet qui subit l'action, pas à celui qui l'effectue.",
    errorHint:"Vérifie que tu as bien conjugué <strong>be</strong> (is/are/was/were) et que le PP est correct.",
    why:"La voix passive met en avant le résultat plutôt que l'acteur. <em>\"The window was broken\"</em> = la fenêtre a subi l'action — peu importe qui l'a cassée.",
    audio:"Quand tu entends <strong>was/were + PP</strong>, pense à <em>\"a été + PP\"</em> en français — c'est la voix passive.",
    altModal:{word:"voix active",sentence:"Someone <strong>broke</strong> the window.",fr:"Quelqu'un <strong>a cassé</strong> la fenêtre.",note:"Voix active = on met en avant QUI fait l'action."}
  }
};
const quiz={lesson:null,questions:[],currentIndex:0,score:0,streak:0,maxStreak:0,skipped:0,state:"typing",soundEnabled:true,hadError:false};
function normalizeText(t){ return t.toLowerCase().replace(/[.,?!]/g,'').replace(/\s+/g,' ').trim(); }
function buildVariantHTML(q, usedAnswer){
    if(!q.en||q.en.length<=1||!q.variantNote)return'';
    const others=usedAnswer?q.en.filter(a=>normalizeText(a)!==normalizeText(usedAnswer)):q.en.slice(1);
    if(!others.length)return'';
    const list=others.map(a=>`<span class="variant-phrase">"${a}"</span>`).join(' ou ');
    return`<div class="variant-also">Tu aurais aussi pu dire : ${list}</div><div class="variant-diff">${q.variantNote}</div>`;
}
function buildExplainHTML(q){
    if(!q||!q.structure)return'';
    const sh=STRUCTURE_HELP[q.structure];if(!sh)return'';
    let html='<div class="explain-panel">';
    html+=`<div class="explain-row"><div class="explain-icon">❓</div><div><div class="explain-label">Pourquoi cette structure ?</div><div class="explain-body">${sh.why}</div></div></div>`;
    html+=`<div class="explain-row"><div class="explain-icon">👂</div><div><div class="explain-label">À l'oreille</div><div class="explain-body">${sh.audio}</div></div></div>`;
    if(sh.altModal){
        let altEn=sh.altModal.sentence,altFr=sh.altModal.fr;
        if(q.structure===3&&q.en&&q.en[0]){
            const dynEn=q.en[0]
                .replace(/shouldn't have/gi,'<strong>couldn\'t have</strong>')
                .replace(/should not have/gi,'<strong>could not have</strong>')
                .replace(/should have/gi,'<strong>could have</strong>');
            if(dynEn!==q.en[0]){
                altEn=dynEn;
                altFr=q.fr
                    .replace(/n'aurais pas dû/gi,'<strong>n\'aurais pas pu</strong>')
                    .replace(/n'aurait pas dû/gi,'<strong>n\'aurait pas pu</strong>')
                    .replace(/aurions dû/gi,'<strong>aurions pu</strong>')
                    .replace(/aurait dû/gi,'<strong>aurait pu</strong>')
                    .replace(/aurais dû/gi,'<strong>aurais pu</strong>')
                    .replace(/auraient dû/gi,'<strong>auraient pu</strong>');
            }
        }
        html+=`<div class="explain-row"><div class="explain-icon">🔄</div><div><div class="explain-label">Avec <em>${sh.altModal.word}</em> à la place ?</div><div class="explain-body"><span class="explain-alt-en">${altEn}</span>&ensp;→&ensp;<span class="explain-alt-fr">${altFr}</span><br><span class="explain-alt-note">${sh.altModal.note}</span></div></div></div>`;
    }
    html+='</div>';
    return html;
}
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
    const fvr=document.getElementById('feedback-variants');if(fvr)fvr.innerHTML='';
    const fer=document.getElementById('feedback-explain');if(fer)fer.innerHTML='';
    quiz.hadError=false;
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
        const fv1=document.getElementById('feedback-variants');if(fv1)fv1.innerHTML=buildVariantHTML(q,ua);
        const fe1=document.getElementById('feedback-explain');if(fe1)fe1.innerHTML=buildExplainHTML(q);
    }else{
        quiz.streak=0;quiz.hadError=true;if(quiz.soundEnabled)SoundFX.play('wrong');
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
    const fv2=document.getElementById('feedback-variants');if(fv2)fv2.innerHTML=buildVariantHTML(q,null);
    const fe2=document.getElementById('feedback-explain');if(fe2)fe2.innerHTML=buildExplainHTML(q);
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
function openHelp(){
    const box=document.getElementById('help-modal-box');
    const q=quiz.questions&&quiz.questions[quiz.currentIndex];
    const sh=q&&q.structure?STRUCTURE_HELP[q.structure]:null;
    let html='';
    if(sh){
        html+=`<div class="help-struct-header" style="color:${sh.color}">💡 ${sh.name}</div>`;
        if(quiz.hadError){
            html+=`<div class="help-hint-box error">Tu t'es trompé(e) sur cette question :<br>${sh.errorHint}</div>`;
        }else{
            html+=`<div class="help-hint-box">${sh.tip}</div>`;
        }
        html+=`<div class="help-pattern-block"><div class="help-label">Structure</div><div class="help-pattern">${sh.pattern}</div></div>`;
        html+=`<div class="help-example-block">`;
        html+=`<div class="help-ex-row"><span class="help-flag">🇫🇷</span><span>${sh.example.fr}</span></div>`;
        html+=`<div class="help-ex-row"><span class="help-flag">🇬🇧</span><span>${sh.example.en}</span></div>`;
        html+=`</div>`;
    }else{
        html+=`<h3>💡 Comment jouer</h3><ul>`;
        html+=`<li><strong>Tape</strong> la traduction anglaise et appuie sur <strong>Entrée</strong></li>`;
        html+=`<li>La coloration <strong style="color:#4ade80">verte/rouge</strong> t'indique si tu es sur la bonne voie</li>`;
        html+=`<li>Tu peux avoir plusieurs essais avant de passer</li>`;
        html+=`<li><strong>⏭️ Passer</strong> révèle la réponse mais ne compte pas de point</li>`;
        html+=`</ul>`;
    }
    html+=`<button class="modal-close" onclick="closeHelp()">Fermer</button>`;
    box.innerHTML=html;
    document.getElementById('help-modal').style.display='flex';
}
function closeHelp(e){if(e)e.stopPropagation();document.getElementById('help-modal').style.display='none';if(quiz.state==="typing")setTimeout(()=>document.getElementById('answer-input')?.focus(),80);}

const IRREG_VERBS=[
    ["be","been","être"],["become","become","devenir"],["begin","begun","commencer"],
    ["break","broken","casser"],["bring","brought","apporter"],["build","built","construire"],
    ["buy","bought","acheter"],["catch","caught","attraper"],["choose","chosen","choisir"],
    ["come","come","venir"],["cut","cut","couper"],["do","done","faire"],
    ["draw","drawn","dessiner"],["drink","drunk","boire"],["drive","driven","conduire"],
    ["eat","eaten","manger"],["fall","fallen","tomber"],["feel","felt","ressentir"],
    ["find","found","trouver"],["fly","flown","voler"],["forget","forgotten","oublier"],
    ["get","got","obtenir"],["give","given","donner"],["go","gone","aller"],
    ["grow","grown","grandir/pousser"],["have","had","avoir"],["hear","heard","entendre"],
    ["hold","held","tenir"],["keep","kept","garder"],["know","known","savoir/connaître"],
    ["leave","left","partir/laisser"],["lend","lent","prêter"],["lose","lost","perdre"],
    ["make","made","faire/fabriquer"],["meet","met","rencontrer"],["pay","paid","payer"],
    ["put","put","mettre"],["read","read","lire"],["ride","ridden","vélo/cheval"],
    ["run","run","courir"],["say","said","dire"],["see","seen","voir"],
    ["sell","sold","vendre"],["send","sent","envoyer"],["show","shown","montrer"],
    ["sing","sung","chanter"],["sit","sat","s'asseoir"],["sleep","slept","dormir"],
    ["speak","spoken","parler"],["spend","spent","dépenser/passer"],["stand","stood","se lever"],
    ["swim","swum","nager"],["take","taken","prendre"],["teach","taught","enseigner"],
    ["tell","told","dire/raconter"],["think","thought","penser"],["throw","thrown","lancer"],
    ["understand","understood","comprendre"],["wake","woken","réveiller"],
    ["wear","worn","porter"],["win","won","gagner"],["write","written","écrire"]
];
function openIrreg(){
    const box=document.getElementById('irreg-modal-box');
    let html='<div class="irreg-title">📚 Verbes irréguliers</div>';
    html+='<p class="irreg-subtitle">Participe passé — utilisé après <em>should have</em>, <em>could have</em>, <em>have</em>…</p>';
    html+='<div class="irreg-rule"><strong>Règle générale — verbes réguliers :</strong> base + <strong>-ed</strong><div class="irreg-rule-ex">work → work<strong>ed</strong> &nbsp;·&nbsp; call → call<strong>ed</strong> &nbsp;·&nbsp; study → studi<strong>ed</strong></div></div>';
    html+='<div class="irreg-section-label">Verbes irréguliers à connaître</div>';
    html+='<div class="irreg-cols-head"><span>Infinitif</span><span>Part. passé</span><span>Sens</span></div>';
    html+='<div class="irreg-list">';
    for(const[b,pp,fr]of IRREG_VERBS){html+=`<div class="irreg-row"><span class="irreg-base">${b}</span><span class="irreg-pp">${pp}</span><span class="irreg-fr">${fr}</span></div>`;}
    html+='</div><button class="modal-close" onclick="closeIrreg()">Fermer</button>';
    box.innerHTML=html;
    document.getElementById('irreg-modal').style.display='flex';
}
function closeIrreg(e){if(e)e.stopPropagation();document.getElementById('irreg-modal').style.display='none';}
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
})();