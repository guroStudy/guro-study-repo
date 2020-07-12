import React from 'react'
import { getCatsByKeyword } from '../../lib/api'
import { useState, useEffect } from 'react'
import CatList from '../../components/CatList'

type Breed = {
  id: string
}

type Cat = {
  id: string
  url: string
  width: number
  height: number
  breeds: Array<Breed>
}

function App() {
  const [cats, setCats] = useState<Array<any>>([])

  const handleSearch = async (keyword: string) => {
    const result = await getCatsByKeyword(keyword)
    setCats(result)
  }
  return (
    <div className="App">
      <header onClick={() => handleSearch('ab')}>검색</header>
      <main>
        <CatList cats={cats} />
      </main>
      <footer>푸터</footer>
    </div>
  )
}

export default App
