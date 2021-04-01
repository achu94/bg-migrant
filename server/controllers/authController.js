const router = require('express').Router();
const cors = require('cors');

const authService = require('../services/authService');
const {COOKIE_NAME} = require('../config/config')

router.post('/login', cors({credentials: true, origin: 'http://localhost:3000'}), (req, res, next) => {
    const {username, password} = req.body;

    authService.login(username, password)
        .then( token => {
            res.cookie(COOKIE_NAME, token);
            res.send(token).status(200);
        })
        .catch(next);
});

router.post('/register', cors(), (req, res) => {
    const {username, password, repaePassword, eMail} = req.body;

    authService.register(username, password, eMail)
        .then(user => {
            res.send(user._id);
        });
});

module.exports = router;