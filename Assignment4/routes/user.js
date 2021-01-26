const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const router = express.Router();

const userName = []

router.get('/add-user', (req, res, next) => {
    res.render('user' , {
        pageTitle: 'Add User',
        path: '/user/add-user'
    });
});

router.post('/add-user', (req, res, next) => {
    userName.push({name: req.body.username});
    res.redirect('/');
})

exports.routes = router;
exports.users = userName;
