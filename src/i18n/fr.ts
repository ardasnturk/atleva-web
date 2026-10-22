import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    title: "Atleva – Entraînement à la maison sans matériel pour iPhone",
    description:
      "Atleva crée un programme d’entraînement à la maison sans matériel, personnalisé selon votre objectif et vos zones ciblées, avec 119 vidéos d’exercices et un programme qui s’adapte à votre forme. Sans compte, sans publicité, sans pistage.",
  },
  nav: { features: "Fonctionnalités", privacy: "Confidentialité", pro: "Pro", faq: "FAQ", language: "Langue", skip: "Aller au contenu" },
  hero: {
    eyebrow: "Entraînement à la maison pour iPhone",
    title: "Votre programme. Votre espace.",
    highlight: "Zéro matériel.",
    subtitle:
      "Choisissez un objectif, touchez vos zones ciblées sur la carte du corps et obtenez un programme à la maison qui progresse avec vous et s’adapte à votre forme — dans environ 2×2 m au sol.",
    badges: ["Sans matériel", "Sans compte", "Sans publicité ni pistage", "Fonctionne hors ligne"],
    screenshotAlt: "Écran Aujourd’hui d’Atleva avec la séance du jour prête à démarrer",
  },
  appStore: { small: "Télécharger dans", large: "l’App Store", soon: "Bientôt disponible sur l’App Store" },
  trust: [
    { title: "119 vidéos d’exercices", text: "De courtes démos en boucle, disponibles hors ligne." },
    { title: "Fondé sur des recommandations", text: "Conçu à partir des recommandations publiées de l’ACSM et de l’OMS." },
    { title: "Apple Santé", text: "Facultatif — uniquement les données que vous autorisez, conservées sur votre appareil." },
    { title: "iOS 18 ou ultérieur", text: "Conçu pour iPhone, y compris iPhone Duo." },
  ],
  features: {
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
        points: ["119 exercices, tous hors ligne", "Lecture au ralenti", "Échauffement et retour au calme à chaque séance"],
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
  privacy: {
    eyebrow: "Confidentialité dès la conception",
    title: "Votre entraînement ne regarde que vous",
    text: "Atleva n’a ni compte ni serveur. Votre programme et votre historique restent sur votre iPhone et, si vous le souhaitez, dans votre propre iCloud privé.",
    points: [
      { title: "Aucun pistage", text: "Aucun outil d’analyse, aucune publicité et aucun SDK tiers." },
      { title: "La santé reste en local", text: "Les données Apple Santé et vos réponses au questionnaire de santé ne quittent jamais votre appareil — pas même vers iCloud." },
      { title: "IA sur l’appareil", text: "Le coach fonctionne avec Apple Intelligence sur votre iPhone. Rien n’est envoyé dans le cloud." },
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
      "Programmes progressifs de 12 semaines et plus, renouvelés automatiquement",
      "Jusqu’à 3 zones ciblées",
      "Les 119 exercices et vidéos",
      "Score de forme et ajustement quotidien automatique",
      "Coach IA sur l’appareil et briefings personnalisés",
      "Vidéo de votre programme",
      "Graphiques avancés avec export CSV et PDF",
      "Icônes d’app alternatives",
    ],
    note: "Abonnement mensuel ou annuel ; l’offre annuelle peut inclure un essai gratuit pour les utilisateurs éligibles. Les prix sont indiqués dans l’app. Le coach IA nécessite iOS 26 ou ultérieur sur un iPhone compatible avec Apple Intelligence.",
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
        q: "Où sont stockées mes données ?",
        a: "Sur votre iPhone. Si iCloud est activé, votre programme et l’historique de vos séances se synchronisent via votre propre iCloud privé. Les données de santé ne sont jamais stockées dans iCloud, et nous ne voyons jamais vos données.",
      },
      {
        q: "Ai-je besoin d’Apple Santé ou d’une Apple Watch ?",
        a: "Non. Les deux sont facultatifs. Avec eux, Atleva peut personnaliser vos estimations et calculer un score de forme.",
      },
      {
        q: "Comment résilier Atleva Pro ?",
        a: "Dans les réglages de votre compte App Store, au moins 24 heures avant la fin de la période en cours. Les achats peuvent être restaurés dans les réglages d’Atleva.",
      },
    ],
  },
  cta: { title: "Votre prochaine séance vous attend déjà", text: "Téléchargez Atleva, choisissez un objectif et commencez dès aujourd’hui — sans compte, sans matériel." },
  footer: {
    tagline: "Entraînement à la maison sans matériel pour iPhone.",
    legal: "Informations légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d’utilisation",
    support: "Assistance",
    disclaimer:
      "Atleva propose des conseils généraux de remise en forme et ne constitue pas un avis médical. Consultez un médecin avant de commencer un nouveau programme d’exercice, et arrêtez-vous en cas de douleur, de vertige ou d’essoufflement.",
  },
  legal: { updated: "Dernière mise à jour", back: "Retour à l’accueil" },
};
