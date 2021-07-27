import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ParseParamPipe } from 'src/common/parse-param.pipe';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { CategoriesService } from 'src/services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAll(): any {
    return this.categoriesService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseParamPipe, ParseIntPipe) id: number): object {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCategoryDto): object {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseParamPipe, ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ): object {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseParamPipe, ParseIntPipe) id: number): boolean {
    return this.categoriesService.delete(id);
  }
}
