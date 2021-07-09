const { create } = require('@open-wa/wa-automate');

(async () => {
  await create({
    sessionId: 'TOKO_BOT',
    qrTimeout: 0,
    useStealth: true,
    headless: true,
    authTimeout: 0,
  });
})();
