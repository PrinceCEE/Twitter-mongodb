import {
  Controller,
  Post,
  NotImplementedException,
  UsePipes,
  Body,
} from '@nestjs/common';
import { JoiValidator } from 'src/joi-validator.pipe';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import {
  ForgotPasswordDto,
  ResetPasswordDto,
  SignInDto,
  SignUpDto,
} from './dtos';
import {
  forgotPasswordSchema,
  resetPasswordSchema,
  signInSchema,
  signupSchema,
} from './validation-schemas';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('sign-up')
  @UsePipes(new JoiValidator(signupSchema))
  signUp(@Body() signUpDto: SignUpDto) {
    throw new NotImplementedException('sign up: Not implemented');
  }

  @Post('sign-in')
  @UsePipes(new JoiValidator(signInSchema))
  signIn(@Body() signInDto: SignInDto) {
    throw new NotImplementedException('sign in: Not implemented');
  }

  @Post('forgot-password')
  @UsePipes(new JoiValidator(forgotPasswordSchema))
  forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    throw new NotImplementedException('forgot password: Not implemented');
  }

  @Post('reset-password')
  @UsePipes(new JoiValidator(resetPasswordSchema))
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    throw new NotImplementedException('reset password: Not implemented');
  }
}
