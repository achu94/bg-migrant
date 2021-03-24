import { Component } from 'react';

import './News.css';

class News extends Component {

    state = {
        isLoading: true,
        newsData: [],
        error: null
    }

    fetchNews() {
        // Where we're fetching data from
        fetch('http://localhost:5000/news')
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({
                    newsData: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchNews();
    }

    render() {
        const { isLoading, newsData, error } = this.state;
        return (
            <articles className="main">
                <h1>Новини от България</h1>
                {error ? <p>{error.message}</p> : null}

                {!isLoading ? (
                    newsData.map(news => {
                        const { title, author,urlToImage,url, publishedAt } = news;
                        return (
                            <article className="article" key={title}>
                                <img src={urlToImage} alt=""/>
                                <a target="__blank" href={url}><h3>{title}</h3></a>
                                <p>Author: {author}</p>
                                <p>публикувано: {publishedAt}</p>
                            </article>
                        );
                    })
                ) : (
                    <h3>Loading...</h3>
                )}
            </articles>
        )
    }
}

export default News;