import { Router } from 'express';

import { deviceDataValidation, deviceValidation } from '../../modules/validation';
import { DeviceData, Device } from '../../models/device';

const router = Router();

router.post('/', deviceDataValidation, async (req, res) => {
  const { uuid } = req.body;

  DeviceData.create(req.body);

  const deviceState = await Device.findOne({ where: { uuid } });

  res.json(deviceState);
});

router.post('/create', deviceValidation, async (req, res) => {
  const { uuid } = req.body;

  const isExist = await Device.findOne({ where: { uuid } });

  Device.create(req.body);
  
  res.json({ isExist });
});

export default router;
