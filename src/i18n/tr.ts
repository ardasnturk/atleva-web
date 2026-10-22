import type { Dictionary } from "./types";

export const tr: Dictionary = {
  meta: {
    title: "Atleva – iPhone için Aletsiz Evde Spor",
    description:
      "Atleva, hedefine ve odak bölgelerine göre sana özel, aletsiz bir evde spor programı hazırlar: 119 hareket videosu ve kendini nasıl hissettiğine uyum sağlayan bir program. Hesap yok, reklam yok, takip yok.",
  },
  nav: { features: "Özellikler", privacy: "Gizlilik", pro: "Pro", faq: "SSS", language: "Dil", skip: "İçeriğe geç" },
  hero: {
    eyebrow: "iPhone için evde spor",
    title: "Senin programın. Senin alanın.",
    highlight: "Sıfır alet.",
    subtitle:
      "Bir hedef seç, vücut haritasında odak bölgelerine dokun; seninle birlikte ilerleyen ve kendini nasıl hissettiğine uyum sağlayan bir ev programı al — yaklaşık 2×2 m boş alanda.",
    badges: ["Alet gerekmez", "Hesap gerekmez", "Reklam ve takip yok", "İnternetsiz çalışır"],
    screenshotAlt: "Atleva'nın Bugün ekranı, günün antrenmanı başlamaya hazır",
  },
  appStore: { small: "App Store'dan", large: "İndirin", soon: "Yakında App Store'da" },
  trust: [
    { title: "119 hareket videosu", text: "İnternetsiz çalışan kısa, döngülü tanıtım videoları." },
    { title: "Rehberlere dayanır", text: "Yayımlanmış ACSM ve WHO önerileri üzerine kurulu." },
    { title: "Apple Sağlık", text: "İsteğe bağlı — yalnızca izin verdiğin veriler, cihazında kalır." },
    { title: "iOS 18 veya üzeri", text: "iPhone için tasarlandı, iPhone Duo dahil." },
  ],
  features: {
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
        points: ["119 hareket, hepsi internetsiz", "Ağır çekim oynatma", "Her seansta ısınma ve soğuma"],
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
  privacy: {
    eyebrow: "Tasarımı gereği gizli",
    title: "Antrenmanın seni ilgilendirir",
    text: "Atleva'nın hesabı da sunucusu da yok. Programın ve geçmişin iPhone'unda ve istersen kendi özel iCloud'unda kalır.",
    points: [
      { title: "Takip yok", text: "Analiz aracı yok, reklam yok, üçüncü taraf SDK yok." },
      { title: "Sağlık verileri cihazda kalır", text: "Apple Sağlık verileri ve sağlık taraması yanıtların cihazından asla çıkmaz — iCloud'a bile." },
      { title: "Cihaz üzerinde yapay zekâ", text: "Koç, iPhone'undaki Apple Intelligence ile çalışır. Buluta hiçbir şey gönderilmez." },
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
      "Otomatik yenilenen 12+ haftalık kademeli programlar",
      "En fazla 3 odak bölgesi",
      "119 hareketin ve videonun tamamı",
      "Hazır olma puanı ve günlük otomatik ayarlama",
      "Cihaz üzerinde yapay zekâ koçu ve kişisel özetler",
      "Kişisel program videosu",
      "CSV ve PDF dışa aktarımlı gelişmiş grafikler",
      "Alternatif uygulama simgeleri",
    ],
    note: "Aylık veya yıllık abonelik; yıllık plan, uygun kullanıcılar için ücretsiz deneme içerebilir. Fiyatlar uygulamada gösterilir. Yapay zekâ koçu, Apple Intelligence'ı destekleyen bir iPhone'da iOS 26 veya üzerini gerektirir.",
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
        q: "Verilerim nerede saklanıyor?",
        a: "iPhone'unda. iCloud açıksa programın ve seans geçmişin kendi özel iCloud'un üzerinden eşzamanlanır. Sağlık verileri asla iCloud'da saklanmaz ve verilerini biz hiçbir zaman göremeyiz.",
      },
      {
        q: "Apple Sağlık veya Apple Watch gerekli mi?",
        a: "Hayır. İkisi de isteğe bağlıdır. Bunlarla Atleva tahminlerini kişiselleştirebilir ve bir hazır olma puanı hesaplayabilir.",
      },
      {
        q: "Atleva Pro'yu nasıl iptal ederim?",
        a: "App Store hesap ayarlarından, mevcut dönemin bitiminden en az 24 saat önce. Satın alımlar Atleva'nın ayarlarından geri yüklenebilir.",
      },
    ],
  },
  cta: { title: "Bir sonraki antrenmanın seni bekliyor", text: "Atleva'yı indir, bir hedef seç ve bugün başla — hesap yok, alet yok." },
  footer: {
    tagline: "iPhone için aletsiz evde spor.",
    legal: "Yasal",
    privacy: "Gizlilik Politikası",
    terms: "Kullanım Koşulları",
    support: "Destek",
    disclaimer:
      "Atleva genel fitness rehberliği sunar ve tıbbi tavsiye değildir. Yeni bir egzersiz programına başlamadan önce bir doktora danış; ağrı, baş dönmesi veya nefes darlığı hissedersen dur.",
  },
  legal: { updated: "Son güncelleme", back: "Ana sayfaya dön" },
};
