import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const token = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!token) {
      throw new UnauthorizedException('잘못된 자격 증명입니다.');
    }
    return { token };
  }
}
