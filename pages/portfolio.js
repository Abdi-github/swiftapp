import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SiteLayout from '@/components/layout/SiteLayout';
import Works from '@/components/works/Works';

export default function Portfolio() {
  return (
    <SiteLayout>
      <Works />
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
