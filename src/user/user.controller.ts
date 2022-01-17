import {
  Controller,
  Get,
  Patch,
  Post,
  NotImplementedException,
} from '@nestjs/common';
import { UserService } from './user.service';

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
  updateProfile() {
    throw new NotImplementedException('update user: Not implemented');
  }
}
