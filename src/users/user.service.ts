import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { UserModel } from './user.model';
import { RoleService } from '../role/role.service';

@Injectable()
export class UserService {
  users: Array<UserModel> = [];

  constructor(
    @InjectModel(UserModel) private userRepository: typeof UserModel,
    private roleService: RoleService,
  ) {}

  async getAll(): Promise<Array<UserModel>> {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async createUser(user: UserModel): Promise<UserModel> {
    try {
      console.log(user, 121212121);
      const createdUser = await this.userRepository.create(user);
      console.log(createdUser, 1111);
      const role = await this.roleService.getRole('CLIENT');
      console.log(role, 2222);
      await createdUser.$set('roles', [role.id]);
      console.log(createdUser, 333);
      return createdUser;
    } catch (err) {
      new BadRequestException({ message: 'Internal server err', code: 500 });
    }
  }

  async deleteOneById(id: number): Promise<string> {
    const user = await this.userRepository.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.destroy();
    return 'Success';
  }

  async getOneById(id: number): Promise<UserModel> {
    return await this.userRepository.findByPk(id);
  }

  async findOne(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async getManyByParams(obj: { UserModel: UserModel }): Promise<UserModel[]> {
    return await this.userRepository.findAll({ where: obj });
  }

  async updateUserById(
    id: number,
    updateUserModel: Partial<UserModel>,
  ): Promise<UserModel> {
    const user = await this.userRepository.findByPk(id);
    if (!user) throw new Error('User not found');
    await user.update({ ...updateUserModel, id });
    return user;
  }
}
