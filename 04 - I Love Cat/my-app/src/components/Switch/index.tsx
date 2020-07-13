import React from 'react'
import { useState } from 'react'
import './style.scss'

const Switch = ({ onChange }: any) => {
  const [checked, setChecked] = useState(false)
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
