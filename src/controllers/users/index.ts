import getUserByIdController from './getUserById.controller';
import getUsersController from './getUsers.controller';
import addUserController from './addUser.controller';
import updateUserController from './updateUser.controller';
import delUserController from './delUser.controller';

const userController = {
  getUserByIdController,
  getUsersController,
  addUserController,
  updateUserController,
  delUserController,
};

export default userController;
