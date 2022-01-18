import * as Joi from 'joi';

const mongoID = Joi.string()
  .required()
  .regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/);

export const replyTweetSchema = Joi.object({
  content: Joi.string().required().max(257),
  poster: mongoID,
  tweetReplied: mongoID,
});
