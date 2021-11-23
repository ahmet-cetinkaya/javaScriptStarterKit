import DataResult from './DataResult.js';

export default class SuccessDataResult extends DataResult {
  constructor(data, message) {
    super(true, data, message);
  }
}
