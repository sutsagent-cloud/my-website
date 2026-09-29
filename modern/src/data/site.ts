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
  { title: '電話總機與交換機', description: '依照企業規模與使用需求，規劃傳統、IP-PBX、SIP 與 VoIP 通訊系統。', href: '/categories/phone-systems.html', icon: '01' },
  { title: '網路與弱電工程', description: '從網路架設、機房整理到設備整合，讓企業通訊穩定、清楚而且容易維護。', href: '/categories/networking.html', icon: '02' },
  { title: '監視與門禁系統', description: '整合監視器、錄影設備、門禁、指紋與感應設備，提升場域安全管理。', href: '/categories/security.html', icon: '03' },
  { title: '語音、錄音與會議設備', description: '提供語音信箱、錄音、視訊會議、投影與企業協作設備的規劃與維護。', href: '/categories/voice-and-video.html', icon: '04' }
] as const;

export const products = [
  { slug: 'panasonic-kx-tda50', name: 'Panasonic KX-TDA50', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tda50.html', legacyHref: '/kx-tda50.html', image: '/uploads/8/5/4/0/85406354/tda100d_4.jpg', note: '企業電話系統', summary: '適合中小型企業的數位電話系統，支援語音信箱、IP 整合與企業通訊擴充。' },
  { slug: 'panasonic-kx-tda100d', name: 'Panasonic KX-TDA100D', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tda100d.html', legacyHref: '/kx-tda100d.html', image: '/uploads/8/5/4/0/85406354/tda100d_1.jpg', note: '數位整合通訊', summary: '整合數位訊號、語音信箱與企業電話功能的模組化交換機。' },
  { slug: 'panasonic-kx-tde200', name: 'Panasonic KX-TDE200', brand: 'Panasonic', category: '電話總機', href: '/products/panasonic-kx-tde200.html', legacyHref: '/kx-tde200.html', image: '/uploads/8/5/4/0/85406354/286799539_1.jpg', note: 'IP 通訊系統', summary: '支援 IP 網路與傳統電話介面的企業通訊平台，適合持續擴充的組織。' },
  { slug: 'nec-sl1000', name: 'NEC SL1000', brand: 'NEC', category: '電話總機', href: '/products/nec-sl1000.html', legacyHref: '/sl1000.html', image: '/uploads/8/5/4/0/85406354/nec-sl1000_3.jpg', note: '企業 UC 平台', summary: '面向企業通訊與協作需求的整合平台，支援多種終端與網路通訊。' },
  { slug: 'nec-sl2100', name: 'NEC SL2100', brand: 'NEC', category: '電話總機', href: '/products/nec-sl2100.html', legacyHref: '/sl2100.html', image: '/uploads/8/5/4/0/85406354/nec-sl2100_orig.jpg', note: '企業通訊系統', summary: '具備彈性擴充能力的企業電話系統，適用於多種辦公場域。' },
  { slug: 'tecom-ip50', name: 'Tecom IP50', brand: 'Tecom', category: 'IP 電話', href: '/products/tecom-ip50.html', legacyHref: '/ip50.html', note: 'IP 交換機', summary: '適合 IP 電話環境的通訊設備，協助企業整合網路與語音服務。' },
  { slug: 'tecom-ip320a', name: 'Tecom IP320A', brand: 'Tecom', category: 'IP 電話', href: '/products/tecom-ip320a.html', legacyHref: '/ip320a.html', note: 'IP 通訊設備', summary: '提供企業 IP 通訊部署所需的穩定連線與電話功能。' },
  { slug: 'tecom-dx616', name: 'Tecom DX616', brand: 'Tecom', category: '電話總機', href: '/products/tecom-dx616.html', legacyHref: '/dx616.html', image: '/uploads/8/5/4/0/85406354/e2982e49-d98b-43ad-9b41-d23ede7b302a_orig.jpg', note: '傳統交換機', summary: '經典型企業交換機，適合既有電話線路與辦公室通訊需求。' },
  { slug: 'uniphone-isdk-616', name: 'Uniphone ISDK 616', brand: 'Uniphone', category: '電話總機', href: '/products/uniphone-isdk-616.html', legacyHref: '/3287930431-uniphone.html', image: '/uploads/8/5/4/0/85406354/415037471.jpg', note: '電話系統', summary: '提供企業基本分機、總機與內部通訊管理功能。' },
  { slug: 'vb-9250', name: 'VB-9250', brand: '其他品牌', category: '電話總機', href: '/products/vb-9250.html', legacyHref: '/vb-9250.html', image: '/uploads/8/5/4/0/85406354/21311198335041-683-m_orig.png', note: '標準型電話機', summary: '標準型企業電話設備，適合既有系統維護與替換需求。' }
] as const;

export const brands = [
  { slug: 'panasonic', name: 'Panasonic', description: 'Panasonic 企業電話與數位通訊系統。' },
  { slug: 'nec', name: 'NEC', description: 'NEC 企業 UC 與電話總機解決方案。' },
  { slug: 'tecom', name: 'Tecom', description: 'Tecom 傳統交換機與 IP 通訊設備。' },
  { slug: 'uniphone', name: 'Uniphone', description: 'Uniphone 企業電話系統與終端設備。' },
  { slug: 'other', name: '其他品牌', description: '其他品牌與既有系統的設備選擇。' }
] as const;

export const categories = [
  { slug: 'phone-systems', name: '電話總機與交換機', description: '傳統電話總機、IP-PBX、SIP 與企業交換機系統。', legacyHref: '/38651354413231727231-201322556327231.html', service: '電話總機與分機系統規劃、安裝、維修與升級。', features: ['企業電話與分機規劃', 'IP、SIP 與傳統線路整合', '既有系統維修與擴充'] },
  { slug: 'networking', name: '網路與弱電工程', description: '網路架設、機房整理與企業弱電設備整合。', legacyHref: '/2160837002.html', service: '從現場評估、佈線到設備整合，建立容易維護的基礎環境。', features: ['網路架設與機房整理', '弱電設備整合', '現場檢測與維護'] },
  { slug: 'security', name: '監視與門禁系統', description: '監視器、錄影設備、門禁、指紋與感應設備。', legacyHref: '/30435352223537320633.html', service: '依照場域需求規劃影像監控與進出管理方案。', features: ['攝影機與錄影設備', '門禁與出入管理', '既有系統升級'] },
  { slug: 'voice-and-video', name: '語音、錄音與會議設備', description: '語音信箱、錄音、視訊會議、投影與協作設備。', legacyHref: '/3548638899--3763638899.html', service: '協助企業改善會議、錄音與日常溝通效率。', features: ['語音信箱與錄音設備', '視訊會議與投影', '企業協作設備整合'] },
  { slug: 'access-control', name: '門禁系統', description: '感應式門禁、指紋機、陽極鎖與出入管理設備。', legacyHref: '/38272311053199532113.html', service: '為辦公室與公共場域建立清楚可控的出入流程。', features: ['感應式門禁', '指紋與出入管理', '陽極鎖與周邊設備'] },
  { slug: 'surveillance', name: '監視設備', description: '攝影機、錄影主機與周邊監控設備。', legacyHref: '/30435352223537320633.html', service: '提供監視設備選型、安裝與既有系統維護。', features: ['攝影機選型', '錄影主機規劃', '監控系統維護'] }
] as const;

export const blogPosts = [
  { slug: 'coming-soon', title: '網站內容整理中', excerpt: '我們正在整理企業通訊、電話總機與弱電工程的實務內容，敬請期待。', date: '2026-01-01', category: '公告' }
] as const;
