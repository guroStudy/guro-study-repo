import React, { useState, useEffect } from 'react';
import CatItem from './CatItem';
import './CatList.scss';

const CatList = ({ catList, breed }) => {
  const name = breed ? breed.name : null;
  const temperament = breed ? breed.temperament : null;

  return (
    <section>
      {name && <h1>{name}</h1>}
      {temperament && <h2>{temperament}</h2>}
      <article className="cat-list">
        {catList ? (
          catList.map(({ id, url }) => <CatItem key={id} url={url} />)
        ) : (
          <div></div>
        )}
      </article>
    </section>
  );
};

export default CatList;
