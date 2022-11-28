import { Request, Response, NextFunction } from 'express';
import useCases from '../../useCases';
import { ResponseHandler } from '../../frameworks/common/response';

const delUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      userUseCase: { delUserUseCase },
    } = useCases;
    const { id } = req.params;
    const delUser = delUserUseCase();
    const result = await delUser.execute(id);
    res.json(ResponseHandler(true, null, result));
    next();
  } catch (error) {
    next(error);
  }
};

export default delUserController;
