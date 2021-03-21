import api from './api';

export const getNews = () => {
    return fetch(api.getNews)
        .then(res => res.json())
        .catch(err => console.log('Handle error:' + err));
}