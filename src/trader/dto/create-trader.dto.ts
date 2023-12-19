import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateTraderDto {
  @IsNotEmpty()
  username: string

  @IsNotEmpty()
  password: string

  @IsNotEmpty()
  fullname: string

  @IsNotEmpty()
  dob: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  phone1: string

  @IsNotEmpty()
  @IsOptional()
  phone2: string

  @IsNotEmpty()
  creditPrice: number

  @IsBoolean()
  isLocked: boolean

  @IsNotEmpty()
  @IsOptional()
  lockReason: string

  @IsBoolean()
  isScammer: boolean

  @IsNotEmpty()
  @IsOptional()
  scammerNote: string

  @IsBoolean()
  isSuspectWithDrawer: boolean

  @IsNotEmpty()
  @IsOptional()
  note: string
}
