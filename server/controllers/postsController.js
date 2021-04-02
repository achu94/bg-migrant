const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {SECRET, COOKIE_NAME} = require('../config/config');
const postService = require('../services/postService');

router.get('/', (req, res, next) => {
    postService.getAll()
        .then(posts => {
        res.send(posts);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
    const postId = req.params.id;

    postService.getById(postId)
        .then( post => {
            res.send(post).status(200);
        })
        .catch(next);
});

router.post('/new', (req, res, next) => {
    const {title, body, tags} = req.body;

    const userId = jwt.verify(req.cookies[COOKIE_NAME], SECRET, function(err, decoded) {
        if(err) throw 'Something went wrong', err;
        return decoded._id;
    });

    postService.create(title, body, tags, userId)
        .then(post => {
            console.log(post);
            res.send(post._id);
        })
        .catch(next);
});

module.exports = router;