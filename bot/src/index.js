const { create } = require('@open-wa/wa-automate');
const { setupListener } = require('./events/wrapper');
const { db } = require('./db');

(async () => {
  await db.authenticate();
  await db.sync();
  const client = await create({
    sessionId: 'TOKO_BOT',
    qrTimeout: 0,
    useStealth: true,
    headless: true,
    authTimeout: 0,
  });

  setupListener(client);
})();
