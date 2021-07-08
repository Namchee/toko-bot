const express = require('express');

class Server {
  constructor() {
    this.server = express();
  }

  addMiddleware(middleware) {
    this.server.use(middleware);
  }

  start() {
    this.server.listen(
      Number(process.env.PORT),
      () => console.log(`Server is listening on port ${process.env.PORT}`),
    );
  }
}

exports.Server = Server;
