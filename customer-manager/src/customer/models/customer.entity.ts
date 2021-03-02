import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class CustomerEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({type: String, description: 'firstName', minLength: 3, nullable: false})
    @Column()
    firstName: string;

    @Column()
    @ApiPropertyOptional()
    @ApiProperty({type: String, description: 'lastName', minLength: 3, nullable: true})
    lastName?: string;
}