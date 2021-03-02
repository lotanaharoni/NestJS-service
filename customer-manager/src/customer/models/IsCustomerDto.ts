import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
export class IsCustomerDto{

    @ApiProperty({type: String, description: "The customer's firstName"})
    firstName: string;

    @ApiProperty({type: String, description: "The customer's lastName"})
    lastName: string

}