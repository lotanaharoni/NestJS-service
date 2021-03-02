"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customers_mock_1 = require("./customers.mock");
const customer_entity_1 = require("./models/customer.entity");
let CustomerService = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
        this.customers = customers_mock_1.CUSTOMERS;
    }
    addCustomer(customer) {
        customer.lastName = (customer.lastName ? customer.lastName : "");
        if (!customer.firstName) {
            throw new common_1.HttpException('You must enter a valid "firstName"', 404);
        }
        console.log(customer.firstName);
        console.log(customer.lastName);
        if (customer.firstName.length < 3 || (customer.lastName.length > 0 && customer.lastName.length < 3)) {
            throw new common_1.HttpException('The first name and the last name need to be more than 3 characters', 404);
        }
        else {
            return this.customerRepository.save(customer);
        }
    }
    findAll() {
        return this.customerRepository.find();
    }
    async isCustomer(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
        if (firstName && lastName) {
            let customer2 = await this.customerRepository.findOne({ "firstName": firstName, "lastName": lastName });
            let customer3 = await this.customerRepository.findOne({ firstName: firstName, lastName: lastName });
            let customer4 = await this.customerRepository.findOne({ where: { "firstName": firstName, "lastName": lastName } });
            let customer5 = await this.customerRepository.findOne({ where: { firstName: firstName, lastName: lastName } });
            console.log("The customer2 is: " + customer2);
            console.log("The customer3 is: " + customer3);
            console.log("The customer4 is: " + customer4);
            console.log("The customer5 is: " + customer5);
            return Boolean(customer2);
        }
        throw new common_1.HttpException('firstName or lastName are not valid', 404);
    }
};
CustomerService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(customer_entity_1.CustomerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map