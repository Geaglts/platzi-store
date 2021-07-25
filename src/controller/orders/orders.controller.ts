import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object): object {
    return { message: 'order updated', payload: { id, ...payload } };
  }

  @Delete(':id')
  delete(@Param('id') id: number): object {
    return { message: 'order deleted' };
  }
}
