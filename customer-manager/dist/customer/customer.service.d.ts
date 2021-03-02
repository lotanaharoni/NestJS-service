import { Repository } from 'typeorm';
import { CustomerEntity } from './models/customer.entity';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<CustomerEntity>);
    addCustomer(customer: CustomerEntity): Promise<CustomerEntity>;
    isCustomer(firstName: string, lastName: string): Promise<boolean>;
}
