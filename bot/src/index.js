const { create } = require('@open-wa/wa-automate');
const { db } = require('./db');

(async () => {
  await db.authenticate();
  await db.sync();
  await create({
    sessionId: 'TOKO_BOT',
    qrTimeout: 0,
    useStealth: true,
    headless: true,
    authTimeout: 0,
  });
})();
