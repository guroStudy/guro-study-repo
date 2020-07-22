import React, { FormEvent, useState, useEffect, useCallback } from 'react'
import { getCatsByKeyword } from '../../lib/api'
import CatList from '../../components/CatList'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import './style.scss'
import { getCatsFromStorage, setCatsToStorage } from '../../lib/localStorage'

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
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [modalInfo, setModalInfo] = useState({ isOpen: false, position: {}, cat: {} })
  const [keywords, setKeywords] = useState<Array<any>>([])

  useEffect(() => {
    setCats(getCatsFromStorage())
    // 초기 다크 모드
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches
    if (prefersDark) {
      setIsDarkMode(true)
    }
  }, [])

  const handleSearch = async (keyword: string) => {
    setIsLoading(true)

    const index = keywords.indexOf(keyword as never)
    if (index !== -1) {
      setKeywords([keyword, ...keywords.slice(0, index), ...keywords.slice(index + 1)].slice(0, 5))
    } else {
      setKeywords([keyword, ...keywords].slice(0, 5))
    }

    const result = await getCatsByKeyword(keyword)
    setCats(result)
    setCatsToStorage(result)
    setIsLoading(false)
  }

  const handleInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setKeyword(target.value)
  }, [])

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch(keyword)
      }
    },
    [keyword]
  )

  const handleChangeTheme = useCallback((isChecked: boolean) => {
    setIsDarkMode(isChecked)
  }, [])

  const openModal = (event: any) => {
    if (event.target.classList.contains('list') || event.target.classList.contains('card')) {
      return
    }
    const target = event.target.parentNode
    const id = target.dataset.id
    const cat = cats.find((cat) => cat.id === id)

    setModalInfo({
      isOpen: true,
      position: target.getBoundingClientRect(),
      cat,
    })
  }

  const closeModal = () => {
    setModalInfo({
      isOpen: false,
      position: {},
      cat: {},
    })
  }

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header
        keyword={keyword}
        handleInput={handleInput}
        handleKeyPress={handleKeyPress}
        handleChangeTheme={handleChangeTheme}
        handleSearch={handleSearch}
        isDarkMode={isDarkMode}
        keywords={keywords}
      />
      <main className="result">
        <CatList cats={cats} isLoading={isLoading} openModal={openModal} />
      </main>
      <footer className="footer">
        <div className="inner">I Love Cat</div>
      </footer>
      <Modal modalInfo={modalInfo} closeModal={closeModal} />
    </div>
  )
}

export default App
