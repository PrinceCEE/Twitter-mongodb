import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tweet, TweetDocument } from './schemas/tweet.schema';

@Injectable()
export class TweetService {
  constructor(
    @InjectModel(Tweet.name) private tweetModel: Model<TweetDocument>,
  ) {}
}
