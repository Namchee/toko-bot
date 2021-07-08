const { Server } = require('./modules/server/index');
const { createBot } = require('./modules/bot/index');

(async () => {
  const server = new Server();
  const botClient = await createBot();
  server.addMiddleware(botClient.middleware(true));;
  server.start();
})();
