// Derneğin iletişim, hesap ve kurum bilgileri bu dosyadan yönetilir.
// Boş bırakılan alanlar sitede otomatik olarak gizlenir veya "yakında" olarak görünür.

export const site = {
  ad: 'Uluslararası İnsani Yaşam Derneği',
  kisaAd: 'İnsani Yaşam',
  aciklama:
    'Uluslararası İnsani Yaşam Derneği; afet, savaş ve yoksullukla sınanan insanların yanında duran, gönüllülerle büyüyen bir insani yardım derneğidir.',

  telefon: '',
  whatsapp: '', // ülke koduyla, boşluksuz: 905xxxxxxxxx
  eposta: '',
  adres: '',
  calismaSaatleri: '',
  haritaLinki: '',
  kutukNo: '', // dernek kütük numarası
  vergiNo: '',
  yardimIzni: '', // yardım toplama izni / muafiyet kararı metni

  sosyal: {
    instagram: '',
    x: '',
    facebook: '',
    youtube: '',
  },

  // Gönüllü ve iletişim formları buraya gönderilir (Formspree vb. adres).
  formAdresi: '',
};

// Banka hesapları. Her hesap için bir satır ekleyin:
// { banka: 'Banka Adı', sube: 'Şube', para: 'TL', iban: 'TR..', swift: '', hesapAdi: '' }
// Hesap adı boş kalırsa derneğin adı yazılır.
export const hesaplar = [];

// Havale açıklamasında yazılacak bağış başlıkları.
export const bagisKodlari = [
  { baslik: 'Genel Bağış', aciklama: 'İhtiyacın en yoğun olduğu alana yönlendirilir.' },
  { baslik: 'Acil Yardım', aciklama: 'Afet ve kriz bölgelerindeki ilk müdahale çalışmaları.' },
  { baslik: 'Su Kuyusu', aciklama: 'Temiz suya erişimi olmayan yerleşimler için.' },
  { baslik: 'Gıda', aciklama: 'Gıda kolisi, sıcak yemek ve kumanya desteği.' },
  { baslik: 'Yetim', aciklama: 'Yetim çocukların ve ailelerinin düzenli desteği.' },
  { baslik: 'Eğitim', aciklama: 'Kırtasiye, burs ve okul ihtiyaçları.' },
  { baslik: 'Sağlık', aciklama: 'Tedavi, ilaç ve tıbbi malzeme desteği.' },
  { baslik: 'Kış Yardımı', aciklama: 'Yakacak, battaniye, mont ve çadır desteği.' },
  { baslik: 'Zekat', aciklama: 'Zekat olarak ayrı hesaplanır ve şartlarına uygun harcanır.' },
  { baslik: 'Sadaka / Fidye', aciklama: 'Sadaka, fidye ve kefaret bağışları.' },
  { baslik: 'Kurban', aciklama: 'Vekaletle kesilen kurban bağışları.' },
];

// Rakamlar kesinleştiğinde doldurun: { sayi: '...', etiket: '...' }
// Liste boşken ana sayfadaki bant görünmez.
export const rakamlar = [];

// Yönetim kurulu: { ad: '', gorev: '', gorsel: '' }
export const yonetim = [];

// Raporlar: { baslik: '2025 Faaliyet Raporu', yil: '2025', dosya: '/raporlar/2025.pdf' }
export const raporlar = [];

// Haber ve duyurular: { baslik, tarih, ozet, gorsel, link }
export const duyurular = [];
