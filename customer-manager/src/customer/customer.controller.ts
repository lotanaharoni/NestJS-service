import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './models/customer.entity';
import { ApiBody, ApiCreatedResponse, ApiDefaultResponse, ApiParam } from '@nestjs/swagger';
import { AddCustomerDto } from './models/AddCustomerDto';
import { IsCustomerDto } from './models/IsCustomerDto';

@Controller('/customer')
export class CustomerController{
    constructor(private customerService: CustomerService) {}
    
    /**
     * Gets an object of type 'CustomerEntity'.
     */
    @ApiBody({type: AddCustomerDto, 'description':'Add one customer' })
    @ApiCreatedResponse({description: 'Add a customer by firstName and lastName'})
    @Post()
    public async addCustomer(@Body() customer: CustomerEntity) {
        return this.customerService.addCustomer(customer);
    }

    /**
     * Gets two Params, the lastName is optional.
     */
    @ApiParam({name: 'firstName', type: 'string'})
    @ApiBody({type: IsCustomerDto, 'description':'Add one customer' })
    @ApiDefaultResponse({description: 'Find a customer by firstNmae and lastName'})
    @Get('/firstName/:firstName/lastName/:lastName')
    public async isCustomer(@Param('firstName') firstName: string, @Param('lastName') lastName: string): Promise<boolean>{
        return this.customerService.isCustomer(firstName, lastName);
    }
}