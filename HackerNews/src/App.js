import React, { useState } from 'react';
import Header from './Header';
import NewsLists from './NewsLists';

const API = async () => {
  const hackerNews = await fetch(`https://node-hnapi.herokuapp.com/news?page=2`).then(res => res.json());
  return hackerNews;
}

const App = () => {
  const [news, setNews] = useState(null);
  const getNews = async () => {
    const result = await API();
    setNews(result);
  }

  getNews();

  return (
    <div className="App">
      <Header />
      <NewsLists newsList={news}/>
    </div>
  );
}

export default App;
