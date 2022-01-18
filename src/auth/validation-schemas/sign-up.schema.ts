import * as Joi from 'joi';

const joiRequiredString = Joi.string().required();

export const signupSchema = Joi.object({
  firstname: joiRequiredString,
  lastname: joiRequiredString,
  email: joiRequiredString.email(),
  username: joiRequiredString.min(3),
  password: joiRequiredString.min(6),
});
