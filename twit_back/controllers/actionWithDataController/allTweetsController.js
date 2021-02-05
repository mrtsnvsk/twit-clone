const User = require('../../models/User');

const allTweetsController = async (req, res) => {
  try {
    const data = await User.find();
    let tweetsArr = [];
    data.forEach((el) => {
      return tweetsArr.push(...el.tweets);
    });
    tweetsArr = tweetsArr.sort(
      (a, b) => new Date(b.createDate) - new Date(a.createDate)
    );
    res.json(tweetsArr);
  } catch (e) {
    res.json({ error: 'Ошибка при загрузке твитов.' });
  }
};

module.exports = allTweetsController;
