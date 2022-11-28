import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import useCases from '../../useCases';
import {
  ResponseError,
  ResponseHandler,
} from '../../frameworks/common/response';
import { User } from '../../interfaces/users/User';
import ValidationErrorHandler from '../../frameworks/expressSpecific/ValidationErrorHandler';

const addUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = ValidationErrorHandler(req, errors.array()[0]);
      throw error;
    }
    const {
      userUseCase: { addUserUseCase },
    } = useCases;
    const user: User = req.body;
    const addUser = addUserUseCase();
    const result = await addUser.execute(user);
    res.json(ResponseHandler(true, null, result));

    next();
  } catch (error) {
    next(error);
  }
};

export default addUserController;
