import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): any {
    return `limit=${limit}, offset=${offset}, brand=${brand}`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string): object {
    return { id, name: 'fake', price: 100 };
  }
}
