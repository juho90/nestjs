import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto } from './user.dto';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    // 비밀번호 해싱
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    // 데이터베이스에 사용자 저장
    try {
      const user = await this.userService.create(
        createUserDto.username,
        hashedPassword,
      );
      return { message: 'User created successfully', user };
    } catch (error) {
      throw new HttpException('Username already exists', HttpStatus.CONFLICT);
    }
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.userService.findByUsername(loginUserDto.username);
    // 사용자가 존재하지 않으면 예외 발생
    if (user == null) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    // 비밀번호 검증
    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );
    if (isPasswordValid == false) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    // 로그인 성공 시 사용자 정보 반환
    return {
      message: 'Login successful',
      user: { id: user.id, username: user.username },
    };
  }

  @Get(':id')
  async findUserById(@Param('id') id: number) {
    const user = await this.userService.findById(id);
    if (user == null) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}
