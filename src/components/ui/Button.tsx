import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonBaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: never;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden bg-gradient-to-b from-brand-800 via-brand-900 to-[#161310] text-paper-50 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset,0_14px_32px_-8px_rgba(20,18,16,0.38)] hover:from-brand-800 hover:via-brand-900 hover:to-brand-900 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,0.1)_inset,0_22px_44px_-10px_rgba(20,18,16,0.42)] active:translate-y-0 active:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_8px_20px_-8px_rgba(20,18,16,0.28)] focus-visible:ring-brand-700',
  secondary:
    'border border-brand-300/85 bg-white/75 text-brand-900 shadow-[0_1px_0_rgba(255,255,255,0.92)_inset,0_10px_28px_-12px_rgba(20,18,16,0.1)] backdrop-blur-md hover:border-brand-400/95 hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_16px_36px_-12px_rgba(20,18,16,0.12)] active:translate-y-0 focus-visible:ring-brand-400',
  ghost:
    'text-brand-700 hover:text-brand-900 underline-offset-4 hover:underline focus-visible:ring-brand-400',
};

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[13px] font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-50 disabled:pointer-events-none disabled:opacity-50';

  const classes = `${base} ${variants[variant]} ${className}`;

  if ('href' in props && props.href) {
    return (
      <Link to={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
