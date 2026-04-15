import { Link } from 'react-router-dom';
import type { SolutionCardData } from '@/types';

export default function SolutionCard({ slug, title, shortDescription }: SolutionCardData) {
  return (
    <Link
      to={`/solutions/${slug}`}
      className="card-surface card-surface--hover group flex flex-col p-9 sm:p-10"
    >
      <div className="card-editorial-top" />
      <h3 className="font-display text-xl font-semibold tracking-tight text-brand-900 transition-colors group-hover:text-brand-800 sm:text-[1.35rem]">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-[14.5px] leading-[1.68] text-brand-600">
        {shortDescription}
      </p>
      <div className="card-editorial-actions flex justify-end">
        <span className="text-[13px] font-semibold tracking-wide text-brand-800 transition-colors group-hover:text-brand-900">
          Подробнее →
        </span>
      </div>
    </Link>
  );
}
