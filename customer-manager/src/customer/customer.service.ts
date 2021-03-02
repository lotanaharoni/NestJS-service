import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './models/customer.entity';
import {ILike} from "typeorm";

const MIN_LENGTH = 3;
const ERROR = 404;
const WRONG_FIRST_NAME_ERROR = 'You must enter a valid "firstName"';
const SHORT_PARAM = 'The first name and the last name need to be more than 3 characters';
const WRONG_PARAMS = 'firstName or lastName are not valid';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>
    ){}

    /**
     * Will allow adding a customer by specifying 2 fields: First name and Last name.
     * Minimum length is 3 characters for each of them. Last name is optional.
     */
    public async addCustomer(customer: CustomerEntity) {
        customer.lastName = customer.lastName? customer.lastName : "";
       if (!customer.firstName){
        throw new HttpException(WRONG_FIRST_NAME_ERROR, ERROR);
       }
       if (customer.firstName.length < MIN_LENGTH || 
        (customer.lastName.length > 0 && customer.lastName.length <MIN_LENGTH)){
           throw new HttpException(SHORT_PARAM, ERROR);
        }
        else{
            return this.customerRepository.save(customer);
        }
    }

    /**
     * Will receive a first and last name of a customer and return true/false whether this
     * customer exists or not, case insensitive.
     */
    public async isCustomer(firstName: string, lastName: string): Promise<boolean>{
        if (firstName && lastName){
            let result = await this.customerRepository.findOne({firstName: ILike(firstName), lastName: ILike(lastName)});
            return Boolean(result);
        }
        throw new HttpException(WRONG_PARAMS, ERROR);
    }
}   
