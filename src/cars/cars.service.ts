import { Injectable } from '@nestjs/common';
import { CarsModel } from './cars.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(CarsModel) private ticketsRepository: typeof CarsModel,
  ) {}

  async getAll(): Promise<CarsModel[]> {
    return await this.ticketsRepository.findAll();
  }

  async createOne(tickets: CarsModel): Promise<CarsModel> {
    return await this.ticketsRepository.create(tickets);
  }

  async updateById(id: number, updatedTickets: CarsModel) {
    const ticket = await this.ticketsRepository.findByPk(id);
    if (!ticket) throw new Error('Ticket not found or id is wrong');
    await ticket.update({ ...updatedTickets, id });
    return ticket;
  }
}
