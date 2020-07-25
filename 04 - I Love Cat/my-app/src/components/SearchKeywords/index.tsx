import React from 'react';
import './style.scss';

const SearchKeywords = ({
  keywords,
  handleSearch,
}: {
  keywords: string[];
  handleSearch: (keyword: string) => Promise<void>;
}) => {
  return (
    <div className="search-keyword">
      {keywords.length > 0
        ? keywords.map((i) => <span onClick={() => handleSearch(i)}>{i}</span>)
        : '최근 검색어가 없습니다'}
    </div>
  );
};

export default SearchKeywords;
