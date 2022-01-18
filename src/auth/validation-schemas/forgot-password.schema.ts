import * as Joi from 'joi';

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().required().email(),
});
