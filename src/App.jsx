import React, {useEffect, useState} from 'react';
import './App.scss';
import {Loader} from "./components/loader/Loader";
import {initApp} from "./appHelpers";
import {SectionsList} from "./components/sections/SectionsList";

function App() {
  const [isLoaderHide, setIsLoaderHide] = useState(false);

  useEffect(() => {
    initApp().then(() => setIsLoaderHide(true));
  }, []);

  return (
    <div className="App">
      <Loader isHide={isLoaderHide} />

      <SectionsList />
    </div>
  );
}

export default App;
