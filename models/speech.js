const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TweetSchema = require('../models/tweet')

var SpeechSchema = new Schema ({
  speech_id: { type: String, required: true },
  tweets: { type: mongoose.Schema.Types.ObjectId, ref: 'Tweet'}
});

module.exports = mongoose.model("Speech", SpeechSchema);
