import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Atleva – No-Equipment Home Workouts for iPhone & Apple Watch",
    description:
      "Atleva builds a personal no-equipment home workout plan around your goal, with 119 exercise videos, a camera coach that counts your reps, an Apple Watch app and a plan that adapts to how you feel. No account, no ads.",
  },
  nav: { menu: "Menu", new: "What's new", features: "Features", privacy: "Privacy", pro: "Pro", faq: "FAQ", language: "Language", skip: "Skip to content" },
  hero: {
    newBadge: "New in 1.1 — camera coach & Apple Watch",
    title: "Your living room.",
    highlight: "Your strongest self.",
    subtitle:
      "A personal home workout plan that counts your reps, follows you onto your wrist and adapts to how you feel. No gym, no gear — about 2×2 m of floor is enough.",
    badges: ["No equipment", "No account", "No ads", "From 10 minutes"],
    screenshotAlt: "Atleva's Today screen with today's workout ready to start",
    watchAlt: "Atleva on Apple Watch during a workout, showing reps and heart rate",
    chips: { heartRate: "124 bpm", streak: "10 session streak", form: "Form 95%" },
  },
  appStore: { small: "Download on the", large: "App Store", soon: "Coming soon to the App Store" },
  marquee: [
    "No equipment",
    "10-minute workouts",
    "Camera coach",
    "Apple Watch",
    "Quiet mode",
    "Smart reminders",
    "Body map",
    "Apple Health",
    "Plan that adapts",
    "Private by design",
  ],
  stats: { exercises: "exercises with video", minutes: "minutes is enough to start", space: "of floor space", equipment: "equipment to buy" },
  whatsNew: {
    eyebrow: "New in Atleva 1.1",
    title: "Your coach just got eyes, a voice and a wrist",
    subtitle: "Four upgrades that make it easier to show up — and to get every rep right.",
    camera: {
      title: "Camera coach",
      text: "Lean your iPhone on the floor and train. The coach shows you where to stand, counts your reps, scores your form and tells you what to fix.",
      points: ["Counts reps and holds automatically", "Form score with one clear tip", "Analyzed on your iPhone, never saved"],
      alt: "Camera coach counting squats with a form score of 95%",
    },
    watch: {
      title: "Apple Watch app",
      text: "Start today's session from your wrist with live heart rate, or follow and control your iPhone workout from the watch.",
      points: ["Live heart rate on iPhone and watch", "Complications for today's session and your streak", "Works on watchOS 10 and later"],
      alts: ["Today's session on Apple Watch", "Apple Watch following the iPhone workout", "A workout running on Apple Watch"],
    },
    reminders: {
      title: "Smart reminders",
      text: "They learn when you usually train, tell you what's in the next session and help protect your streak.",
      now: "now",
      samples: [
        { title: "Strength session · 30 min", text: "Your usual time is coming up. 9 moves are ready." },
        { title: "Keep your 10-session streak", text: "A 10-minute workout still counts today." },
        { title: "Your week", text: "3 of 4 sessions done. Nice work!" },
      ],
    },
    voice: {
      title: "Natural coach voice",
      text: "A human-sounding voice counts you in, calls out the next move and keeps you going — no need to look at the screen. Download it for your language where available.",
      quote: "Last set. Stay strong, you've got this!",
    },
    smaller: {
      title: "Smaller download",
      text: "Some exercise videos now download when you need them, then work offline.",
    },
  },
  features: {
    eyebrow: "Everything in one plan",
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
        points: ["119 exercises with video", "Videos work offline once downloaded", "Warm-up and cool-down in every session"],
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
  motivation: {
    eyebrow: "Why today",
    title: "Ten minutes beats zero. Every time.",
    text: "You don't need a perfect week — you need the next session. Atleva makes it small enough to start and smart enough to keep you going.",
    steps: [
      { title: "Start small", text: "A 10-minute session on a busy day still counts toward your week." },
      { title: "Show up", text: "Reminders at your usual time, a streak to protect and your plan ready in one tap." },
      { title: "Get stronger", text: "Your plan adds reps, time and harder moves as you improve." },
    ],
    days: ["M", "T", "W", "T", "F", "S", "S"],
    ringLabel: "minutes",
    weekLabel: "This week",
  },
  privacy: {
    eyebrow: "Private by design",
    title: "Your training is your business",
    text: "Atleva has no account. Your plan and history stay on your iPhone and, if you like, in your own private iCloud.",
    points: [
      { title: "No tracking", text: "No analytics and no advertising. Subscriptions are checked with an anonymous ID only." },
      { title: "Health stays local", text: "Apple Health data, heart rate and screening answers never leave your devices — not even to iCloud." },
      { title: "On-device camera & AI", text: "The camera coach and the AI coach run on your iPhone. Video is never saved or uploaded." },
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
      "Camera coach: rep counting and form score",
      "Apple Watch app with live heart rate",
      "Smart reminders that learn your routine",
      "12+ week progressive plans and up to 3 focus areas",
      "All 119 exercises and videos",
      "Readiness score and daily auto-adjustment",
      "On-device AI coach and personal briefings",
      "Advanced charts with CSV and PDF export",
    ],
    note: "Monthly, 3-month or yearly subscription; plans may include a free trial for eligible users. Prices are shown in the app. The AI coach needs iOS 26 or later on an iPhone that supports Apple Intelligence.",
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
        q: "Does the camera coach record me?",
        a: "No. The camera image is analyzed on your iPhone while you train and is never saved or uploaded. You can train without the camera at any time.",
      },
      {
        q: "Do I need an Apple Watch?",
        a: "No. The watch app is an optional Pro extra for watchOS 10 or later: start today's session from your wrist, see live heart rate and control your iPhone workout.",
      },
      {
        q: "Where is my data stored?",
        a: "On your iPhone. If iCloud is on, your plan and session history sync through your own private iCloud. Health data is never stored in iCloud, and we never see your data.",
      },
      {
        q: "How do I cancel Atleva Pro?",
        a: "In your App Store account settings, at least 24 hours before the end of the current period. Purchases can be restored in Atleva's settings.",
      },
    ],
  },
  cta: { title: "Your next workout is already waiting", text: "Download Atleva, pick a goal and start today — no account, no equipment, just you." },
  footer: {
    tagline: "No-equipment home workouts for iPhone and Apple Watch.",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    support: "Support",
    disclaimer:
      "Atleva offers general fitness guidance and is not medical advice. Talk to a doctor before starting a new exercise program, and stop if you feel pain, dizziness or shortness of breath.",
  },
  legal: { updated: "Last updated", back: "Back to home" },
};
