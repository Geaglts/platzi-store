import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'nike',
    },
  ];

  find() {
    return this.categories;
  }

  findOne(id: number) {
    let brand = this.categories.find((item) => item.id === id);
    if (!brand) throw new NotFoundException(`Category #${id} not found`);
    return this.categories.find((item) => item.id === id);
  }

  create(payload: CreateCategoryDto) {
    const newCategory: Category = {
      id: this.categories.length + 1,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const item = this.findOne(id);
    if (!item) return null;
    const indexItem = this.categories.findIndex((item) => item.id === id);
    this.categories[indexItem] = { ...item, ...payload };
    return this.categories[indexItem];
  }

  delete(id: number) {
    let category = this.categories.find((item) => item.id === id);
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    const updatedList = this.categories.filter((item) => item.id !== id);
    this.categories = updatedList;
    return true;
  }
}
