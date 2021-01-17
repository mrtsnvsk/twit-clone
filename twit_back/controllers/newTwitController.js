const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const newTwitController = async (req, res) => {
  try {
    const { id, newTwit } = req.body;
    const findUser = await User.findOne({ _id: id });
    await User.updateOne({ _id: id }, { twits: [...findUser.twits, newTwit] });
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
    res.status(401).send({
      error: 'Ошибка при создании нового твита.',
    });
  }
};

module.exports = newTwitController;
