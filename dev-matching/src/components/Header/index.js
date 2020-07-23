import React from 'react';
import CatSearch from '../CatSearch';
import Switch from '../Switch';

const Header = ({ onClick, onSubmit }) => {
  return (
    <header>
      <div className="inner">
        <h1>I Love Cat 🐱</h1>
        <div className="row">
          <CatSearch onSubmit={onSubmit} />
          <div className="theme-switch">
            <Switch onClick={onClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
