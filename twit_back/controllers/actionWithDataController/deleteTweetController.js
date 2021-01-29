const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const deleteTweetController = async (req, res) => {
  try {
    const { id, tweetId } = req.body;
    const currentUser = await User.findOne({ _id: id });
    const tweets = currentUser.tweets.filter((el) => {
      return el.tweetId !== tweetId;
    });
    await User.updateOne({ _id: id }, { tweets: tweets });

    const token = jwt.sign(
      {
        email: currentUser.email,
        login: currentUser.login,
        name: currentUser.name,
        id: currentUser._id,
        regDate: currentUser.registrationDate,
        avatar: currentUser.avatar,
        tweets: tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: 'Ошибка при удалении твита.' });
  }
};

module.exports = deleteTweetController;
