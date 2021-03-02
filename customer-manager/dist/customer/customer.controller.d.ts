import { CustomerService } from './customer.service';
import { CustomerEntity } from './models/customer.entity';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    addCustomer(customer: CustomerEntity): Promise<CustomerEntity>;
    isCustomer(firstName: string, lastName: string): Promise<boolean>;
}
