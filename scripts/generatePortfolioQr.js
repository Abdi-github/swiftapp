const fs = require('node:fs/promises');
const path = require('node:path');
const QRCode = require('qrcode');

const { encodedQrUrl, qrAssetBaseName } = require('../utils/qrConfig');

const outputDirectory = path.join(__dirname, '..', 'public', 'assets');
const svgPath = path.join(outputDirectory, `${qrAssetBaseName}.svg`);
const pngPath = path.join(outputDirectory, `${qrAssetBaseName}.png`);

const qrOptions = {
  errorCorrectionLevel: 'H',
  margin: 2,
  width: 1200,
  color: {
    dark: '#111827',
    light: '#FFFFFFFF',
  },
};

async function generateQrAssets() {
  await fs.mkdir(outputDirectory, { recursive: true });

  await QRCode.toFile(svgPath, encodedQrUrl, {
    ...qrOptions,
    type: 'svg',
  });

  await QRCode.toFile(pngPath, encodedQrUrl, qrOptions);

  console.log(`Generated QR assets for ${encodedQrUrl}`);
  console.log(`- ${svgPath}`);
  console.log(`- ${pngPath}`);
}

generateQrAssets().catch((error) => {
  console.error('Failed to generate QR assets.', error);
  process.exitCode = 1;
});