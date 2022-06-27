import { CustomerInterface } from '../interfaces/customer.interface';
export declare class Customer {
    private readonly customerInterface;
    constructor(customerInterface: CustomerInterface);
    getAll(): string[];
}
