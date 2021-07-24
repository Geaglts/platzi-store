import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getOne(@Param('id') id: string): object {
    return {
      message: 'user retrived',
      payload: { id, name: 'fake', price: 100 },
    };
  }

  @Post()
  create(@Body() payload: object): object {
    return { message: 'user created', payload };
  }
}
