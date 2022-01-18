import {
  Controller,
  Post,
  Get,
  Delete,
  Patch,
  NotImplementedException,
  UsePipes,
  Body,
} from '@nestjs/common';
import { JoiValidator } from 'src/joi-validator.pipe';
import { UserService } from 'src/user/user.service';
import { NewTweetDto, ReplyTweetDto } from './dtos';
import { TweetService } from './tweet.service';
import { newTweetSchema, replyTweetSchema } from './validation-schema';

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
  @UsePipes(new JoiValidator(newTweetSchema))
  newTweet(@Body() newTweetDto: NewTweetDto) {
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
  @UsePipes(new JoiValidator(replyTweetSchema))
  replyTweet(@Body() replyTweetDto: ReplyTweetDto) {
    throw new NotImplementedException('reply tweet: Not implemented');
  }
}
