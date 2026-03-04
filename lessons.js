const LESSONS = {
  "structures-1": {
    id: "structures-1",
    title: "Structures Clés",
    subtitle: "Would, Could, Should",
    icon: "🏗️",
    color: "#3b82f6",
    questionCount: 25,
    theoryPage: "theory-structures.html",
    hasQuiz: true,
    questions: [
      {fr:"Je voudrais un café, s'il vous plaît.",en:["I would like a coffee, please."],structure:1},
      {fr:"Est-ce que tu voudrais venir avec nous ?",en:["Would you like to come with us?"],structure:1},
      {fr:"Il aimerait apprendre le piano.",en:["He would like to learn the piano.","He would love to learn the piano."],structure:1,variantNote:"Même sens — <em>love</em> exprime une intensité légèrement plus forte que <em>like</em>."},
      {fr:"Nous voudrions réserver une table pour ce soir.",en:["We would like to book a table for tonight.","We would like to reserve a table for tonight."],structure:1,variantNote:"Synonymes — <em>book</em> et <em>reserve</em> signifient tous les deux réserver, aucune différence de sens."},
      {fr:"Elle préférerait rester à la maison.",en:["She would prefer to stay at home.","She would rather stay at home."],structure:1,variantNote:"Même sens, construction différente — <em>would prefer + to + verbe</em>, mais <em>would rather + infinitif sans to</em>."},
      {fr:"Je veux vraiment aller à Paris un jour.",en:["I would really like to go to Paris one day.","I really want to go to Paris one day."],structure:1,variantNote:"Légère différence de registre — <em>would like</em> est plus poli et formel, <em>want</em> est plus direct et décontracté."},
      {fr:"Ils voudraient un remboursement.",en:["They would like a refund."],structure:1},
      {fr:"Est-ce que vous voudriez quelque chose à boire ?",en:["Would you like something to drink?"],structure:1},
      {fr:"J'aimerais vraiment te voir bientôt.",en:["I would really like to see you soon.","I would love to see you soon."],structure:1,variantNote:"Même sens — <em>love</em> ajoute une touche d'enthousiasme plus forte, mais les deux sont tout à fait correctes."},
      {fr:"Pourriez-vous m'aider, s'il vous plaît ?",en:["Could you help me, please?"],structure:2},
      {fr:"Est-ce que tu pourrais fermer la fenêtre ?",en:["Could you close the window?","Could you please close the window?"],structure:2,variantNote:"Aucune différence — <em>please</em> renforce simplement la politesse, il est optionnel."},
      {fr:"Serait-il possible de changer ma réservation ?",en:["Could I change my reservation?","Would it be possible to change my reservation?"],structure:2,variantNote:"<em>Could I…</em> est direct et courant. <em>Would it be possible…</em> est plus formel, souvent utilisé dans un contexte professionnel."},
      {fr:"Pourriez-vous parler plus lentement ?",en:["Could you speak more slowly?","Could you please speak more slowly?"],structure:2,variantNote:"Aucune différence — <em>please</em> est optionnel, il renforce la politesse."},
      {fr:"Est-ce que je pourrais avoir l'addition ?",en:["Could I have the bill?","Could I get the check?"],structure:2,variantNote:"Différence géographique uniquement — <em>bill</em> est anglais britannique, <em>check</em> est américain. Même sens !"},
      {fr:"Ce serait bien si tu pouvais venir.",en:["It would be nice if you could come."],structure:2},
      {fr:"Pourrait-il rappeler plus tard ?",en:["Could he call back later?"],structure:2},
      {fr:"Est-ce que tu pourrais me prêter ton stylo ?",en:["Could you lend me your pen?","Could you borrow me your pen?"],structure:2,variantNote:"<em>lend</em> = prêter (tu donnes), <em>borrow</em> = emprunter (tu reçois). Ici <em>lend me</em> est la formulation correcte — <em>Could you borrow me</em> n'est pas standard en anglais."},
      {fr:"J'aurais dû étudier plus tôt.",en:["I should have studied earlier."],structure:3},
      {fr:"Il aurait dû appeler avant de venir.",en:["He should have called before coming."],structure:3},
      {fr:"Nous aurions dû prendre un parapluie.",en:["We should have taken an umbrella.","We should have brought an umbrella."],structure:3,variantNote:"Très proches — <em>taken</em> (pris) vs <em>brought</em> (apporté/amené). <em>Brought</em> est légèrement plus naturel car on insiste sur le fait d'amener l'objet avec soi."},
      {fr:"Tu n'aurais pas dû dire ça.",en:["You should not have said that.","You shouldn't have said that."],structure:3,variantNote:"Aucune différence — <em>shouldn't</em> est la contraction de <em>should not</em>, plus courante à l'oral."},
      {fr:"Elle aurait dû partir plus tôt.",en:["She should have left earlier."],structure:3},
      {fr:"Ils auraient dû lire les instructions.",en:["They should have read the instructions."],structure:3},
      {fr:"J'aurais dû me souvenir de son anniversaire.",en:["I should have remembered her birthday.","I should have remembered his birthday."],structure:3,variantNote:"Aucune différence de sens — <em>her</em> = son (féminin), <em>his</em> = son (masculin). Dépend de la personne dont tu parles."},
      {fr:"On aurait dû réserver à l'avance.",en:["We should have booked in advance.","We should have reserved in advance."],structure:3,variantNote:"Synonymes — <em>book</em> et <em>reserve</em> signifient tous les deux réserver, aucune différence de sens."}
    ]
  },
  "pp-hub": {
    id: "pp-hub",
    title: "Participe Passé",
    subtitle: "Structures, voix passive & verbes irréguliers",
    icon: "⏪",
    color: "#10b981",
    theoryPage: "pp-hub.html",
    hasQuiz: true
  },
  "past-participle-1": {
    id: "past-participle-1", hidden: true,
    title: "Participe Passé",
    subtitle: "Formation & 4 structures essentielles",
    icon: "⏪",
    color: "#10b981",
    questionCount: 20,
    theoryPage: "theory-past-participle.html",
    hasQuiz: true,
    questions: [
      {fr:"J'ai mangé.",en:["I have eaten."],structure:4},
      {fr:"Elle a fini son travail.",en:["She has finished her work."],structure:4},
      {fr:"Il a cassé la fenêtre.",en:["He has broken the window."],structure:4},
      {fr:"Tu as oublié tes clés.",en:["You have forgotten your keys."],structure:4},
      {fr:"Nous avons pris notre décision.",en:["We have made our decision.","We have taken our decision."],structure:4,variantNote:"<em>make a decision</em> est plus naturel en anglais courant, <em>take a decision</em> est aussi correct."},
      {fr:"Il avait déjà mangé quand je suis arrivé.",en:["He had already eaten when I arrived."],structure:5},
      {fr:"Elle avait étudié toute la nuit.",en:["She had studied all night."],structure:5},
      {fr:"Nous avions déjà vu ce film.",en:["We had already seen this movie.","We had already seen this film."],structure:5,variantNote:"Aucune différence — <em>movie</em> est américain, <em>film</em> est britannique."},
      {fr:"Ils n'avaient jamais voyagé à l'étranger.",en:["They had never travelled abroad.","They had never traveled abroad."],structure:5,variantNote:"Aucune différence — <em>travelled</em> est l'orthographe britannique, <em>traveled</em> est américaine."},
      {fr:"Tu aurais dû appeler.",en:["You should have called."],structure:6},
      {fr:"Elle aurait pu venir.",en:["She could have come."],structure:6},
      {fr:"Il a dû oublier son rendez-vous.",en:["He must have forgotten his appointment."],structure:6},
      {fr:"Nous aurions pu rester.",en:["We could have stayed."],structure:6},
      {fr:"Elle aurait dû savoir.",en:["She should have known."],structure:6},
      {fr:"La fenêtre a été cassée.",en:["The window was broken."],structure:7},
      {fr:"La lettre a été envoyée.",en:["The letter was sent."],structure:7},
      {fr:"Le livre a été écrit en 1984.",en:["The book was written in 1984."],structure:7},
      {fr:"Le repas est préparé.",en:["The meal is prepared."],structure:7},
      {fr:"La décision a été prise.",en:["The decision was made.","The decision was taken."],structure:7,variantNote:"Même sens — <em>made</em> est plus courant, <em>taken</em> aussi correct."},
      {fr:"Les instructions n'ont pas été suivies.",en:["The instructions were not followed.","The instructions weren't followed."],structure:7,variantNote:"Aucune différence — <em>weren't</em> est la contraction de <em>were not</em>."}
    ]
  },
  "irreg-verbs-1": {
    id:"irreg-verbs-1",hidden:true,title:"Verbes irréguliers — Groupe 1",subtitle:"⚠️ V1 / V2 / V3 — 3 formes différentes",icon:"⚠️",color:"#f59e0b",questionCount:10,hasQuiz:true,
    questions:[
      {fr:"casser",en:["break / broke / broken"],combined:true},
      {fr:"manger",en:["eat / ate / eaten"],combined:true},
      {fr:"aller",en:["go / went / gone"],combined:true},
      {fr:"voir",en:["see / saw / seen"],combined:true},
      {fr:"prendre",en:["take / took / taken"],combined:true},
      {fr:"écrire",en:["write / wrote / written"],combined:true},
      {fr:"parler",en:["speak / spoke / spoken"],combined:true},
      {fr:"savoir / connaître",en:["know / knew / known"],combined:true},
      {fr:"donner",en:["give / gave / given"],combined:true},
      {fr:"boire",en:["drink / drank / drunk"],combined:true}
    ]
  },
  "irreg-verbs-1b": {
    id:"irreg-verbs-1b",hidden:true,title:"Verbes irréguliers — Groupe 1b",subtitle:"⚠️ V1 / V2 / V3 — 3 formes différentes",icon:"⚠️",color:"#ef4444",questionCount:20,hasQuiz:true,
    questions:[
      {fr:"être",en:["be / was / been","be / were / been"],combined:true},
      {fr:"devenir",en:["become / became / become"],combined:true},
      {fr:"commencer",en:["begin / began / begun"],combined:true},
      {fr:"choisir",en:["choose / chose / chosen"],combined:true},
      {fr:"venir",en:["come / came / come"],combined:true},
      {fr:"faire",en:["do / did / done"],combined:true},
      {fr:"dessiner",en:["draw / drew / drawn"],combined:true},
      {fr:"conduire",en:["drive / drove / driven"],combined:true},
      {fr:"tomber",en:["fall / fell / fallen"],combined:true},
      {fr:"voler",en:["fly / flew / flown"],combined:true},
      {fr:"oublier",en:["forget / forgot / forgotten"],combined:true},
      {fr:"grandir / pousser",en:["grow / grew / grown"],combined:true},
      {fr:"monter (vélo/cheval)",en:["ride / rode / ridden"],combined:true},
      {fr:"courir",en:["run / ran / run"],combined:true},
      {fr:"montrer",en:["show / showed / shown"],combined:true},
      {fr:"chanter",en:["sing / sang / sung"],combined:true},
      {fr:"nager",en:["swim / swam / swum"],combined:true},
      {fr:"lancer",en:["throw / threw / thrown"],combined:true},
      {fr:"réveiller",en:["wake / woke / woken"],combined:true},
      {fr:"porter",en:["wear / wore / worn"],combined:true}
    ]
  },
  "irreg-verbs-2": {
    id:"irreg-verbs-2",hidden:true,title:"Verbes irréguliers — Groupe 2",subtitle:"✅ V2 = V3 — passé simple = participe passé",icon:"🟩",color:"#10b981",questionCount:20,hasQuiz:true,
    questions:[
      {fr:"apporter",en:["bring / brought / brought"],combined:true},
      {fr:"construire",en:["build / built / built"],combined:true},
      {fr:"acheter",en:["buy / bought / bought"],combined:true},
      {fr:"attraper",en:["catch / caught / caught"],combined:true},
      {fr:"ressentir",en:["feel / felt / felt"],combined:true},
      {fr:"trouver",en:["find / found / found"],combined:true},
      {fr:"avoir",en:["have / had / had"],combined:true},
      {fr:"entendre",en:["hear / heard / heard"],combined:true},
      {fr:"garder",en:["keep / kept / kept"],combined:true},
      {fr:"partir / laisser",en:["leave / left / left"],combined:true},
      {fr:"perdre",en:["lose / lost / lost"],combined:true},
      {fr:"faire / fabriquer",en:["make / made / made"],combined:true},
      {fr:"rencontrer",en:["meet / met / met"],combined:true},
      {fr:"payer",en:["pay / paid / paid"],combined:true},
      {fr:"dire",en:["say / said / said"],combined:true},
      {fr:"vendre",en:["sell / sold / sold"],combined:true},
      {fr:"envoyer",en:["send / sent / sent"],combined:true},
      {fr:"dire / raconter",en:["tell / told / told"],combined:true},
      {fr:"penser",en:["think / thought / thought"],combined:true},
      {fr:"gagner",en:["win / won / won"],combined:true}
    ]
  },
  "irreg-verbs-2b": {
    id:"irreg-verbs-2b",hidden:true,title:"Verbes irréguliers — Groupe 2b",subtitle:"✅ V2 = V3 — passé simple = participe passé",icon:"🟩",color:"#059669",questionCount:10,hasQuiz:true,
    questions:[
      {fr:"obtenir",en:["get / got / got"],combined:true},
      {fr:"tenir",en:["hold / held / held"],combined:true},
      {fr:"prêter",en:["lend / lent / lent"],combined:true},
      {fr:"lire",en:["read / read / read"],combined:true},
      {fr:"s'asseoir",en:["sit / sat / sat"],combined:true},
      {fr:"dormir",en:["sleep / slept / slept"],combined:true},
      {fr:"dépenser / passer",en:["spend / spent / spent"],combined:true},
      {fr:"se lever / rester debout",en:["stand / stood / stood"],combined:true},
      {fr:"enseigner",en:["teach / taught / taught"],combined:true},
      {fr:"comprendre",en:["understand / understood / understood"],combined:true}
    ]
  },
  "irreg-verbs-3": {
    id:"irreg-verbs-3",hidden:true,title:"Verbes irréguliers — Groupe 3",subtitle:"🟢 V1 = V2 = V3 — 3 formes identiques",icon:"🟢",color:"#22c55e",questionCount:5,hasQuiz:true,
    questions:[
      {fr:"couper",en:["cut / cut / cut"],combined:true},
      {fr:"laisser / permettre",en:["let / let / let"],combined:true},
      {fr:"mettre",en:["put / put / put"],combined:true},
      {fr:"régler / poser",en:["set / set / set"],combined:true},
      {fr:"fermer",en:["shut / shut / shut"],combined:true}
    ]
  },
  "pp-present-perfect": {
    id:"pp-present-perfect",hidden:true,title:"Present Perfect",subtitle:"have / has + participe passé",icon:"✅",color:"#10b981",questionCount:12,theoryPage:"theory-pp-present-perfect.html",hasQuiz:true,
    questions:[
      {fr:"Je n'ai jamais mangé de sushis.",en:["I have never eaten sushi."],structure:4},
      {fr:"Elle a déjà visité Paris.",en:["She has already visited Paris."],structure:4},
      {fr:"Il a perdu ses clés.",en:["He has lost his keys."],structure:4},
      {fr:"Nous avons terminé le projet.",en:["We have finished the project."],structure:4},
      {fr:"Tu n'as pas encore appelé.",en:["You have not called yet.","You haven't called yet."],structure:4,variantNote:"Aucune différence — <em>haven't</em> est la contraction de <em>have not</em>."},
      {fr:"Ils ont déjà vu ce film.",en:["They have already seen this movie.","They have already seen this film."],structure:4,variantNote:"Aucune différence — <em>movie</em> est américain, <em>film</em> est britannique."},
      {fr:"Elle a écrit trois livres.",en:["She has written three books."],structure:4},
      {fr:"J'ai cassé mon téléphone.",en:["I have broken my phone."],structure:4},
      {fr:"Il a conduit toute la nuit.",en:["He has driven all night."],structure:4},
      {fr:"Elle a rencontré quelqu'un.",en:["She has met someone."],structure:4},
      {fr:"Ils ont construit une maison.",en:["They have built a house."],structure:4},
      {fr:"J'ai pris ma décision.",en:["I have made my decision.","I have taken my decision."],structure:4,variantNote:"<em>make a decision</em> est plus naturel en anglais, <em>take a decision</em> est aussi accepté."}
    ]
  },
  "pp-past-perfect": {
    id:"pp-past-perfect",hidden:true,title:"Past Perfect",subtitle:"had + participe passé — plus-que-parfait",icon:"⏮️",color:"#6366f1",questionCount:10,theoryPage:"theory-pp-past-perfect.html",hasQuiz:true,
    questions:[
      {fr:"Il avait déjà mangé quand je suis arrivé.",en:["He had already eaten when I arrived."],structure:5},
      {fr:"Elle n'avait jamais conduit avant.",en:["She had never driven before."],structure:5},
      {fr:"Ils avaient tout vendu avant notre arrivée.",en:["They had sold everything before we arrived."],structure:5},
      {fr:"J'avais déjà vu ce film.",en:["I had already seen this movie.","I had already seen this film."],structure:5,variantNote:"Aucune différence — <em>movie</em> est américain, <em>film</em> est britannique."},
      {fr:"Il avait oublié son mot de passe.",en:["He had forgotten his password."],structure:5},
      {fr:"Nous avions fini avant midi.",en:["We had finished before noon."],structure:5},
      {fr:"Elle avait parlé au directeur.",en:["She had spoken to the manager.","She had spoken to the director."],structure:5,variantNote:"Même sens — <em>manager</em> est plus courant en anglais professionnel, <em>director</em> aussi correct."},
      {fr:"Tu avais pris le mauvais train.",en:["You had taken the wrong train."],structure:5},
      {fr:"Ils n'avaient jamais entendu ce nom.",en:["They had never heard that name.","They had never heard this name."],structure:5,variantNote:"Aucune différence de sens — <em>that</em> ou <em>this</em> fonctionnent tous les deux."},
      {fr:"J'avais perdu mes notes.",en:["I had lost my notes."],structure:5}
    ]
  },
  "pp-modal-have": {
    id:"pp-modal-have",hidden:true,title:"Modal + have",subtitle:"should / could / must + have + PP",icon:"🎯",color:"#f59e0b",questionCount:10,theoryPage:"theory-pp-modal-have.html",hasQuiz:true,
    questions:[
      {fr:"J'aurais dû rester à la maison.",en:["I should have stayed at home."],structure:6},
      {fr:"Tu aurais pu appeler avant de venir.",en:["You could have called before coming."],structure:6},
      {fr:"Elle aurait dû partir plus tôt.",en:["She should have left earlier."],structure:6},
      {fr:"Il a dû se perdre.",en:["He must have gotten lost.","He must have got lost."],structure:6,variantNote:"<em>gotten</em> est américain, <em>got</em> est britannique — les deux sont corrects."},
      {fr:"Nous aurions pu trouver un taxi.",en:["We could have found a taxi."],structure:6},
      {fr:"Tu n'aurais pas dû dire ça.",en:["You should not have said that.","You shouldn't have said that."],structure:6,variantNote:"Aucune différence — <em>shouldn't</em> est la contraction de <em>should not</em>."},
      {fr:"Elle aurait pu réussir.",en:["She could have succeeded."],structure:6},
      {fr:"Ils auraient dû lire les instructions.",en:["They should have read the instructions."],structure:6},
      {fr:"J'aurais dû savoir.",en:["I should have known."],structure:6},
      {fr:"Il a dû prendre le mauvais chemin.",en:["He must have taken the wrong road.","He must have taken the wrong way."],structure:6,variantNote:"Même sens — <em>road</em> et <em>way</em> sont tous deux corrects dans ce contexte."}
    ]
  },
  "pp-passive": {
    id:"pp-passive",hidden:true,title:"Voix passive",subtitle:"be + participe passé",icon:"🔄",color:"#ec4899",questionCount:10,theoryPage:"theory-pp-passive.html",hasQuiz:true,
    questions:[
      {fr:"La fenêtre a été cassée.",en:["The window was broken."],structure:7},
      {fr:"La lettre a été envoyée hier.",en:["The letter was sent yesterday."],structure:7},
      {fr:"Le livre a été écrit en 1984.",en:["The book was written in 1984."],structure:7},
      {fr:"Le repas est servi.",en:["The meal is served."],structure:7},
      {fr:"La voiture a été vendue.",en:["The car was sold."],structure:7},
      {fr:"Le voleur a été attrapé.",en:["The thief was caught."],structure:7},
      {fr:"La maison a été construite en 1990.",en:["The house was built in 1990."],structure:7},
      {fr:"Le message a été lu.",en:["The message was read."],structure:7},
      {fr:"Le gâteau a été mangé.",en:["The cake was eaten."],structure:7},
      {fr:"La décision a été prise hier.",en:["The decision was made yesterday.","The decision was taken yesterday."],structure:7,variantNote:"Même sens — <em>made</em> est plus courant, <em>taken</em> aussi correct."}
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
};