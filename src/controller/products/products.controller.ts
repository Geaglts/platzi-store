import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any {
    return {
      message: `limit=${limit}, offset=${offset}, brand=${brand}`,
      payload: [],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'product retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'product created', payload };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object): object {
    return { message: 'product updated', payload: { id, ...payload } };
  }

  @Delete(':id')
  delete(@Param('id') id: number): object {
    return { message: 'product deleted' };
  }
}
