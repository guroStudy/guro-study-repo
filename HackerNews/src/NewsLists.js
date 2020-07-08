import React from 'react';
import NewsItem from './NewsItem';

const NewsLists = ({newsList}) => {
    return (
        <ul className="news-list">
            {newsList ? newsList.map(news => (
                <NewsItem content={news} key={news.id} />
                )) : <div></div>
            }
        </ul>
    );
};

export default NewsLists;