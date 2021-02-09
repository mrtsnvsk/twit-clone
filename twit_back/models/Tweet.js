const { Schema, model } = require('mongoose');

const schema = new Schema({
  login: {
    type: String,
  },
  userId: {
    type: String,
  },
  tweetId: {
    type: String,
  },
  text: {
    type: String,
  },
  likes: {
    type: Array,
    default: [],
  },
  reposts: {
    type: Array,
    default: [],
  },
  replyes: {
    type: Array,
    default: [],
  },
  createDate: {
    type: Date,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

module.exports = model('Tweet', schema);
