import getUserByIdUseCase from './getUserById.useCase';
import getUsersUseCase from './getUsers.useCase';
import addUserUseCase from './addUser.useCase';
import updateUserUseCase from './updateUser.useCase';
import delUserUseCase from './delUser.useCase';

const userUseCase = {
  getUserByIdUseCase,
  getUsersUseCase,
  addUserUseCase,
  updateUserUseCase,
  delUserUseCase,
};

export default userUseCase;
