import { Request, Response, NextFunction } from 'express';
import useCases from '../../useCases';
import { ResponseHandler } from '../../frameworks/common/response';
import { User } from '../../interfaces/users/User';

const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      userUseCase: { updateUserUseCase },
    } = useCases;
    const { id } = req.params;
    const user: User = req.body;
    const updateUser = updateUserUseCase();
    const result = await updateUser.execute(id, user);
    res.json(ResponseHandler(true, null, result));
    next();
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
