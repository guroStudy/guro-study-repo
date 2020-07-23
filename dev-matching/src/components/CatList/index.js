import React, { useEffect } from 'react';
import Card from '../Card';
import './CatList.scss';
import Skeleton from '@material-ui/lab/Skeleton';

const CatList = ({ cats, isLoading, openModal }) => {
  return (
    <div onClick={openModal} className="list">
      {isLoading
        ? Array(6)
            .fill(null)
            .map((el, idx) => (
              <article key={idx} className="empty">
                <Skeleton variant="text" height={50} />
                <Skeleton variant="circle" width={50} height={50} />
                <Skeleton variant="rect" width={'100%'} height={'70%'} />
              </article>
            ))
        : cats.map((cat) => <Card key={cat.id} cat={cat} />)}
    </div>
  );
};

export default CatList;
