import Result from './result.js';

export default class ErrorResult extends Result {
  constructor(message) {
    super(false, message);
  }
}
