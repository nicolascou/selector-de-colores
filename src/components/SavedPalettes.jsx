import React from 'react'
import BoxPalette from './BoxPalette'

const SavedPalettes = ({ reloadStorage, savedPalettes }) => {
  return (
    <div className='saved-palettes-wrapper'>
      <h2>Saved palettes</h2>
      <div className='saved-palettes-container'>
        {
          savedPalettes &&
          savedPalettes.map(({paletteName, likedColors}) => (
            <BoxPalette key={paletteName} paletteName={paletteName} likedColors={likedColors} reloadStorage={reloadStorage} />
          ))
        }
      </div>
    </div>
  )
}

export default SavedPalettes