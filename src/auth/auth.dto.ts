import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'User username', example: 'hans_han' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'User password', example: '123456' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
