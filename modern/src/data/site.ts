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
  { slug: 'panasonic-kx-tda50', name: 'Panasonic KX-TDA50', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tda50.html', legacyHref: '/kx-tda50.html', note: '企業電話系統', summary: '適合中小型企業的數位電話系統，支援語音信箱、IP 整合與企業通訊擴充。' },
  { slug: 'panasonic-kx-tda100d', name: 'Panasonic KX-TDA100D', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tda100d.html', legacyHref: '/kx-tda100d.html', note: '數位整合通訊', summary: '整合數位訊號、語音信箱與企業電話功能的模組化交換機。' },
  { slug: 'panasonic-kx-tde200', name: 'Panasonic KX-TDE200', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tde200.html', legacyHref: '/kx-tde200.html', note: 'IP 通訊系統', summary: '支援 IP 網路與傳統電話介面的企業通訊平台，適合持續擴充的組織。' },
  { slug: 'nec-sl1000', name: 'NEC SL1000', brand: 'NEC', category: '電話總機', href: '/products/nec-sl1000.html', legacyHref: '/sl1000.html', note: '企業 UC 平台', summary: '面向企業通訊與協作需求的整合平台，支援多種終端與網路通訊。' },
  { slug: 'nec-sl2100', name: 'NEC SL2100', brand: 'NEC', category: '電話總機', href: '/products/nec-sl2100.html', legacyHref: '/sl2100.html', note: '企業通訊系統', summary: '具備彈性擴充能力的企業電話系統，適用於多種辦公場域。' },
  { slug: 'tecom-ip50', name: 'Tecom IP50', brand: 'Tecom', category: 'IP 電話', href: '/products/tecom-ip50.html', legacyHref: '/ip50.html', note: 'IP 交換機', summary: '適合 IP 電話環境的通訊設備，協助企業整合網路與語音服務。' },
  { slug: 'tecom-ip320a', name: 'Tecom IP320A', brand: 'Tecom', category: 'IP 電話', href: '/products/tecom-ip320a.html', legacyHref: '/ip320a.html', note: 'IP 通訊設備', summary: '提供企業 IP 通訊部署所需的穩定連線與電話功能。' },
  { slug: 'tecom-dx616', name: 'Tecom DX616', brand: 'Tecom', category: '電話總機', href: '/products/tecom-dx616.html', legacyHref: '/dx616.html', note: '傳統交換機', summary: '經典型企業交換機，適合既有電話線路與辦公室通訊需求。' },
  { slug: 'uniphone-isdk-616', name: 'Uniphone ISDK 616', brand: 'Uniphone', category: '電話總機', href: '/products/uniphone-isdk-616.html', legacyHref: '/3287930431-uniphone.html', note: '電話系統', summary: '提供企業基本分機、總機與內部通訊管理功能。' },
  { slug: 'vb-9250', name: 'VB-9250', brand: '其他品牌', category: '電話總機', href: '/products/vb-9250.html', legacyHref: '/vb-9250.html', note: '標準型電話機', summary: '標準型企業電話設備，適合既有系統維護與替換需求。' }
] as const;

export const brands = [
  { slug: 'panasonic', name: 'Panasonic', description: 'Panasonic 企業電話與數位通訊系統。' },
  { slug: 'nec', name: 'NEC', description: 'NEC 企業 UC 與電話總機解決方案。' },
  { slug: 'tecom', name: 'Tecom', description: 'Tecom 傳統交換機與 IP 通訊設備。' },
  { slug: 'uniphone', name: 'Uniphone', description: 'Uniphone 企業電話系統與終端設備。' },
  { slug: 'other', name: '其他品牌', description: '其他品牌與既有系統的設備選擇。' }
] as const;
