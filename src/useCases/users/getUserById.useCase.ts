import repositories from '../../frameworks/repositories/mysql';

const { userRepository } = repositories;

const getUserByIdUseCase = () => {
  const execute = (id: string) => {
    const getUserById = userRepository();
    return getUserById.getById(id);
  };
  return { execute };
};

export default getUserByIdUseCase;
