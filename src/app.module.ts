import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './users/user.model';
import { RoleModule } from './role/role.module';
import { CarsModel } from './cars/cars.model';
import { RoleModel } from './role/role.model';
import { UserRoleModel } from './role/user-role.model';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'week',
      database: 'week',
      models: [UserModel, CarsModel, RoleModel, UserRoleModel],
      logging: console.log,
    }),
    SequelizeModule.forFeature([
      UserModel,
      CarsModel,
      RoleModel,
      UserRoleModel,
    ]),
    UserModule,
    RoleModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
