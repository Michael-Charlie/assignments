import { useState } from 'react'
import './App.css'
import Box from './Box'
import ColorChoice from './ColorChoice'

function App() {

  const [color, setColor] = useState([
    {
      title: "Color 1",
      value: "#fbd2c8",
      name: ""
    },
    {
      title: "Color 2",
      value: "#df536c",
      name: ""
    }
  ])
  

  const mapColor = color.map(item => {
    return (
      <ColorChoice
      item = {item}
      updateColor = {updateColor}
      />
    )
  })


  function updateColor(title, updatedColor) {
    setColor(prevColor => {
      return prevColor.map(item => {
        if (item.title === title){
          return {...item, ...updatedColor}
        }
        return item
      })
    })
  }
  
  const [degree, setDegree] = useState(50)

  const colorValues = color.map(color => color.value)

  let style = {
  background: `linear-gradient(${degree}deg, ${colorValues})`,
  width: "100px",
  height: "100px"
  }

  function handleDegree(e) {
    setDegree(e.target.value)
  }

  let codeText = `background: linear-gradient(${degree}deg, ${colorValues}; -moz-background: linear-gradient(${degree}deg, ${colorValues});`
  
  return (
  <div>
    <Box>
      <div style={style}>

      </div>
      <textarea cols="30" rows="10" readOnly value={codeText}></textarea>
    </Box>

      <Box>
        <h2>Options</h2>
        {mapColor}
        <input type="number" value={degree} onChange={handleDegree}/>
      </Box>
  </div>
  )
}

export default App
