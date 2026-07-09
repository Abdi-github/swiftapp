import Link from 'next/link';
import { useState } from 'react';
import { FaAward, FaServer } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
import Card from '@/components/ui/Card';

const Intro = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    {
      key: 'experience',
      icon: FaAward,
      title: t('home:about.experience'),
      summary: t('home:about.experienceSummary'),
      text: t('home:about.experienceText'),
    },
    {
      key: 'devops',
      icon: FaServer,
      title: t('home:about.devops'),
      summary: t('home:about.devopsSummary'),
      text: t('home:about.devopsText'),
    },
  ];

  const active = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="page-shell">
      <div className="max-w-4xl">
        <p className="section-kicker">{t('home:about.getToKnow')}</p>
        <h1 className="section-title">{t('home:about.title')}</h1>
        <p className="section-copy">
          A portfolio for employers who want to see breadth, production thinking, and the ability
          to take a feature from interface to deployment.
        </p>
      </div>

      <div className="mt-10 grid gap-5 laptop:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`glass-card p-6 text-left transition-custom hover:border-primaryVariant ${
                activeTab === tab.key ? 'border-primaryVariant bg-primary/10' : ''
              }`}
            >
              <tab.icon className="h-6 w-6 text-primary" />
              <h2 className="mt-5 text-xl font-black text-white">{tab.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-light">{tab.summary}</p>
            </button>
          ))}
        </div>

        <Card className="p-7 tablet:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {active.title}
          </p>
          <p className="mt-6 text-base font-semibold leading-8 text-light tablet:text-lg">
            {active.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/portfolio" className="primary-button">
              {t('home:portfolio.title')}
            </Link>
            <Link href="/contact" className="ghost-button">
              {t('home:lets')}
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Intro;
