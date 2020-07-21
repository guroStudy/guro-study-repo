import React, { useEffect } from 'react';
import './CatSearch.scss';
import { getBreedByName, getCatByBreed } from './lib/api';

const CatSearch = ({ setImgList, setBreed }) => {
  const onSubmit = async (evt) => {
    evt.preventDefault();
    const keyword = evt.target.children[0].value;
    const breedName = await getBreedByName(keyword);
    setBreed(breedName[0]);

    const catList = await getCatByBreed(breedName[0]['id']);
    setImgList(catList);
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="고양이를 검색하세요" />
      <input type="submit" value="검색" />
    </form>
  );
};

export default CatSearch;
