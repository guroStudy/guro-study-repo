import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../components/Header';
import CatList from '../../components/CatList';
import Modal from '../../components/Modal';
import { IconContext } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { getCatByBreed } from '../../lib/api';
import './App.scss';

function App() {
  const [cats, setCats] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    isOpen: false,
    position: {},
    cat: {},
  });
  const onClick = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  useEffect(() => {
    const catList = localStorage.getItem('catList');
    const cats = catList ? JSON.parse(catList) : [];
    setCats(cats);
  }, []);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    const keyword = evt.target.children[0].value;

    const catList = await getCatByBreed(keyword);
    localStorage.setItem('catList', JSON.stringify(catList));

    setCats(catList);
    setIsLoading(false);
  };

  //intersctionObserver
  const openModal = (event) => {
    if (
      event.target.classList.contains('list') ||
      event.target.classList.contains('card')
    ) {
      return;
    }
    const target = event.target.parentNode.parentNode;
    console.log(target);
    const id = target.dataset.id;
    const cat = cats.find((cat) => cat.id === id);

    setModalInfo({
      isOpen: true,
      position: target.getBoundingClientRect(),
      cat,
    });
  };

  const closeModal = () => {
    setModalInfo({
      isOpen: false,
      position: {},
      cat: {},
    });
  };
  return (
    <div className={`App ${darkMode ? 'darkMode' : 'lightMode'}`}>
      <Header onClick={onClick} onSubmit={onSubmit} />
      <section className="catList">
        <CatList cats={cats} isLoading={isLoading} openModal={openModal} />
      </section>
      <footer>
        <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://github.com/SkynI25" target="_blank">
            <AiFillGithub />
          </a>
        </IconContext.Provider>
      </footer>
      <Modal modalInfo={modalInfo} closeModal={closeModal} />
    </div>
  );
}

export default App;
