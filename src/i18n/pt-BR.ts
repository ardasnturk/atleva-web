import type { Dictionary } from "./types";

export const ptBR: Dictionary = {
  meta: {
    title: "Atleva – Treinos em casa sem equipamento para iPhone",
    description:
      "O Atleva monta um plano de treino em casa sem equipamento de acordo com seu objetivo e suas áreas de foco, com 119 vídeos de exercícios e um plano que se ajusta a como você se sente. Sem conta, sem anúncios, sem rastreamento.",
  },
  nav: { features: "Recursos", privacy: "Privacidade", pro: "Pro", faq: "Perguntas", language: "Idioma", skip: "Pular para o conteúdo" },
  hero: {
    eyebrow: "Treinos em casa para iPhone",
    title: "Seu plano. Seu espaço.",
    highlight: "Zero equipamento.",
    subtitle:
      "Escolha um objetivo, toque nas suas áreas de foco no mapa do corpo e receba um programa em casa que evolui com você e se ajusta a como você se sente — em um espaço de uns 2×2 m.",
    badges: ["Sem equipamento", "Sem conta", "Sem anúncios nem rastreamento", "Funciona offline"],
    screenshotAlt: "Tela Hoje do Atleva com o treino do dia pronto para começar",
  },
  appStore: { small: "Baixar na", large: "App Store", soon: "Em breve na App Store" },
  trust: [
    { title: "119 vídeos de exercícios", text: "Demonstrações curtas em loop que funcionam offline." },
    { title: "Baseado em diretrizes", text: "Construído sobre recomendações publicadas do ACSM e da OMS." },
    { title: "App Saúde", text: "Opcional — só os dados que você permitir, mantidos no seu dispositivo." },
    { title: "iOS 18 ou posterior", text: "Feito para iPhone, incluindo o iPhone Duo." },
  ],
  features: {
    title: "Um personal trainer que cabe na sua sala",
    subtitle: "Sem academia, sem equipamento, sem achismo — só um plano feito para você.",
    items: [
      {
        title: "Escolha um objetivo e receba um plano",
        text: "Ganhar massa muscular, perder gordura, tonificar, melhorar o condicionamento, ganhar mobilidade ou simplesmente se manter ativo. O Atleva monta o plano de acordo com seu objetivo e o tempo que você realmente tem.",
        points: ["Sessões de 10, 20, 30 ou 45 minutos", "De 2 a 6 dias por semana", "Treino rápido de 10 minutos para dias corridos"],
        alt: "Tela de escolha de objetivo no Atleva",
      },
      {
        title: "Toque nas áreas que você quer treinar",
        text: "Escolha até três áreas de foco no mapa interativo do corpo — ou treine o corpo inteiro. Marque as articulações sensíveis e os exercícios de risco são trocados.",
        points: [
          "Peito, ombros, braços, abdômen, costas, glúteos, pernas e mais",
          "Protege joelhos, lombar, ombros, punhos e pescoço sensíveis",
          "Sendo honesto: nenhum treino queima gordura localizada",
        ],
        alt: "Mapa interativo do corpo com áreas de foco selecionadas",
      },
      {
        title: "Todos os exercícios em vídeo",
        text: "Cada exercício tem uma demonstração curta em loop, dicas claras de técnica e os erros a evitar. Difícil ou fácil demais? Troque para uma versão mais fácil ou mais difícil com um toque.",
        points: ["119 exercícios, todos offline", "Reprodução em câmera lenta", "Aquecimento e desaquecimento em todas as sessões"],
        alt: "Tela de treino com vídeo do exercício e cronômetro",
      },
      {
        title: "Silencioso o bastante para apartamento",
        text: "O modo silencioso escolhe exercícios sem saltos, para você treinar de manhã cedo ou tarde da noite sem incomodar os vizinhos.",
        points: ["Precisa de uns 2×2 m de chão", "Itens de casa opcionais: parede, cadeira, toalha", "Nenhum equipamento para comprar"],
        alt: "Ajustes do modo silencioso com exercícios sem saltos",
      },
      {
        title: "Um plano que evolui com você",
        text: "Avalie o quanto cada sessão foi difícil e as próximas se ajustam. A sobrecarga progressiva faz você evoluir, e a cada quatro semanas há uma semana mais leve de recuperação.",
        points: ["Agenda semanal equilibrada", "Se ajusta quando você está cansado ou com pouco tempo", "Progressões de exercícios mais fáceis para mais difíceis"],
        alt: "Plano semanal com as próximas sessões",
      },
      {
        title: "Funciona com o app Saúde",
        text: "Com sua permissão, o Atleva usa seus dados do app Saúde para personalizar seu plano e suas estimativas, e grava no Saúde os treinos que você conclui.",
        points: ["Estimativas corporais: IMC, gasto energético, gordura corporal", "Pontuação de prontidão a partir de VFC, frequência cardíaca em repouso e sono (Pro)", "Os dados de saúde nunca são armazenados no iCloud"],
        alt: "Tela de análise corporal com dados do app Saúde",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacidade desde a concepção",
    title: "Seu treino só diz respeito a você",
    text: "O Atleva não tem conta nem servidor. Seu plano e seu histórico ficam no seu iPhone e, se você quiser, no seu iCloud privado.",
    points: [
      { title: "Sem rastreamento", text: "Sem análises, sem publicidade e sem SDKs de terceiros." },
      { title: "Saúde fica no aparelho", text: "Os dados do app Saúde e as respostas da triagem nunca saem do seu dispositivo — nem para o iCloud." },
      { title: "IA no dispositivo", text: "O coach funciona com a Apple Intelligence no seu iPhone. Nada é enviado para a nuvem." },
      { title: "Apague quando quiser", text: "Um toque remove seu plano, suas sessões e seus ajustes do dispositivo e do iCloud." },
    ],
    link: "Ler a política de privacidade",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Comece grátis. Assine o Pro quando quiser mais.",
    subtitle: "A versão grátis já faz você treinar hoje. O Atleva Pro é uma assinatura opcional para planos mais longos e orientação mais inteligente.",
    freeTitle: "Grátis",
    free: [
      "Um plano personalizado de 4 semanas",
      "Uma área de foco",
      "47 exercícios essenciais com vídeo",
      "Avaliação de esforço e ajustes no plano",
      "Estimativas corporais e evolução",
      "App Saúde, widgets e Atividades ao Vivo",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "Planos progressivos de 12 semanas ou mais que se renovam automaticamente",
      "Até 3 áreas de foco",
      "Todos os 119 exercícios e vídeos",
      "Pontuação de prontidão e ajuste automático diário",
      "Coach com IA no dispositivo e resumos personalizados",
      "Vídeo do seu plano",
      "Gráficos avançados com exportação em CSV e PDF",
      "Ícones alternativos do app",
    ],
    note: "Assinatura mensal ou anual; o plano anual pode incluir um teste gratuito para usuários elegíveis. Os preços são exibidos no app. O coach com IA requer o iOS 26 ou posterior em um iPhone compatível com a Apple Intelligence.",
    progressAlt: "Gráficos de evolução com volume semanal",
    coachAlt: "Coach com IA sugerindo uma sessão ajustada",
  },
  faq: {
    title: "Perguntas",
    items: [
      {
        q: "Preciso de algum equipamento?",
        a: "Não. Todos os exercícios usam o peso do corpo. Uma parede, uma cadeira firme ou uma toalha podem ajudar em alguns movimentos, mas são opcionais.",
      },
      {
        q: "De quanto espaço eu preciso?",
        a: "Uns 2×2 m de chão. Ative o modo silencioso para exercícios sem saltos.",
      },
      {
        q: "O Atleva é bom para iniciantes?",
        a: "Sim. O plano começa no seu nível e todo exercício tem versões mais fáceis e mais difíceis. Se você tem algum problema de saúde, está grávida ou se recuperando de uma lesão, fale antes com um médico.",
      },
      {
        q: "Onde meus dados ficam armazenados?",
        a: "No seu iPhone. Se o iCloud estiver ativado, seu plano e seu histórico de sessões são sincronizados pelo seu iCloud privado. Os dados de saúde nunca são armazenados no iCloud, e nós nunca vemos seus dados.",
      },
      {
        q: "Preciso do app Saúde ou de um Apple Watch?",
        a: "Não. Os dois são opcionais. Com eles, o Atleva pode personalizar suas estimativas e calcular um pontuação de prontidão.",
      },
      {
        q: "Como cancelo o Atleva Pro?",
        a: "Nos ajustes da sua conta da App Store, pelo menos 24 horas antes do fim do período atual. As compras podem ser restauradas nos ajustes do Atleva.",
      },
    ],
  },
  cta: { title: "Seu próximo treino já está esperando", text: "Baixe o Atleva, escolha um objetivo e comece hoje — sem conta, sem equipamento." },
  footer: {
    tagline: "Treinos em casa sem equipamento para iPhone.",
    legal: "Informações legais",
    privacy: "Política de Privacidade",
    terms: "Termos de Uso",
    support: "Suporte",
    disclaimer:
      "O Atleva oferece orientações gerais de exercício e não é aconselhamento médico. Fale com um médico antes de começar um novo programa de exercícios e pare se sentir dor, tontura ou falta de ar.",
  },
  legal: { updated: "Última atualização", back: "Voltar ao início" },
};
