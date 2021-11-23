import { users } from '../data/users.js';

export default class CustomerRepository {
  constructor() {
    this.customers = users.filter(user => user.type === 'customer');
  }

  getAll() {
    return this.customers;
  }

  getByID(id) {
    return this.customers.find(customer => customer.id === id);
  }

  add(model) {
    this.customers.push(model);
  }

  update(model) {
    const modelIndex = this.customers.findIndex(customer => customer.id === model.id);
    this.customers[modelIndex] = model;
  }

  delete(model) {
    this.customers = this.customers.filter(customer => customer.id !== model.id);
  }
}
