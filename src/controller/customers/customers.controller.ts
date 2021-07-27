import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { ParseParamPipe } from 'src/common/parse-param.pipe';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(): any {
    return this.customersService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseParamPipe, ParseIntPipe) id: number): object {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto): object {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseParamPipe, ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ): object {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseParamPipe, ParseIntPipe) id: number): boolean {
    return this.customersService.delete(id);
  }
}
