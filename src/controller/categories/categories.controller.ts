import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getProducts(): any {
    return `all categories`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string): object {
    return { id, name: 'fake', price: 100 };
  }
}
