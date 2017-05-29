const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TweetSchema = new Schema({
    url: { type:String, required: true }
});

module.exports = mongoose.model("Tweet", TweetSchema)
