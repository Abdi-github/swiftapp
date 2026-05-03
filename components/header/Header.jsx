import Link from 'next/link';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { CircleFlag } from 'react-circle-flags';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

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
    href: '/assets/CV_DE.pdf',
    download: 'CV_DE.pdf',
  },
};

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const activeLocale = router.locale || 'fr';
  const cvFile = CV_BY_LOCALE[activeLocale] || CV_BY_LOCALE.fr;

  return (
    <header id="home" className="mb-12">
      <div className="container px-4 pt-20 pb-8 tablet:max-w-3xl laptop:max-w-6xl flex justify-between items-center tablet:pt-30 laptop:pt-36">
        <div>
          <Link
            href="https://www.linkedin.com/in/abdulkadir-ahmed"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="h-4 w-4 laptop:h-5 laptop:w-5  mb-6 text-primary hover:text-white transition-custom" />
          </Link>
          <Link
            href="https://github.com/Abdi-github"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="h-4 w-4 laptop:h-5 laptop:w-5 mb-6 text-primary hover:text-white transition-custom" />
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="h-4 w-4 laptop:h-5 laptop:w-5 mb-6 text-primary hover:text-white transition-custom" />
          </Link>
        </div>
        <div className="text-center space-y-10">
          <div className="space-y-2">
            <h5 className="text-sm tracking-wider font-semibold tablet:text-base tablet:font-bold">
              {t('home:greet')}
            </h5>
            <h1 className="text-xl font-semibold tablet:font-bold desktop:font-extrabold  tablet:text-3xl ">
              Abdulkadir Ahmed <br /> Hussien
            </h1>
            <h5 className="text-primary text-sm font-bold laptop:text-base ">
              {t('home:subtitle')}
            </h5>
          </div>

          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 tablet:gap-4">
            <a
              href={cvFile.href}
              download={cvFile.download}
              className="px-3 py-2 border border-primary rounded-md text-primary hover:bg-white hover:text-backGround hover:border-transparent font-semibold transition-custom"
            >
                {t('home:cv')}
            </a>
            <button className="px-3 py-2 bg-primary rounded-md text-backGround hover:bg-white font-semibold transition-custom">
              <Link href="#contact"> {t('home:lets')}</Link>
            </button>
          </div>
        </div>
        <div>
          <Link href="/" locale="en">
            <CircleFlag
              countryCode="uk"
              className={`h-4 w-4 tablet:h-5 tablet:w-5 mb-6 hover:animate-pulse ${
                router.locale === 'en' ? 'scale-125  ' : ''
              }`}
            />
          </Link>
          <Link href="/" locale="fr">
            <CircleFlag
              countryCode="fr"
              className={`h-4 w-4 tablet:h-5 tablet:w-5 mb-6 hover:animate-pulse ${
                router.locale === 'fr' ? 'scale-125' : ''
              }`}
            />
          </Link>
          <Link href="/" locale="de">
            <CircleFlag
              countryCode="de"
              className={`h-4 w-4 tablet:h-5 tablet:w-5 mb-6 hover:animate-pulse ${
                router.locale === 'de' ? 'scale-125' : ''
              }`}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
