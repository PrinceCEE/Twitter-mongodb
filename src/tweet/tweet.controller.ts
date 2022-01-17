import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  NotImplementedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(
    private tweetService: TweetService,
    private userService: UserService,
  ) {}

  @Get(':username')
  getUserTweets() {
    throw new NotImplementedException('get tweets: Not implemented');
  }

  @Post('/')
  newTweet() {
    throw new NotImplementedException('new tweets: Not implemented');
  }

  @Delete(':id')
  deleteTweet() {
    throw new NotImplementedException('delete tweets: Not implemented');
  }

  @Post(':id/retweet')
  retweet() {
    throw new NotImplementedException('retweet tweet: Not implemented');
  }

  @Patch(':id/like')
  likeTweet() {
    throw new NotImplementedException('like tweet: Not implemented');
  }

  @Post(':id/reply')
  replyTweet() {
    throw new NotImplementedException('reply tweet: Not implemented');
  }
}
