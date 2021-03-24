const { Router } = require('express');

const homeController = require('./controllers/homeController');
const newsApiController = require('./controllers/newsApiController');

const router = Router();

// router.use('/', homeController);
router.use('/news', newsApiController);

// router.get('*' (req, res) => {

// });

module.exports = router;