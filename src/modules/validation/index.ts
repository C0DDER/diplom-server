import {
  Request,
  Response
} from 'express';

import {
  loginSchema,
  registerSchema,
  deviceDataSchema,
  deviceSchema
} from './schemas';

export const loginValidate = (req: Request, res: Response, next: () => void) => {
  const {
    error
  } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({
    error: error.details[0].message
  });

  next();
}

export const registerValidate = (req: Request, res: Response, next: () => void) => {
  const {
    error
  } = registerSchema.validate(req.body);

  if (error) return res.status(400).json({
    error: error.details[0].message
  });

  next();
}

export const deviceValidation = (req: Request, res: Response, next: () => void) => {
  const {
    error
  } = deviceSchema.validate(req.body);

  if (error) return res.status(400).json({
    error: error.details[0].message
  });

  next();
}

export const deviceDataValidation = (req: Request, res: Response, next: () => void) => {
  const {
    error
  } = deviceDataSchema.validate(req.body);

  if (error) return res.status(400).json({
    error: error.details[0].message
  });

  next();
}