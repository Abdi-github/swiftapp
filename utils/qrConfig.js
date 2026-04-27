const encodedQrUrl = process.env.NEXT_PUBLIC_QR_URL || 'https://swiftapp.ch/go';
const qrRedirectDestination =
  process.env.QR_REDIRECT_DESTINATION || 'https://swiftapp.ch/';
const qrAssetBaseName = 'swiftapp-portfolio-qr';

module.exports = {
  encodedQrUrl,
  qrRedirectDestination,
  qrAssetBaseName,
};