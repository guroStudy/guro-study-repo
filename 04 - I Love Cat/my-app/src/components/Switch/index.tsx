import React from 'react'
import { useState, useEffect } from 'react'
import './style.scss'

const Switch = ({ onChange, initialTheme }: any) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    // 초기 다크 모드
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches
    if (prefersDark) {
      setChecked(prefersDark)
    }
  }, [])

  const handleClick = () => {
    const isChecked = !checked
    onChange(isChecked)
    setChecked(isChecked)
  }

  return (
    <div onClick={handleClick} className={`switch ${checked ? 'checked' : ''}`}>
      <span></span>
    </div>
  )
}

export default Switch
