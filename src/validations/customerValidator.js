import UserValidator from './userValidator.js';
import Validator from '../core/helpers/validator.js';

export default class CustomerValidator extends UserValidator {
  constructor() {
    super();
    this.creditCardNumber = [
      value => Validator.isCreditCardNumber(value),
      'credit Card Number must be only digit and 16 length'
    ];
  }
}
