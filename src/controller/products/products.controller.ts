import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

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
}
