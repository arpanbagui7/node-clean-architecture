import repositories from '../../frameworks/repositories/mysql';
import { User } from '../../interfaces/users/User';

const { userRepository } = repositories;

const updateUserUseCase = () => {
  const execute = (id: string, user: User) => {
    const updateUser = userRepository();
    return updateUser.update(id, user);
  };
  return { execute };
};

export default updateUserUseCase;
