import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { BrandsService } from 'src/services/brands.service';
import { ParseIntPipe } from 'src/common/parse-int.pipe';
import { ParseParamPipe } from 'src/common/parse-param.pipe';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getAll(): any {
    return this.brandsService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseParamPipe, ParseIntPipe) id: number): object {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDto): object {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseParamPipe, ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ): object {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseParamPipe, ParseIntPipe) id: number): boolean {
    return this.brandsService.delete(id);
  }
}
