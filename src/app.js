import express from 'express';

import routes from './routes';

import counter from './middlewares/counter';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(counter);
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;