import { Controller, Post, NotImplementedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('sign-up')
  signUp() {
    throw new NotImplementedException('sign up: Not implemented');
  }

  @Post('sign-in')
  signIn() {
    throw new NotImplementedException('sign in: Not implemented');
  }

  @Post('forgot-password')
  forgotPassword() {
    throw new NotImplementedException('forgot password: Not implemented');
  }

  @Post('reset-password')
  resetPassword() {
    throw new NotImplementedException('reset password: Not implemented');
  }
}
