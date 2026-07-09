import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SiteLayout from '@/components/layout/SiteLayout';
import ContactMe from '@/components/contact/ContactMe';

export default function Contact() {
  return (
    <SiteLayout>
      <ContactMe />
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
