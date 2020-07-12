import React from 'react'
import './style.scss'

const Card = ({ cat }: any) => {
  return (
    <article className="card">
      <a href="/">
        <div className="img-container">
          <img src={cat.url} alt={cat.breeds[0].name} className="img" />
        </div>
        <div className="card-info">{cat.breeds[0].name}</div>
      </a>
    </article>
  )
}

export default Card
