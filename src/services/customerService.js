import CustomerValidator from '../validations/customerValidator.js';
import ErrorDataResult from '../core/models/errorDataResult.js';
import ErrorResult from '../core/models/errorResult.js';
import Sort from '../core/helpers/sort.js';
import SuccessDataResult from '../core/models/successDataResult.js';
import SuccessResult from '../core/models/successResult.js';

export default class CustomerService {
  constructor(customerRepository, loggerService) {
    this.customerRepository = customerRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const customers = this.customerRepository.getAll();
    return new SuccessDataResult(customers);
  }

  add(customer) {
    const errors = CustomerValidator.validate(customer);
    if (errors.length) return new ErrorResult(errors.join('|'));

    this.customerRepository.add(customer);

    this.loggerService.log(customer);
    return new SuccessResult();
  }

  getByID(id) {
    const customer = this.customerRepository.getByID(id);
    if (!customer) return new ErrorDataResult();
    return new SuccessDataResult(customer);
  }

  getAllSorted(key, direction = Sort.asc) {
    const customers = this.customerRepository.getAll(),
      sortedCustomers = Sort.sortByKey(customers, key, direction);
    return new SuccessDataResult(sortedCustomers);
  }
}
