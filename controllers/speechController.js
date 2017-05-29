var Speech = require('../models/speech');


exports.save = (tweets, callback) => {

  const speech_id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

  console.log(tweets);

  new Speech({
    speech_id: speech_id,
    tweets: tweets
  })
  .save((error, speech) => {

        if (error){
           callback({error: error})
        } else {
            callback(speech);
        }
  })

}
