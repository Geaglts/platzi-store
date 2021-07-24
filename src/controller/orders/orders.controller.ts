import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll(): any {
    return {
      message: `order list`,
      payload: [],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'order retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'order created', payload };
  }
}
