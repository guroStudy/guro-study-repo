import React from 'react';
import { useState, useEffect } from 'react';
import './style.scss';

const Switch = ({
  onChange,
  initialTheme,
}: {
  onChange: (isCheked: boolean) => void;
  initialTheme: boolean;
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // 초기 다크 모드
    setChecked(initialTheme);
  }, [initialTheme]);

  const handleClick = () => {
    const isChecked = !checked;
    onChange(isChecked);
    setChecked(isChecked);
  };

  return (
    <div onClick={handleClick} className={`switch ${checked ? 'checked' : ''}`}>
      <span></span>
    </div>
  );
};

export default Switch;
