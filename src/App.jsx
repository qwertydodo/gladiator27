import React, {useEffect, useState} from 'react';
import './App.scss';
import {Loader} from "./components/Loader";
import {initApp} from "./helpers/initHelpers";

function App() {
  const [isLoaderHide, setIsLoaderHide] = useState(false);

  useEffect(() => {
    initApp().then(() => setIsLoaderHide(true));
  }, []);

  return (
    <div className="App">
      <Loader isHide={isLoaderHide} />
    </div>
  );
}

export default App;
