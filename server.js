var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

var x = parseFloat(req.body.x);
var y = parseFloat(req.body.y);
var oppp = req.body.type;
 app.post('/calc', function(req,res){
   console.log('in calc post route');
   res.send(200);

function calculate(){
  switch(operator){
  case '+':
    answer = x + y;
    break;
  case '-':
    toReturn = Number(dig[0]) - Number(dig[1]);
    break;
  case '/':
    toReturn = Number(dig[0]) / Number(dig[1]);
    break;
  case 'x':
    toReturn = Number(dig[0]) * Number(dig[1]);
}
}

 })
var server = app.listen(3000, function(){
  console.log('server listening for requests on port:', server.address().port);
  console.log('press control+c to quit');
});

module.exports = server;
