const express = require('express');

const router = express.Router();

//get exactly routes
router.get('/', (req, res, next) => {
    res.send('<h1>Hello :)</h>')
});

module.exports = router;