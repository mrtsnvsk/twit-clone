const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const newTweetController = async (req, res) => {
  try {
    const { id, newTwit } = req.body;
    const findUser = await User.findOne({ _id: id });
    await User.updateOne(
      { _id: id },
      { tweets: [...findUser.tweets, newTwit] }
    );
    const newUser = await User.findOne({ _id: id });

    const token = jwt.sign(
      {
        email: newUser.email,
        login: newUser.login,
        name: newUser.name,
        id: newUser._id,
        regDate: newUser.registrationDate,
        avatar: newUser.avatar,
        tweets: newUser.tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({
      token,
    });
  } catch (e) {
    res.json({
      error: 'Ошибка при создании нового твита.',
    });
  }
};

module.exports = newTweetController;
