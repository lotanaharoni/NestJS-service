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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let CustomerEntity = class CustomerEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CustomerEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, description: 'firstName', minLength: 3 }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ type: 'string', nullable: true }),
    swagger_1.ApiProperty({ type: String, description: 'lastName', minLength: 3, nullable: true }),
    typeorm_1.Column(),
    __metadata("design:type", String)
], CustomerEntity.prototype, "lastName", void 0);
CustomerEntity = __decorate([
    typeorm_1.Entity()
], CustomerEntity);
exports.CustomerEntity = CustomerEntity;
//# sourceMappingURL=customer.entity.js.map