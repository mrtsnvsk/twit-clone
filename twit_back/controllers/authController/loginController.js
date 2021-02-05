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
      return res.json({ error: 'Неверные данные при авторизации.' });
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
      return res.json({ error: 'Неверные данные при авторизации' });
    }

    const token = jwt.sign(
      {
        email: curUser.email,
        login: curUser.login,
        name: curUser.name,
        id: curUser._id,
        regDate: curUser.registrationDate,
        avatar: curUser.avatar,
        tweets: curUser.tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({
      token,
    });
  } catch (e) {
    res.json({ error: 'Ошибка при авторизации.' });
  }
};

module.exports = loginController;
