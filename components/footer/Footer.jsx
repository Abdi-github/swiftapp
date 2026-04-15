import Link from 'next/link';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className=" mt-20 pt-10 pb-40 bg-backGroundVariant">
      <div className="mb-20">
        <h1 className="text-3xl text-light text-center">
          Abdulkadir Ahmed <br /> Hussien
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-5 mb-10 tablet:flex-row tablet:justify-center tablet:items-center tablet:space-y-0 tablet:space-x-5">
        <Link
          href="#home"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          {t('home:footer.home')}
        </Link>
        <Link
          href="#about"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          {t('home:footer.about')}
        </Link>
        <Link
          href="#skills"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          {t('home:footer.skills')}
        </Link>
        <Link
          href="#portfolio"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          {t('home:footer.portfolio')}
        </Link>
        <Link
          href="#contact"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          {t('home:footer.contact')}
        </Link>
      </div>
      <div className="flex justify-center space-x-5">
        <Link
          href="https://www.linkedin.com/in/abdulkadir-ahmed/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary transition-custom" />
        </Link>
        <Link
          href="https://github.com/Abdi-github"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary transition-custom" />
        </Link>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary transition-custom" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
