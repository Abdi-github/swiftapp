import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { TbCodeCircle2 } from 'react-icons/tb';
import { GrProjects } from 'react-icons/gr';
import { BiCertification } from 'react-icons/bi';
import { IoCodeWorkingOutline } from 'react-icons/io5';

const FixedNav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav className="flex justify-center space-x-5 bg-black/30 rounded-full fixed  bottom-8 left-1/2 transform -translate-x-1/2 px-5 py-3  z-50">
      <Link
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom  ${
          activeNav === '#home' ? 'bg-black/30 text-white' : ''
        }`}
        // className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome className="h-[1.1rem] w-[1.1rem]  " />
      </Link>
      <Link
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom ${
          activeNav === '#about' ? 'bg-black/30 text-white' : ''
        }`}
      >
        <AiOutlineUser className="h-[1.1rem] w-[1.1rem]  " />
      </Link>
      <Link
        href="#skills"
        onClick={() => setActiveNav('#home')}
        className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom ${
          activeNav === '#skills' ? 'bg-black/30 text-white' : ''
        }`}
      >
        <BiCertification className="h-[1.1rem] w-[1.1rem]  " />
      </Link>
      <Link
        href="#portfolio"
        onClick={() => setActiveNav('#home')}
        className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom ${
          activeNav === '#portfolio' ? 'bg-black/30 text-white' : ''
        }`}
      >
        <IoCodeWorkingOutline className="h-[1.1rem] w-[1.1rem]  " />
      </Link>
      <Link
        href="#contact"
        onClick={() => setActiveNav('#home')}
        className={`p-4 rounded-full text-light hover:bg-black/30 hover:text-white transition-custom ${
          activeNav === '#contact' ? 'bg-black/30 text-white' : ''
        }`}
      >
        <BiMessageSquareDetail className="h-[1.1rem] w-[1.1rem]  text-light" />
      </Link>
    </nav>
  );
};

export default FixedNav;
