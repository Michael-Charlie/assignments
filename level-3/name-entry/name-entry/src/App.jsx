import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const innit = {fName: "", lName: ""}
function App() {
const [nameEntry, setNameEntry] = useState(innit)

const [nameList, setNameList] = useState([])

console.log(nameEntry)

function handleChange(event){
  const {name, value} = event.target
  setNameEntry(prevNameEntry => ({
    ...prevNameEntry,
    [name]: value
  }))
}

function handleSubmit(){
  setNameList(prevNameList => [...prevNameList, nameEntry])
  setNameEntry(innit)
}
const saveName = nameList.map(name => {
  return (
    <li>{name.fName + " " + name.lName}</li>
  )
})
  return (
 <div>

    <input 
      type="text" 
      onChange={handleChange}
      name="fName"
      value={nameEntry.fName}
    />
    <input 
      type="text" 
      onChange={handleChange}
      name="lName"
      value={nameEntry.lName}
    />
    <h1>Hello, {nameEntry.fName} </h1>
    <button onClick={handleSubmit}>Submit</button>
    <ol>
      {saveName}
    </ol>

 </div>
  )
}

export default App
