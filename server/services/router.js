const router = require('express').Router();

const homeController = require('./controllers/homeController');
const newsApiController = require('./controllers/newsApiController');

router.use('/', homeController);
router.use('/news', newsApiController);

router.get('*' (req, res) => {

});

module.exports = router;