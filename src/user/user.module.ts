import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity'; // User 엔티티 경로

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User 엔티티를 TypeORM 모듈에 등록
  controllers: [UserController], // UserController 등록
  providers: [UserService], // UserService 등록
  exports: [UserService], // UserService를 외부 모듈에서 사용할 수 있도록 내보내기
})
export class UserModule {}
