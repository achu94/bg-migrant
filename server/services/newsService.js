const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1457f8135ea24e9685380b6c7eb48ef9');

async function getAll() {
    let news_data = await newsapi.v2.topHeadlines({
        language: 'bg',
        country : 'bg'
    })
    console.log(news_data)
    return news_data;
}

module.exports = {
    getAll,
}