//import express
const express = require('express')

//create express app and store in app variable
const app = express();

app.use('/', (req, res, next) => {
    console.log('Always run');
    next()
})

//add middleware function
app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<h1>the add product page</h>')
});

app.use('/', (req, res, next) => {
    console.log('In another Middleware!');
    res.send('<h1>Hello :)</h>')
});

//call for start server using port 3000
app.listen(3000);