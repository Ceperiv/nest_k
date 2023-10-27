import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
  @Get()
  getAllTickets() {}

  @Get()
  getTicketsByParams() {}

  @Post()
  postTickets() {}

  @Put('/:id')
  updateTicketsValues() {}

  @Delete('/:id')
  deleteTickets() {}
}
