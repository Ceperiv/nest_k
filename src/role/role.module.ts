import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from '../users/user.model';
import { RoleModel } from './role.model';
import { UserRoleModel } from './user-role.model';

@Module({
  imports: [SequelizeModule.forFeature([RoleModel, UserModel, UserRoleModel])],
  exports: [RoleService, RoleModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
