import { users } from '../data/users.js';

export default class UserRepository {
  constructor() {
    this.users = users.filter(user => user.type === 'user');
  }

  getAll() {
    return this.users;
  }

  getByID(id) {
    return this.users.find(user => user.id === id);
  }

  add(model) {
    this.users.push(model);
  }

  update(model) {
    const modelIndex = this.users.findIndex(user => user.id === model.id);
    this.users[modelIndex] = model;
  }

  delete(model) {
    this.users = this.users.filter(user => user.id !== model.id);
  }
}
