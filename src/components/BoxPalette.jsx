import React from 'react'

const BoxPalette = ({ paletteName, likedColors, reloadStorage }) => {
  const removePalette = () => {
    const localData = localStorage.getItem('savedPalettes');
    let savedPalettes = localData ? JSON.parse(localData) : [];
    
    savedPalettes = savedPalettes.filter(({paletteName: name}) => name !== paletteName);
    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
    reloadStorage();
  }

  const changeCurrentPalette = () => {
    const circles = Array.from(document.getElementsByClassName('circle'));
    for (let i = 0; i < likedColors.length; i++) {
      if (!likedColors[i]) {
        circles[i].classList.add('striped-bg');
        continue;
      }
      circles[i].style.backgroundColor = likedColors[i];
      circles[i].classList.remove('striped-bg')
    }
  }
  
  return (
    <div className='box-palette'>
      <div className='box-palette-title'>
        <p>{paletteName}</p>
        <button onClick={removePalette}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.47921 2.75C8.47921 2.3703 8.78701 2.0625 9.16671 2.0625H12.8334C13.2131 2.0625 13.5209 2.3703 13.5209 2.75V3.4375H17.4167C17.7964 3.4375 18.1042 3.7453 18.1042 4.125C18.1042 4.5047 17.7964 4.8125 17.4167 4.8125H4.58337C4.20368 4.8125 3.89587 4.5047 3.89587 4.125C3.89587 3.7453 4.20368 3.4375 4.58337 3.4375H8.47921V2.75Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.71995 7.28272C5.74574 7.0506 5.94193 6.875 6.17548 6.875H15.8246C16.0581 6.875 16.2543 7.0506 16.2801 7.28272L16.4636 8.93395C16.7943 11.9103 16.7943 14.9142 16.4636 17.8906L16.4455 18.0532C16.3251 19.1372 15.4849 20.0016 14.4048 20.1528C12.146 20.469 9.85411 20.469 7.5953 20.1528C6.51513 20.0016 5.67498 19.1372 5.55454 18.0532L5.53647 17.8906C5.20576 14.9142 5.20576 11.9103 5.53647 8.93395L5.71995 7.28272ZM9.85421 10.45C9.85421 10.0703 9.5464 9.76249 9.16671 9.76249C8.78701 9.76249 8.47921 10.0703 8.47921 10.45V16.8667C8.47921 17.2464 8.78701 17.5542 9.16671 17.5542C9.5464 17.5542 9.85421 17.2464 9.85421 16.8667L9.85421 10.45ZM13.5209 10.45C13.5209 10.0703 13.2131 9.76249 12.8334 9.76249C12.4537 9.76249 12.1459 10.0703 12.1459 10.45V16.8667C12.1459 17.2464 12.4537 17.5542 12.8334 17.5542C13.2131 17.5542 13.5209 17.2464 13.5209 16.8667V10.45Z" fill="white"/>
          </svg>
        </button>
      </div>
      
      <div className='box-palette-colors' onClick={() => changeCurrentPalette(likedColors)}>
        {
          likedColors &&
          likedColors.map((color, index) => {
            if (!color) {
              return <div key={index} className='saved-circle striped-bg-small'></div>
            }
            return <div key={index} style={{ backgroundColor: color }} className='saved-circle'></div>
          })
        }
      </div>
    </div>
  )
}

export default BoxPalette