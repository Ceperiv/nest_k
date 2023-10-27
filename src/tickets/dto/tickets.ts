import { IsDate, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class Tickets {
  id?: number;

  @IsString()
  @IsOptional()
  type: string;

  @IsNumber()
  @IsOptional()
  @IsInt()
  amount: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsDate()
  startDate?: Date;

  @IsDate()
  endDate?: Date;
}
