import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoleModel } from './role.model';

@Injectable()
export class RoleService {
  constructor(
    @InjectModel(RoleModel) private readonly roleRepository: typeof RoleModel,
  ) {}

  async getRole(value: string): Promise<RoleModel> {
    return this.roleRepository.findOne({ where: { value } });
  }

  async getAllRoles(): Promise<RoleModel[]> {
    return this.roleRepository.findAll();
  }

  async createRole(role: RoleModel) {
    console.log(2222222222);
    return this.roleRepository.create(role);
  }
}
