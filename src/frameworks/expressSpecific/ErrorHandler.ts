import { Request, Response, NextFunction } from 'express';
import utils from '../common';

const { ResponseError, ResponseHandler } = utils;

const ErrorHandler = (err, req: Request, res: Response, next: NextFunction) => {
  const error = ResponseError(
    err.status || 500,
    err.msg || err.message || 'No MSG',
    err.reason || err.stack || 'Something failed',
    req.originalUrl,
    req.ip,
    err?.validationErrors,
  );
  res.status(error.status).json(ResponseHandler(false, error));
};

export default ErrorHandler;
