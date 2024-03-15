import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  constructor(private jwtService: JwtService) {}

  public async validateUser(email: string, password: string): Promise<User> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where('email = :email', { email })
        .getOne();

      if (user) {
        if (!user.is_actived)
          throw new UnauthorizedException('User tidak aktif');
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid) {
          return user;
        }
      }
      return null;
    } catch (e) {
      throw e;
    }
  }

  public async generateToken(user: User): Promise<any> {
    const payload = {
      id: user.id,
      name: user.name,
      is_actived: user.is_actived,
      email: user.email,
      role: user.role,
    };
    return this.jwtService.sign(payload);
  }
}
