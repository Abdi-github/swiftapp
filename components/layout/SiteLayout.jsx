import AnimatedBackground from '@/components/ui/AnimatedBackground';
import Header from '@/components/header/Header';
import FixedNav from '@/components/fixedNav/FixedNav';
import Footer from '@/components/footer/Footer';

const SiteLayout = ({ children, hideChrome = false }) => {
  return (
    <>
      <AnimatedBackground />
      {!hideChrome && <Header />}
      <main className="relative z-10 min-h-screen">{children}</main>
      {!hideChrome && (
        <>
          <FixedNav />
          <Footer />
        </>
      )}
    </>
  );
};

export default SiteLayout;
