const express = require('express');
const app = express();
const port = 3000;
const CoinRouter = require('./routes/CoinRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://boat:boat1234@ds061354.mlab.com:61354/expressdemo');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/coins', CoinRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});