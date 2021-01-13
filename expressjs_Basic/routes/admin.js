const express = require('express');

const router = express.Router();

//add middleware function
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Add product</button></form>')
});

//if no request from /add-product, it will redirect to route /
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router