import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UserDto {
  id?: number;

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
