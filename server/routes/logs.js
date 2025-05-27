const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

// Get all logs
router.get('/getlogs', async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
});

// Create new log
router.post('/newlog', async (req, res) => {
  const newLog = new Log(req.body);
  await newLog.save();
  res.json(newLog);
});

module.exports = router;
