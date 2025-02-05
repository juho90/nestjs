import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // 로그인 검증 후 JWT 토큰 발급 (실제 구현에서는 DB와 연동하거나 bcrypt를 통한 패스워드 검증 필요)
  async validateUser(
    username: string,
    password: string,
  ): Promise<string | null> {
    console.log('JwtService secret:', this.jwtService['options']);
    if (!username || !password) {
      return null;
    }
    const payload = { username };
    return this.jwtService.sign(payload);
  }
}
