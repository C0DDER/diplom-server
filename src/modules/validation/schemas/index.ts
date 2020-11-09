import joi from 'joi';

export const registerSchema = joi.object({
  userName: joi.string().min(4).max(16).alphanum().required(),
  email: joi.string().email().required(),
  firstName: joi.string().min(2).max(16).alphanum().required(),
  lastName: joi.string().min(2).max(16).alphanum().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
})

export const deviceSchema = joi.object({
  uuid: joi.string().min(4).max(50).required(),
  name: joi.string().min(4).max(500).required(),
})

export const deviceDataSchema = joi.object({
  uuid: joi.string().min(4).max(50).required(),
  date: joi.date().required(),
  deviceData: joi.object().required()
})