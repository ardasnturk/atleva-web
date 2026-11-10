import type { Dictionary } from "./types";

export const it: Dictionary = {
  meta: {
    title: "Atleva – Allenamenti a casa senza attrezzi per iPhone e Apple Watch",
    description:
      "Atleva crea un piano personale di allenamento a casa senza attrezzi in base al tuo obiettivo, con 119 video di esercizi, un coach con fotocamera che conta le ripetizioni, un'app per Apple Watch e un piano che si adatta a come ti senti. Nessun account, nessuna pubblicità.",
  },
  nav: { menu: "Menu", new: "Novità", features: "Funzioni", privacy: "Privacy", pro: "Pro", faq: "FAQ", language: "Lingua", skip: "Vai al contenuto" },
  hero: {
    newBadge: "Novità in 1.1: coach con fotocamera e Apple Watch",
    title: "Il tuo soggiorno.",
    highlight: "La tua versione più forte.",
    subtitle:
      "Un piano di allenamento a casa su misura che conta le ripetizioni, ti segue al polso e si adatta a come ti senti. Niente palestra né attrezzi: bastano circa 2×2 m di pavimento.",
    badges: ["Senza attrezzi", "Senza account", "Niente pubblicità", "Da 10 minuti"],
    screenshotAlt: "Schermata Oggi di Atleva con l'allenamento di oggi pronto per iniziare",
    watchAlt: "Atleva su Apple Watch durante un allenamento, con ripetizioni e frequenza cardiaca",
    chips: { heartRate: "124 bpm", streak: "Serie di 10 sessioni", form: "Tecnica 95%" },
  },
  appStore: { small: "Scarica su", large: "App Store", soon: "Presto su App Store" },
  marquee: [
    "Senza attrezzi",
    "Allenamenti da 10 minuti",
    "Coach con fotocamera",
    "Apple Watch",
    "Modalità silenziosa",
    "Promemoria intelligenti",
    "Mappa del corpo",
    "Apple Salute",
    "Piano adattivo",
    "Privacy by design",
  ],
  stats: { exercises: "esercizi con video", minutes: "minuti bastano per iniziare", space: "di pavimento", equipment: "attrezzi da comprare" },
  whatsNew: {
    eyebrow: "Novità di Atleva 1.1",
    title: "Il tuo coach ora ha occhi, voce e un polso",
    subtitle: "Quattro novità che rendono più facile allenarti e fare ogni ripetizione nel modo giusto.",
    camera: {
      title: "Coach con fotocamera",
      text: "Appoggia l'iPhone a terra e allenati. Il coach ti mostra dove metterti, conta le ripetizioni, valuta la tecnica e ti dice cosa correggere.",
      points: ["Conta ripetizioni e tenute in automatico", "Punteggio della tecnica con un consiglio chiaro", "Analizzato sul tuo iPhone, mai salvato"],
      alt: "Coach con fotocamera che conta gli squat con una tecnica del 95%",
    },
    watch: {
      title: "App per Apple Watch",
      text: "Avvia la sessione di oggi dal polso con la frequenza cardiaca in tempo reale, oppure segui e controlla l'allenamento dell'iPhone dall'orologio.",
      points: ["Frequenza cardiaca in tempo reale su iPhone e orologio", "Complicazioni per la sessione di oggi e la tua serie", "Funziona con watchOS 10 e successivi"],
      alts: ["La sessione di oggi su Apple Watch", "Apple Watch che segue l'allenamento dell'iPhone", "Un allenamento in corso su Apple Watch"],
    },
    reminders: {
      title: "Promemoria intelligenti",
      text: "Imparano quando ti alleni di solito, ti dicono cosa prevede la prossima sessione e ti aiutano a mantenere la serie.",
      now: "ora",
      samples: [
        { title: "Sessione di forza · 30 min", text: "Si avvicina la tua solita ora. 9 esercizi sono pronti." },
        { title: "Mantieni la serie di 10 sessioni", text: "Anche un allenamento di 10 minuti conta oggi." },
        { title: "La tua settimana", text: "3 sessioni su 4 fatte. Ottimo lavoro!" },
      ],
    },
    voice: {
      title: "Voce del coach naturale",
      text: "Una voce dal suono umano ti dà il via, annuncia l'esercizio successivo e ti sprona, senza bisogno di guardare lo schermo. Scaricala nella tua lingua, dove disponibile.",
      quote: "Ultima serie. Tieni duro, ce la fai!",
    },
    smaller: {
      title: "Download più leggero",
      text: "Alcuni video degli esercizi si scaricano quando servono e poi funzionano offline.",
    },
  },
  features: {
    eyebrow: "Tutto in un solo piano",
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
        points: ["119 esercizi con video", "I video funzionano offline una volta scaricati", "Riscaldamento e defaticamento in ogni sessione"],
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
  motivation: {
    eyebrow: "Perché oggi",
    title: "Dieci minuti battono zero. Sempre.",
    text: "Non ti serve una settimana perfetta, ti serve la prossima sessione. Atleva la rende abbastanza breve da iniziare e abbastanza intelligente da farti continuare.",
    steps: [
      { title: "Inizia in piccolo", text: "Anche una sessione di 10 minuti in una giornata piena conta per la tua settimana." },
      { title: "Fatti trovare pronto", text: "Promemoria alla tua solita ora, una serie da difendere e il piano pronto con un tocco." },
      { title: "Diventa più forte", text: "Il piano aggiunge ripetizioni, tempo ed esercizi più difficili man mano che migliori." },
    ],
    days: ["L", "M", "M", "G", "V", "S", "D"],
    ringLabel: "minuti",
    weekLabel: "Questa settimana",
  },
  privacy: {
    eyebrow: "Privacy fin dalla progettazione",
    title: "Il tuo allenamento è affar tuo",
    text: "Atleva non ha account. Il tuo piano e la tua cronologia restano sul tuo iPhone e, se vuoi, nel tuo iCloud privato.",
    points: [
      { title: "Nessun tracciamento", text: "Niente strumenti di analisi e niente pubblicità. Gli abbonamenti vengono verificati solo con un ID anonimo." },
      { title: "La salute resta in locale", text: "I dati di Apple Salute, la frequenza cardiaca e le risposte al questionario sulla salute non lasciano mai i tuoi dispositivi, nemmeno verso iCloud." },
      { title: "Fotocamera e IA sul dispositivo", text: "Il coach con fotocamera e il coach IA funzionano sul tuo iPhone. Il video non viene mai salvato né caricato." },
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
      "Coach con fotocamera: conta ripetizioni e valuta la tecnica",
      "App per Apple Watch con frequenza cardiaca in tempo reale",
      "Promemoria intelligenti che imparano la tua routine",
      "Piani progressivi da 12+ settimane e fino a 3 zone di focus",
      "Tutti i 119 esercizi e video",
      "Punteggio di prontezza e adattamento automatico giornaliero",
      "Coach IA sul dispositivo e briefing personali",
      "Grafici avanzati con esportazione CSV e PDF",
    ],
    note: "Abbonamento mensile, trimestrale o annuale; i piani possono includere una prova gratuita per gli utenti idonei. I prezzi sono indicati nell'app. Il coach IA richiede iOS 26 o successivo su un iPhone che supporta Apple Intelligence.",
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
        q: "Il coach con fotocamera mi registra?",
        a: "No. L'immagine della fotocamera viene analizzata sul tuo iPhone mentre ti alleni e non viene mai salvata né caricata. Puoi allenarti senza fotocamera in qualsiasi momento.",
      },
      {
        q: "Mi serve un Apple Watch?",
        a: "No. L'app per l'orologio è un extra Pro facoltativo per watchOS 10 o successivo: avvia la sessione di oggi dal polso, vedi la frequenza cardiaca in tempo reale e controlla l'allenamento dell'iPhone.",
      },
      {
        q: "Dove vengono salvati i miei dati?",
        a: "Sul tuo iPhone. Se iCloud è attivo, il piano e la cronologia delle sessioni si sincronizzano tramite il tuo iCloud privato. I dati sanitari non vengono mai salvati su iCloud e noi non vediamo mai i tuoi dati.",
      },
      {
        q: "Come disdico Atleva Pro?",
        a: "Nelle impostazioni del tuo account App Store, almeno 24 ore prima della fine del periodo in corso. Gli acquisti si possono ripristinare nelle impostazioni di Atleva.",
      },
    ],
  },
  cta: { title: "Il tuo prossimo allenamento ti aspetta già", text: "Scarica Atleva, scegli un obiettivo e inizia oggi: senza account, senza attrezzi, solo tu." },
  footer: {
    tagline: "Allenamenti a casa senza attrezzi per iPhone e Apple Watch.",
    legal: "Note legali",
    privacy: "Informativa sulla privacy",
    terms: "Termini d'uso",
    support: "Supporto",
    disclaimer:
      "Atleva offre indicazioni generali sull'attività fisica e non costituisce un consiglio medico. Consulta un medico prima di iniziare un nuovo programma di esercizi e fermati se senti dolore, vertigini o mancanza di fiato.",
  },
  legal: { updated: "Ultimo aggiornamento", back: "Torna alla home" },
};
