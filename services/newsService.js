const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API_ID);

async function getAll() {
    let news_data = await newsapi.v2.topHeadlines({
        language: 'bg',
        country : 'bg'
    })
    
    return news_data;
}

module.exports = {
    getAll,
}