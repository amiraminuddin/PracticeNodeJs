const path = require('path');
const express = require('express');

const rootDir = require('../util/path')
const router = express.Router();

//add middleware function
//can use same path if method different
//route /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

//if no request from /add-product, it will redirect to route /
//route /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router