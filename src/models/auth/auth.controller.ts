import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CustomBaseResponseInterceptor } from 'src/common/interceptors/custom-base-response.interceptor';
import { LoginUserDto } from './dto/login-user.dto';
import { LocalAuthGuard } from 'src/common/guards';

@Controller('auth')
@ApiTags('Auth')
@UseInterceptors(CustomBaseResponseInterceptor)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login to get token' })
  public async login(@Body() body: LoginUserDto, @Request() req): Promise<any> {
    try {
      const jwt_token = await this.authService.generateToken(req.user);

      const data = { token: jwt_token };

      return { status: true, message: 'Success', result: data };
    } catch (error) {
      return { status: false, message: 'User not found' };
    }
  }
}
