import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  direction: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  phone: string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
