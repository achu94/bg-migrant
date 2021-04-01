const router = require('express').Router();
const cors = require('cors');

const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config')

router.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    authService.login(username, password)
        .then( token => {
            res.cookie(COOKIE_NAME, token);
            res.send({'login' : true}).status(200);
        })
        .catch(next);
});

router.post('/register', (req, res, next) => {
    const {username, password, repaePassword, eMail} = req.body;

    authService.register(username, password, eMail)
        .then(user => {
            res.send(user._id);
        })
        .catch(next);
});

module.exports = router;