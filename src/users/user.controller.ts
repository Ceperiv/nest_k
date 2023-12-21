import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'get all users', example: 'all', type: String })
  @Get()
  getAllUsers() {
    return this.usersService.getAll();
  }

  @ApiResponse({ status: 201, type: UserModel })
  @Post()
  createUser(@Body() createUserModel: UserModel) {
    return this.usersService.createUser(createUserModel);
  }

  @Get('many')
  async GetManyByParams(
    @Query() obj: { UserModel: UserModel },
  ): Promise<UserModel[]> {
    return this.usersService.getManyByParams(obj);
  }

  @Put('/:id')
  UpdateUser(@Param('id') id: number, @Body() updatedUser: UserModel) {
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
