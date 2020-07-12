import React, { FormEvent } from 'react'
import { getCatsByKeyword } from '../../lib/api'
import { useState, useEffect } from 'react'
import CatList from '../../components/CatList'
import './style.scss'

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
  const [keyword, setKeyword] = useState<string>('')

  const handleSearch = async (keyword: string) => {
    const result = await getCatsByKeyword(keyword)
    setCats(result)
  }
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setKeyword(target.value)
  }

  return (
    <div className="App">
      <header>
        <input
          type="text"
          name="keyword"
          value={keyword}
          placeholder="검색"
          onChange={(event) => handleInput(event)}
        />
        <button onClick={() => handleSearch(keyword)}>검색</button>
      </header>
      <main className="result">
        <CatList cats={cats} />
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
