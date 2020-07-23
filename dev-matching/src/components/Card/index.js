import React, { useRef, useEffect, useState } from 'react';
import './Card.scss';

const Card = ({ cat }) => {
  const cardRef = useRef(null);
  const observerRef = useRef();
  const [isLoad, setIsLoad] = useState(false);

  const onIntersection = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoad(true);
      }
    });
  };

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onIntersection, {
        threshold: 0.2,
      });
    }
    cardRef.current && observerRef.current.observe(cardRef.current);
  }, []);
  return (
    <article className="card" data-id={cat.id}>
      <div className="card__img">
        <img src={cat.url} alt={cat.breeds[0].name} className="img" />
        {/* {isLoad ? <img src={cat.url} alt={cat.breeds[0].name} /> : ''} */}
      </div>
      <div className="card__info">{cat.breeds[0].name}</div>
    </article>
  );
};

export default Card;
