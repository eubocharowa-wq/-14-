import { Link } from 'react-router-dom';
import { brandFullName, footerData, navigation } from '@/content/site';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/30 bg-ink-950 text-brand-100">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-soft/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 sm:py-28">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5 lg:col-span-5">
            <p className="font-display text-[2.125rem] font-semibold leading-tight tracking-[0.03em] text-paper-50 sm:text-4xl">
              {footerData.brand}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">
              {brandFullName}
            </p>
            <p className="mt-8 max-w-sm text-[15px] leading-[1.7] text-brand-300/95">
              {footerData.tagline}
            </p>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-500">
              Навигация
            </p>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[15px] text-brand-300/95 transition-colors hover:text-paper-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-500">
              Юридическая информация
            </p>
            <nav className="flex flex-col gap-3">
              {footerData.legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-[14px] leading-snug text-brand-300/90 transition-colors hover:text-paper-50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-20 border-t border-white/[0.08] pt-12">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-6 sm:px-6">
            <p className="max-w-4xl text-[12px] leading-[1.75] text-brand-500">
              {footerData.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
