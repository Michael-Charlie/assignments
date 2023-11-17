import React, {useState} from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState(true)

  function changeColor() {
    setColor(prevState => !prevState)
  }

//   const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ])

// setPeople(prevPeople => {
// 	return [
//      ...prevPeople, 
//      {
//         firstName: "Jane", 
//         lastName: "Doe"
//      }
//   ]
// })

// const [colors, setColors] = setState(["pink", "blue"])

// // explicit return 
// setColors(prevColors => {
// 	return [...prevColors, "green"]
// })

// // implicit return
// setColors(prevColors => [...prevColors, "green"])

// const [countObject, setCountObject] = setState({
// 	count: 0
// })

// // explicit return 
// setCountObject(prevState=> {
// 	return {
// 		count: prevState.count + 1
// 	}
// })

// // implicit return 
// setCountObject(prevState=> ({count: prevState.count + 1}))

// const [person, setPerson] = useState({
// 		firstName: "John",
// 		lastName: "Smith"
// })

// setPerson(prevState => ({
//     ...prevState,
//     age: 30
// }))


// What’s wrong with the following state update?
// Answer: 1. Previous state has been overwritten, and
// 2. Data type has changed from an array to a string

// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")

  return (
    <div>

    <div onClick={changeColor}>
    <button >{color ? "Pink" : "Blue"}</button>
    </div>

    <div>
      {/* <h2>{people.firstName} {people.lastName}</h2> */}
    </div>

    </div>
  )
}

export default App
