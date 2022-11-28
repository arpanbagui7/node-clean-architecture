import repositories from '../../frameworks/repositories/mysql';
import { User } from '../../interfaces/users/User';

const { userRepository } = repositories;

const addUserUseCase = () => {
  const execute = (user: User) => {
    const addUser = userRepository();
    return addUser.add(user);
  };
  return { execute };
};

export default addUserUseCase;
