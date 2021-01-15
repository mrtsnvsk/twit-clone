const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
  },
  login: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
    default: '',
  },
  twits: {
    type: Object,
    default: {},
  },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = model('User', schema);
