import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @Post()
  createUser(@Body() createUserDto: UserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Put('/:id')
  UpdateUser(@Param('id') id: number, @Body() updatedUser: UserDto) {
    return this.usersService.updateUserById(id, updatedUser);
  }

  @Delete('/:id')
  DeleteUser(@Param('id') id: number) {
    return this.usersService.deleteOneById(id);
  }

  @Get('/:id')
  GetUserById(@Param('id') id: number) {
    return this.usersService.getOneById(id);
  }
}
