import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll(): any {
    return {
      message: `brand list`,
      payload: [],
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'brand retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'brand created', payload };
  }
}
