import type { Dictionary } from "./types";

export const tr: Dictionary = {
  meta: {
    title: "Atleva – iPhone ve Apple Watch için Aletsiz Evde Spor",
    description:
      "Atleva, hedefine göre sana özel, aletsiz bir evde spor programı hazırlar: 119 hareket videosu, tekrarlarını sayan kamera koçu, Apple Watch uygulaması ve kendini nasıl hissettiğine uyum sağlayan bir program. Hesap yok, reklam yok.",
  },
  nav: { menu: "Menü", new: "Yenilikler", features: "Özellikler", privacy: "Gizlilik", pro: "Pro", faq: "SSS", language: "Dil", skip: "İçeriğe geç" },
  hero: {
    newBadge: "1.1'de yeni — kamera koçu ve Apple Watch",
    title: "Evin artık spor salonun.",
    highlight: "En güçlü hâline merhaba.",
    subtitle:
      "Tekrarlarını sayan, bileğine kadar seninle gelen ve kendini nasıl hissettiğine uyum sağlayan, sana özel bir evde spor programı. Spor salonu yok, ekipman yok — yaklaşık 2×2 m boş alan yeterli.",
    badges: ["Alet gerekmez", "Hesap gerekmez", "Reklam yok", "10 dakikadan başlayan"],
    screenshotAlt: "Atleva'nın Bugün ekranı, günün antrenmanı başlamaya hazır",
    watchAlt: "Antrenman sırasında Apple Watch'ta Atleva: tekrarlar ve nabız",
    chips: { heartRate: "124 bpm", streak: "10 seanslık seri", form: "Form %95" },
  },
  appStore: { small: "App Store'dan", large: "İndirin", soon: "Yakında App Store'da" },
  marquee: [
    "Alet gerekmez",
    "10 dakikalık antrenmanlar",
    "Kamera koçu",
    "Apple Watch",
    "Sessiz mod",
    "Akıllı hatırlatmalar",
    "Vücut haritası",
    "Apple Sağlık",
    "Uyum sağlayan program",
    "Tasarımı gereği gizli",
  ],
  stats: { exercises: "videolu hareket", minutes: "dakika başlamak için yeterli", space: "boş alan", equipment: "alet almana gerek yok" },
  whatsNew: {
    eyebrow: "Atleva 1.1'de yeni",
    title: "Koçunun artık gözleri, sesi ve bileği var",
    subtitle: "Antrenmana başlamayı kolaylaştıran — ve her tekrarı doğru yapmanı sağlayan dört yenilik.",
    camera: {
      title: "Kamera koçu",
      text: "iPhone'unu yere yasla ve antrenmana başla. Koç nerede durman gerektiğini gösterir, tekrarlarını sayar, formunu puanlar ve neyi düzeltmen gerektiğini söyler.",
      points: ["Tekrarları ve tutuşları otomatik sayar", "Form puanı ve tek, net bir ipucu", "iPhone'unda işlenir, asla kaydedilmez"],
      alt: "Squat'ları sayan ve %95 form puanı veren kamera koçu",
    },
    watch: {
      title: "Apple Watch uygulaması",
      text: "Bugünkü seansı canlı nabızla bileğinden başlat ya da iPhone'daki antrenmanı saatten takip edip yönet.",
      points: ["iPhone'da ve saatte canlı nabız", "Bugünkü seans ve serin için komplikasyonlar", "watchOS 10 ve üzerinde çalışır"],
      alts: ["Apple Watch'ta bugünkü seans", "iPhone'daki antrenmanı takip eden Apple Watch", "Apple Watch'ta süren bir antrenman"],
    },
    reminders: {
      title: "Akıllı hatırlatmalar",
      text: "Genelde ne zaman antrenman yaptığını öğrenir, sıradaki seansın içeriğini söyler ve serini korumana yardım eder.",
      now: "şimdi",
      samples: [
        { title: "Kuvvet seansı · 30 dk", text: "Her zamanki saatin yaklaşıyor. 9 hareket hazır." },
        { title: "10 seanslık serini koru", text: "10 dakikalık bir antrenman da bugün sayılır." },
        { title: "Haftan", text: "4 seansın 3'ü tamam. Harika gidiyorsun!" },
      ],
    },
    voice: {
      title: "Doğal koç sesi",
      text: "İnsan gibi konuşan bir ses seni saydırır, sıradaki hareketi söyler ve motive eder — ekrana bakmana gerek yok. Mevcut olduğu dillerde kendi dilin için indir.",
      quote: "Son set. Dayan, başarıyorsun!",
    },
    smaller: {
      title: "Daha küçük indirme",
      text: "Bazı hareket videoları artık gerektiğinde iniyor, sonra internetsiz çalışıyor.",
    },
  },
  features: {
    eyebrow: "Her şey tek programda",
    title: "Oturma odana sığan bir kişisel antrenör",
    subtitle: "Spor salonu yok, ekipman yok, tahmin yürütmek yok — sadece sana özel bir program.",
    items: [
      {
        title: "Bir hedef seç, programını al",
        text: "Kas yapmak, kilo vermek, sıkılaşmak, kondisyonunu geliştirmek, esnekliğini artırmak ya da sadece aktif kalmak. Atleva programı hedefine ve gerçekten ayırabildiğin zamana göre hazırlar.",
        points: ["10, 20, 30 veya 45 dakikalık seanslar", "Haftada 2 ila 6 gün", "Yoğun günler için 10 dakikalık hızlı antrenman"],
        alt: "Atleva'da hedef seçim ekranı",
      },
      {
        title: "Çalıştırmak istediğin bölgelere dokun",
        text: "Etkileşimli vücut haritasında en fazla üç odak bölgesi seç — ya da tüm vücudu çalış. Hassas eklemlerini işaretle, riskli hareketler değiştirilsin.",
        points: [
          "Göğüs, omuz, kol, karın, sırt, kalça, bacak ve daha fazlası",
          "Hassas diz, bel, omuz, bilek ve boynu korur",
          "Dürüst not: Hiçbir antrenman tek bir bölgeden yağ yakmaz",
        ],
        alt: "Odak bölgeleri seçilmiş etkileşimli vücut haritası",
      },
      {
        title: "Her hareket videolu",
        text: "Her hareketin kısa, döngülü bir tanıtım videosu, net teknik ipuçları ve kaçınman gereken hatalar var. Çok mu zor, çok mu kolay? Tek dokunuşla daha kolay veya daha zor versiyona geç.",
        points: ["Videolu 119 hareket", "Videolar indirildikten sonra internetsiz çalışır", "Her seansta ısınma ve soğuma"],
        alt: "Hareket videosu ve zamanlayıcı içeren antrenman ekranı",
      },
      {
        title: "Apartman için yeterince sessiz",
        text: "Sessiz mod sessiz, zıplamasız hareketler seçer; böylece sabahın erken saatinde ya da gece geç saatte komşularını rahatsız etmeden antrenman yapabilirsin.",
        points: ["Yaklaşık 2×2 m boş alan yeterli", "İsteğe bağlı ev eşyaları: duvar, sandalye, havlu", "Satın alman gereken ekipman yok"],
        alt: "Zıplamasız hareketlerle sessiz mod ayarları",
      },
      {
        title: "Seninle büyüyen bir program",
        text: "Her seansın ne kadar zorladığını puanla, sonraki seanslar buna göre ayarlansın. Kademeli yüklenme seni güçlendirir; her dördüncü hafta daha hafif bir toparlanma haftasıdır.",
        points: ["Dengeli haftalık program", "Yorgun olduğunda veya vaktin az olduğunda uyum sağlar", "Kolaydan zora ilerleyen hareketler"],
        alt: "Yaklaşan seanslarla haftalık program",
      },
      {
        title: "Apple Sağlık ile çalışır",
        text: "İznin olursa Atleva, programını ve tahminlerini kişiselleştirmek için Sağlık verilerini kullanır ve tamamladığın antrenmanları Sağlık'a kaydeder.",
        points: ["Vücut analizi tahminleri: VKİ, enerji harcaması, vücut yağ oranı", "HRV, dinlenme nabzı ve uykudan hazır olma puanı (Pro)", "Sağlık verileri asla iCloud'da saklanmaz"],
        alt: "Apple Sağlık verileriyle vücut analizi ekranı",
      },
    ],
  },
  motivation: {
    eyebrow: "Neden bugün",
    title: "On dakika, sıfırdan iyidir. Her zaman.",
    text: "Mükemmel bir haftaya değil, sıradaki seansa ihtiyacın var. Atleva onu başlayacak kadar kısa, devam ettirecek kadar akıllı yapar.",
    steps: [
      { title: "Küçük başla", text: "Yoğun bir günde 10 dakikalık seans da haftana sayılır." },
      { title: "Antrenmana gel", text: "Her zamanki saatinde hatırlatmalar, korunacak bir seri ve tek dokunuşla hazır program." },
      { title: "Güçlen", text: "Sen geliştikçe programın tekrar, süre ve daha zor hareketler ekler." },
    ],
    days: ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"],
    ringLabel: "dakika",
    weekLabel: "Bu hafta",
  },
  privacy: {
    eyebrow: "Tasarımı gereği gizli",
    title: "Antrenmanın seni ilgilendirir",
    text: "Atleva'nın hesabı yok. Programın ve geçmişin iPhone'unda ve istersen kendi özel iCloud'unda kalır.",
    points: [
      { title: "Takip yok", text: "Analiz aracı yok, reklam yok. Abonelikler yalnızca anonim bir kimlikle doğrulanır." },
      { title: "Sağlık verileri cihazda kalır", text: "Apple Sağlık verileri, nabız ve sağlık taraması yanıtların cihazlarından asla çıkmaz — iCloud'a bile." },
      { title: "Cihaz üzerinde kamera ve yapay zekâ", text: "Kamera koçu ve yapay zekâ koçu iPhone'unda çalışır. Görüntü asla kaydedilmez veya yüklenmez." },
      { title: "İstediğin zaman sil", text: "Tek dokunuşla programın, seansların ve ayarların cihazdan ve iCloud'dan silinir." },
    ],
    link: "Gizlilik politikasını oku",
  },
  pro: {
    eyebrow: "Atleva Pro",
    title: "Ücretsiz başla. Daha fazlasını istediğinde Pro'ya geç.",
    subtitle: "Ücretsiz sürümle bugün antrenmana başlarsın. Atleva Pro, daha uzun programlar ve daha akıllı rehberlik için isteğe bağlı bir aboneliktir.",
    freeTitle: "Ücretsiz",
    free: [
      "Sana özel 4 haftalık program",
      "Bir odak bölgesi",
      "Videolu 47 temel hareket",
      "Zorlanma puanları ve program ayarlamaları",
      "Vücut analizi tahminleri ve ilerleme",
      "Apple Sağlık, widget'lar ve Canlı Etkinlikler",
    ],
    proTitle: "Atleva Pro",
    proItems: [
      "Kamera koçu: tekrar sayma ve form puanı",
      "Canlı nabızlı Apple Watch uygulaması",
      "Rutinini öğrenen akıllı hatırlatmalar",
      "12+ haftalık kademeli programlar ve en fazla 3 odak bölgesi",
      "119 hareketin ve videonun tamamı",
      "Hazır olma puanı ve günlük otomatik ayarlama",
      "Cihaz üzerinde yapay zekâ koçu ve kişisel özetler",
      "CSV ve PDF dışa aktarımlı gelişmiş grafikler",
    ],
    note: "Aylık, 3 aylık veya yıllık abonelik; planlar uygun kullanıcılar için ücretsiz deneme içerebilir. Fiyatlar uygulamada gösterilir. Yapay zekâ koçu, Apple Intelligence'ı destekleyen bir iPhone'da iOS 26 veya üzerini gerektirir.",
    progressAlt: "Haftalık hacmi gösteren ilerleme grafikleri",
    coachAlt: "Ayarlanmış bir seans öneren yapay zekâ koçu",
  },
  faq: {
    title: "Sorular",
    items: [
      {
        q: "Herhangi bir ekipmana ihtiyacım var mı?",
        a: "Hayır. Tüm hareketler vücut ağırlığınla yapılır. Bir duvar, sağlam bir sandalye ya da havlu bazı hareketlerde yardımcı olabilir, ama isteğe bağlıdır.",
      },
      {
        q: "Ne kadar alana ihtiyacım var?",
        a: "Yaklaşık 2×2 m boş alan. Sessiz, zıplamasız hareketler için sessiz modu aç.",
      },
      {
        q: "Atleva yeni başlayanlar için uygun mu?",
        a: "Evet. Program senin seviyenden başlar ve her hareketin daha kolay ve daha zor versiyonları vardır. Bir sağlık sorunun varsa, hamileysen veya bir sakatlıktan iyileşiyorsan önce bir doktora danış.",
      },
      {
        q: "Kamera koçu beni kaydediyor mu?",
        a: "Hayır. Kamera görüntüsü antrenman sırasında iPhone'unda işlenir, asla kaydedilmez veya yüklenmez. İstediğin zaman kamerasız da antrenman yapabilirsin.",
      },
      {
        q: "Apple Watch gerekli mi?",
        a: "Hayır. Saat uygulaması, watchOS 10 ve üzeri için isteğe bağlı bir Pro ekstrasıdır: bugünkü seansı bileğinden başlat, canlı nabzını gör ve iPhone'daki antrenmanı yönet.",
      },
      {
        q: "Verilerim nerede saklanıyor?",
        a: "iPhone'unda. iCloud açıksa programın ve seans geçmişin kendi özel iCloud'un üzerinden eşzamanlanır. Sağlık verileri asla iCloud'da saklanmaz ve verilerini biz hiçbir zaman göremeyiz.",
      },
      {
        q: "Atleva Pro'yu nasıl iptal ederim?",
        a: "App Store hesap ayarlarından, mevcut dönemin bitiminden en az 24 saat önce. Satın alımlar Atleva'nın ayarlarından geri yüklenebilir.",
      },
    ],
  },
  cta: { title: "Bir sonraki antrenmanın seni bekliyor", text: "Atleva'yı indir, bir hedef seç ve bugün başla — hesap yok, alet yok, sadece sen." },
  footer: {
    tagline: "iPhone ve Apple Watch için aletsiz evde spor.",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Destek",
    disclaimer:
      "Atleva genel fitness rehberliği sunar ve tıbbi tavsiye değildir. Yeni bir egzersiz programına başlamadan önce bir doktora danış; ağrı, baş dönmesi veya nefes darlığı hissedersen dur.",
  },
  legal: { updated: "Son güncelleme", back: "Ana sayfaya dön" },
};
