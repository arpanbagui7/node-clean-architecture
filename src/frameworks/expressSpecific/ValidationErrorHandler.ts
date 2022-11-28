import { Request } from 'express';
import utils from '../common';
import { ValidationError } from 'express-validator';

const { ValidationError: ValidationErr, ResponseError } = utils;

const ValidationErrorHandler = (req: Request, arg: ValidationError) => {
  const { msg, param, location } = arg;
  const error = ValidationErr(403, `${location}>${param}`, msg);
  return ResponseError(
    403,
    'Validation Errors',
    'Sent bad data',
    req.originalUrl,
    req.ip,
    [error],
  );
};

export default ValidationErrorHandler;
