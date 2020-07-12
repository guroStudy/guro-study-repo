import React from 'react'
import Card from '../Card'
import './style.scss'

const CatList = ({ cats }: any) => {
  return (
    <div className="list">
      {cats.map((cat: any) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  )
}

export default CatList
