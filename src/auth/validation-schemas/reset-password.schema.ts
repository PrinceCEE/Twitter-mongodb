import * as Joi from 'joi';

const joiRequiredString = Joi.string().required();

export const resetPasswordSchema = Joi.object({
  email: joiRequiredString.email(),
  password: joiRequiredString.min(3),
});
