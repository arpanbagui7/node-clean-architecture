import { body, check } from 'express-validator';
import constants from '../constants';

const { validationMsg } = constants;

const userValidators = {
  addUserValidator: [
    check('name')
      .isString()
      .withMessage(`name ${validationMsg.string_type}`)
      .isLength({ min: 1, max: 191 })
      .withMessage(`name ${validationMsg.max_min_length(1, 191)}`),
  ],
};

export default userValidators;
