import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { UserModel } from './user.model';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Post()
  createUser(@Body() createUserDto: UserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('many')
  async GetManyByParams(@Query() obj: { UserDto }): Promise<UserDto[]> {
    return this.usersService.getManyByParams(obj);
  }

  @Put('/:id')
  UpdateUser(@Param('id') id: number, @Body() updatedUser: UserDto) {
    return this.usersService.updateUserById(id, updatedUser);
  }

  @Get('/:id')
  GetUserById(@Param('id') id: number) {
    return this.usersService.getOneById(id);
  }

  @Delete('/:id')
  DeleteUser(@Param('id') id: number) {
    return this.usersService.deleteOneById(id);
  }
}
