import React from 'react';

const CatSearch = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="고양이를 검색하세요" />
      <input type="submit" value="검색" />
    </form>
  );
};

export default CatSearch;
