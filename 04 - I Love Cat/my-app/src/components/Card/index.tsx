import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

const Card = ({ cat }: any) => {
  const cardRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver>()
  const [isLoad, setIsLoad] = useState(false)

  const onIntersection = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target)
        setIsLoad(true)
      }
    })
  }

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onIntersection, { threshold: 0.2 })
    }
    cardRef.current && observerRef.current.observe(cardRef.current)
  }, [])

  return (
    <article className="card" ref={cardRef} data-id={cat.id}>
      <div className="img-container">
        {isLoad ? <img src={cat.url} alt={cat.breeds[0].name} className="img" /> : ''}
      </div>
      <div className="card-info">{cat.breeds[0].name}</div>
    </article>
  )
}

export default Card
