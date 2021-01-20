const path = require('path');
const express = require('express');

const rootDir = require('../util/path')
const router = express.Router();

//create a variable to store input
const product = [];

//add middleware function
//can use same path if method different
//route /admin/add-product => GET
//  router.get('/add-product', (req, res, next) => {
//      res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//  });


//pug and ejs version
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product' });
});


/*
//handlebars version
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});
*/

//if no request from /add-product, it will redirect to route /
//route /admin/add-product => POST
 router.post('/add-product', (req, res, next) => {
     product.push({title: req.body.title});
     res.redirect('/');
 });

//expots the routes
exports.routes = router;

//export the product
exports.products = product;