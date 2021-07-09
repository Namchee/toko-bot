const express = require('express');

class Server {
  constructor() {
    this.server = express();
    this.server.use(express.json());
  }

  addMiddleware(middleware) {
    this.server.use(middleware);
  }

  start() {
    this.server.get('/ping', (req, res) => res.send('pang'));
    this.server.listen(
      Number(process.env.PORT),
      () => console.log(`Server is listening on port ${process.env.PORT}`),
    );
  }
}

(() => {
  const server = new Server();
  server.start();
})();
