// data/lessons.js — Banque de questions et métadonnées des leçons

const LESSONS = {
    "structures-1": {
        id: "structures-1",
        title: "Structures Clés",
        subtitle: "Vouloir · Politesse · Regret",
        icon: "🎯",
        color: "#3b82f6",
        questionCount: 25,
        rules: [
            {
                title: "Structure 1 : La Volonté — Tuer le \"QUE\"",
                engine: "I want / I need / I tell + Personne + TO + Action",
                examples: [
                    "Je veux que tu finisses... → I want <b>you to</b> finish...",
                    "Il a besoin que nous l'aidions. → He needs <b>us to</b> help him.",
                    "Le patron s'attend à ce qu'ils... → The boss expects <b>them to</b> arrive..."
                ]
            },
            {
                title: "Structure 2 : La Politesse — Le bloc \"Would you like...\"",
                engine: "Would you like + Personne + TO + Action ?",
                examples: [
                    "Voudrais-tu que je prenne... ? → Would you like <b>me to</b> take...?",
                    "Aimerais-tu que nous partions... ? → Would you like <b>us to</b> leave...?"
                ]
            },
            {
                title: "Structure 3 : Le Regret — Le bloc \"Should have\"",
                engine: "Subject + Should have (Should've) + Participe Passé",
                examples: [
                    "Tu aurais dû acheter... → You <b>should've bought</b>...",
                    "J'aurais dû écouter... → I <b>should've listened</b>...",
                    "Nous aurions dû partir... → We <b>should've left</b>..."
                ]
            }
        ],
        questions: [
            // --- Structure 1 : La Volonté (9 phrases) ---
            {
                fr: "Je veux que tu finisses ton travail.",
                en: ["I want you to finish your work", "I want you to finish your work."],
                structure: 1
            },
            {
                fr: "Il a besoin que nous l'aidions.",
                en: ["He needs us to help him", "He needs us to help him."],
                structure: 1
            },
            {
                fr: "Ma mère veut que je sois prudent.",
                en: ["My mother wants me to be careful", "My mother wants me to be careful."],
                structure: 1
            },
            {
                fr: "Le patron s'attend à ce qu'ils arrivent tôt.",
                en: ["The boss expects them to arrive early", "The boss expects them to arrive early."],
                structure: 1
            },
            {
                fr: "Je t'ai dit de fermer la fenêtre.",
                en: ["I told you to close the window", "I told you to close the window."],
                structure: 1
            },
            {
                fr: "Je veux que tu me dises la vérité.",
                en: ["I want you to tell me the truth", "I want you to tell me the truth."],
                structure: 1
            },
            {
                fr: "Elle a besoin que vous terminiez ce projet.",
                en: ["She needs you to finish this project", "She needs you to finish this project."],
                structure: 1
            },
            {
                fr: "J'aimerais que tu sois là demain.",
                en: [
                    "I would like you to be there tomorrow",
                    "I would like you to be there tomorrow.",
                    "I'd like you to be there tomorrow",
                    "I'd like you to be there tomorrow."
                ],
                structure: 1
            },
            {
                fr: "Dis-leur de faire moins de bruit.",
                en: ["Tell them to make less noise", "Tell them to make less noise."],
                structure: 1
            },

            // --- Structure 2 : La Politesse (8 phrases) ---
            {
                fr: "Voudrais-tu que je prenne une photo ?",
                en: ["Would you like me to take a photo?", "Would you like me to take a photo"],
                structure: 2
            },
            {
                fr: "Voudrais-tu qu'il vienne à la fête ?",
                en: ["Would you like him to come to the party?", "Would you like him to come to the party"],
                structure: 2
            },
            {
                fr: "Aimerais-tu que nous partions maintenant ?",
                en: ["Would you like us to leave now?", "Would you like us to leave now"],
                structure: 2
            },
            {
                fr: "Voudrais-tu que je t'apporte un café ?",
                en: [
                    "Would you like me to bring you a coffee?",
                    "Would you like me to bring you a coffee",
                    "Would you like me to bring you some coffee?"
                ],
                structure: 2
            },
            {
                fr: "Est-ce que tu voudrais qu'elle t'explique ?",
                en: [
                    "Would you like her to explain to you?",
                    "Would you like her to explain to you",
                    "Would you like her to explain it to you?"
                ],
                structure: 2
            },
            {
                fr: "Voudrais-tu que je t'aide à porter tes valises ?",
                en: [
                    "Would you like me to help you carry your bags?",
                    "Would you like me to help you carry your bags",
                    "Would you like me to help you carry your suitcases?"
                ],
                structure: 2
            },
            {
                fr: "Voudrais-tu qu'il nous rejoigne au restaurant ?",
                en: [
                    "Would you like him to join us at the restaurant?",
                    "Would you like him to join us at the restaurant"
                ],
                structure: 2
            },
            {
                fr: "Voudrais-tu que je prépare le dîner ?",
                en: [
                    "Would you like me to cook dinner?",
                    "Would you like me to cook dinner",
                    "Would you like me to make dinner?",
                    "Would you like me to make dinner"
                ],
                structure: 2
            },

            // --- Structure 3 : Le Regret (8 phrases) ---
            {
                fr: "Tu aurais dû acheter ce billet.",
                en: [
                    "You should've bought this ticket",
                    "You should've bought this ticket.",
                    "You should have bought this ticket",
                    "You should have bought this ticket."
                ],
                structure: 3
            },
            {
                fr: "J'aurais dû écouter tes conseils.",
                en: [
                    "I should've listened to your advice",
                    "I should've listened to your advice.",
                    "I should have listened to your advice",
                    "I should have listened to your advice."
                ],
                structure: 3
            },
            {
                fr: "Nous aurions dû partir plus tôt.",
                en: [
                    "We should've left earlier",
                    "We should've left earlier.",
                    "We should have left earlier",
                    "We should have left earlier."
                ],
                structure: 3
            },
            {
                fr: "Elle aurait dû appeler avant de venir.",
                en: [
                    "She should've called before coming",
                    "She should've called before coming.",
                    "She should have called before coming",
                    "She should have called before coming."
                ],
                structure: 3
            },
            {
                fr: "Ils auraient dû être plus polis.",
                en: [
                    "They should've been more polite",
                    "They should've been more polite.",
                    "They should have been more polite",
                    "They should have been more polite."
                ],
                structure: 3
            },
            {
                fr: "Tu aurais dû m'écouter la première fois.",
                en: [
                    "You should've listened to me the first time",
                    "You should've listened to me the first time.",
                    "You should have listened to me the first time",
                    "You should have listened to me the first time."
                ],
                structure: 3
            },
            {
                fr: "Nous aurions dû réserver une table.",
                en: [
                    "We should've booked a table",
                    "We should've booked a table.",
                    "We should have booked a table",
                    "We should have booked a table.",
                    "We should've reserved a table",
                    "We should have reserved a table"
                ],
                structure: 3
            },
            {
                fr: "Tu n'aurais pas dû dire ça.",
                en: [
                    "You shouldn't have said that",
                    "You shouldn't have said that.",
                    "You should not have said that",
                    "You should not have said that."
                ],
                structure: 3
            }
        ]
    }

    // ─── Module 2 : Prépositions ──────────────────────────────
    "prepositions-1": {
        id: "prepositions-1",
        title: "Prépositions",
        subtitle: "AT · ON · IN · FOR",
        icon: "📍",
        color: "#10b981",
        questionCount: null,         // rempli quand le quiz sera prêt
        theoryPage: "theory-prepositions.html",
        hasQuiz: true,
        rules: [],
        questions: []
    }

    // D'autres modules seront ajoutés ici au fil du temps
};
