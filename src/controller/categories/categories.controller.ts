import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAll(): any {
    return {
      message: `category list`,
      payload: [],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'category retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'category created', payload };
  }
}
