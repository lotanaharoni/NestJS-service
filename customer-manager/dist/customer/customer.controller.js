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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const customer_entity_1 = require("./models/customer.entity");
const swagger_1 = require("@nestjs/swagger");
const AddCustomerDto_1 = require("./models/AddCustomerDto");
const IsCustomerDto_1 = require("./models/IsCustomerDto");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    addCustomer(customer) {
        return this.customerService.addCustomer(customer);
    }
    async isCustomer(firstName, lastName) {
        return this.customerService.isCustomer(firstName, lastName);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiBody({ type: AddCustomerDto_1.AddCustomerDto, 'description': 'Add one customer' }),
    swagger_1.ApiCreatedResponse({ description: 'Add a customer by firstName and lastName' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_entity_1.CustomerEntity]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "addCustomer", null);
__decorate([
    common_1.Get('/firstName/:firstName/lastName/:lastName'),
    swagger_1.ApiParam({ name: 'firstName', type: 'string' }),
    swagger_1.ApiBody({ type: IsCustomerDto_1.IsCustomerDto, 'description': 'Add one customer' }),
    swagger_1.ApiDefaultResponse({ description: 'Find a customer by firstNmae and lastName' }),
    __param(0, common_1.Param('firstName')), __param(1, common_1.Param('lastName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "isCustomer", null);
CustomerController = __decorate([
    common_1.Controller('/customer'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map