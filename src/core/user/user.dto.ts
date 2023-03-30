import { Type } from "class-transformer";
import { IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
import { User } from "src/orm/entities/user.entity";

export class UserDto {
  first_name: string;
  last_name: string;
  phone: number;
  document_number: number;

  static from(user: User): UserDto {
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
      document_number: user.document_number
    };
  }
}

export class RegisterRequestDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsMobilePhone('ru-RU')
  @IsNumberString()
  phone: number;

  @IsNotEmpty()
  password: string;

  @Type(() => Number)
  @IsNumber()
  document_number: number;
}

export class LoginRequestDto {
  @IsMobilePhone('ru-RU')
  phone: number;

  @IsNotEmpty()
  password: string;
}