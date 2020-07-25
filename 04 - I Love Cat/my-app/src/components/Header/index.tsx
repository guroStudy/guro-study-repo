import React from 'react';
import Switch from '../Switch';
import { TiWeatherNight, TiWeatherSunny } from 'react-icons/ti';
import SearchKeywords from '../../components/SearchKeywords';

const Header = ({
  keyword,
  handleInput,
  handleKeyPress,
  handleChangeTheme,
  handleSearch,
  isDarkMode,
  keywords,
  prefersDark,
}: {
  keyword: string;
  handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChangeTheme: (isCheked: boolean) => void;
  handleSearch: (keyword: string) => Promise<void>;
  isDarkMode: boolean;
  keywords: string[];
  prefersDark: boolean;
}) => {
  return (
    <header>
      <div className="inner">
        <div className="row">
          <input
            type="text"
            name="keyword"
            value={keyword}
            placeholder="검색"
            onChange={(event) => handleInput(event)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={() => handleSearch(keyword)}>검색</button>
          <div className="theme-switch">
            <Switch onChange={handleChangeTheme} initialTheme={prefersDark} />
            <span className="theme-icon">{isDarkMode ? <TiWeatherNight /> : <TiWeatherSunny />}</span>
          </div>
        </div>
        <SearchKeywords keywords={keywords} handleSearch={handleSearch} />
      </div>
    </header>
  );
};

export default React.memo(Header);
