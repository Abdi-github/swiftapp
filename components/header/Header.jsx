import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { markHomeNavigationIntent } from '@/utils/navigationIntent';

const CV_BY_LOCALE = {
  en: {
    href: '/assets/CV_EN.pdf',
    download: 'CV_EN.pdf',
  },
  fr: {
    href: '/assets/CV_FR.pdf',
    download: 'CV_FR.pdf',
  },
  de: {
    href: '/assets/CV_EN.pdf',
    download: 'CV_EN.pdf',
  },
};

const navItems = [
  { href: '/', labelKey: 'home:footer.home' },
  { href: '/about', labelKey: 'home:footer.about' },
  { href: '/skills', labelKey: 'home:footer.skills' },
  { href: '/portfolio', labelKey: 'home:footer.portfolio' },
  { href: '/contact', labelKey: 'home:footer.contact' },
];

const socials = [
  {
    href: 'https://www.linkedin.com/in/abdulkadir-ahmed-4488002a1',
    label: 'LinkedIn',
    icon: FiLinkedin,
  },
  {
    href: 'https://github.com/Abdi-github',
    label: 'GitHub',
    icon: FiGithub,
  },
  {
    href: 'mailto:abdi@swiftapp.ch',
    label: 'Email',
    icon: FiMail,
  },
];

const languages = [
  { locale: 'en', label: 'EN', ariaLabel: 'English' },
  { locale: 'fr', label: 'FR', ariaLabel: 'Francais' },
  { locale: 'de', label: 'DE', ariaLabel: 'Deutsch' },
];

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const activeLocale = router.locale || 'fr';
  const cvFile = CV_BY_LOCALE[activeLocale] || CV_BY_LOCALE.fr;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-backGroundOpac backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 tablet:px-6">
        <Link href="/" className="min-w-0" onClick={markHomeNavigationIntent}>
          <span className="block text-sm font-black uppercase text-white tablet:text-base">
            Abdulkadir Ahmed
          </span>
          <span className="block text-xs font-bold text-primary">
            {t('home:subtitle')}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 laptop:flex">
          {navItems.map((item) => {
            const isActive = router.pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={item.href === '/' ? markHomeNavigationIntent : undefined}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-custom ${
                  isActive
                    ? 'bg-primary/15 text-primary'
                    : 'text-light hover:bg-white/10 hover:text-white'
                }`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 tablet:flex">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="rounded-full border border-white/10 p-2 text-light transition-custom hover:border-primaryVariant hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <a href={cvFile.href} download={cvFile.download} className="primary-button px-4 py-2">
            <FiDownload className="h-4 w-4" />
            <span className="hidden largePhone:inline">{t('home:cv')}</span>
          </a>

          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.055] p-1 shadow-lg shadow-black/20 backdrop-blur-xl">
            {languages.map((language) => {
              const isActive = activeLocale === language.locale;

              return (
                <Link
                  key={language.locale}
                  href={router.pathname}
                  locale={language.locale}
                  aria-label={language.ariaLabel}
                  className={`rounded-full px-3 py-1.5 text-xs font-black transition-custom ${
                    isActive
                      ? 'bg-primary text-backGround shadow-lg shadow-primary/20'
                      : 'text-light hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {language.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
