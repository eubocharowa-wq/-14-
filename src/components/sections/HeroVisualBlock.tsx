import { brandFullName, brandName } from '@/content/site';

/**
 * Статусный визуальный блок: слои, рамка, геометрия — без стока и глянца.
 */
export default function HeroVisualBlock() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Задний слой — глубина без «глянца» */}
      <div
        className="absolute -right-0.5 top-5 bottom-9 left-4 rounded-[2rem] border border-brand-200/35 bg-brand-100/30 shadow-hero-back sm:-right-1 sm:bottom-10 sm:left-6 lg:left-10"
        aria-hidden
      />
      <div
        className="relative mx-auto aspect-[4/5] max-h-[min(540px,60vh)] w-full max-w-md lg:max-h-[min(580px,62vh)] lg:max-w-none"
      >
        <div
          className="absolute inset-0 rounded-[2rem] border border-brand-200/70 bg-gradient-to-br from-white via-paper-50 to-paper-100 shadow-hero-panel"
          aria-hidden
        />
        <div
          className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-hero-glow opacity-95"
          aria-hidden
        />
        <svg
          className="absolute inset-0 h-full w-full text-warm-soft/40"
          viewBox="0 0 400 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroStroke3" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8a7d6d" stopOpacity="0.35" />
              <stop offset="1" stopColor="#c4b8a8" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {/* Угловые скобки — «паспорт» композиции */}
          <path d="M52 88h40M52 88v40M348 88h-40M348 88v40M52 412h40M52 412v-40M348 412h-40M348 412v-40" stroke="url(#heroStroke3)" strokeWidth="0.65" strokeLinecap="square" />
          <path d="M48 132h304M48 252h304M48 372h304" stroke="url(#heroStroke3)" strokeWidth="0.45" opacity="0.85" />
          <path d="M132 48v404M200 48v404M268 48v404" stroke="url(#heroStroke3)" strokeWidth="0.45" opacity="0.85" />
          <rect x="124" y="124" width="152" height="152" rx="1" stroke="url(#heroStroke3)" strokeWidth="0.65" opacity="0.55" />
          <circle cx="200" cy="200" r="4" fill="#6d6358" fillOpacity="0.28" />
          <path d="M200 206v96" stroke="url(#heroStroke3)" strokeWidth="0.45" strokeDasharray="3 7" opacity="0.65" />
          <line x1="72" y1="420" x2="328" y2="420" stroke="url(#heroStroke3)" strokeWidth="0.35" opacity="0.5" />
        </svg>
        <div className="relative flex h-full flex-col justify-between p-10 sm:p-12 lg:p-14">
          <div className="absolute left-0 top-[22%] h-[36%] w-px bg-gradient-to-b from-transparent via-warm-deep/30 to-transparent" aria-hidden />
          <div className="flex flex-1 flex-col justify-center pl-0 sm:pl-5">
            <p className="font-display text-[2.75rem] font-semibold leading-[0.95] tracking-[0.02em] text-brand-900 sm:text-7xl lg:text-[4.5rem]">
              {brandName}
            </p>
            <p className="mt-6 max-w-[16rem] text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] text-brand-500">
              {brandFullName}
            </p>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-brand-200/50 pt-6 sm:pt-7">
            <div className="h-px flex-1 max-w-[7rem] bg-gradient-to-r from-warm-deep/45 to-transparent" aria-hidden />
            <div className="h-2 w-2 shrink-0 rounded-full border border-brand-300/80 bg-paper-50" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
