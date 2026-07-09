import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTranslation } from 'next-i18next';
import { markHomeNavigationIntent } from '@/utils/navigationIntent';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-backGroundOpac px-4 pt-12 pb-32 backdrop-blur-xl laptop:pb-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-black text-white">
          Abdulkadir Ahmed Hussien
        </h2>
        <p className="mt-3 text-center text-sm font-bold text-primary">
          {t('home:subtitle')}
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center gap-4 tablet:flex-row tablet:justify-center">
        <Link
          href="/"
          onClick={markHomeNavigationIntent}
          className="font-bold text-light transition-custom hover:text-primary"
        >
          {t('home:footer.home')}
        </Link>
        <Link
          href="/about"
          className="font-bold text-light transition-custom hover:text-primary"
        >
          {t('home:footer.about')}
        </Link>
        <Link
          href="/skills"
          className="font-bold text-light transition-custom hover:text-primary"
        >
          {t('home:footer.skills')}
        </Link>
        <Link
          href="/portfolio"
          className="font-bold text-light transition-custom hover:text-primary"
        >
          {t('home:footer.portfolio')}
        </Link>
        <Link
          href="/contact"
          className="font-bold text-light transition-custom hover:text-primary"
        >
          {t('home:footer.contact')}
        </Link>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <Link
          href="https://www.linkedin.com/in/abdulkadir-ahmed-4488002a1"
          target="_blank"
          rel="noreferrer"
          className="ghost-button px-4"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="h-5 w-5" />
        </Link>
        <Link
          href="https://github.com/Abdi-github"
          target="_blank"
          rel="noreferrer"
          className="ghost-button px-4"
          aria-label="GitHub"
        >
          <FiGithub className="h-5 w-5" />
        </Link>
        <Link
          href="mailto:abdi@swiftapp.ch"
          className="ghost-button px-4"
          aria-label="Email"
        >
          <FiMail className="h-5 w-5" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
