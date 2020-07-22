import React from 'react'
import Card from '../Card'
import CardSkeleton from '../CardSkeleton'
import './style.scss'
import { FaRegSurprise } from 'react-icons/fa'

const CatList = ({ cats, isLoading, openModal }: any) => {
  return (
    <div className="list" onClick={openModal}>
      {isLoading &&
        Array(6)
          .fill(null)
          .map((i, idx) => <CardSkeleton key={idx} />)}
      {!isLoading &&
        (cats.length === 0 ? (
          <div className="empty">
            <FaRegSurprise />
            <br />
            검색 결과가 없습니다
          </div>
        ) : (
          cats.map((cat: any) => <Card key={cat.id} cat={cat} />)
        ))}
    </div>
  )
}

export default React.memo(CatList)
