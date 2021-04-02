const router = require('express').Router();

const homeController = require('./controllers/homeController');
const newsApiController = require('./controllers/newsApiController');
const authController = require('./controllers/authController');
const postsController = require('./controllers/postsController');

router.use('/', homeController);
router.use('/news', newsApiController);
router.use('/user', authController);
router.use('/posts', postsController);

// router.get('*' (req, res) => {

// });

module.exports = router;