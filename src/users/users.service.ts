import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

export type User = { id: number; email: string; password: string };

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, email: 'test@example.com', password: '$2b$10$hashedPassword' },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async validate(email: string, pass: string): Promise<any | null> {
    const user = await this.findOne(email);
    if (user) {
      var isValid = await bcrypt.compare(pass, user.password);
      if (isValid === true) {
        return { ...user, password: undefined }; // 비밀번호 필드 제거
      }
    }
    return null;
  }
}
