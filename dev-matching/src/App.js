import React, { useEffect, useState } from 'react';
import Header from './Header';
import CatSearch from './CatSearch';
import CatList from './CatList';
import { getCatImgAll } from './lib/api';

function App() {
  const [imgList, setImgList] = useState([]);
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCatImgAll();
      setImgList(result);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <CatSearch setImgList={setImgList} setBreed={setBreed} />
      <CatList catList={imgList} breed={breed} />
    </React.Fragment>
  );
}

export default App;
