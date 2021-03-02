import { CustomerEntity } from './customer.entity';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class AddCustomerDto{

    @ApiProperty({type: CustomerEntity, description: 'The customer object'})
    customer: CustomerEntity;

}