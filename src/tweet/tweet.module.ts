import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { UserModule } from 'src/user/user.module';
import { TweetSchema, Tweet } from './schemas/tweet.schema';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Tweet.name,
        schema: TweetSchema,
      },
    ]),
    UserModule,
  ],
})
export class TweetModule {}
