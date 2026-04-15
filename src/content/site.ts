import type { NavItem } from '@/types';

export const brandName = 'ЦБИ';
export const brandFullName = 'Центр Бизнес Инвестиций';
export const brandTagline =
  'Экспертный центр инвестиционных решений в недвижимости';

export const navigation: NavItem[] = [
  { label: 'О ЦБИ', href: '/about' },
  { label: 'Протокол сопровождения', href: '/process' },
  { label: 'Решения', href: '/solutions' },
  { label: 'Форматы сопровождения', href: '/formats' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Контакты', href: '/contacts' },
];

export const headerCta = { label: 'Обсудить задачу', href: '/contacts' };

export const footerData = {
  brand: brandName,
  tagline: 'Инвестиционные решения в недвижимости. Проверка, расчёт, сопровождение.',
  legalLinks: [
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Согласие на обработку ПДн', href: '/consent' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Условия использования', href: '/terms' },
    { label: 'Дисклеймер', href: '/disclaimer' },
  ],
  disclaimer:
    'Информация на сайте носит справочный характер и не является индивидуальной инвестиционной рекомендацией, публичной офертой или гарантией доходности.',
  contacts: {
    email: 'info@cbi-invest.ru',
    telegram: '@cbi_invest',
    phone: '+7 (___) ___-__-__',
  },
};
