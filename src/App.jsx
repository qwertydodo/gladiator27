import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.scss';
import {Loader} from "./components/loader/Loader";
import {initApp} from "./helpers/appHelpers";
import {SectionsList} from "./components/sections/SectionsList";
import {AppContext} from './AppContext';
import {Helmet} from "react-helmet";
import {DANCE_SECTION_INDEX} from "./constants/slides";

function App() {
  const [isInit, setIsInit] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(DANCE_SECTION_INDEX);
  const [externalData, setExternalData] = useState();

  const onSlideChange = useCallback(index => {
    setActiveSlideIndex(index);
  }, []);

  const isActiveSlide = useCallback(slideIndex => slideIndex === activeSlideIndex, [activeSlideIndex]);

  const contextValue = useMemo(() => ({
    ...externalData,
    activeSlide: activeSlideIndex,
    isActiveSlide,
    onSlideChange,
  }), [externalData, activeSlideIndex, isActiveSlide, onSlideChange]);

  useEffect(() => {
    initApp().then((data) => {
      setExternalData(data);
      setIsInit(true);
    });
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <Helmet>
        <title>Гладиатор 27</title>
        <meta name="description" content="Игорь Гладиатор 27 День Рождение Поздравление Открытка Представление Красавчик Друзья Любить"/>
        <link rel="canonical" href="https://gladiator27.herokuapp.com/" />
      </Helmet>

      <div className="App">
        <Loader isHide={isInit} />

        <SectionsList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
