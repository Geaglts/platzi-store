import { Injectable } from '@nestjs/common';
import { ConnectableObservable } from 'rxjs';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'leche',
      price: 20,
      description: 'caja de leche',
      image: '',
      stock: 10,
    },
  ];

  find() {
    return this.products;
  }

  findOne(id: number) {
    console.log(this.products.find((item) => item.id === id));
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    const newProduct: Product = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const item = this.findOne(id);
    if (!item) return null;
    const indexItem = this.products.findIndex((item) => item.id === id);
    this.products[indexItem] = { ...item, ...payload };
    return this.products[indexItem];
  }

  delete(id: number) {
    const updatedList = this.products.filter((item) => item.id !== id);
    this.products = updatedList;
    return id;
  }
}
