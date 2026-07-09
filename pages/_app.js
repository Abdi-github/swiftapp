import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const appSessionTimer = window.setTimeout(() => {
      window.__portfolioAppSessionActive = true;
    }, 0);

    return () => {
      window.clearTimeout(appSessionTimer);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default appWithTranslation(MyApp);
