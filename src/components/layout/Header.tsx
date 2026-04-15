import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { brandName, brandFullName, navigation, headerCta } from '@/content/site';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-edge/50 bg-paper-50/70 shadow-elevated backdrop-blur-2xl supports-[backdrop-filter]:bg-paper-50/[0.62]">
        <div className="mx-auto flex h-[4.5rem] max-w-site items-center justify-between gap-6 px-5 sm:px-8">
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3 sm:gap-5"
          >
            <span className="relative font-display text-[1.75rem] font-semibold leading-none tracking-[0.02em] text-brand-900 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-warm-deep/50 after:transition-transform after:duration-300 group-hover:after:scale-x-100 sm:text-[2rem]">
              {brandName}
            </span>
            <span
              className="hidden h-9 w-px shrink-0 bg-gradient-to-b from-transparent via-brand-300/90 to-transparent sm:block"
              aria-hidden
            />
            <span className="hidden max-w-[12rem] text-[9px] font-semibold uppercase leading-snug tracking-[0.22em] text-brand-500 sm:leading-tight md:max-w-[14rem]">
              {brandFullName}
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3.5 py-2.5 text-[12.5px] font-medium tracking-[0.04em] transition-colors',
                    isActive
                      ? 'bg-brand-900 text-paper-50 shadow-sm'
                      : 'text-brand-600 hover:bg-brand-100/60 hover:text-brand-900',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to={headerCta.href}
              className="hidden rounded-xl border border-brand-800/10 bg-brand-900 px-6 py-2.5 text-[12.5px] font-semibold tracking-[0.06em] text-paper-50 shadow-sm transition-colors hover:bg-brand-800 sm:inline-flex"
            >
              {headerCta.label}
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="rounded-xl p-2.5 text-brand-700 transition-colors hover:bg-brand-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 lg:hidden"
              aria-label="Открыть меню"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
