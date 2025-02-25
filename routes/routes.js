const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (req, res) => {
    res.send('Hello World but from the About Us Page!');
});

module.exports = router;