import React, { useEffect, useState } from 'react';
import Palette from './Palette';
import Header from './Header';
import SavedPalettes from './SavedPalettes';

const App = () => {
  const [savedPalettes, setSavedPalettes] = useState([]);
  
  const reloadStorage = () => {
    const localData = localStorage.getItem('savedPalettes');
    setSavedPalettes(localData ? JSON.parse(localData) : []);
  }
  useEffect(() => reloadStorage(), []);
  
  return (
    <>
      <Header />
      <Palette relaodStorage={reloadStorage} savedPalettes={savedPalettes} />
      <SavedPalettes reloadStorage={reloadStorage.bind(this)} savedPalettes={savedPalettes} />
    </>
  )
}

export default App