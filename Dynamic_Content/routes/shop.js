const path = require('path');

const express = require('express');

const rootDir = require('../util/path')
const adminData = require('./admin.js')

const router = express.Router();

//get exactly routes
// router.get('/', (req, res, next) => {
//     console.log('shop.js',adminData.products);
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });


//pug and ejs version
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
      prods: products, 
      pageTitle: 'Don Shop', 
      path: '/'});
});


/*
//using handlebar version
router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods : products, 
        pageTitle: 'Don Shop', 
        path: '/', //for pug
        hasProduct: products.length > 0, //for hbs
        activeShop: true, //for hbs
        productCSS: true //for hbs
    }); //will find shop file
});
*/

module.exports = router;