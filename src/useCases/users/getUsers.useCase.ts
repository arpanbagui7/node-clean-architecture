import repositories from '../../frameworks/repositories/mysql';

const { userRepository } = repositories;

const getUsersUseCase = () => {
  const execute = () => {
    const getUsers = userRepository();
    return getUsers.getAll();
  };
  return { execute };
};

export default getUsersUseCase;
