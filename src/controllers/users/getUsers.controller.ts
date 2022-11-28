import { Request, Response, NextFunction } from 'express';
import useCases from '../../useCases';
import { ResponseHandler } from '../../frameworks/common/response';

const getUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      userUseCase: { getUsersUseCase },
    } = useCases;
    const getUsers = getUsersUseCase();
    const result = await getUsers.execute();
    res.json(ResponseHandler(true, null, result));
    next();
  } catch (error) {
    next(error);
  }
};

export default getUsersController;
