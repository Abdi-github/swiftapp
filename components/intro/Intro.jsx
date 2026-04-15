import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaAward, FaServer } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

const Intro = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div
      className="container px-4 tablet:max-w-3xl laptop:max-w-6xl"
      id="about"
    >
      <div className="text-center mb-10">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2 tablet:text-base tablet:tracking-normal">
          {t('home:about.getToKnow')}
        </h4>
        <h2 className="text-primary text-xl font-semibold tablet:text-2xl">
          {t('home:about.title')}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 laptop:grid-cols-2 laptop:gap-10">
        <div className="mx-auto laptop:ml-4 w-[210px] h-60 tablet:w-60 laptop:w-80 laptop:h-96 mb-12 tablet:mb-16 relative bg-gradient-to-br from-transparent via-primary to-transparent rounded-3xl">
          <Image
            src="/assets/m.png"
            fill
            className="object-cover rounded-3xl rotate-[10deg] transition-custom hover:rotate-0"
            alt="me"
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={`py-10 px-2 tablet:px-4 flex flex-col items-center text-center rounded-3xl transition-custom cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-transparent border-2 border-primary'
                  : 'bg-backGroundVariant hover:bg-transparent hover:border hover:border-primaryVariant'
              }`}
            >
              <FaAward className="w-6 h-6 text-primary" />
              <h4 className="font-semibold mt-6 mb-2">{t('home:about.experience')}</h4>
              <p className="text-light text-sm font-semibold">
                {t('home:about.experienceSummary')}
              </p>
            </button>
            <button
              onClick={() => setActiveTab('devops')}
              className={`py-10 px-2 tablet:px-4 flex flex-col items-center text-center rounded-3xl transition-custom cursor-pointer ${
                activeTab === 'devops'
                  ? 'bg-transparent border-2 border-primary'
                  : 'bg-backGroundVariant hover:bg-transparent hover:border hover:border-primaryVariant'
              }`}
            >
              <FaServer className="w-6 h-6 text-primary" />
              <h4 className="font-semibold mt-6 mb-2">{t('home:about.devops')}</h4>
              <p className="text-light text-sm font-semibold">
                {t('home:about.devopsSummary')}
              </p>
            </button>
          </div>
          <div className="mb-7">
            <p className="font-roboto text-light text-base tablet:text-lg tablet:font-semibold text-justify leading-relaxed">
              {activeTab === 'experience'
                ? t('home:about.experienceText')
                : t('home:about.devopsText')
              }
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-3 py-2 bg-primary rounded-md text-backGround hover:bg-white font-semibold transition-custom">
              <Link href="#contact">{t('home:lets')}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
