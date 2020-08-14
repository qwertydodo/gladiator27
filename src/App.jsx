import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.scss';
import {Loader} from "./components/loader/Loader";
import {initApp} from "./helpers/appHelpers";
import {SectionsList} from "./components/sections/SectionsList";
import {AppContext} from './AppContext';

function App() {
  const [isIniting, setIsIniting] = useState(false);
  const [isInited, setIsInited] = useState(false);
  const [externalData, setExternalData] = useState();

  const contextValue = useMemo(() => ({
    ...externalData,
  }), [externalData]);

  const onStart = useCallback(() => {
    setIsIniting(true);
  }, []);

  const onEnd = useCallback(() => {
    setIsInited(true);
  }, []);

  useEffect(() => {
    initApp().then((data) => {
      setExternalData(data);
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Loader isHide={isInited} isLoading={isIniting} onStart={onStart} onEnd={onEnd}/>

        <SectionsList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
