import type { ProcessStepData } from '@/types';

export default function ProcessStep({ number, title, description }: ProcessStepData) {
  return (
    <div className="card-surface p-6 sm:p-8">
      <div className="card-editorial-top" />
      <div className="flex gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-200/90 bg-gradient-to-b from-paper-50 to-white font-display text-lg font-semibold tabular-nums text-brand-800 shadow-[0_1px_0_rgba(20,18,16,0.05)]">
          {number}
        </div>
        <div className="min-w-0 pt-0.5">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-brand-900">{title}</h3>
          <p className="mt-2.5 text-[14.5px] leading-[1.68] text-brand-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
