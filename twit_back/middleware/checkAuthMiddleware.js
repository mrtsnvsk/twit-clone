const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.json({ message: 'Ошибка при авторизации' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecretKey'));
    req.user = decoded;
    next();
  } catch (e) {
    res.json({
      message: e.message,
    });
  }
};
