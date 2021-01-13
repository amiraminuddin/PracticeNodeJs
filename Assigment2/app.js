//import express
const express = require('express');

//create variable to call express app
const app = express();

/** Part 1
app.use((req,res, next) => {
    console.log('first midlleware');
    next();
})

app.use((req,res,next) => {
    console.log('second middleware');
    next();
})

app.use((req,res,next) => {
    console.log('Third middleware');
    res.send("<h1>This is third</h1>")
})
*/

app.use('/users',(req,res,next) => {
    console.log('second middleware');
    res.send("<h1>This is user</h1>")
});

app.use('/', (req,res,next) => {
    console.log('first middleware');
    res.send("<h1>This is main</h1>")
});






app.listen(3000)