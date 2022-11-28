import { Request, Response, NextFunction } from 'express';
import useCases from '../../useCases';
import { ResponseHandler } from '../../frameworks/common/response';

const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      userUseCase: { getUserByIdUseCase },
    } = useCases;
    const { id } = req.params;
    const getUserById = getUserByIdUseCase();
    const result = await getUserById.execute(id);
    res.json(ResponseHandler(true, null, result));
    next();
  } catch (error) {
    next(error);
  }
};

export default getUserByIdController;
