import { IsAlphanumeric, IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateAdminDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsBoolean()
  isLocked: boolean

  @IsString()
  @IsOptional()
  telegramId: string

  @IsString()
  @IsOptional()
  usernameAppChat: string

  @IsString()
  @IsOptional()
  usernameAppVt: string
}
