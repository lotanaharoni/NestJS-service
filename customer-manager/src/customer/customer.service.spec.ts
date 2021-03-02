import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Controller, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from './models/customer.entity';
import { exception } from 'console';


/*
describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
*/


/*

describe('Checking customer', () => {
  let secondArgument:any = 2;
  let service: CustomerService;
  it('Throws an error when last name is null', async () => {
    expect.assertions(2);

    try {
      await service.isCustomer('Deni', secondArgument);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.message).toBe('Last name is mandatory');
    }
  });
});

describe('Checking customer', () => {
  let service: CustomerService;
  it('Throws an error when last name is null', async () => {
    expect.assertions(2);

    try {
      await service.isCustomer('Deni', null);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.message).toBe('Last name is mandatory');
    }
  });
});

describe('Checking customer', () => {
  let service: CustomerService;
  it('Throws an error when first name is null', async () => {
    expect.assertions(2);

    try {
      await service.isCustomer(null, 'Avdija');
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.message).toBe('First name is mandatory');
    }
  });
});

describe('Checking customer', () => {
  let service: CustomerService;
  it('Throws an error when first name and last are null', async () => {
    expect.assertions(2);

    try {
      await service.isCustomer(null, null);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.message).toBe('First name and last name are mandatory');
    }
  });
});

*/

/*
describe('Checking customer', () => {
  let service: CustomerService;
  //let response;
 // let customerRepository: Repository<CustomerEntity>;
 // let customer: CustomerEntity = {id: 1, firstName: "Deni", lastName: "Avdija"};
  // האם צריך שההוספה גם תהיה- await
//  service.addCustomer(customer);
  //customerRepository.save(customer);
  it('Throws an error when first name and last are null', async () => {
   // expect.assertions(2);
    try {
      let customer: CustomerEntity = {id: 1, firstName: "Deni", lastName: "Avdija"};
      service.addCustomer(customer);
      let response = await service.isCustomer("Deni", "Avdija");
      expect(response);
    } catch (e) {
      expect(e).toBeInstanceOf(HttpException);
      expect(e.message).toBe('First name and last name are mandatory');
    }
  });
});
*/

describe('Checking customer', () => {
  let service : CustomerService;
  let controller = CustomerController;

  

 // let service: CustomerService;
  it('Throws an error when first name and last are null', async () => {
    expect.assertions(0);
    
    try{
      service.addCustomer({id: 134, firstName: "Deni", lastName: "Avdija"});
    }
    catch(e){

    }
  });

  it('Throws an error when first name and last are null', async () => {
    expect.assertions(0);
    
    try{
      service.addCustomer({id: 134, firstName: "Deni"});
    }
    catch(e){

    }
  });

  it('Throws an error when first name and last are null', async () => {
    expect.assertions(0);
    
    try{
      service.addCustomer({id: 134, firstName: "Deni", lastName: ""});
    }
    catch(e){
    }
  });

});

describe('Checking customer', () => {
  //let service = new CustomerService();
  it('Throws an error when first name and last are null', async () => {
   // expect.assertions(1);
    
    try{
      await service.addCustomer({id: 134, firstName: "De", lastName: "Avdija"});
    }
    catch(e){
      expect(e).toBeCalled();
      //expect(e).toBeInstanceOf(HttpException);
    //  expect(e.message).toBe('The first name and the last name need to be more than 3 characters')
    }
  });
});


describe('CatsController', () => {
  let controller: CustomerController;
  let service: CustomerService; 

  beforeEach(() => {
    service = new CustomerService();
    controller = new CatsController(service);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });
});

