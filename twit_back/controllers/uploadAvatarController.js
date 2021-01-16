const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const uploadAvatarController = async (req, res) => {
  try {
    const { id, avatar } = req.body;

    await User.updateOne({ _id: id }, { avatar });
    const newUser = await User.findOne({ _id: id });

    const token = jwt.sign(
      {
        email: newUser.email,
        login: newUser.login,
        name: newUser.name,
        id: newUser._id,
        regDate: newUser.registrationDate,
        avatar: newUser.avatar,
        twits: newUser.twits,
      },
      config.get('jwtSecretKey'),
      {
        expiresIn: '24h',
      }
    );

    res.json({
      token,
    });
  } catch (e) {
    res.status(401).json({ error: 'Ошибка при загрузке файла.' });
  }
};

module.exports = uploadAvatarController;
