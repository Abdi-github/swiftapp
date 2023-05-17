import Link from 'next/link';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { CircleFlag } from 'react-circle-flags';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // console.log(router.locale);
  return (
    <header id="home" className="mb-12">
      <div className="container  px-4 pt-20 pb-8 tablet:max-w-2xl laptop:max-w-5xl   flex justify-between items-center  tablet:pt-30 laptop:pt-36">
        <div>
          <Link
            href="https://www.linkedin.com/in/meri-gogichashvili/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="h-4 w-4 laptop:h-5 laptop:w-5  mb-6 text-primary hover:text-white transition-custom" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/meri-gogichashvili/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="h-4 w-4 laptop:h-5 laptop:w-5 mb-6 text-primary hover:text-white transition-custom" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/meri-gogichashvili/"
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
              Full-stack Developer
            </h5>
          </div>

          <div className="grid grid-cols-1 gap-3 tablet:grid-cols-2 tablet:gap-4">
            <button className=" px-3 py-2 border border-primary rounded-md text-primary hover:bg-white hover:text-backGround hover:border-transparent font-semibold transition-custom">
              <Link href="/assets/cvvv.pdf" download="cvvv">
                {t('home:cv')}
              </Link>
            </button>
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
