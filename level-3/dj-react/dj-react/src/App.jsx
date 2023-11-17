import { useState } from 'react'
import boxes from './boxes'
import './App.css'
import React from 'react'
import Buttons from './buttons'
import Square from './square'

function App(props) {
  const [squares, setSquares] = React.useState(boxes)

  const [colors, setColors] = React.useState(["white", "white", "white", "white"]
)

function smallDj() {
  setColors(prevColors => prevColors[0] === "white" ? ["black", "black", "black", "black"] : ["white", "white", "white", "white"])
}

function partyDj() {
  setColors(prevColors => ["purple", "purple", prevColors[2], prevColors[3]])
}

function proDj() {
  setColors(prevColors => [prevColors[0], prevColors[1], "blue", prevColors[3]] )
}

function proDj2() {
  setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], "blue"] )
}

function bigDj() {
  setColors(prevColors => ["red", prevColors[1], prevColors[2], prevColors[3]])
}
function bigDj2() {
  setColors(prevColors => [prevColors[0], "yellow", prevColors[2], prevColors[3]])
}
function bigDj3() {
  setColors(prevColors => [prevColors[0], prevColors[1], "orange", prevColors[3]])
}
function bigDj4() {
  setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], "pink"])
}
  return (
    <div className="flexcontainer">
      <div className="grid">

      <div className="box1">
    <Square square={squares} color={colors[0]} btnText="Small Time DJ" onClick={smallDj} />
      </div>

    <div>
    <Square onClick={partyDj} square={squares} color={colors[1]} btnText="Party DJ" />
    </div>
    <div>
    <Square onClick={proDj} square={squares} color={colors[2]} btnText="Professional DJ" />
    <Buttons onClick={proDj2} btnText="Professional DJ" />
    </div>

    <div>
    <Square onClick={bigDj} square={squares} color={colors[3]} btnText="Big Time DJ" />

    <Buttons onClick={bigDj2} btnText="Big Time DJ" />
    <Buttons onClick={bigDj3} btnText="Big Time DJ" />
    <Buttons onClick={bigDj4} btnText="Big Time DJ" />
    </div>
      </div>

    </div>
  )
}

export default App
