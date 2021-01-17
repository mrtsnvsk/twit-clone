const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');

const checkAuthController = async (req, res) => {
  try {
    const newUser = await User.findOne({ _id: req.user.id });

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

    return res.json({
      token,
    });
  } catch (e) {
    res.status(401).json({ error: 'Что-то пошло не так.' });
  }
};

module.exports = checkAuthController;
