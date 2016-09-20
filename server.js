/**
 * Created by tlatoza on 9/19/16.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var sentiment = require('sentiment');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));

app.post('/', function (req, res) {
res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log(req.body.todoItems);
    var sentiments = [];
    for (var item of req.body.todoItems)
        sentiments.push(sentiment(item).score);
    res.json({ sentiments: sentiments });
});
var port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});


// npm install express body-parser nodemon sentiment --save


