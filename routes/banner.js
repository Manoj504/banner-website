// backend/routes/banner.js
const express = require('express');
const router = express.Router();
const { Banner } = require('../models');

// Get Banner Info
router.get('/', async (req, res) => {
  const banner = await Banner.findOne({ where: { id: 1 } });
  res.json(banner);
});

// Update Banner Info
router.post('/', async (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  await Banner.update({ description, timer, link, isVisible }, { where: { id: 1 } });
  res.sendStatus(200);
});

// Toggle Banner Visibility
router.put('/visibility', async (req, res) => {
  const { isVisible } = req.body;
  await Banner.update({ isVisible }, { where: { id: 1 } });
  res.sendStatus(200);
});

module.exports = router;
