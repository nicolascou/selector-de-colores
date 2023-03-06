import React, { useState } from 'react'
import { CompactPicker } from 'react-color';
import Circle from './Circle';

const Palette = ({ relaodStorage, savedPalettes }) => {
  const [activeColor, setActiveColor] = useState(undefined);
  const [activeCircle, setActiveCircle] = useState(undefined);
  const [paletteName, setPaletteName] = useState('');

  const savePalette = () => {
    if (paletteName === '') return;
    setActiveCircle(undefined);

    let likedColors = Array.from(document.getElementsByClassName('circle'));
    
    likedColors = likedColors.map(elt => {
      const color = elt.style.backgroundColor;
      elt.style.backgroundColor = '';
      elt.classList.remove('big-c');
      elt.classList.add('small-c', 'striped-bg');
      return color;
    })

    const savedPalette = { paletteName, likedColors }
    savedPalettes.push(savedPalette);

    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
    relaodStorage();
    setPaletteName('');
  }

  return (
    <div className='palette'>

      <div className='flex-around'>
        <Circle id={1} activeCircle={activeCircle} setActiveCircle={setActiveCircle} activeColor={activeColor} />
        <Circle id={2} activeCircle={activeCircle} setActiveCircle={setActiveCircle} activeColor={activeColor} />
        <Circle id={3} activeCircle={activeCircle} setActiveCircle={setActiveCircle} activeColor={activeColor} />
        <Circle id={4} activeCircle={activeCircle} setActiveCircle={setActiveCircle} activeColor={activeColor} />
        <Circle id={5} activeCircle={activeCircle} setActiveCircle={setActiveCircle} activeColor={activeColor} />
      </div>

      <div className='flex-between'>
        <CompactPicker className='compact' color={activeColor} onChangeComplete={color => setActiveColor(color.hex)} />

        <div className='input-wrapper'>
          <label htmlFor="input">Name</label>
          <div className='input-div'>
            <input type="text" id='input' value={paletteName} onChange={e => setPaletteName(e.target.value)} placeholder='Website color sheme' />
            <button className='btn' onClick={savePalette}>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="10.6" y1="6.55671e-08" x2="10.6" y2="21" stroke="#2C2C2C" strokeWidth="3"/>
                <line x1="21" y1="10.6" y2="10.6" stroke="#2C2C2C" strokeWidth="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Palette