import React, { useEffect, useRef, useState } from 'react'

const Circle = ({ id, activeCircle, setActiveCircle, activeColor }) => {
  const [changeColor, setChangeColor] = useState(undefined);
  const circleDiv = useRef();

  if (activeCircle === id) {
    if (changeColor === undefined) {
      setChangeColor('#f00');
    }
    circleDiv.current.style.backgroundColor = changeColor;
  }
  
  // Set changeColor to undefined when palette is saved
  if (activeCircle === undefined && changeColor) {
    setChangeColor(undefined);
  }
  
  // Change circle color when active color changes and circle is selected
  useEffect(() => {
    if (activeCircle === id) {
      setChangeColor(activeColor)
    }
    // eslint-disable-next-line
  }, [activeColor])

  return (
    <div ref={circleDiv}
    className={'circle ' + (activeCircle === id ? 'big-c' : 'small-c') + ((activeCircle === id || changeColor ) ? '' : ' striped-bg')} 
    onClick={() => setActiveCircle(id)}></div>
  )
}

export default Circle