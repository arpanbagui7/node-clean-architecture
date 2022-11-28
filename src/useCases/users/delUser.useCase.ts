import repositories from '../../frameworks/repositories/mysql';

const { userRepository } = repositories;

const delUserUseCase = () => {
  const execute = (id: string) => {
    const delUser = userRepository();
    return delUser.del(id);
  };
  return { execute };
};

export default delUserUseCase;
