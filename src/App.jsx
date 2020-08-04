import React, {useEffect, useState} from 'react';
import './App.scss';
import {Loader} from "./components/loader/Loader";
import {initApp} from "./helpers/appHelpers";
import {SectionsList} from "./components/sections/SectionsList";
import {AppContext, appContextDefaultValue} from './AppContext';

function App() {
  const [isInit, setIsInit] = useState(false);
  const [contextValue, setContextValue] = useState(appContextDefaultValue);

  useEffect(() => {
    initApp().then((data) => {
      setContextValue(data);
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
