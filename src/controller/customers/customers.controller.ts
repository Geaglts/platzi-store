import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getCustomers(): any {
    return 'all customers';
  }
}
