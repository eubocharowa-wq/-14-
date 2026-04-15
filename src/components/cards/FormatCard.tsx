import Button from '@/components/ui/Button';
import type { FormatCardData } from '@/types';

export default function FormatCard({ title, description, cta }: FormatCardData) {
  return (
    <div className="card-surface card-surface--hover flex flex-col p-8 sm:p-9">
      <div className="card-editorial-top" />
      <h3 className="font-display text-xl font-semibold tracking-tight text-brand-900 sm:text-[1.3rem]">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-[14.5px] leading-[1.68] text-brand-600">
        {description}
      </p>
      <div className="card-editorial-actions">
        <Button variant="secondary" href={cta.href}>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
