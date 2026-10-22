import type { Dictionary } from "./types";

export const it: Dictionary = {
  meta: {
    title: "Atleva – Allenamenti a casa senza attrezzi per iPhone",
    description:
      "Atleva crea un piano personale di allenamento a casa senza attrezzi in base al tuo obiettivo e alle tue zone di focus, con 119 video di esercizi e un piano che si adatta a come ti senti. Nessun account, nessuna pubblicità, nessun tracciamento.",
  },
  nav: { features: "Funzioni", privacy: "Privacy", pro: "Pro", faq: "FAQ", language: "Lingua", skip: "Vai al contenuto" },
  hero: {
    eyebrow: "Allenamenti a casa per iPhone",
    title: "Il tuo piano. Il tuo spazio.",
    highlight: "Zero attrezzi.",
    subtitle:
      "Scegli un obiettivo, tocca le zone di focus sulla mappa del corpo e ottieni un programma a casa che progredisce con te e si adatta a come ti senti — in circa 2×2 m di pavimento.",
    badges: ["Senza attrezzi", "Senza account", "Niente pubblicità né tracciamento", "Funziona offline"],
    screenshotAlt: "Schermata Oggi di Atleva con l'allenamento di oggi pronto per iniziare",
  },
  appStore: { small: "Scarica su", large: "App Store", soon: "Presto su App Store" },
  trust: [
    { title: "119 video di esercizi", text: "Brevi demo in loop che funzionano offline." },
    { title: "Basato su linee guida", text: "Fondato sulle raccomandazioni pubblicate da ACSM e OMS." },
    { title: "Apple Salute", text: "Facoltativo: solo i dati che autorizzi, conservati sul tuo dispositivo." },
    { title: "iOS 18 o successivo", text: "Pensato per iPhone, incluso iPhone Duo." },
  ],
  features: {
    title: "Un personal trainer che sta nel tuo soggiorno",
    subtitle: "Niente palestra, niente attrezzi, niente improvvisazione: solo un piano fatto per te.",
    items: [
      {
        title: "Scegli un obiettivo, ottieni un piano",
        text: "Aumentare la massa muscolare, perdere grasso, tonificare, migliorare la condizione fisica, guadagnare mobilità o semplicemente restare attivi. Atleva costruisce il piano intorno al tuo obiettivo e al tempo che hai davvero.",
        points: ["Sessioni da 10, 20, 30 o 45 minuti", "Da 2 a 6 giorni a settimana", "Un allenamento rapido da 10 minuti per le giornate piene"],
        alt: "Schermata di scelta dell'obiettivo in Atleva",
      },
      {
        title: "Tocca le zone che vuoi allenare",
        text: "Scegli fino a tre zone di focus sulla mappa interattiva del corpo, oppure allena tutto il corpo. Segnala le articolazioni sensibili e gli esercizi a rischio vengono sostituiti.",
        points: [
          "Petto, spalle, braccia, addominali, schiena, glutei, gambe e altro",
          "Protegge ginocchia, zona lombare, spalle, polsi e collo sensibili",
          "In tutta onestà: nessun allenamento brucia grasso in un punto preciso",
        ],
        alt: "Mappa interattiva del corpo con zone di focus selezionate",
      },
      {
        title: "Ogni esercizio in video",
        text: "Ogni esercizio ha una breve demo in loop, indicazioni chiare sulla tecnica e gli errori da evitare. Troppo difficile o troppo facile? Passa a una versione più facile o più difficile con un tocco.",
        points: ["119 esercizi, tutti offline", "Riproduzione al rallentatore", "Riscaldamento e defaticamento in ogni sessione"],
        alt: "Schermata di allenamento con il video di un esercizio e un timer",
      },
      {
        title: "Abbastanza silenzioso per un condominio",
        text: "La modalità silenziosa sceglie esercizi senza salti, così puoi allenarti la mattina presto o la sera tardi senza disturbare i vicini.",
        points: ["Bastano circa 2×2 m di pavimento", "Aiuti domestici facoltativi: una parete, una sedia, un asciugamano", "Nessun attrezzo da comprare"],
        alt: "Impostazioni della modalità silenziosa con esercizi senza salti",
      },
      {
        title: "Un piano che cresce con te",
        text: "Valuta quanto è stata dura ogni sessione e le successive si adattano. Il sovraccarico progressivo ti fa crescere e ogni quarta settimana è una settimana di scarico più leggera.",
        points: ["Programma settimanale equilibrato", "Si adatta quando sei stanco o hai poco tempo", "Progressioni da esercizi più facili a più difficili"],
        alt: "Piano settimanale con le prossime sessioni",
      },
      {
        title: "Funziona con Apple Salute",
        text: "Con il tuo permesso, Atleva usa i tuoi dati di Salute per personalizzare il piano e le stime, e salva in Salute gli allenamenti completati.",
        points: ["Stime corporee: IMC, dispendio energetico, grasso corporeo", "Punteggio di prontezza da HRV, frequenza cardiaca a riposo e sonno (Pro)", "I dati sanitari non vengono mai salvati su iCloud"],
        alt: "Schermata di analisi corporea con dati di Apple Salute",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy fin dalla progettazione",
    title: "Il tuo allenamento è affar tuo",
    text: "Atleva non ha account né server. Il tuo piano e la tua cronologia restano sul tuo iPhone e, se vuoi, nel tuo iCloud privato.",
    points: [
      { title: "Nessun tracciamento", text: "Niente strumenti di analisi, niente pubblicità e nessun SDK di terze parti." },
      { title: "La salute resta in locale", text: "I dati di Apple Salute e le risposte al questionario sulla salute non lasciano mai il tuo dispositivo, nemmeno verso iCloud." },
      { title: "IA sul dispositivo", text: "Il coach funziona con Apple Intelligence sul tuo iPhone. Nulla viene inviato al cloud." },
      { title: "Elimina quando vuoi", text: "Con un tocco rimuovi piano, sessioni e impostazioni dal dispositivo e da iCloud." },
    ],
    link: "Leggi l'informativa sulla privacy",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Inizia gratis. Passa a Pro quando vuoi di più.",
    subtitle: "Con la versione gratuita ti alleni da subito. Atleva Pro è un abbonamento facoltativo per piani più lunghi e indicazioni più intelligenti.",
    freeTitle: "Gratis",
    free: [
      "Un piano personale di 4 settimane",
      "Una zona di focus",
      "47 esercizi base con video",
      "Valutazioni dello sforzo e adattamenti del piano",
      "Stime corporee e progressi",
      "Apple Salute, widget e Attività in tempo reale",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "Piani progressivi da 12+ settimane che si rinnovano automaticamente",
      "Fino a 3 zone di focus",
      "Tutti i 119 esercizi e video",
      "Punteggio di prontezza e adattamento automatico giornaliero",
      "Coach IA sul dispositivo e briefing personali",
      "Video del tuo piano",
      "Grafici avanzati con esportazione CSV e PDF",
      "Icone alternative dell'app",
    ],
    note: "Abbonamento mensile o annuale; il piano annuale può includere una prova gratuita per gli utenti idonei. I prezzi sono indicati nell'app. Il coach IA richiede iOS 26 o successivo su un iPhone che supporta Apple Intelligence.",
    progressAlt: "Grafici dei progressi con il volume settimanale",
    coachAlt: "Coach IA che suggerisce una sessione adattata",
  },
  faq: {
    title: "Domande",
    items: [
      {
        q: "Mi servono attrezzi?",
        a: "No. Ogni esercizio usa il peso del tuo corpo. Una parete, una sedia robusta o un asciugamano possono aiutare in alcuni esercizi, ma sono facoltativi.",
      },
      {
        q: "Quanto spazio mi serve?",
        a: "Circa 2×2 m di pavimento. Attiva la modalità silenziosa per esercizi senza salti.",
      },
      {
        q: "Atleva è adatta ai principianti?",
        a: "Sì. Il piano parte dal tuo livello e ogni esercizio ha versioni più facili e più difficili. Se hai un problema di salute, sei in gravidanza o stai recuperando da un infortunio, parlane prima con un medico.",
      },
      {
        q: "Dove vengono salvati i miei dati?",
        a: "Sul tuo iPhone. Se iCloud è attivo, il piano e la cronologia delle sessioni si sincronizzano tramite il tuo iCloud privato. I dati sanitari non vengono mai salvati su iCloud e noi non vediamo mai i tuoi dati.",
      },
      {
        q: "Mi servono Apple Salute o un Apple Watch?",
        a: "No. Entrambi sono facoltativi. Con loro, Atleva può personalizzare le stime e calcolare un punteggio di prontezza.",
      },
      {
        q: "Come disdico Atleva Pro?",
        a: "Nelle impostazioni del tuo account App Store, almeno 24 ore prima della fine del periodo in corso. Gli acquisti si possono ripristinare nelle impostazioni di Atleva.",
      },
    ],
  },
  cta: { title: "Il tuo prossimo allenamento ti aspetta già", text: "Scarica Atleva, scegli un obiettivo e inizia oggi: senza account, senza attrezzi." },
  footer: {
    tagline: "Allenamenti a casa senza attrezzi per iPhone.",
    legal: "Note legali",
    privacy: "Informativa sulla privacy",
    terms: "Termini d'uso",
    support: "Supporto",
    disclaimer:
      "Atleva offre indicazioni generali sull'attività fisica e non costituisce un consiglio medico. Consulta un medico prima di iniziare un nuovo programma di esercizi e fermati se senti dolore, vertigini o mancanza di fiato.",
  },
  legal: { updated: "Ultimo aggiornamento", back: "Torna alla home" },
};
