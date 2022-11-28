import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './frameworks/expressSpecific/routes';
import ErrorHandler from './frameworks/expressSpecific/ErrorHandler';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const base_api = process.env.BASE_API || '/api/v1';

const start = () => {
  //Common Middlewares
  app.use(bodyParser.json());

  //Routes
  app.use(base_api, router);

  //Common Error Handler
  app.use(ErrorHandler);

  //Create Server
  app.listen(port, () => {
    console.log(`WOHOOO our server is running under port ${port}`);
  });
};

export default start;
