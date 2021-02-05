const User = require('../../models/User');
const bcrypt = require('bcryptjs');

const registrationController = async (req, res) => {
  try {
    const { name, login, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.json({ error: 'Такой пользователь уже зарегистрирован.' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      login,
      email,
      password: hashPassword,
    });

    res.json({ message: 'Учетная запись успешно создана.' });
  } catch (e) {
    res.json({ error: 'Ошибка при регистрации.' });
  }
};

module.exports = registrationController;
