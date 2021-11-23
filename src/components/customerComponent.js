import Customer from '../models/customer.js';
import CustomerRepository from '../repositories/customerRepository.js';
import CustomerService from '../services/customerService.js';
import ElasticLogger from '../core/crossCuttingConcerns/logging/elasticLogger.js';
import { SortDirections } from '../core/helpers/sort.js';

const customerService = new CustomerService(new CustomerRepository(), new ElasticLogger());

console.log(
  "🚀 ● file: customerComponent.js ● customerService.add(new Customer(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21, '1234567890123456'))",
  customerService.add(new Customer(8, 'Ahmet', 'Çetinkaya', 'Antalya', 21, '1234567890123456'))
);
console.log(
  "🚀 ● file: customerComponent.js ● customerService.add(new Customer(9, 'E', 'T', 61, 'yirmibir', '123'))",
  customerService.add(new Customer(9, 'E', 'T', 61, 'yirmibir', '123'))
);

console.log('🚀 ● file: customerComponent.js ● customerService.getAll()', customerService.getAll());

console.log(
  '🚀 ● file: customerComponent.js ● customerService.getByID(8);',
  customerService.getByID(8)
);

console.log(
  "🚀 ● file: customerComponent.js ● customerService.getAllSorted('firstName', SortDirections.asc)",
  customerService.getAllSorted('firstName', SortDirections.asc)
);
console.log(
  "🚀 ● file: customerComponent.js ● customerService.getAllSorted('firstName', SortDirections.desc)",
  customerService.getAllSorted('firstName', SortDirections.desc)
);
