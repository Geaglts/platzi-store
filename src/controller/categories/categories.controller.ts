import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object): object {
    return { message: 'category updated', payload: { id, ...payload } };
  }

  @Delete(':id')
  delete(@Param('id') id: number): object {
    return { message: 'category deleted' };
  }
}
