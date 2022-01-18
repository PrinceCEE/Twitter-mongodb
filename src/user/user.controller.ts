import {
  Controller,
  Get,
  Patch,
  Post,
  NotImplementedException,
  UsePipes,
} from '@nestjs/common';
import { JoiValidator } from 'src/joi-validator.pipe';
import { UserService } from './user.service';
import { updateProfileSchema } from './validation-schemas';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':username/followers')
  userFollowers() {
    throw new NotImplementedException('user followers: Not implemented');
  }

  @Get(':username/followings')
  userFollowings() {
    throw new NotImplementedException('user followings: Not implemented');
  }

  @Post(':username/follow')
  followUser() {
    throw new NotImplementedException('follow user: Not implemented');
  }

  @Patch(':username')
  @UsePipes(new JoiValidator(updateProfileSchema))
  updateProfile() {
    throw new NotImplementedException('update user: Not implemented');
  }
}
