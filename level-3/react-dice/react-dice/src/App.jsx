import { useState } from 'react'
import './App.css'
import DiceBox from './DiceBox'

function App() {
  const numbers = [1, 2, 5, 6, 3, 4, 7, 10, 47]
  const [number, setNumber] = useState(0)
  function getRandomNum() {
    const index = Math.floor(Math.random() * (numbers.length + 1))
    setNumber(index)
  }
  console.log(number)
  return (
    <div>

    <DiceBox number={numbers[number]} randomize={getRandomNum} />

    </div>
  )
}

export default App
