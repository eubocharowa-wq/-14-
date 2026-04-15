import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { LeadFormData } from '@/types';

type FormStatus = 'idle' | 'loading' | 'error';

interface LeadFormProps {
  onSubmit?: (data: LeadFormData) => Promise<void>;
  compact?: boolean;
  embedded?: boolean;
  trustLabels?: string[];
}

export default function LeadForm({
  onSubmit,
  compact = false,
  embedded = false,
  trustLabels,
}: LeadFormProps) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get('name')?.toString().trim()) errs.name = 'Укажите ваше имя';
    if (!form.get('contact')?.toString().trim()) errs.contact = 'Укажите контакт для связи';
    if (!form.get('message')?.toString().trim()) errs.message = 'Опишите вашу задачу';
    if (!form.get('consent_pd')) errs.consent_pd = 'Необходимо дать согласие';
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (formData.get('_honey')) return;

    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus('loading');

    const data: LeadFormData = {
      name: formData.get('name') as string,
      contact: formData.get('contact') as string,
      message: formData.get('message') as string,
      city: (formData.get('city') as string) || undefined,
      assetType: (formData.get('asset_type') as string) || undefined,
      budget: (formData.get('budget') as string) || undefined,
      consentPd: true,
    };

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      navigate('/thanks');
    } catch {
      setStatus('error');
    }
  }

  const labelClass = 'mb-2 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-500';
  const fieldClass =
    'w-full rounded-xl border border-brand-200/90 bg-white px-4 py-3.5 text-[15px] leading-snug text-brand-900 shadow-[0_1px_0_rgba(20,18,16,0.04)] placeholder:text-brand-400 placeholder:opacity-90 transition-[border-color,box-shadow] focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200/70';
  const errorFieldClass =
    'w-full rounded-xl border border-red-300 bg-white px-4 py-3.5 text-[15px] text-brand-900 shadow-sm placeholder:text-brand-400 focus:border-red-400 focus:outline-none focus:ring-2 focus:ring-red-100';

  const nameField = (
    <div>
      <label htmlFor="lead-name" className={labelClass}>
        Имя <span className="font-normal normal-case tracking-normal text-red-600/90">*</span>
      </label>
      <input
        id="lead-name"
        name="name"
        type="text"
        placeholder="Ваше имя"
        className={errors.name ? errorFieldClass : fieldClass}
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? 'err-name' : undefined}
      />
      {errors.name && <p id="err-name" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
    </div>
  );

  const contactField = (
    <div>
      <label htmlFor="lead-contact" className={labelClass}>
        Телефон или email <span className="font-normal normal-case tracking-normal text-red-600/90">*</span>
      </label>
      <input
        id="lead-contact"
        name="contact"
        type="text"
        placeholder="Как с вами связаться"
        className={errors.contact ? errorFieldClass : fieldClass}
        aria-invalid={!!errors.contact}
        aria-describedby={errors.contact ? 'err-contact' : undefined}
      />
      {errors.contact && <p id="err-contact" className="mt-1.5 text-xs text-red-600">{errors.contact}</p>}
    </div>
  );

  const consentBlock = (
    <div
      className={`rounded-xl border px-4 py-4 sm:px-5 ${
        errors.consent_pd
          ? 'border-red-200/90 bg-red-50/50'
          : embedded
            ? 'border-edge-strong bg-white/70'
            : 'border-brand-200/70 bg-brand-50/30'
      }`}
    >
      <div className="flex gap-3.5 sm:items-start">
        <input
          id="lead-consent"
          name="consent_pd"
          type="checkbox"
          className="mt-1 h-[17px] w-[17px] shrink-0 cursor-pointer rounded border-2 border-brand-300 text-brand-900 accent-brand-900 transition-shadow focus:ring-2 focus:ring-brand-300/80 sm:mt-0.5"
          aria-invalid={!!errors.consent_pd}
          aria-describedby={errors.consent_pd ? 'err-consent' : 'consent-text'}
        />
        <label htmlFor="lead-consent" id="consent-text" className="cursor-pointer text-[13px] leading-[1.65] text-brand-600">
          Нажимая «Отправить», я даю согласие на обработку моих персональных данных для связи со мной и обсуждения моего запроса.{' '}
          <Link
            to="/privacy"
            className="font-medium text-brand-800 underline decoration-brand-300/80 underline-offset-[3px] transition-colors hover:text-brand-900"
          >
            Политика конфиденциальности
          </Link>
        </label>
      </div>
      {errors.consent_pd && <p id="err-consent" className="mt-3 text-xs text-red-600">{errors.consent_pd}</p>}
    </div>
  );

  const submitButton = (
    <button
      type="submit"
      disabled={status === 'loading'}
      className={`rounded-xl border border-brand-800/15 bg-brand-900 px-6 py-4 text-[13px] font-semibold tracking-[0.06em] text-paper-50 shadow-sm transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-50 disabled:opacity-50 ${
        embedded ? 'w-full' : 'w-full sm:w-auto'
      }`}
    >
      {status === 'loading' ? 'Отправка...' : 'Отправить'}
    </button>
  );

  const formInner = (
    <form onSubmit={handleSubmit} noValidate className={embedded ? 'relative space-y-5' : 'relative space-y-6'}>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      {compact ? (
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">{nameField}{contactField}</div>
      ) : (
        <>
          {nameField}
          {contactField}
        </>
      )}

      {!compact && (
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-city" className={labelClass}>
              Город
            </label>
            <input id="lead-city" name="city" type="text" placeholder="Город" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="lead-asset" className={labelClass}>
              Тип недвижимости
            </label>
            <input id="lead-asset" name="asset_type" type="text" placeholder="Например, коммерческая" className={fieldClass} />
          </div>
        </div>
      )}

      {!compact && (
        <div>
          <label htmlFor="lead-budget" className={labelClass}>
            Бюджет
          </label>
          <input id="lead-budget" name="budget" type="text" placeholder="Ориентировочный бюджет" className={fieldClass} />
        </div>
      )}

      <div>
        <label htmlFor="lead-message" className={labelClass}>
          Задача или объект <span className="font-normal normal-case tracking-normal text-red-600/90">*</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Опишите задачу, объект или вопрос"
          className={errors.message ? errorFieldClass : `${fieldClass} min-h-[118px] resize-y`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <p id="err-message" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      {embedded ? (
        <div className="space-y-5 border-t border-edge bg-gradient-to-b from-brand-900/[0.035] via-paper-50/40 to-transparent px-1 pt-7 sm:px-2">
          {consentBlock}
          {submitButton}
        </div>
      ) : (
        <>
          {consentBlock}
          {submitButton}
        </>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Произошла ошибка при отправке. Попробуйте ещё раз или свяжитесь с нами напрямую.
        </p>
      )}
    </form>
  );

  if (embedded) {
    return (
      <div className="overflow-hidden rounded-[1.625rem] border border-brand-200/50 bg-white shadow-form-close ring-1 ring-black/[0.02]">
        {trustLabels && trustLabels.length > 0 && (
          <div className="border-b border-edge bg-gradient-to-br from-paper-50 to-white px-7 py-8 sm:px-9 sm:py-9">
            <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {trustLabels.slice(0, 3).map((label) => (
                <li
                  key={label}
                  className="rounded-xl border border-edge-strong bg-white/90 px-4 py-4 text-center shadow-[0_1px_0_rgba(20,18,16,0.04)]"
                >
                  <p className="text-[12px] font-semibold leading-snug tracking-wide text-brand-800">{label}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="px-7 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-8">{formInner}</div>
      </div>
    );
  }

  return formInner;
}
