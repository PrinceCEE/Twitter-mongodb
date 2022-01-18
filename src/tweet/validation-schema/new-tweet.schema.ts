import * as Joi from 'joi';

const joiString = Joi.string();

export const newTweetSchema = Joi.object({
  content: joiString.max(257).required(),
  poster: joiString.regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/).required(),
});
