const express = require('express');
const path = require('path')

const router = express.Router();
const rootDir = require('../util/path');
const userData = require('./user')

router.get('/', (req,res,next) => {
    const username = userData.users;
    res.render('main', {
        users : username,
        pageTitle: 'Main Page',
        path: '/'
    });
});

module.exports = router;