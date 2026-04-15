import { Link } from 'react-router-dom';

interface DisclaimerBannerProps {
  className?: string;
}

export default function DisclaimerBanner({ className = '' }: DisclaimerBannerProps) {
  return (
    <p className={`text-xs leading-relaxed text-brand-400 ${className}`}>
      Информация на сайте не является индивидуальной инвестиционной рекомендацией или публичной офертой.{' '}
      <Link to="/disclaimer" className="underline underline-offset-2 hover:text-brand-600">
        Дисклеймер
      </Link>
    </p>
  );
}
