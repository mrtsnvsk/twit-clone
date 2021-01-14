const { Router } = require('express');
// const User = require('../models/User');
const router = Router();

router.post('/newTwit', async (req, res) => {
  try {
    console.log('req.body', req.body);
  } catch {
    res.send({ message: 'Ошибка при создании нового твита' });
  }
});

module.exports = router;
