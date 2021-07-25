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

import { ProductsService } from '../../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAll(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): object {
    return this.productsService.find();
  }

  @Get(':id')
  getOne(@Param('id') id: string): object {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() payload: any): object {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any): object {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string): any {
    return this.productsService.delete(+id);
  }
}
