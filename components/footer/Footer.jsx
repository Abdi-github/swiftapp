import Link from 'next/link';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { CircleFlag } from 'react-circle-flags';

const Footer = () => {
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
          Home
        </Link>
        <Link
          href="#about"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          Skills
        </Link>
        <Link
          href="#portfolio"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          Portfolio
        </Link>
        <Link
          href="#contact"
          className="text-primary font-semibold transition-custom hover:text-light"
        >
          Contacts
        </Link>
      </div>
      <div className="flex justify-center space-x-5">
        <Link
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary transition-custom" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/meri-gogichashvili/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="h-6 w-6 tablet:h-7 tablet:w.7 hover:text-primary transition-custom" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/meri-gogichashvili/"
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
