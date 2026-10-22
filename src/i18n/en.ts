import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Atleva – No-Equipment Home Workouts for iPhone",
    description:
      "Atleva builds a personal no-equipment home workout plan around your goal and focus areas, with 119 exercise videos and a plan that adapts to how you feel. No account, no ads, no tracking.",
  },
  nav: { features: "Features", privacy: "Privacy", pro: "Pro", faq: "FAQ", language: "Language", skip: "Skip to content" },
  hero: {
    eyebrow: "Home workouts for iPhone",
    title: "Your plan. Your space.",
    highlight: "Zero equipment.",
    subtitle:
      "Pick a goal, tap your focus areas on the body map and get a home program that progresses with you and adapts to how you feel — in about 2×2 m of floor space.",
    badges: ["No equipment", "No account", "No ads or tracking", "Works offline"],
    screenshotAlt: "Atleva's Today screen with today's workout ready to start",
  },
  appStore: { small: "Download on the", large: "App Store", soon: "Coming soon to the App Store" },
  trust: [
    { title: "119 exercise videos", text: "Short looping demos that work offline." },
    { title: "Based on guidelines", text: "Built on published ACSM and WHO recommendations." },
    { title: "Apple Health", text: "Optional — only the data you allow, kept on your device." },
    { title: "iOS 18 or later", text: "Built for iPhone, including iPhone Duo." },
  ],
  features: {
    title: "A personal trainer that fits in your living room",
    subtitle: "No gym, no gear, no guesswork — just a plan made for you.",
    items: [
      {
        title: "Pick one goal, get a plan",
        text: "Build muscle, lose fat, tone up, improve fitness, get more mobile or simply stay active. Atleva builds the plan around your goal and the time you actually have.",
        points: ["10, 20, 30 or 45-minute sessions", "2 to 6 days a week", "A 10-minute quick workout for busy days"],
        alt: "Goal selection screen in Atleva",
      },
      {
        title: "Tap the areas you want to train",
        text: "Choose up to three focus areas on the interactive body map — or go full body. Mark sensitive joints and risky moves are swapped out.",
        points: [
          "Chest, shoulders, arms, abs, back, glutes, legs and more",
          "Protects sensitive knees, lower back, shoulders, wrists and neck",
          "Honest: no workout burns fat from one spot",
        ],
        alt: "Interactive body map with focus areas selected",
      },
      {
        title: "Every move on video",
        text: "Each exercise has a short looping demo, clear technique cues and the mistakes to avoid. Too hard or too easy? Switch to an easier or harder version in one tap.",
        points: ["119 exercises, all offline", "Slow-motion playback", "Warm-up and cool-down in every session"],
        alt: "Workout screen with an exercise video and a timer",
      },
      {
        title: "Quiet enough for an apartment",
        text: "Quiet mode picks no-jump exercises so you can train early in the morning or late at night without bothering the neighbours.",
        points: ["Needs about 2×2 m (7×7 ft) of floor", "Optional household helpers: a wall, a chair, a towel", "No equipment to buy"],
        alt: "Quiet mode settings with no-jump exercises",
      },
      {
        title: "A plan that grows with you",
        text: "Rate how hard each session felt and the next ones adjust. Progressive overload builds you up, and every fourth week is a lighter deload week.",
        points: ["Balanced weekly schedule", "Adjusts when you're tired or short on time", "Progressions from easier to harder moves"],
        alt: "Weekly plan with upcoming sessions",
      },
      {
        title: "Works with Apple Health",
        text: "With your permission, Atleva uses your Health data to personalize your plan and estimates, and saves your completed workouts to Health.",
        points: ["Body analysis estimates: BMI, energy use, body fat", "Readiness score from HRV, resting heart rate and sleep (Pro)", "Health data is never stored in iCloud"],
        alt: "Body analysis screen with Apple Health data",
      },
    ],
  },
  privacy: {
    eyebrow: "Private by design",
    title: "Your training is your business",
    text: "Atleva has no account and no server. Your plan and history stay on your iPhone and, if you like, in your own private iCloud.",
    points: [
      { title: "No tracking", text: "No analytics, no advertising and no third-party SDKs." },
      { title: "Health stays local", text: "Apple Health data and screening answers never leave your device — not even to iCloud." },
      { title: "On-device AI", text: "The coach runs on Apple Intelligence on your iPhone. Nothing is sent to the cloud." },
      { title: "Delete anytime", text: "One tap removes your plan, sessions and settings from the device and iCloud." },
    ],
    link: "Read the privacy policy",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Start free. Go Pro when you want more.",
    subtitle: "The free version gets you training today. Atleva Pro is an optional subscription for longer plans and smarter guidance.",
    freeTitle: "Free",
    free: [
      "A personal 4-week plan",
      "One focus area",
      "47 core exercises with video",
      "Effort ratings and plan adjustments",
      "Body analysis estimates and progress",
      "Apple Health, widgets and Live Activities",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "12+ week progressive plans that renew automatically",
      "Up to 3 focus areas",
      "All 119 exercises and videos",
      "Readiness score and daily auto-adjustment",
      "On-device AI coach and personal briefings",
      "Personal plan video",
      "Advanced charts with CSV and PDF export",
      "Alternative app icons",
    ],
    note: "Monthly or yearly subscription; the yearly plan may include a free trial for eligible users. Prices are shown in the app. The AI coach needs iOS 26 or later on an iPhone that supports Apple Intelligence.",
    progressAlt: "Progress charts with weekly volume",
    coachAlt: "AI coach suggesting an adjusted session",
  },
  faq: {
    title: "Questions",
    items: [
      {
        q: "Do I need any equipment?",
        a: "No. Every exercise uses your body weight. A wall, a sturdy chair or a towel can help with some moves, but they're optional.",
      },
      {
        q: "How much space do I need?",
        a: "About 2×2 m (7×7 ft) of floor. Turn on quiet mode for no-jump exercises.",
      },
      {
        q: "Is Atleva right for beginners?",
        a: "Yes. The plan starts at your level and every move has easier and harder versions. If you have a health condition, are pregnant or recovering from an injury, talk to a doctor first.",
      },
      {
        q: "Where is my data stored?",
        a: "On your iPhone. If iCloud is on, your plan and session history sync through your own private iCloud. Health data is never stored in iCloud, and we never see your data.",
      },
      {
        q: "Do I need Apple Health or an Apple Watch?",
        a: "No. Both are optional. With them, Atleva can personalize your estimates and calculate a readiness score.",
      },
      {
        q: "How do I cancel Atleva Pro?",
        a: "In your App Store account settings, at least 24 hours before the end of the current period. Purchases can be restored in Atleva's settings.",
      },
    ],
  },
  cta: { title: "Your next workout is already waiting", text: "Download Atleva, pick a goal and start today — no account, no equipment." },
  footer: {
    tagline: "No-equipment home workouts for iPhone.",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    disclaimer:
      "Atleva offers general fitness guidance and is not medical advice. Talk to a doctor before starting a new exercise program, and stop if you feel pain, dizziness or shortness of breath.",
  },
  legal: { updated: "Last updated", back: "Back to home" },
};
