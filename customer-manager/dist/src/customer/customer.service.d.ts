import { Repository } from 'typeorm';
import { CustomerEntity } from './models/customer.entity';
import { CustomerI } from './models/customer.interface';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<CustomerEntity>);
    private customers;
    addCustomer(customer: CustomerI): Promise<CustomerI & CustomerEntity>;
    findAll(): Promise<CustomerEntity[]>;
    isCustomer(firstName: string, lastName: string): Promise<boolean>;
}
