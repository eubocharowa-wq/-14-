import type { CaseData } from '@/types';

export default function CasePreviewCard({ task, observation, conclusion }: CaseData) {
  return (
    <div className="card-surface card-surface--hover p-8 sm:p-9">
      <div className="card-editorial-top" />
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
          Задача
        </p>
        <p className="mt-2.5 text-[15px] font-medium leading-relaxed text-brand-900">{task}</p>
      </div>
      <div className="mb-5 border-t border-edge pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
          Что увидели
        </p>
        <p className="mt-2.5 text-[14.5px] leading-[1.68] text-brand-600">
          {observation}
        </p>
      </div>
      <div className="border-t border-edge pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
          Вывод
        </p>
        <p className="mt-2.5 text-[14.5px] font-medium leading-relaxed text-brand-800">
          {conclusion}
        </p>
      </div>
    </div>
  );
}
