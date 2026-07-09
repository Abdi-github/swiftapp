import Link from 'next/link';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Card from '@/components/ui/Card';

const contactMethods = [
  {
    key: 'email',
    value: 'abdi@swiftapp.ch',
    href: 'mailto:abdi@swiftapp.ch',
    icon: AiOutlineMail,
  },
  {
    key: 'messenger',
    value: 'Abdu Ahmed',
    href: 'https://m.me/abdulkadir.ahmed.3139',
    icon: RiMessengerLine,
  },
  {
    key: 'whatsapp',
    value: '+41 76 214 76 90',
    href: 'https://api.whatsapp.com/send?phone=+41762147690',
    icon: FaWhatsapp,
  },
];

const inputClass =
  'block w-full rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 text-sm font-semibold text-white outline-none transition-custom placeholder:text-light/70 focus:border-primaryVariant focus:bg-white/[0.07]';

const ContactMe = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [submissionState, setSubmissionState] = useState('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });

  const clearSubmissionState = () => {
    if (submissionState !== 'idle') {
      setSubmissionState('idle');
    }
  };

  const onSubmit = async () => {
    setSubmissionState('idle');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      reset();
      setSubmissionState('success');
    } catch (error) {
      console.log(error?.text || error?.message || error);
      setSubmissionState('error');
      toast.error(t('home:contact.submitError'));
    }
  };

  return (
    <section className="page-shell">
      <div className="max-w-4xl">
        <p className="section-kicker">{t('home:contact.subtitle')}</p>
        <h1 className="section-title">{t('home:contact.title')}</h1>
        <p className="section-copy">{t('home:contact.subtitleNote')}</p>
      </div>

      <div className="mt-10 grid gap-6 laptop:grid-cols-[0.75fr_1.25fr]">
        <div className="grid gap-4">
          {contactMethods.map((method) => (
            <Card key={method.key} className="p-6">
              <method.icon className="h-7 w-7 text-primary" />
              <h2 className="mt-5 text-xl font-black text-white">
                {t(`home:contact.${method.key}`)}
              </h2>
              <p className="mt-2 text-sm font-bold text-light">{method.value}</p>
              <Link href={method.href} target="_blank" className="mt-5 inline-flex text-sm font-black text-primary">
                {t('home:contact.sendMessage')}
              </Link>
            </Card>
          ))}
        </div>

        <Card className="p-5 tablet:p-8">
          {submissionState === 'success' ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primaryVariant bg-primary/10 text-primary">
                <AiOutlineCheckCircle className="h-9 w-9" />
              </div>
              <h2 className="mt-6 text-3xl font-black text-white">
                {t('home:contact.successTitle')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm font-semibold leading-7 text-light tablet:text-base">
                {t('home:contact.successMessage')}
              </p>
              <button
                type="button"
                onClick={() => setSubmissionState('idle')}
                className="ghost-button mt-7"
              >
                {t('home:contact.successButton')}
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              {submissionState === 'error' && (
                <div
                  className="rounded-2xl border border-red-400/40 bg-red-500/10 px-5 py-4 text-sm font-semibold text-light"
                  role="alert"
                >
                  {t('home:contact.submitError')}
                </div>
              )}
              <div>
                <input
                  type="text"
                  {...register('name', {
                    required: { value: true, message: t('home:contact.nameRequired') },
                    onChange: clearSubmissionState,
                  })}
                  className={inputClass}
                  placeholder={t('home:contact.namePlaceholder')}
                />
                <p className="mt-2 px-2 text-sm font-semibold text-red-300">{errors.name?.message}</p>
              </div>
              <div>
                <input
                  type="email"
                  {...register('email', {
                    required: { value: true, message: t('home:contact.emailRequired') },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: t('home:contact.emailInvalid'),
                    },
                    onChange: clearSubmissionState,
                  })}
                  className={inputClass}
                  placeholder={t('home:contact.emailPlaceholder')}
                />
                <p className="mt-2 px-2 text-sm font-semibold text-red-300">{errors.email?.message}</p>
              </div>
              <div>
                <textarea
                  placeholder={t('home:contact.messagePlaceholder')}
                  rows="7"
                  {...register('message', {
                    required: {
                      value: true,
                      message: t('home:contact.messageRequired'),
                    },
                    onChange: clearSubmissionState,
                  })}
                  className={inputClass}
                />
                <p className="mt-2 px-2 text-sm font-semibold text-red-300">{errors.message?.message}</p>
              </div>
              <button type="submit" disabled={isSubmitting} className="primary-button disabled:cursor-not-allowed disabled:opacity-60">
                <FiSend className="h-4 w-4" />
                {isSubmitting ? t('home:contact.sending') : t('home:contact.submit')}
              </button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};

export default ContactMe;
