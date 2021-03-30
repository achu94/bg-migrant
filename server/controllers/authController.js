const router = require('express').Router();
const cors = require('cors');


const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config')

router.post('/register', cors(), (req, res) => {
    const {username, password, repaePassword, eMail} = req.body;

    authService.register(username, password, eMail)
        .then(user => {
            res.send(user._id);
        });
});

module.exports = router;