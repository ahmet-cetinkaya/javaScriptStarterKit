import { users } from '../data/users.js';

export default class EmployeeRepository {
  constructor() {
    this.employees = users.filter(employee => employee.type === 'employee');
  }

  getAll() {
    return this.employees;
  }

  getByID(id) {
    return this.employees.find(employee => employee.id === id);
  }

  add(model) {
    this.employees.push(model);
  }

  update(model) {
    const modelIndex = this.employees.findIndex(employee => employee.id === model.id);
    this.employees[modelIndex] = model;
  }

  delete(model) {
    this.employees = this.employees.filter(employee => employee.id !== model.id);
  }
}
