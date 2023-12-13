import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { CarsModel } from './cars.model';

@Module({
  imports: [SequelizeModule.forFeature([CarsModel])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
