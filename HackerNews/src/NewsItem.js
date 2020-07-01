import React from 'react';

const NewsItem = ({news}) => {
    const { title, domain, time_ago, comments_count, url } = news;

    return (
        <div>
            <div>
                <a href={url}>{title}</a>
            </div>
            <div>
                {domain}
            </div>
            <div>
                {time_ago}
            </div>
            <div>
                {comments_count}
            </div>
        </div>
    );
};

export default NewsItem;