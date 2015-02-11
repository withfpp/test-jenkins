var express = require('express');
var app = express();

app.get('/', function (req, res){
  res.send('it works');
})

app.get('/hello', function (req, res){
  res.send('hello');
})

app.get('/cool', function (req, res){
  res.send('cool');
})


app.listen(3000);
