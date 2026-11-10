import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Atleva – Entraînement à la maison sans matériel pour iPhone et Apple Watch",
    description:
      "Atleva crée un programme d’entraînement à la maison sans matériel, personnalisé selon votre objectif, avec 119 vidéos d’exercices, un coach caméra qui compte vos répétitions, une app Apple Watch et un programme qui s’adapte à votre forme. Sans compte, sans publicité.",
  },
  nav: { menu: "Menu", new: "Nouveautés", features: "Fonctionnalités", privacy: "Confidentialité", pro: "Pro", faq: "FAQ", language: "Langue", skip: "Aller au contenu" },
  hero: {
    newBadge: "Nouveau dans la 1.1 — coach caméra et Apple Watch",
    title: "Votre salon.",
    highlight: "Votre meilleure version.",
    subtitle:
      "Un programme d’entraînement à la maison personnalisé qui compte vos répétitions, vous suit jusqu’au poignet et s’adapte à votre forme. Ni salle, ni matériel — environ 2×2 m au sol suffisent.",
    badges: ["Sans matériel", "Sans compte", "Sans publicité", "Dès 10 minutes"],
    screenshotAlt: "Écran Aujourd’hui d’Atleva avec la séance du jour prête à démarrer",
    watchAlt: "Atleva sur Apple Watch pendant une séance, avec les répétitions et la fréquence cardiaque",
    chips: { heartRate: "124 bpm", streak: "10 séances d’affilée", form: "Technique 95 %" },
  },
  appStore: { small: "Télécharger dans", large: "l’App Store", soon: "Bientôt disponible sur l’App Store" },
  marquee: [
    "Sans matériel",
    "Séances de 10 minutes",
    "Coach caméra",
    "Apple Watch",
    "Mode silencieux",
    "Rappels intelligents",
    "Carte du corps",
    "Apple Santé",
    "Programme adaptatif",
    "Confidentialité native",
  ],
  stats: { exercises: "exercices en vidéo", minutes: "minutes suffisent pour commencer", space: "au sol", equipment: "matériel à acheter" },
  whatsNew: {
    eyebrow: "Nouveau dans Atleva 1.1",
    title: "Votre coach a désormais des yeux, une voix et un poignet",
    subtitle: "Quatre nouveautés pour vous aider à vous lancer — et à réussir chaque répétition.",
    camera: {
      title: "Coach caméra",
      text: "Posez votre iPhone au sol et entraînez-vous. Le coach vous indique où vous placer, compte vos répétitions, note votre technique et vous dit quoi corriger.",
      points: ["Compte répétitions et maintiens automatiquement", "Score de technique avec un conseil clair", "Analysé sur votre iPhone, jamais enregistré"],
      alt: "Coach caméra comptant des squats avec un score de technique de 95 %",
    },
    watch: {
      title: "App Apple Watch",
      text: "Lancez la séance du jour depuis votre poignet avec la fréquence cardiaque en direct, ou suivez et pilotez votre séance iPhone depuis la montre.",
      points: ["Fréquence cardiaque en direct sur l’iPhone et la montre", "Complications pour la séance du jour et votre série", "Compatible watchOS 10 et ultérieur"],
      alts: ["La séance du jour sur Apple Watch", "L’Apple Watch qui suit la séance iPhone", "Une séance en cours sur Apple Watch"],
    },
    reminders: {
      title: "Rappels intelligents",
      text: "Ils apprennent quand vous vous entraînez d’habitude, annoncent la prochaine séance et vous aident à garder votre série.",
      now: "maintenant",
      samples: [
        { title: "Séance force · 30 min", text: "Votre heure habituelle approche. 9 exercices vous attendent." },
        { title: "Gardez votre série de 10 séances", text: "Une séance de 10 minutes compte aussi aujourd’hui." },
        { title: "Votre semaine", text: "3 séances sur 4 faites. Bravo !" },
      ],
    },
    voice: {
      title: "Voix de coach naturelle",
      text: "Une voix au son humain lance le décompte, annonce l’exercice suivant et vous motive — sans regarder l’écran. Téléchargez-la dans votre langue si elle est disponible.",
      quote: "Dernière série. Tenez bon, vous y êtes presque !",
    },
    smaller: {
      title: "Téléchargement plus léger",
      text: "Certaines vidéos d’exercices se téléchargent désormais au moment voulu, puis fonctionnent hors ligne.",
    },
  },
  features: {
    eyebrow: "Tout dans un seul programme",
    title: "Un coach personnel qui tient dans votre salon",
    subtitle: "Ni salle, ni matériel, ni improvisation — juste un programme fait pour vous.",
    items: [
      {
        title: "Un objectif, un programme",
        text: "Prendre du muscle, perdre du gras, vous tonifier, améliorer votre condition, gagner en mobilité ou simplement rester actif. Atleva construit le programme autour de votre objectif et du temps dont vous disposez réellement.",
        points: ["Séances de 10, 20, 30 ou 45 minutes", "2 à 6 jours par semaine", "Une séance express de 10 minutes pour les jours chargés"],
        alt: "Écran de choix de l’objectif dans Atleva",
      },
      {
        title: "Touchez les zones à travailler",
        text: "Choisissez jusqu’à trois zones ciblées sur la carte interactive du corps — ou travaillez le corps entier. Signalez vos articulations sensibles et les mouvements à risque sont remplacés.",
        points: [
          "Pectoraux, épaules, bras, abdos, dos, fessiers, jambes et plus encore",
          "Protège les genoux, le bas du dos, les épaules, les poignets et le cou sensibles",
          "Soyons honnêtes : aucun entraînement ne brûle le gras d’une zone précise",
        ],
        alt: "Carte interactive du corps avec des zones ciblées sélectionnées",
      },
      {
        title: "Chaque mouvement en vidéo",
        text: "Chaque exercice a une courte démo en boucle, des conseils techniques clairs et les erreurs à éviter. Trop dur ou trop facile ? Passez à une version plus facile ou plus difficile d’un simple toucher.",
        points: ["119 exercices en vidéo", "Vidéos disponibles hors ligne une fois téléchargées", "Échauffement et retour au calme à chaque séance"],
        alt: "Écran de séance avec une vidéo d’exercice et un minuteur",
      },
      {
        title: "Assez silencieux pour un appartement",
        text: "Le mode silencieux choisit des exercices sans sauts, pour vous entraîner tôt le matin ou tard le soir sans déranger les voisins.",
        points: ["Environ 2×2 m au sol suffisent", "Aides facultatives du quotidien : un mur, une chaise, une serviette", "Aucun matériel à acheter"],
        alt: "Réglages du mode silencieux avec des exercices sans sauts",
      },
      {
        title: "Un programme qui évolue avec vous",
        text: "Notez la difficulté ressentie de chaque séance et les suivantes s’ajustent. La surcharge progressive vous fait progresser, et une semaine sur quatre est une semaine allégée.",
        points: ["Planning hebdomadaire équilibré", "S’ajuste quand vous êtes fatigué ou pressé", "Progressions des mouvements les plus faciles aux plus difficiles"],
        alt: "Programme de la semaine avec les prochaines séances",
      },
      {
        title: "Compatible avec Apple Santé",
        text: "Avec votre autorisation, Atleva utilise vos données Santé pour personnaliser votre programme et vos estimations, et enregistre vos séances terminées dans Santé.",
        points: ["Estimations corporelles : IMC, dépense énergétique, masse grasse", "Score de forme basé sur la VFC, la fréquence cardiaque au repos et le sommeil (Pro)", "Les données de santé ne sont jamais stockées dans iCloud"],
        alt: "Écran d’analyse corporelle avec des données Apple Santé",
      },
    ],
  },
  motivation: {
    eyebrow: "Pourquoi aujourd’hui",
    title: "Dix minutes valent mieux que zéro. Toujours.",
    text: "Pas besoin d’une semaine parfaite — juste de la prochaine séance. Atleva la rend assez courte pour s’y mettre et assez intelligente pour tenir dans la durée.",
    steps: [
      { title: "Commencez petit", text: "Une séance de 10 minutes un jour chargé compte quand même pour votre semaine." },
      { title: "Soyez au rendez-vous", text: "Des rappels à votre heure habituelle, une série à préserver et votre programme prêt en un toucher." },
      { title: "Gagnez en force", text: "Votre programme ajoute répétitions, durée et exercices plus difficiles à mesure que vous progressez." },
    ],
    days: ["L", "M", "M", "J", "V", "S", "D"],
    ringLabel: "minutes",
    weekLabel: "Cette semaine",
  },
  privacy: {
    eyebrow: "Confidentialité dès la conception",
    title: "Votre entraînement ne regarde que vous",
    text: "Atleva n’a pas de compte. Votre programme et votre historique restent sur votre iPhone et, si vous le souhaitez, dans votre propre iCloud privé.",
    points: [
      { title: "Aucun pistage", text: "Aucun outil d’analyse et aucune publicité. Les abonnements sont vérifiés avec un identifiant anonyme uniquement." },
      { title: "La santé reste en local", text: "Les données Apple Santé, la fréquence cardiaque et vos réponses au questionnaire de santé ne quittent jamais vos appareils — pas même vers iCloud." },
      { title: "Caméra et IA sur l’appareil", text: "Le coach caméra et le coach IA fonctionnent sur votre iPhone. La vidéo n’est jamais enregistrée ni envoyée." },
      { title: "Suppression à tout moment", text: "Un seul toucher efface votre programme, vos séances et vos réglages de l’appareil et d’iCloud." },
    ],
    link: "Lire la politique de confidentialité",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Commencez gratuitement. Passez à Pro quand vous voulez plus.",
    subtitle: "La version gratuite vous permet de vous entraîner dès aujourd’hui. Atleva Pro est un abonnement facultatif pour des programmes plus longs et un accompagnement plus intelligent.",
    freeTitle: "Gratuit",
    free: [
      "Un programme personnel de 4 semaines",
      "Une zone ciblée",
      "47 exercices essentiels en vidéo",
      "Notes d’effort et ajustements du programme",
      "Estimations corporelles et progrès",
      "Apple Santé, widgets et Activités en direct",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "Coach caméra : comptage des répétitions et score de technique",
      "App Apple Watch avec fréquence cardiaque en direct",
      "Rappels intelligents qui apprennent votre routine",
      "Programmes progressifs de 12 semaines et plus, jusqu’à 3 zones ciblées",
      "Les 119 exercices et vidéos",
      "Score de forme et ajustement quotidien automatique",
      "Coach IA sur l’appareil et briefings personnalisés",
      "Graphiques avancés avec export CSV et PDF",
    ],
    note: "Abonnement mensuel, trimestriel ou annuel ; les offres peuvent inclure un essai gratuit pour les utilisateurs éligibles. Les prix sont indiqués dans l’app. Le coach IA nécessite iOS 26 ou ultérieur sur un iPhone compatible avec Apple Intelligence.",
    progressAlt: "Graphiques de progression avec le volume hebdomadaire",
    coachAlt: "Coach IA proposant une séance ajustée",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Ai-je besoin de matériel ?",
        a: "Non. Tous les exercices se font au poids du corps. Un mur, une chaise solide ou une serviette peuvent aider pour certains mouvements, mais ils sont facultatifs.",
      },
      {
        q: "De combien d’espace ai-je besoin ?",
        a: "Environ 2×2 m au sol. Activez le mode silencieux pour des exercices sans sauts.",
      },
      {
        q: "Atleva convient-il aux débutants ?",
        a: "Oui. Le programme démarre à votre niveau et chaque mouvement existe en versions plus faciles et plus difficiles. Si vous avez un problème de santé, êtes enceinte ou vous remettez d’une blessure, parlez-en d’abord à un médecin.",
      },
      {
        q: "Le coach caméra m’enregistre-t-il ?",
        a: "Non. L’image de la caméra est analysée sur votre iPhone pendant la séance et n’est jamais enregistrée ni envoyée. Vous pouvez vous entraîner sans la caméra à tout moment.",
      },
      {
        q: "Ai-je besoin d’une Apple Watch ?",
        a: "Non. L’app pour la montre est un bonus Pro facultatif pour watchOS 10 ou ultérieur : lancez la séance du jour depuis votre poignet, suivez votre fréquence cardiaque en direct et pilotez votre séance iPhone.",
      },
      {
        q: "Où sont stockées mes données ?",
        a: "Sur votre iPhone. Si iCloud est activé, votre programme et l’historique de vos séances se synchronisent via votre propre iCloud privé. Les données de santé ne sont jamais stockées dans iCloud, et nous ne voyons jamais vos données.",
      },
      {
        q: "Comment résilier Atleva Pro ?",
        a: "Dans les réglages de votre compte App Store, au moins 24 heures avant la fin de la période en cours. Les achats peuvent être restaurés dans les réglages d’Atleva.",
      },
    ],
  },
  cta: { title: "Votre prochaine séance vous attend déjà", text: "Téléchargez Atleva, choisissez un objectif et commencez dès aujourd’hui — sans compte, sans matériel, juste vous." },
  footer: {
    tagline: "Entraînement à la maison sans matériel pour iPhone et Apple Watch.",
    legal: "Informations légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    support: "Assistance",
    disclaimer:
      "Atleva propose des conseils généraux de remise en forme et ne constitue pas un avis médical. Consultez un médecin avant de commencer un nouveau programme d’exercice, et arrêtez-vous en cas de douleur, de vertige ou d’essoufflement.",
  },
  legal: { updated: "Dernière mise à jour", back: "Retour à l’accueil" },
};
