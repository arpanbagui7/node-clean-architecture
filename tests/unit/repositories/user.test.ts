import repositories from '../../../src/frameworks/repositories/mysql';
import { User } from '../../../src/interfaces/users/User';

const { userRepository } = repositories;
const user = userRepository();
describe('User repository', () => {
  test('Add user and Get user by Id', async () => {
    const random = new Date().getTime();
    const test_user: User = {
      name: `testuser_${random}`,
    };
    const newUser = await user.add(test_user);
    expect(newUser).toBeDefined();
    expect(newUser.id).toBeDefined();
    expect(newUser.name).toBe(test_user.name);
    const getUser = await user.getById(newUser.id);
    expect(getUser).toEqual(newUser);
  });
  test('Delete user', async () => {
    //Create Users
    let random = new Date().getTime();
    let test_user: User = {
      name: `testuser_${random}`,
    };
    const willbeDeletedUser = await user.add(test_user);

    random = new Date().getTime();
    test_user = {
      name: `testuser_${random}`,
    };
    const shouldStayUser = await user.add(test_user);
    expect(willbeDeletedUser).toBeDefined();
    expect(shouldStayUser).toBeDefined();
    //Delete User
    const deletedUser = await user.del(willbeDeletedUser.id);
    expect(willbeDeletedUser).toEqual(deletedUser);
    const shouldBeUndefinedUser = await user.getById(deletedUser.id);
    expect(shouldBeUndefinedUser).toBeNull();
    const shouldBeExistedUser = await user.getById(shouldStayUser.id);
    expect(shouldBeExistedUser).toEqual(shouldStayUser);
  });

  test('Update user', async () => {
    //Create User
    let random = new Date().getTime();
    const test_user: User = {
      name: `testuser_${random}`,
    };
    const willbeUpdatedUser = await user.add(test_user);
    expect(willbeUpdatedUser).toBeDefined();
    //Update User
    random = new Date().getTime();
    const userToBeUpdated = { name: `testuser_${random}` };
    const updatedUser = await user.update(
      willbeUpdatedUser.id,
      userToBeUpdated,
    );
    expect(updatedUser).toBeDefined();
    expect(updatedUser.name).toBe(userToBeUpdated.name);
  });
});
