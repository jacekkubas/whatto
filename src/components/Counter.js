import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  }

  return (
    <div style={{textAlign: 'center', fontSize: '40px', color: "#fff"}}>
      <div id="counter">{number}</div>
      <button type="button" onClick={handleClick}>click + 1</button>
    </div>
  )
}

export default Counter