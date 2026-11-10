import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "Atleva – Entrenamientos en casa sin material para iPhone y Apple Watch",
    description:
      "Atleva crea un plan personal de entrenamiento en casa sin material a partir de tu objetivo, con 119 vídeos de ejercicios, un coach con cámara que cuenta tus repeticiones, una app para Apple Watch y un plan que se adapta a cómo te sientes. Sin cuenta, sin anuncios.",
  },
  nav: { menu: "Menú", new: "Novedades", features: "Funciones", privacy: "Privacidad", pro: "Pro", faq: "Preguntas", language: "Idioma", skip: "Saltar al contenido" },
  hero: {
    newBadge: "Nuevo en 1.1: coach con cámara y Apple Watch",
    title: "Tu salón.",
    highlight: "Tu mejor versión.",
    subtitle:
      "Un plan personal de entrenamiento en casa que cuenta tus repeticiones, te acompaña en la muñeca y se adapta a cómo te sientes. Sin gimnasio ni material: te bastan unos 2×2 m de suelo.",
    badges: ["Sin material", "Sin cuenta", "Sin anuncios", "Desde 10 minutos"],
    screenshotAlt: "Pantalla Hoy de Atleva con el entreno de hoy listo para empezar",
    watchAlt: "Atleva en el Apple Watch durante un entreno, con repeticiones y pulso",
    chips: { heartRate: "124 lpm", streak: "Racha de 10 sesiones", form: "Técnica 95 %" },
  },
  appStore: { small: "Descargar en el", large: "App Store", soon: "Próximamente en el App Store" },
  marquee: [
    "Sin material",
    "Entrenos de 10 minutos",
    "Coach con cámara",
    "Apple Watch",
    "Modo silencioso",
    "Recordatorios inteligentes",
    "Mapa corporal",
    "Apple Salud",
    "Plan que se adapta",
    "Privada por diseño",
  ],
  stats: { exercises: "ejercicios con vídeo", minutes: "minutos bastan para empezar", space: "de suelo", equipment: "material que comprar" },
  whatsNew: {
    eyebrow: "Nuevo en Atleva 1.1",
    title: "Tu coach ahora tiene ojos, voz y muñeca",
    subtitle: "Cuatro mejoras para que te cueste menos empezar y cada repetición salga bien.",
    camera: {
      title: "Coach con cámara",
      text: "Apoya el iPhone en el suelo y entrena. El coach te indica dónde ponerte, cuenta tus repeticiones, puntúa tu técnica y te dice qué corregir.",
      points: ["Cuenta repeticiones y tiempos de forma automática", "Puntuación de técnica con un consejo claro", "Se analiza en tu iPhone y nunca se guarda"],
      alt: "Coach con cámara contando sentadillas con una técnica del 95 %",
    },
    watch: {
      title: "App para Apple Watch",
      text: "Empieza la sesión de hoy desde la muñeca con pulso en directo, o sigue y controla el entreno del iPhone desde el reloj.",
      points: ["Pulso en directo en el iPhone y el reloj", "Complicaciones con la sesión de hoy y tu racha", "Funciona con watchOS 10 o posterior"],
      alts: ["La sesión de hoy en el Apple Watch", "El Apple Watch siguiendo el entreno del iPhone", "Un entreno en marcha en el Apple Watch"],
    },
    reminders: {
      title: "Recordatorios inteligentes",
      text: "Aprenden cuándo sueles entrenar, te dicen qué trae la próxima sesión y te ayudan a mantener la racha.",
      now: "ahora",
      samples: [
        { title: "Sesión de fuerza · 30 min", text: "Se acerca tu hora habitual. Tienes 9 ejercicios listos." },
        { title: "Mantén tu racha de 10 sesiones", text: "Un entreno de 10 minutos también cuenta hoy." },
        { title: "Tu semana", text: "3 de 4 sesiones hechas. ¡Buen trabajo!" },
      ],
    },
    voice: {
      title: "Voz de coach natural",
      text: "Una voz que suena humana te da la salida, anuncia el siguiente ejercicio y te anima sin que mires la pantalla. Descárgala en tu idioma si está disponible.",
      quote: "Última serie. ¡Aguanta, que tú puedes!",
    },
    smaller: {
      title: "Descarga más ligera",
      text: "Algunos vídeos de ejercicios se descargan cuando los necesitas y luego funcionan sin conexión.",
    },
  },
  features: {
    eyebrow: "Todo en un solo plan",
    title: "Un entrenador personal que cabe en tu salón",
    subtitle: "Sin gimnasio, sin material, sin improvisar: solo un plan hecho para ti.",
    items: [
      {
        title: "Elige un objetivo y recibe un plan",
        text: "Ganar músculo, perder grasa, tonificar, mejorar tu condición física, ganar movilidad o simplemente mantenerte activo. Atleva crea el plan en torno a tu objetivo y al tiempo que de verdad tienes.",
        points: ["Sesiones de 10, 20, 30 o 45 minutos", "De 2 a 6 días por semana", "Un entreno rápido de 10 minutos para los días con prisa"],
        alt: "Pantalla de selección de objetivo en Atleva",
      },
      {
        title: "Toca las zonas que quieres entrenar",
        text: "Elige hasta tres zonas de enfoque en el mapa corporal interactivo, o entrena el cuerpo completo. Marca tus articulaciones sensibles y se cambian los ejercicios de riesgo.",
        points: [
          "Pecho, hombros, brazos, abdomen, espalda, glúteos, piernas y más",
          "Protege rodillas, zona lumbar, hombros, muñecas y cuello sensibles",
          "Con sinceridad: ningún entreno quema grasa de una zona concreta",
        ],
        alt: "Mapa corporal interactivo con zonas de enfoque seleccionadas",
      },
      {
        title: "Cada ejercicio, en vídeo",
        text: "Cada ejercicio tiene una demostración corta en bucle, claves de técnica claras y los errores que debes evitar. ¿Demasiado difícil o demasiado fácil? Cambia a una versión más fácil o más difícil con un toque.",
        points: ["119 ejercicios con vídeo", "Los vídeos funcionan sin conexión una vez descargados", "Calentamiento y vuelta a la calma en cada sesión"],
        alt: "Pantalla de entreno con un vídeo del ejercicio y un temporizador",
      },
      {
        title: "Tan silencioso que vale para un piso",
        text: "El modo silencioso elige ejercicios sin saltos para que puedas entrenar a primera hora de la mañana o tarde por la noche sin molestar a los vecinos.",
        points: ["Necesitas unos 2×2 m (7×7 ft) de suelo", "Objetos de casa opcionales: una pared, una silla, una toalla", "Sin material que comprar"],
        alt: "Ajustes del modo silencioso con ejercicios sin saltos",
      },
      {
        title: "Un plan que crece contigo",
        text: "Valora lo duro que te ha parecido cada sesión y las siguientes se ajustan. La sobrecarga progresiva te hace avanzar, y cada cuatro semanas hay una semana de descarga más ligera.",
        points: ["Planificación semanal equilibrada", "Se ajusta cuando estás cansado o vas justo de tiempo", "Progresiones de ejercicios más fáciles a más difíciles"],
        alt: "Plan semanal con las próximas sesiones",
      },
      {
        title: "Funciona con Apple Salud",
        text: "Con tu permiso, Atleva usa tus datos de Salud para personalizar tu plan y tus estimaciones, y guarda en Salud los entrenamientos que completas.",
        points: ["Estimaciones de análisis corporal: IMC, gasto energético, grasa corporal", "Índice de preparación a partir de la VFC, la frecuencia cardiaca en reposo y el sueño (Pro)", "Los datos de salud nunca se guardan en iCloud"],
        alt: "Pantalla de análisis corporal con datos de Apple Salud",
      },
    ],
  },
  motivation: {
    eyebrow: "Por qué hoy",
    title: "Diez minutos ganan a cero. Siempre.",
    text: "No necesitas una semana perfecta, sino la próxima sesión. Atleva la hace lo bastante corta para empezar y lo bastante inteligente para que sigas.",
    steps: [
      { title: "Empieza poco a poco", text: "Una sesión de 10 minutos en un día ajetreado también suma a tu semana." },
      { title: "No faltes", text: "Recordatorios a tu hora habitual, una racha que proteger y tu plan listo con un toque." },
      { title: "Hazte más fuerte", text: "Tu plan añade repeticiones, tiempo y ejercicios más difíciles a medida que mejoras." },
    ],
    days: ["L", "M", "X", "J", "V", "S", "D"],
    ringLabel: "minutos",
    weekLabel: "Esta semana",
  },
  privacy: {
    eyebrow: "Privada desde el diseño",
    title: "Tu entrenamiento es cosa tuya",
    text: "Atleva no tiene cuentas. Tu plan y tu historial se quedan en tu iPhone y, si quieres, en tu propio iCloud privado.",
    points: [
      { title: "Sin rastreo", text: "Sin analíticas y sin publicidad. Las suscripciones se comprueban solo con un ID anónimo." },
      { title: "La salud se queda en local", text: "Los datos de Apple Salud, el pulso y las respuestas del cuestionario de salud nunca salen de tus dispositivos, ni siquiera a iCloud." },
      { title: "Cámara e IA en el dispositivo", text: "El coach con cámara y el coach con IA funcionan en tu iPhone. El vídeo nunca se guarda ni se sube." },
      { title: "Bórralo cuando quieras", text: "Con un toque eliminas tu plan, tus sesiones y tus ajustes del dispositivo y de iCloud." },
    ],
    link: "Leer la política de privacidad",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Empieza gratis. Pásate a Pro cuando quieras más.",
    subtitle: "Con la versión gratuita empiezas a entrenar hoy mismo. Atleva Pro es una suscripción opcional para planes más largos y una orientación más inteligente.",
    freeTitle: "Gratis",
    free: [
      "Un plan personal de 4 semanas",
      "Una zona de enfoque",
      "47 ejercicios básicos con vídeo",
      "Valoración del esfuerzo y ajustes del plan",
      "Estimaciones de análisis corporal y progreso",
      "Apple Salud, widgets y Actividades en Directo",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "Coach con cámara: cuenta repeticiones y puntúa tu técnica",
      "App para Apple Watch con pulso en directo",
      "Recordatorios inteligentes que aprenden tu rutina",
      "Planes progresivos de 12 semanas o más y hasta 3 zonas de enfoque",
      "Los 119 ejercicios y vídeos",
      "Índice de preparación y ajuste automático diario",
      "Coach con IA en el dispositivo y resúmenes personales",
      "Gráficos avanzados con exportación a CSV y PDF",
    ],
    note: "Suscripción mensual, trimestral o anual; los planes pueden incluir una prueba gratuita para usuarios que cumplan los requisitos. Los precios se muestran en la app. El coach con IA requiere iOS 26 o posterior en un iPhone compatible con Apple Intelligence.",
    progressAlt: "Gráficos de progreso con el volumen semanal",
    coachAlt: "Coach con IA sugiriendo una sesión ajustada",
  },
  faq: {
    title: "Preguntas",
    items: [
      {
        q: "¿Necesito algún material?",
        a: "No. Todos los ejercicios usan tu peso corporal. Una pared, una silla firme o una toalla pueden ayudar en algunos ejercicios, pero son opcionales.",
      },
      {
        q: "¿Cuánto espacio necesito?",
        a: "Unos 2×2 m (7×7 ft) de suelo. Activa el modo silencioso para hacer ejercicios sin saltos.",
      },
      {
        q: "¿Atleva es adecuada para principiantes?",
        a: "Sí. El plan empieza en tu nivel y cada ejercicio tiene versiones más fáciles y más difíciles. Si tienes alguna condición de salud, estás embarazada o te estás recuperando de una lesión, consulta antes con un médico.",
      },
      {
        q: "¿El coach con cámara me graba?",
        a: "No. La imagen de la cámara se analiza en tu iPhone mientras entrenas y nunca se guarda ni se sube. Puedes entrenar sin la cámara siempre que quieras.",
      },
      {
        q: "¿Necesito un Apple Watch?",
        a: "No. La app del reloj es un extra opcional de Pro para watchOS 10 o posterior: empieza la sesión de hoy desde la muñeca, mira tu pulso en directo y controla el entreno del iPhone.",
      },
      {
        q: "¿Dónde se guardan mis datos?",
        a: "En tu iPhone. Si iCloud está activado, tu plan y tu historial de sesiones se sincronizan a través de tu propio iCloud privado. Los datos de salud nunca se guardan en iCloud, y nosotros nunca vemos tus datos.",
      },
      {
        q: "¿Cómo cancelo Atleva Pro?",
        a: "En los ajustes de tu cuenta del App Store, al menos 24 horas antes del final del periodo en curso. Puedes restaurar las compras en los ajustes de Atleva.",
      },
    ],
  },
  cta: { title: "Tu próximo entreno ya te está esperando", text: "Descarga Atleva, elige un objetivo y empieza hoy: sin cuenta, sin material, solo tú." },
  footer: {
    tagline: "Entrenamientos en casa sin material para iPhone y Apple Watch.",
    legal: "Legal",
    privacy: "Política de privacidad",
    terms: "Condiciones de uso",
    support: "Soporte",
    disclaimer:
      "Atleva ofrece orientación general sobre ejercicio y no es consejo médico. Consulta con un médico antes de empezar un nuevo programa de ejercicio y detente si sientes dolor, mareo o falta de aire.",
  },
  legal: { updated: "Última actualización", back: "Volver al inicio" },
};
