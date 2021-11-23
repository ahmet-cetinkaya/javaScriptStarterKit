import ErrorDataResult from '../core/models/errorDataResult.js';
import ErrorResult from '../core/models/errorResult.js';
import Sort from '../core/helpers/sort.js';
import SuccessDataResult from '../core/models/successDataResult.js';
import SuccessResult from '../core/models/successResult.js';
import UserValidator from '../validations/userValidator.js';

export default class UserService {
  constructor(userRepository, loggerService) {
    this.userRepository = userRepository;
    this.loggerService = loggerService;
  }

  getAll() {
    const users = this.userRepository.getAll();
    return new SuccessDataResult(users);
  }

  add(user) {
    const errors = UserValidator.validate(user);
    if (errors.length) return new ErrorResult(errors.join('|'));

    this.userRepository.add(user);

    this.loggerService.log(user);
    return new SuccessResult();
  }

  getByID(id) {
    const user = this.userRepository.getByID(id);
    if (!user) return new ErrorDataResult();
    return new SuccessDataResult(user);
  }

  getAllSorted(key, direction = Sort.asc) {
    const users = this.userRepository.getAll(),
      sortedUsers = Sort.sortByKey(users, key, direction);
    return new SuccessDataResult(sortedUsers);
  }
}
