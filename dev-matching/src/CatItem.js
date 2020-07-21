import React from 'react';

const CatItem = ({ url }) => {
  return (
    <div class="cat-item">
      <img src={url} />
    </div>
  );
};

export default CatItem;
