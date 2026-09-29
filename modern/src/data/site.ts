export const site = {
  name: '興裕通訊企業有限公司',
  shortName: '興裕通訊',
  description: '電話總機、交換機、網路、監視、門禁與企業通訊整合服務。',
  phone: '(02) 2341-7788',
  navigation: [
    { label: '公司簡介', href: '/index.html' },
    { label: '電話總機', href: '/38651354413231727231-201322556327231.html' },
    { label: '產品介紹', href: '/products.html' },
    { label: '部落格', href: '/blog.html' },
    { label: '聯繫我們', href: '/contact.html' }
  ]
} as const;

export const services = [
  { title: '電話總機與交換機', description: '依照企業規模與使用需求，規劃傳統、IP-PBX、SIP 與 VoIP 通訊系統。', href: '/38651354413231727231-201322556327231.html', icon: '01' },
  { title: '網路與弱電工程', description: '從網路架設、機房整理到設備整合，讓企業通訊穩定、清楚而且容易維護。', href: '/2160837002.html', icon: '02' },
  { title: '監視與門禁系統', description: '整合監視器、錄影設備、門禁、指紋與感應設備，提升場域安全管理。', href: '/30435352223537320633.html', icon: '03' },
  { title: '語音、錄音與會議設備', description: '提供語音信箱、錄音、視訊會議、投影與企業協作設備的規劃與維護。', href: '/3548638899--3763638899.html', icon: '04' }
] as const;

export const products = [
  { name: 'Panasonic KX-TDA50', brand: 'Panasonic', category: '電話總機', href: '/kx-tda50.html', note: '企業電話系統' },
  { name: 'Panasonic KX-TDA100D', brand: 'Panasonic', category: '電話總機', href: '/kx-tda100d.html', note: '數位整合通訊' },
  { name: 'Panasonic KX-TDE200', brand: 'Panasonic', category: '電話總機', href: '/kx-tde200.html', note: 'IP 通訊系統' },
  { name: 'NEC SL1000', brand: 'NEC', category: '電話總機', href: '/sl1000.html', note: '企業 UC 平台' },
  { name: 'NEC SL2100', brand: 'NEC', category: '電話總機', href: '/sl2100.html', note: '企業通訊系統' },
  { name: 'Tecom IP50', brand: 'Tecom', category: 'IP 電話', href: '/ip50.html', note: 'IP 交換機' },
  { name: 'Tecom IP320A', brand: 'Tecom', category: 'IP 電話', href: '/ip320a.html', note: 'IP 通訊設備' },
  { name: 'Tecom DX616', brand: 'Tecom', category: '電話總機', href: '/dx616.html', note: '傳統交換機' },
  { name: 'Uniphone ISDK 616', brand: 'Uniphone', category: '電話總機', href: '/3287930431-uniphone.html', note: '電話系統' },
  { name: 'VB-9250', brand: '其他品牌', category: '電話總機', href: '/vb-9250.html', note: '標準型電話機' }
] as const;
