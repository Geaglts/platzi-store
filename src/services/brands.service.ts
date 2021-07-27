import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    {
      id: 1,
      name: 'nike',
      image: '',
    },
  ];

  find() {
    return this.brands;
  }

  findOne(id: number) {
    let brand = this.brands.find((item) => item.id === id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    return this.brands.find((item) => item.id === id);
  }

  create(payload: CreateBrandDto) {
    const newBrand: Brand = {
      id: this.brands.length + 1,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const item = this.findOne(id);
    if (!item) return null;
    const indexItem = this.brands.findIndex((item) => item.id === id);
    this.brands[indexItem] = { ...item, ...payload };
    return this.brands[indexItem];
  }

  delete(id: number) {
    let brand = this.brands.find((item) => item.id === id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);
    const updatedList = this.brands.filter((item) => item.id !== id);
    this.brands = updatedList;
    return true;
  }
}
