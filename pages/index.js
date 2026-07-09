import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaDocker, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAngular, SiDotnet, SiSpringboot, SiVuedotjs } from 'react-icons/si';
import SiteLayout from '@/components/layout/SiteLayout';
import Card from '@/components/ui/Card';
import ParticleGreeting from '@/components/intro/ParticleGreeting';
import { consumeHomeNavigationIntent } from '@/utils/navigationIntent';

const tech = [
  { name: 'React', icon: FaReact },
  { name: 'Vue.js', icon: SiVuedotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: '.NET', icon: SiDotnet },
  { name: 'Docker', icon: FaDocker },
];

const highlights = [
  { target: 20, suffix: '+', label: 'PROJECTS' },
  { target: 8, suffix: '', label: 'DEMO GROUPS' },
  { target: 8, suffix: '+', label: 'STACKS' },
];

const CountUpNumber = ({ target, suffix = '', isActive }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setValue(0);
      return undefined;
    }

    const duration = 1400;
    const startTime = performance.now();
    let frameId;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isActive, target]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const navigationEntry = window.performance?.getEntriesByType?.('navigation')?.[0];
    const isReload = navigationEntry?.type === 'reload';
    const isRunningAppSession = window.__portfolioAppSessionActive === true;
    const cameFromHomeLink = consumeHomeNavigationIntent();

    setShowGreeting(!isRunningAppSession && (isReload || !cameFromHomeLink));
  }, []);

  const completeGreeting = useCallback(() => {
    setShowGreeting(false);
  }, []);

  return (
    <SiteLayout hideChrome={showGreeting}>
      {showGreeting && (
        <ParticleGreeting
          words={['FULL-STACK', 'DEVELOPER', 'BUILD', 'SHIP', 'SCALE']}
          onComplete={completeGreeting}
        />
      )}

      <section className="page-shell flex min-h-screen items-center">
        <div className="grid w-full gap-8 laptop:grid-cols-[1.15fr_0.85fr] laptop:items-center">
          <div>
            <p className="section-kicker">{t('home:greet')}</p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-white tablet:text-7xl">
              Abdulkadir Ahmed Hussien
            </h1>
            <p className="mt-5 text-xl font-extrabold text-primary tablet:text-2xl">
              {t('home:subtitle')}
            </p>
            <p className="section-copy">
              I build complete, deployed products across React, Vue, Angular, Node.js, Laravel, .NET,
              Spring Boot, Docker, and CI/CD. My portfolio focuses on working systems employers can
              inspect, not static mockups.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/portfolio" className="primary-button">
                {t('home:portfolio.title')}
                <FiArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="ghost-button">
                {t('home:lets')}
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
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
              <Link href="mailto:abdi@swiftapp.ch" className="ghost-button px-4" aria-label="Email">
                <FiMail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Production profile
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/5 p-4 text-center transition-custom hover:bg-primary/10"
                  >
                    <div className="text-3xl font-black text-white">
                      <CountUpNumber
                        target={item.target}
                        suffix={item.suffix}
                        isActive={!showGreeting}
                      />
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-light">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Stack range
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {tech.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold text-light">{item.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}
