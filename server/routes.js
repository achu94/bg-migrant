const router = require('express').Router();

const homeController = require('./controllers/homeController');
const newsApiController = require('./controllers/newsApiController');
const authController = require('./controllers/authController');

// router.use('/', homeController);
router.use('/news', newsApiController);
router.use('/user', authController);

// router.get('*' (req, res) => {

// });

module.exports = router;