import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object): object {
    return { message: 'costumer updated', payload: { id, ...payload } };
  }

  @Delete(':id')
  delete(@Param('id') id: number): object {
    return { message: 'costumer deleted' };
  }
}
