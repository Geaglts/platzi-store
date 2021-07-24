import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll(): any {
    return {
      message: `costumer list`,
      payload: [],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'costumer retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'costumer created', payload };
  }
}
