import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SiteLayout from '@/components/layout/SiteLayout';
import Skills from '@/components/skills/Skills';

export default function SkillsPage() {
  return (
    <SiteLayout>
      <Skills />
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
