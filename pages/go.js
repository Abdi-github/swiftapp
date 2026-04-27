const { qrRedirectDestination } = require('../utils/qrConfig');

export async function getServerSideProps() {
  return {
    redirect: {
      destination: qrRedirectDestination,
      permanent: false,
    },
  };
}

export default function PortfolioQrRedirect() {
  return null;
}