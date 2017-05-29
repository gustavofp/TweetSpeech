const app = require('./config/app.config');
const db = require('./config/db.config');

const Speech = require('./models/speech');
const speechController = require('./controllers/speechController');


app.get('/', (req, res) => {
    console.log("Bem Vindo")
});

app.get('/api', (req, res) => {
    console.log("Bem Vindo")
});

app.post('/api/speech', (req, res) => {

    const tweets = req.body.tweets;

    speechController.save(tweets, function(resp){
        res.json(resp);
    });

});
