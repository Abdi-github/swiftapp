import Image from 'next/image';
import Link from 'next/link';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { useTranslation } from 'next-i18next';

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div
      className="container px-4   tablet:max-w-2xl laptop:max-w-5xl "
      id="about"
    >
      <div className="text-center  mb-10">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2  tablet:text-base tablet:tracking-normal">
          Get to know
        </h4>
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          About Me
        </h2>
      </div>
      <div className=" grid grid-cols-1 gap-4 laptop:grid-cols-2 laptop:gap-10 ">
        <div className="mx-auto laptop:ml-4 w-[210px] h-60 tablet:w-60 laptop:w-80 laptop:h-96   mb-12 tablet:mb-16  relative bg-gradient-to-br from-transparent via-primary to-transparent rounded-3xl ">
          <Image
            src="/assets/m.png"
            fill
            className="object-cover rounded-3xl rotate-[10deg]  transition-custom hover:rotate-0 "
            alt="me"
          />
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-backGroundVariant py-10 px-2 tablet:px-4   flex flex-col items-center text-center rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant">
              <FaAward className="w-6 h-6 text-primary" />
              <h4 className="font-semibold mt-6 mb-2">Experience</h4>

              <p className="text-light text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="bg-backGroundVariant py-10 px-2 tablet:px-4  flex flex-col items-center text-center rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant">
              <FaAward className="w-6 h-6 text-primary" />
              <h4 className="font-semibold mt-6 mb-2">Experience</h4>

              <p className="text-light text-sm font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="mb-7">
            <p className=" font-roboto text-light text-lg  tablet:font-semibold text-justify  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam exercitationem possimus neque reiciendis,
              voluptas atque fugiat dolorum eaque ex non, unde eius assumenda.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam exercitationem possimus neque reiciendis,
              voluptas atque fugiat dolorum eaque ex non, unde eius assumenda.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, quibusdam exercitationem possimus neque reiciendis,
              voluptas atque fugiat dolorum eaque ex non, unde eius assumenda.
            </p>
          </div>

          <div className="flex justify-center ">
            <button className="px-3 py-2 bg-primary rounded-md  text-backGround hover:bg-white font-semibold transition-custom">
              <Link href="#contact"> {t('home:lets')}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
