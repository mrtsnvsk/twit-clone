const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
  },
  login: {
    type: String,
    unique: true,
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
    default: 'default-avatar.png',
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  tweets: {
    type: Array,
    default: [],
  },
  registrationDate: { type: Date, default: Date.now },
});

module.exports = model('User', schema);
