import Validator from '../helpers/validator.js';

export default class BaseValidator {
  static validate(object) {
    return Validator.validateObject(object, new this(), ['validate']);
  }
}
