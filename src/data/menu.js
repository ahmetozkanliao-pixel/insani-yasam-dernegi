import { alanlar } from './alanlar.js';
import { katkilar } from './katkilar.js';

export const menu = [
  {
    ad: 'Biz kimiz',
    href: '/biz-kimiz',
    gruplar: [
      {
        baslik: 'Kurumsal',
        linkler: [
          { ad: 'Hakkımızda', href: '/biz-kimiz' },
          { ad: 'Etik ilkelerimiz', href: '/biz-kimiz/etik-ilkeler' },
          { ad: 'Şeffaflık ve denetim', href: '/biz-kimiz/seffaflik' },
          { ad: 'Bağışçı hakları', href: '/biz-kimiz/bagisci-haklari' },
        ],
      },
      {
        baslik: 'Bilgi',
        linkler: [
          { ad: 'Yazılar', href: '/yazilar' },
          { ad: 'Sıkça sorulan sorular', href: '/sss' },
          { ad: 'Kişisel verilerin korunması', href: '/kvkk' },
          { ad: 'Bize ulaşın', href: '/iletisim' },
        ],
      },
    ],
  },
  {
    ad: 'Ne yapıyoruz',
    href: '/ne-yapiyoruz',
    gruplar: [
      {
        baslik: 'Çalışma alanlarımız',
        linkler: alanlar.map((a) => ({ ad: a.ad, href: `/ne-yapiyoruz/${a.slug}` })),
      },
    ],
  },
  {
    ad: 'Ne yapabilirsiniz',
    href: '/ne-yapabilirsiniz',
    gruplar: [
      {
        baslik: 'Siz de katılın',
        linkler: katkilar.map((k) => ({ ad: k.ad, href: k.href })),
      },
    ],
  },
];
