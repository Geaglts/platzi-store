import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      direction: 'c. lorenzo carrasco',
      name: 'miguel angel',
      username: 'geaglts',
      phone: '9711053131',
    },
  ];

  find() {
    return this.customers;
  }

  findOne(id: number) {
    let customer = this.customers.find((item) => item.id === id);
    if (!customer) throw new NotFoundException(`Customer #${id} not found`);
    return this.customers.find((item) => item.id === id);
  }

  create(payload: CreateCustomerDto) {
    const newCustomer: Customer = {
      id: this.customers.length + 1,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const item = this.findOne(id);
    if (!item) return null;
    const indexItem = this.customers.findIndex((item) => item.id === id);
    this.customers[indexItem] = { ...item, ...payload };
    return this.customers[indexItem];
  }

  delete(id: number) {
    let customer = this.customers.find((item) => item.id === id);
    if (!customer) throw new NotFoundException(`Customer #${id} not found`);
    const updatedList = this.customers.filter((item) => item.id !== id);
    this.customers = updatedList;
    return true;
  }
}
