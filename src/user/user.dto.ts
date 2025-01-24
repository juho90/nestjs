import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  MinLength,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Username of the user', example: 'hans_han' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4, { message: 'Username must be at least 4 characters long' })
  @MaxLength(20, { message: 'Username must not exceed 20 characters' })
  username: string;

  @ApiProperty({ description: 'Password of the user', example: '123456' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @ApiPropertyOptional({
    description: 'Email of the user',
    example: 'hans.han@trala.me',
  })
  @IsOptional() // Optional field
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;
}

export class LoginUserDto {
  @ApiProperty({ description: 'Username of the user', example: 'hans_han' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'Password of the user', example: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Updated username of the user',
    example: 'hans_updated',
  })
  @IsOptional() // Optional field
  @IsString()
  @MinLength(4, { message: 'Username must be at least 4 characters long' })
  @MaxLength(20, { message: 'Username must not exceed 20 characters' })
  username?: string;

  @ApiPropertyOptional({
    description: 'Updated password of the user',
    example: 'newpassword123',
  })
  @IsOptional()
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string;

  @ApiPropertyOptional({
    description: 'Updated email of the user',
    example: 'hans.updated@trala.me',
  })
  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;
}
