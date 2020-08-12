import React, {useEffect, useMemo, useState} from 'react';
import './App.scss';
import {Loader} from "./components/loader/Loader";
import {initApp} from "./helpers/appHelpers";
import {SectionsList} from "./components/sections/SectionsList";
import {AppContext} from './AppContext';

function App() {
  const [isInit, setIsInit] = useState(false);
  const [externalData, setExternalData] = useState();

  const contextValue = useMemo(() => ({
    ...externalData,
  }), [externalData]);

  useEffect(() => {
    initApp().then((data) => {
      setExternalData(data);
      setIsInit(true);
    });
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Loader isHide={isInit} />

        <SectionsList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
