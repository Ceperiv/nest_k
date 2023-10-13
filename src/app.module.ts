import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModel } from './users/user.model';
import { CustomerAssistanceController } from './customer-assistance/customer-assistance.controller';
import { CustomerAssistanceModule } from './customer-assistance/customer-assistance.module';

@Module({
  imports: [
    UserModule,
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
      models: [UserModel],
      autoLoadModels: true,
    }),
    CustomerAssistanceModule,
  ],
  controllers: [AppController, CustomerAssistanceController],
  providers: [AppService],
})
export class AppModule {}
