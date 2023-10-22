import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  id?: number;

  @ApiProperty({
    required: true,
    example: 'Ivan',
  })
  @IsString()
  @Length(2)
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsBoolean()
  @IsOptional()
  isAdmin: boolean;
}
