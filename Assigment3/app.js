const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
const mainView = require('./routes/main.js');
const userView = require('./routes/user.js')


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/user',userView);
app.use(mainView);

app.listen(3000);