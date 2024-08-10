import Joi from "joi";

const userSchema = Joi.object({
  role: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(11).required(),
});

export default userSchema;
