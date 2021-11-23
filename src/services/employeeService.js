import EmployeeValidator from '../validations/employeeValidator.js';
import ErrorDataResult from '../core/models/errorDataResult.js';
import ErrorResult from '../core/models/errorResult.js';
import Sort from '../core/helpers/sort.js';
import SuccessDataResult from '../core/models/successDataResult.js';
import SuccessResult from '../core/models/successResult.js';

export default class EmployeeService {
  constructor(employeeRepository, loggerService) {
    this.employeeRepository = employeeRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const employees = this.employeeRepository.getAll();
    return new SuccessDataResult(employees);
  }

  add(employee) {
    const errors = EmployeeValidator.validate(employee);
    if (errors.length) return new ErrorResult(errors.join('|'));

    this.employeeRepository.add(employee);

    this.loggerService.log(employee);
    return new SuccessResult();
  }

  getByID(id) {
    const employee = this.employeeRepository.getByID(id);
    if (!employee) return new ErrorDataResult();
    return new SuccessDataResult(employee);
  }

  getAllSorted(key, direction = Sort.asc) {
    const employees = this.employeeRepository.getAll(),
      sortedEmployees = Sort.sortByKey(employees, key, direction);
    return new SuccessDataResult(sortedEmployees);
  }
}
