export default class Validator {
  static isName(name) {
    const regex = /^([a-zA-ZüÜşŞöÖçÇİ]){2,}$/;
    return !this.isEmpty(name) && regex.test(name);
  }

  static isCreditCardNumber(creditCardNumber) {
    const regex = /^\d{16}$/;
    return !this.isEmpty(creditCardNumber) && regex.test(creditCardNumber);
  }

  static isEmail(email) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !this.isEmpty(creditCardNumber) && regex.test(email);
  }

  static isEmpty(value) {
    return value === undefined || value === null || value === '';
  }

  static isEmptyArray(value) {
    return value === undefined || value === null || value.length === 0;
  }

  static isEmptyObject(value) {
    return value === undefined || value === null || Object.keys(value).length === 0;
  }

  static validateObject(object, validator, ignoreKeys = []) {
    const errors = Object.keys(validator)
      .filter(key => !ignoreKeys.includes(key) && !validator[key][0](object[key]))
      .map(key => validator[key][1] || `${key} is not valid.`);
    return errors.length === 0 ? true : errors;
  }

  static isNumber(value) {
    return !isNaN(value);
  }
}
