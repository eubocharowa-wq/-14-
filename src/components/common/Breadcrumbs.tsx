import { Link } from 'react-router-dom';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Навигационная цепочка"
      className="border-b border-edge/50 bg-white/35 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.28]"
    >
      <div className="mx-auto max-w-site px-5 py-3.5 sm:px-8">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-500">
          {items.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="font-normal text-brand-300" aria-hidden>
                  /
                </span>
              )}
              {item.to ? (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-50 rounded-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="max-w-[min(100vw-4rem,42rem)] truncate text-brand-800 normal-case tracking-normal">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
