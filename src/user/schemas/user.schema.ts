import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Tweet } from 'src/tweet/schemas/tweet.schema';

export type UserDocument = User & mongoose.Document;

@Schema({ toJSON: { virtuals: true } })
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true })
  password: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
  })
  tweets: Tweet[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  })
  followers: User[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  })
  followings: User[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet',
      },
    ],
  })
  likeTweets: Tweet[];
}

export const UserSchema = SchemaFactory.createForClass(User);
