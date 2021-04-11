const { Router } = require('express');
const cors = require('cors');

const newsService = require('../services/newsService');

const router = Router();

router.get('/', (req, res) => {
    newsService.getAll()
        .then(newsData => {
            res.json(newsData.articles);
        })
        .catch(() => res.status(404).end())
});

module.exports = router;