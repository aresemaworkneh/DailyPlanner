const express = require('express');
const router = express.Router();
const Plan = require('../models/Plan');

router.get('/', async (req, res) => {
  const plans = await Plan.find();
  res.json(plans);
});

router.post('/', async (req, res) => {
  const { date, tasks } = req.body;
  const updated = await Plan.findOneAndUpdate(
    { date },
    { tasks },
    { new: true, upsert: true }
  );
  res.json(updated);
});

module.exports = router;
