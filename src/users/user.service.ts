import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  users: Array<UserDto> = [];

  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
  ) {}

  async getAll(): Promise<Array<UserDto>> {
    return await this.userRepository.findAll();
  }

  async createUser(user: UserDto): Promise<UserDto> {
    return await this.userRepository.create(user);
  }

  async deleteOneById(id: number): Promise<string> {
    const user = await this.userRepository.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.destroy();
    return 'Success';
  }

  async getOneById(id: number): Promise<UserDto> {
    return await this.userRepository.findByPk(id);
  }

  async getManyByParams(obj: { UserDto }): Promise<UserDto[]> {
    return await this.userRepository.findAll({ where: obj });
  }

  async updateUserById(
    id: number,
    updateUserDto: Partial<UserDto>,
  ): Promise<UserDto> {
    const user = await this.userRepository.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.update({ ...updateUserDto, id });
    return user;
  }
}
