//import express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//create app as express
const app = express();
const mainView = require('./routes/main');
const userView = require('./routes/user');
const e = require('express');

//set views as ejs
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/user',userView.routes);
app.use(mainView);

app.listen(3000);