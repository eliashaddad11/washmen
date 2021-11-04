import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';
 
function errorMiddleware(err:TypeError | HttpException, req: Request, res: Response, next: NextFunction) {
  let customError = err;

  /*if (!(err instanceof HttpException)) {
    customError = new HttpException(500,
      'Oh no, this is embarrasing. We are having troubles my friend'
    );
  }*/

  const status = (customError as HttpException).status || 500;
  const message = customError.message || 'Something went wrong';
  res
    .status(status)
    .send({
      status,
      message,
    })
}
 
export default errorMiddleware;