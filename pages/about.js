import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SiteLayout from '@/components/layout/SiteLayout';
import Intro from '@/components/intro/Intro';
import Stats from '@/components/stats/Stats';

export default function About() {
  return (
    <SiteLayout>
      <Intro />
      <div className="relative z-10 pb-20">
        <Stats />
      </div>
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
