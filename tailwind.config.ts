import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Cormorant Garamond',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.025em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
      },
      colors: {
        brand: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e5dfd4',
          300: '#d4c9bb',
          400: '#a89f94',
          500: '#7a7268',
          600: '#5c564e',
          700: '#454039',
          800: '#2e2a26',
          900: '#1f1c19',
        },
        ink: {
          950: '#141210',
          900: '#1a1816',
          800: '#242220',
        },
        paper: {
          50: '#fcfaf7',
          100: '#f5f0e8',
          200: '#ebe4d8',
        },
        edge: {
          DEFAULT: 'rgba(28, 25, 23, 0.08)',
          strong: 'rgba(28, 25, 23, 0.12)',
        },
        warm: {
          soft: '#c4b8a8',
          deep: '#8a7d6d',
        },
      },
      maxWidth: {
        site: '72rem',
      },
      boxShadow: {
        card:
          '0 1px 0 rgba(20, 18, 16, 0.04), 0 6px 20px rgba(20, 18, 16, 0.045)',
        'card-hover':
          '0 1px 0 rgba(20, 18, 16, 0.05), 0 14px 36px rgba(20, 18, 16, 0.075)',
        /** Премиальные слои глубины */
        elevated:
          '0 1px 0 rgba(20, 18, 16, 0.06), 0 18px 40px -12px rgba(20, 18, 16, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.35) inset',
        'inner-warm':
          'inset 0 1px 0 rgba(255, 255, 255, 0.88), inset 0 -1px 0 rgba(20, 18, 16, 0.04)',
        header:
          '0 1px 0 rgba(20, 18, 16, 0.07), 0 20px 40px -14px rgba(20, 18, 16, 0.08), 0 0 1px rgba(20, 18, 16, 0.03)',
        soft: '0 24px 48px -12px rgba(20, 18, 16, 0.08)',
        'hero-panel':
          '0 0 0 1px rgba(20, 18, 16, 0.07), 0 3px 0 rgba(255, 255, 255, 0.55) inset, 0 32px 64px -18px rgba(20, 18, 16, 0.14), 0 10px 24px -8px rgba(20, 18, 16, 0.06)',
        'hero-back':
          '0 24px 48px -14px rgba(20, 18, 16, 0.1), 0 8px 16px -6px rgba(20, 18, 16, 0.05)',
        'form-close':
          '0 1px 0 rgba(20, 18, 16, 0.05), 0 20px 48px -12px rgba(20, 18, 16, 0.09)',
      },
      backgroundImage: {
        'page-base':
          'radial-gradient(ellipse 95% 55% at 50% -12%, rgba(196, 184, 168, 0.22) 0%, transparent 52%), radial-gradient(ellipse 70% 45% at 100% 20%, rgba(138, 125, 109, 0.08) 0%, transparent 50%), linear-gradient(168deg, #fcfbf8 0%, #f4ede4 38%, #ebe2d4 72%, #e4d9c9 100%)',
        'hero-glow':
          'radial-gradient(ellipse 70% 55% at 78% 38%, rgba(196, 184, 168, 0.22) 0%, transparent 58%)',
        'hero-noise':
          'radial-gradient(circle at 20% 80%, rgba(138, 125, 109, 0.06) 0%, transparent 45%)',
        /** Внутренние страницы: «слой» вместо плоского белого */
        'section-lift':
          'linear-gradient(168deg, rgba(255,255,255,0.94) 0%, rgba(252,250,247,0.78) 42%, rgba(237,230,219,0.42) 100%)',
        'section-depth':
          'linear-gradient(180deg, rgba(235,228,216,0.35) 0%, rgba(252,250,247,0.55) 48%, rgba(255,255,255,0.72) 100%), radial-gradient(ellipse 120% 80% at 50% -20%, rgba(31,28,25,0.045) 0%, transparent 55%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
