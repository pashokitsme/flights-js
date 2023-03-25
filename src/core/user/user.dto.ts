import { IsMobilePhone, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";
import { User } from "src/orm/entities/user.entity";

export class UserDto {
  first_name: string;
  last_name: string;
  phone: number;
  document_number: number;

  static fromModel(user: User): UserDto {
    let dto = new UserDto();
    dto.first_name = user.first_name;
    dto.last_name = user.last_name;
    dto.phone = user.phone;
    dto.document_number = user.document_number;
    return dto;
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

  @IsNumberString()
  document_number: number;
}

export class LoginRequestDto {
  @IsMobilePhone('ru-RU')
  phone: number;

  @IsNotEmpty()
  password: string;
}

export class LoginResponseDto {
  api_key: string
}