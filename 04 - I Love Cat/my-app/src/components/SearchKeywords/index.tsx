import React from 'react'
import './style.scss'

const SearchKeywords = ({ keywords, handleSearch }: any) => {
  return (
    <div className="search-keyword">
      {keywords.length > 0
        ? keywords.map((i: String) => <span onClick={() => handleSearch(i)}>{i}</span>)
        : '최근 검색어가 없습니다'}
    </div>
  )
}

export default SearchKeywords
