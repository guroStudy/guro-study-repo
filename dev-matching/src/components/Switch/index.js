import React from 'react';
import { useState } from 'react';
import './Switch.scss';

const Switch = ({ onClick }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    const isChecked = !checked;
    onClick(isChecked);
    setChecked(isChecked);
  };

  return (
    <div onClick={handleClick} className={`switch ${checked ? 'checked' : ''}`}>
      <span></span>
    </div>
  );
};

export default Switch;
