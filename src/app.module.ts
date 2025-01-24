import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 모듈 전역 설정 (다른 모듈에서도 사용 가능)
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.AUTH_DB_HOST,
      port: parseInt(process.env.AUTH_DB_PORT || '3306', 10),
      username: process.env.AUTH_DB_USERNAME,
      password: process.env.AUTH_DB_PASSWORD,
      database: process.env.AUTH_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 개발 환경에서만 사용 (자동 테이블 생성)
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
