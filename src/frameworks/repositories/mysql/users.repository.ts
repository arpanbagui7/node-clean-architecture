import { PrismaClient, Prisma } from '@prisma/client';
import { User } from '../../../interfaces/users/User';

const prisma = new PrismaClient({
  errorFormat: 'minimal',
});

const userRepository = () => {
  const add = async (user: User) => {
    try {
      const newUser: User = await prisma.tbl_user.create({ data: user });
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  const getById = async (id: string) => {
    const user: User | null = await prisma.tbl_user.findUnique({
      where: { id },
    });
    console.log(user);
    return user;
  };

  const getAll = async () => {
    const users: User[] | [] = await prisma.tbl_user.findMany({});
    return users;
  };

  const update = async (id: string, user: User) => {
    const updateUser: User = await prisma.tbl_user.update({
      where: { id },
      data: user,
    });
    return updateUser;
  };

  const del = async (id: string) => {
    const deleteUser: User = await prisma.tbl_user.delete({
      where: { id },
    });
    return deleteUser;
  };

  return { getById, getAll, add, update, del };
};

export default userRepository;
