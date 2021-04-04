const router = require('express').Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const {SECRET, COOKIE_NAME} = require('../config/config');

const authService = require('../services/authService');

router.get('/', (req, res,  next) => {
    const userId = jwt.verify(req.cookies[COOKIE_NAME], SECRET, function(err, decoded) {
        if(err) throw 'Something went wrong', err;
        return decoded._id;
    });

    authService.getUserInfo(userId)
        .then( userInfo => {
            res.send(userInfo).status(200);
        })
        .catch(next);
});

router.post('/login', (req, res, next) => {
    const {username, password} = req.body;

    authService.login(username, password)
        .then( token => {
            const thirtyDays = 30 * 24 * 60 * 60 * 1000;
            res.cookie(COOKIE_NAME, token,{ maxAge: thirtyDays, httpOnly: true });
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

router.get('/logout', (req, res, next) => {
    res.clearCookie(COOKIE_NAME);
    res.send('logout').status(200);
});

module.exports = router;