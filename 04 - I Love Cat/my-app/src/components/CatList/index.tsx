import React from 'react';
import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import './style.scss';
import { FaRegSurprise } from 'react-icons/fa';

const CatList = ({
  cats,
  isLoading,
  openModal,
}: {
  cats: Cat[];
  isLoading: boolean;
  openModal: (evnet: React.MouseEvent<HTMLElement>) => void;
}) => {
  return (
    <React.Fragment>
      {isLoading ? (
        <div className="list">
          {Array(6)
            .fill(null)
            .map((i, idx) => (
              <CardSkeleton key={idx} />
            ))}
        </div>
      ) : (
        <React.Fragment>
          {cats.length === 0 ? (
            <div className="list">
              <div className="empty">
                <FaRegSurprise />
                <br />
                검색 결과가 없습니다
              </div>
            </div>
          ) : (
            <div className="list" onClick={openModal}>
              {cats.map((cat: Cat) => (
                <Card key={cat.id} cat={cat} />
              ))}
            </div>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default React.memo(CatList);
