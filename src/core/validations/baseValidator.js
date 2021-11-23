import Validator from '../helpers/validator.js';

export default class BaseValidator {
  static validate(customer) {
    return Validator.validateObject(customer, new this(), ['validate']);
  }
}
