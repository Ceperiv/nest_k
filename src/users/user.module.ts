import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CarsModel } from '../cars/cars.model';
import { RoleModel } from '../role/role.model';
import { UserRoleModel } from '../role/user-role.model';
import { RoleService } from '../role/role.service';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserModel,
      CarsModel,
      RoleModel,
      UserRoleModel,
    ]),
    RoleModule,
  ],
  providers: [UserService, RoleService],
  controllers: [UserController],
  exports: [UserModule, UserService],
})
export class UserModule {}
