import { Router } from 'express'; 

import User from '../../models/user';
import { loginValidate, registerValidate } from '../../modules/validation';
import { createJWT } from '../../modules/jwt';
import { IUser } from '../../types';
import bcrypt from 'bcrypt';


const router = Router();

router.post('/register', registerValidate, async (req, res, next) => {
  const isExist = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  
  if (isExist) return res.status(400).json({error: 'user already in DB'});

  const hash = await bcrypt.hash(req.body.password, 10).then(hash => hash);

  req.body.password = hash;

  const { uuid } = await User.create(req.body) as unknown as IUser;

  res.json({token: createJWT({ uuid}) })

  next()

})

router.post('/login', loginValidate, async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  
  const user = await User.findOne({
    where: {
      email
    }
  }) as unknown as IUser

  if (user) {
    const compare = await bcrypt.compare(password, user.password).then(result => result);

    if (compare) {
      return res.json({token: createJWT({ uuid: user.uuid}) })
    }

    return res.status(400).json({error: 'wrong password'});
  }

  res.sendStatus(400);

})

export default router;