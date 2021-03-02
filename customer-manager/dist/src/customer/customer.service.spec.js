"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const customer_service_1 = require("./customer.service");
describe('CustomerService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [customer_service_1.CustomerService],
        }).compile();
        service = module.get(customer_service_1.CustomerService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=customer.service.spec.js.map