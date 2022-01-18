import * as Joi from 'joi';

export const updateProfileSchema = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  password: Joi.string().min(6),
});
