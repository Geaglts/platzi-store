import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products/products.controller';
import { CategoriesController } from './controller/categories/categories.controller';
import { OrdersController } from './controller/orders/orders.controller';
import { UsersController } from './controller/users/users.controller';
import { CustomersController } from './controller/customers/customers.controller';
import { BrandsController } from './controller/brands/brands.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CustomersController, BrandsController],
  providers: [AppService],
})
export class AppModule {}
