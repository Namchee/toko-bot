const { create } = require('@open-wa/wa-automate');

function createBot() {
  return create({
    sessionId: 'TOKO_BOT',
    qrTimeout: 0,
    useStealth: true,
    headless: true,
    authTimeout: 0,
  });
}


exports.createBot = createBot;
