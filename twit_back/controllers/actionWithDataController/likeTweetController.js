const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const likeTweetController = async (req, res) => {
  try {
    const { id, tweetId, likedUser } = req.body;
    const currentUser = await User.findOne({ _id: id });
    let likedTweet = currentUser.tweets.filter((el) => el.tweetId === tweetId);
    likedTweet.map((el) => {
      if (!el.likes.includes(likedUser)) {
        el.likes.push(likedUser);
      }
    });

    const otherTweets = currentUser.tweets.filter(
      (el) => el.tweetId !== tweetId
    );
    const tweets = [...otherTweets, ...likedTweet];
    await User.updateOne({ _id: id }, { tweets: tweets });
    const newData = await User.findOne({ _id: id });

    const token = jwt.sign(
      {
        email: newData.email,
        login: newData.login,
        name: newData.name,
        id: newData._id,
        regDate: newData.registrationDate,
        avatar: newData.avatar,
        tweets: newData.tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: 'Ошибка при лайке записи.' });
  }
};

const unlikeTweetController = async (req, res) => {
  try {
    const { id, tweetId, likedUser } = req.body;
    const currentUser = await User.findOne({ _id: id });
    let likedTweet = currentUser.tweets.filter((el) => el.tweetId === tweetId);
    likedTweet.map((el) => {
      return el.likes.splice(el.likes.indexOf(likedUser), 1);
    });

    const otherTweets = currentUser.tweets.filter(
      (el) => el.tweetId !== tweetId
    );
    const tweets = [...otherTweets, ...likedTweet];
    await User.updateOne({ _id: id }, { tweets: tweets });
    const newData = await User.findOne({ _id: id });

    const token = jwt.sign(
      {
        email: newData.email,
        login: newData.login,
        name: newData.name,
        id: newData._id,
        regDate: newData.registrationDate,
        avatar: newData.avatar,
        tweets: newData.tweets,
      },
      config.get('jwtSecretKey')
    );

    res.json({ token });
  } catch (e) {
    res.json({ error: 'Что-то пошло не так, попробуйте снова.' });
  }
};

module.exports = { likeTweetController, unlikeTweetController };
