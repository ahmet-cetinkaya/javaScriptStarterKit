import DataResult from './DataResult.js';

export default class ErrorDataResult extends DataResult {
  constructor(data, message) {
    super(false, data, message);
  }
}
