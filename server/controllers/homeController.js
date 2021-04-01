const { Router } = require('express');

const router = Router();
// const expenseService = require('../services/expenseService');
const {SECRET, COOKIE_NAME} = require('../config/config');
const jwt = require('jsonwebtoken');


router.get('/', (req, res, next) => {
    let user_id;
    let username;
    let isAuth = false;

    let token = req.cookies[COOKIE_NAME];

    if(token){
        jwt.verify(token, SECRET, function(err, decoded) {

            if(err){
                res.send(err).status(404)
            }

            user_id  = decoded._id;
            username = decoded.username;
            isAuth = true;
        });
    }

    res.send({'user_id': user_id, 'username' : username, 'isAuth' : isAuth});

    // expenseService.getAll(user_id)
    //     .then(expenses => {
    //         res.render('home', { expenses });
    //     })
    //     .catch(next)
});

// router.get('/secret-action', isAuth, (req, res) => {
//     res.send('very verysecret');
// });

module.exports = router;
