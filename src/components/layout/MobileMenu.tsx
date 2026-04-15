import { Link, NavLink } from 'react-router-dom';
import { brandFullName, brandName, navigation, headerCta } from '@/content/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-paper-50/98 backdrop-blur-lg lg:hidden">
      <div className="flex h-full flex-col px-5 pb-10 pt-6">
        <div className="flex items-center justify-between border-b border-edge pb-6">
          <div>
            <p className="font-display text-[1.85rem] font-semibold leading-none tracking-[0.02em] text-brand-900">
              {brandName}
            </p>
            <p className="mt-2 max-w-[17rem] text-[9px] font-semibold uppercase leading-snug tracking-[0.22em] text-brand-500">
              {brandFullName}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2.5 text-brand-700 transition-colors hover:bg-brand-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            aria-label="Закрыть меню"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'rounded-xl px-4 py-3.5 text-[15px] font-medium tracking-wide transition-colors',
                  isActive
                    ? 'bg-brand-900 text-paper-50 shadow-card'
                    : 'text-brand-800 hover:bg-white hover:shadow-card',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to={headerCta.href}
          onClick={onClose}
          className="mt-auto rounded-xl border border-brand-800/10 bg-brand-900 px-6 py-4 text-center text-sm font-semibold tracking-wide text-paper-50 shadow-sm transition-colors hover:bg-brand-800"
        >
          {headerCta.label}
        </Link>
      </div>
    </div>
  );
}
