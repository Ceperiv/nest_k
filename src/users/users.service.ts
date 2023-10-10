import { Injectable } from '@nestjs/common';

import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  users: Array<UserDto> = [];

  getAll(): Array<UserDto> {
    return this.users;
  }

  createUser(user: UserDto): UserDto {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
    return newUser;
  }

  deleteOneById(id: number): string {
    const parsedId = typeof id === 'string' ? parseInt(id, 10) : id;
    const index = this.users.findIndex((user) => user.id === parsedId);
    if (index !== -1) {
      this.users.splice(index, 1);
      return 'Success';
    }
    return 'User not found';
  }

  getOneById(id: number): UserDto {
    return this.users.find((user) => user.id === id);
  }

  updateUserById(id: number, body: UserDto): UserDto | string {
    const userIndex = this.users.findIndex((user) => +user.id === +id);
    if (userIndex !== -1) {
      const updatedUser: UserDto = { ...body, id };
      this.users[userIndex] = updatedUser;
      return updatedUser;
    }
    return 'user not found';
  }
}
