const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const loginController = async (req, res) => {
  try {
    const { login, password } = req.body;

    const matchUserEmail = await User.findOne({ email: login });
    const matchUserLogin = await User.findOne({ login: login });

    if (!matchUserLogin && !matchUserEmail) {
      return res
        .status(401)
        .json({ error: 'Неверные данные при авторизации123' });
    }

    let curUser = {};

    if (matchUserEmail) {
      curUser = matchUserEmail;
    }

    if (matchUserLogin) {
      curUser = matchUserLogin;
    }

    const isMatch = await bcrypt.compare(password, curUser.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ error: 'Неверные данные при авторизации.' });
    }

    const token = jwt.sign(
      {
        email: curUser.email,
        login: curUser.login,
        name: curUser.name,
        id: curUser._id,
        regDate: curUser.registrationDate,
        avatar: curUser.avatar,
        twits: curUser.twits,
      },
      config.get('jwtSecretKey'),
      {
        expiresIn: '24h',
      }
    );

    console.log('token', token);

    return res.json({
      token,
    });
  } catch (e) {
    res.status(401).json({ error: 'Ошибка при авторизации.' });
  }
};

module.exports = loginController;
