import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: object): object {
    return { message: 'user updated', payload: { id, ...payload } };
  }

  @Delete(':id')
  delete(@Param('id') id: number): object {
    return { message: 'user deleted' };
  }
}
