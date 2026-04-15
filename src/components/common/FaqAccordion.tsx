import { useState, useId } from 'react';
import type { FaqItem } from '@/types';

interface FaqAccordionProps {
  items: FaqItem[];
}

function AccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-edge last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 rounded-lg px-3 py-5 text-left transition-colors hover:bg-brand-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:px-1"
        aria-expanded={open}
        aria-controls={`faq-${id}`}
      >
        <span className="text-[15px] font-medium leading-snug tracking-tight text-brand-900">{question}</span>
        <svg
          className={`mt-0.5 h-5 w-5 shrink-0 text-brand-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        id={`faq-${id}`}
        role="region"
        className={`overflow-hidden transition-all duration-200 ease-out ${open ? 'max-h-[28rem] pb-5' : 'max-h-0'}`}
      >
        <p className="px-3 pb-1 text-[15px] leading-relaxed text-brand-600 sm:px-1">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem key={i} {...item} />
      ))}
    </div>
  );
}
