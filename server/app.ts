import * as express from 'express';
import errorMiddleware from './middleware/error.middleware';
import * as path from 'path';

import setRoutes from './routes';
import { NextFunction, Request, Response } from 'express';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req:Request, res:Response, next:NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

async function main(): Promise<any> {
  try {

    setRoutes(app);
    /*app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });*/
    app.use(errorMiddleware);
    app.listen(app.get('port'), () => console.log(`Washmen Angular Full Stack listening on port ${app.get('port')}`));
  } catch (err) {
    console.error(err);
  }
}

main();

export { app };
