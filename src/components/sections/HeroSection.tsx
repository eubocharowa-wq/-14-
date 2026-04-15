import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import HeroVisualBlock from '@/components/sections/HeroVisualBlock';
import type { HeroData } from '@/types';

interface HeroSectionProps {
  data: HeroData;
  large?: boolean;
}

export default function HeroSection({ data, large = false }: HeroSectionProps) {
  if (large) {
    return (
      <section className="relative overflow-hidden border-b border-edge/90 pb-24 pt-20 sm:pb-32 sm:pt-24 lg:pb-36 lg:pt-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(255,255,255,0.55),transparent_50%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-hero-noise opacity-80" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-100/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-300/35 to-transparent"
          aria-hidden
        />
        <Container className="relative">
          <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="max-w-xl border-l-2 border-warm-deep/25 pl-6 sm:pl-8 lg:max-w-none lg:pr-4">
                {data.eyebrow && (
                  <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
                    {data.eyebrow}
                  </p>
                )}
                <h1 className="font-display text-display-sm font-semibold text-brand-900 sm:text-display md:text-display-lg">
                  {data.title}
                </h1>
                <p className="mt-7 text-lg font-normal leading-[1.68] text-brand-600 sm:text-[1.35rem] sm:leading-[1.65]">
                  {data.subtitle}
                </p>
                {data.supportingText && (
                  <p className="mt-6 max-w-lg border-t border-edge pt-6 text-[15px] leading-[1.7] text-brand-500">
                    {data.supportingText}
                  </p>
                )}
                {(data.primaryCta || data.secondaryCta) && (
                  <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    {data.primaryCta && (
                      <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>
                    )}
                    {data.secondaryCta && (
                      <Button variant="secondary" href={data.secondaryCta.href}>
                        {data.secondaryCta.label}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-6">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:pl-2 xl:pl-6">
                <HeroVisualBlock />
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-edge/60 bg-section-lift py-16 sm:py-20 md:py-[4.75rem]">
      <div className="pointer-events-none absolute inset-0 bg-hero-noise opacity-[0.65]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-warm-soft/[0.12] to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div className="max-w-3xl border-l-2 border-warm-deep/15 pl-5 sm:pl-7">
          {data.eyebrow && (
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              {data.eyebrow}
            </p>
          )}
          <h1 className="font-display text-[2rem] font-semibold tracking-tight text-brand-900 sm:text-4xl md:text-[2.625rem] md:leading-[1.12]">
            {data.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-600 sm:text-xl">
            {data.subtitle}
          </p>
          {data.supportingText && (
            <p className="mt-4 text-[15px] leading-relaxed text-brand-500">
              {data.supportingText}
            </p>
          )}
          {(data.primaryCta || data.secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              {data.primaryCta && <Button href={data.primaryCta.href}>{data.primaryCta.label}</Button>}
              {data.secondaryCta && (
                <Button variant="secondary" href={data.secondaryCta.href}>
                  {data.secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
