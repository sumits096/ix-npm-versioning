import { CustomerInterface } from '../interfaces/customer.interface';

export class Customer {
  constructor(private readonly customerInterface: CustomerInterface) {}

  getAll() {
    return this.customerInterface.getAll();
  }
}
