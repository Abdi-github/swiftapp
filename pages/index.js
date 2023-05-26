import Header from '@/components/header/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Intro from '@/components/intro/Intro';
import Skills from '@/components/skills/Skills';
import Works from '@/components/works/Works';
import ContactMe from '@/components/contact/ContactMe';
import Footer from '@/components/footer/Footer';
import FixedNav from '@/components/fixedNav/FixedNav';

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <>
      <div className="container tablet:max-w-lg laptop:max-w-2xl py-36">
        <h1 className="text-center text-2xl font-semibold mb-2">
          Website under construction
        </h1>
        <p className="text-center text-light font-light">
          Abdulkadir Ahmed Hussien
        </p>
      </div>
      {/* <Header />
      <FixedNav />
      <Intro />
      <Skills />
      <Works />
      <ContactMe />
      <Footer /> */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // locale,
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}
