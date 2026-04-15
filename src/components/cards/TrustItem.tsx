import type { TrustItemData } from '@/types';

export default function TrustItem({ title, description }: TrustItemData) {
  return (
    <div className="card-surface card-surface--hover p-8 sm:p-9">
      <div className="card-editorial-top" />
      <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-brand-900 sm:text-[1.2rem]">
        {title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-[1.68] text-brand-600">
        {description}
      </p>
    </div>
  );
}
