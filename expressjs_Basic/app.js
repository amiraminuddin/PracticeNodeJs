const path = require('path')

//import express
const express = require('express');
const bodyParser = require('body-parser');

//create express app and store in app variable
const app = express();
const adminRoute = require('./routes/admin.js');
const shopRoute = require('./routes/shop.js');

//register middleware. Parse body sent through form.
app.use(bodyParser.urlencoded( {extended: false }));

//will request through /admin route
app.use('/admin',adminRoute);
app.use(shopRoute);

//adding 404 Error Page
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
});

//call for start server using port 3000
app.listen(3000);