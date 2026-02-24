// data/prepositions-space.js — Quiz : L'Espace (AT · ON · IN)
// Niveau 1 : QCM — choisir la préposition
// Niveau 2 : Rédaction — réécrire la phrase complète

const SPACE_QUIZ = {
    id:       "prepositions-space",
    title:    "L'Espace — AT · ON · IN",
    subtitle: "15 phrases · 2 niveaux",

    // ── Niveau 1 : QCM ─────────────────────────────────────
    level1: [

        // AT — Le Point (dimension 0)
        {
            fr:   "À la porte d'entrée.",
            en:   "At the front door.",
            prep: "AT",
            hint: "Un point de repère précis → dimension 0"
        },
        {
            fr:   "Dans un aéroport bondé.",
            en:   "At a busy airport.",
            prep: "AT",
            hint: "On voit l'aéroport comme une étape, pas un intérieur"
        },
        {
            fr:   "À l'entrée principale.",
            en:   "At the main entrance.",
            prep: "AT",
            hint: "Un point de passage, pas une surface ni un contenant"
        },
        {
            fr:   "À une adresse précise.",
            en:   "At a specific address.",
            prep: "AT",
            hint: "Une adresse = un point sur une carte"
        },
        {
            fr:   "Au dernier étage.",
            en:   "At the top floor.",
            prep: "AT",
            hint: "Vu comme un point d'arrivée, pas une surface à explorer"
        },

        // ON — La Surface / La Ligne (dimension 2)
        {
            fr:   "Sur une table en bois.",
            en:   "On a wooden table.",
            prep: "ON",
            hint: "Contact avec une surface plane → dimension 2"
        },
        {
            fr:   "Sur le sol sale.",
            en:   "On the dirty floor.",
            prep: "ON",
            hint: "Posé sur une surface, pas à l'intérieur"
        },
        {
            fr:   "Dans une rue étroite.",
            en:   "On a narrow street.",
            prep: "ON",
            hint: "L'anglais voit une rue comme une ligne (axe) → ON"
        },
        {
            fr:   "Sur une île tropicale.",
            en:   "On a tropical island.",
            prep: "ON",
            hint: "Une île est une plateforme (surface) dans l'océan"
        },
        {
            fr:   "Sur le mur blanc.",
            en:   "On the white wall.",
            prep: "ON",
            hint: "Fixé ou posé sur une surface verticale"
        },

        // IN — Le Contenant (dimension 3)
        {
            fr:   "Dans une grande boîte.",
            en:   "In a large box.",
            prep: "IN",
            hint: "Entouré par des parois physiques → dimension 3"
        },
        {
            fr:   "Dans une cuisine moderne.",
            en:   "In a modern kitchen.",
            prep: "IN",
            hint: "Une pièce forme un contenant : 4 murs + sol + plafond"
        },
        {
            fr:   "Dans une belle ville.",
            en:   "In a beautiful city.",
            prep: "IN",
            hint: "Les limites de la ville t'entourent comme un contenant"
        },
        {
            fr:   "Dans une forêt sombre.",
            en:   "In a dark forest.",
            prep: "IN",
            hint: "Les arbres t'entourent de tous côtés"
        },
        {
            fr:   "Dans une petite voiture.",
            en:   "In a small car.",
            prep: "IN",
            hint: "Tu dois te plier pour entrer → espace privé fermé"
        }
    ],

    // ── Niveau 2 : Rédaction ────────────────────────────────
    level2: [
        {
            fr:   "À la porte d'entrée.",
            en:   ["At the front door", "At the front door."],
            prep: "AT"
        },
        {
            fr:   "Dans un aéroport bondé.",
            en:   ["At a busy airport", "At a busy airport."],
            prep: "AT"
        },
        {
            fr:   "À l'entrée principale.",
            en:   ["At the main entrance", "At the main entrance."],
            prep: "AT"
        },
        {
            fr:   "À une adresse précise.",
            en:   ["At a specific address", "At a specific address."],
            prep: "AT"
        },
        {
            fr:   "Au dernier étage.",
            en:   ["At the top floor", "At the top floor."],
            prep: "AT"
        },
        {
            fr:   "Sur une table en bois.",
            en:   ["On a wooden table", "On a wooden table."],
            prep: "ON"
        },
        {
            fr:   "Sur le sol sale.",
            en:   ["On the dirty floor", "On the dirty floor."],
            prep: "ON"
        },
        {
            fr:   "Dans une rue étroite.",
            en:   ["On a narrow street", "On a narrow street."],
            prep: "ON"
        },
        {
            fr:   "Sur une île tropicale.",
            en:   ["On a tropical island", "On a tropical island."],
            prep: "ON"
        },
        {
            fr:   "Sur le mur blanc.",
            en:   ["On the white wall", "On the white wall."],
            prep: "ON"
        },
        {
            fr:   "Dans une grande boîte.",
            en:   ["In a large box", "In a large box."],
            prep: "IN"
        },
        {
            fr:   "Dans une cuisine moderne.",
            en:   ["In a modern kitchen", "In a modern kitchen."],
            prep: "IN"
        },
        {
            fr:   "Dans une belle ville.",
            en:   ["In a beautiful city", "In a beautiful city."],
            prep: "IN"
        },
        {
            fr:   "Dans une forêt sombre.",
            en:   ["In a dark forest", "In a dark forest."],
            prep: "IN"
        },
        {
            fr:   "Dans une petite voiture.",
            en:   ["In a small car", "In a small car."],
            prep: "IN"
        }
    ]
};
