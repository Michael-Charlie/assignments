import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("")
  // const [changeColor, setChangeColor] = useState("")

  function changeColor() {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setColor(data.new_color)
    })
  }

  useEffect(function () {
    changeColor()
  }, [])
  

  return (
    <div style={{backgroundColor: `#${color}`}}>
      <h2>The color is {color}</h2>
      <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default App