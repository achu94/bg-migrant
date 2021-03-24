const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1457f8135ea24e9685380b6c7eb48ef9');

function getTop10() {
    return newsapi.v2.topHeadlines({
        language: 'bg',
        country: 'bg'
    }).then(news_data => {
        return news_data;
    });
}

module.exports = {
    getTop10
}