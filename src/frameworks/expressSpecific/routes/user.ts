import express from 'express';
import controllers from '../../../controllers';
import validators from '../../../validators';

const router = express.Router();

const {
  userController: {
    getUserByIdController,
    getUsersController,
    addUserController,
    updateUserController,
    delUserController,
  },
} = controllers;
const { userValidators } = validators;

router
  .route('/')
  .get(getUsersController)
  .post(userValidators.addUserValidator, addUserController);
router
  .route('/:id')
  .get(getUserByIdController)
  .put(updateUserController)
  .delete(delUserController);

export default router;
