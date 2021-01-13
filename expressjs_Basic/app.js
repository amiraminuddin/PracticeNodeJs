//import express
const express = require('express');
const bodyParser = require('body-parser');

//create express app and store in app variable
const app = express();
const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

//register middleware. Parse body sent through form.
app.use(bodyParser.urlencoded( {extended: false }));

app.use(adminRoute);
app.use(shopRoute);

//call for start server using port 3000
app.listen(3000);