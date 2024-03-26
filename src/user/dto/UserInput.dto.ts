import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class UserRegisterInputDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
