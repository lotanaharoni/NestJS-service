import { CustomerService } from './customer.service';
import { CustomerI } from './models/customer.interface';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    addCustomer(customer: CustomerI): Promise<CustomerI & import("./models/customer.entity").CustomerEntity>;
    isCustomer(firstName: string, lastName: string): Promise<boolean>;
}
