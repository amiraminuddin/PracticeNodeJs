const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

app.use(bodyParser.urlencoded( {extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);

app.use(errorController.get404);

app.listen(3000);