import Employee from '../models/employee.js';
import EmployeeRepository from '../repositories/employeeRepository.js';
import EmployeeService from '../services/employeeService.js';
import MongoLogger from '../core/crossCuttingConcerns/logging/mongoLogger.js';
import { SortDirections } from '../core/helpers/sort.js';

const employeeService = new EmployeeService(new EmployeeRepository(), new MongoLogger());

console.log(
  "🚀 ● file: employeeComponent.js ● employeeService.add(new Employee(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21, '1234567890123456'))",
  employeeService.add(new Employee(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21, '15000'))
);
console.log(
  "🚀 ● file: employeeComponent.js ● employeeService.add(new Employee(9, 'E', 'T', 61, 'yirmibir', '123'))",
  employeeService.add(new Employee(9, 'E', 'T', 61, 'yirmibir', 'ABC'))
);

console.log('🚀 ● file: employeeComponent.js ● employeeService.getAll()', employeeService.getAll());

console.log(
  '🚀 ● file: employeeComponent.js ● employeeService.getByID(8);',
  employeeService.getByID(8)
);

console.log(
  "🚀 ● file: employeeComponent.js ● employeeService.getAllSorted('firstName', SortDirections.asc)",
  employeeService.getAllSorted('firstName', SortDirections.asc)
);
console.log(
  "🚀 ● file: employeeComponent.js ● employeeService.getAllSorted('firstName', SortDirections.desc)",
  employeeService.getAllSorted('firstName', SortDirections.desc)
);
