export interface NavItem {
  label: string;
  href: string;
}

/** Карточка раздела на главной (карта сайта) */
export interface SiteDestinationData {
  index: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportingText?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export interface RouteCardData {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export interface SolutionCardData {
  slug: string;
  title: string;
  shortDescription: string;
}

export interface SolutionDetail {
  slug: string;
  title: string;
  subtitle: string;
  audience: string[];
  notFit: string;
  checklist: string[];
  risks: string;
  approach: string;
  faq: FaqItem[];
}

export interface TrustItemData {
  title: string;
  description: string;
}

export interface ProcessStepData {
  number: number;
  title: string;
  description: string;
}

export interface FormatCardData {
  title: string;
  description: string;
  cta: { label: string; href: string };
}

export interface CaseData {
  task: string;
  observation: string;
  conclusion: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export interface LegalPageData {
  slug: string;
  title: string;
  content: string;
}

export interface SeoData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface LeadFormData {
  name: string;
  contact: string;
  message: string;
  city?: string;
  assetType?: string;
  budget?: string;
  consentPd: boolean;
  honeypot?: string;
}
