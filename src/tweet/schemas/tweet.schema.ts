import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type TweetDocument = Tweet & mongoose.Document;

@Schema({ toJSON: { virtuals: true } })
export class Tweet {
  @Prop({ required: true })
  content: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  poster: User;

  @Prop()
  retweets: any;

  @Prop(
    raw({
      timestamp: { type: Number },
      likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    }),
  )
  likes: Record<string, any>;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
  })
  replies: Tweet[];
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
