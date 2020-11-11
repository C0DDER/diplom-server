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

router.get('/count', async (req, res) => {
  const count = await Device.count();

  res.json(count);
});

router.get('/get-data/:uuid', async (req, res) => {
  const { uuid } = req.params;

  if (uuid) {
    const device = await DeviceData.findAll({ where: { uuid } });

    return res.json(device);
  }

  res.sendStatus(400);
});

router.get('/list', async (req, res) => {
  const allDevices = await Device.findAll();

  res.json(allDevices);
});

export default router;
