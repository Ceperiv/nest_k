import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tickets')
export class CarsController {
  @Get()
  getAllCars() {}

  @Get()
  getCarsByParams() {}

  @Post()
  postCars() {}

  @Put('/:id')
  updateCarsValues() {}

  @Delete('/:id')
  deleteCars() {}
}
