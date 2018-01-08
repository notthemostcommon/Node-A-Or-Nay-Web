const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('express').Router();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(morgan('dev'));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set ('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index')
});


const restController = require('./controllers/rest-controller');

app.use('/', restController.search);


app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Look elsewhere as this path only leads to danger'
  })
})

  app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
  })