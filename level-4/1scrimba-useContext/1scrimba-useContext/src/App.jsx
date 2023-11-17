import { useState, useContext } from 'react'
import './Style.css'
import Button from './Button';
import Header from './Header';
import {ThemeContextProvider} from "./themeContext"

function App() {
  // color, setColor useState moved to themeContext
  // toggleTheme function moved to themeContext
// const [color, setColor] = useState("dark")

// const toggleTheme = () => {
//   setColor(prevColor => prevColor === "dark" ? "light" : "dark")
// }

  return (
<div>
    <ThemeContextProvider>
        <Header />
        <Button />
    </ThemeContextProvider>

</div>
  )
}

export default App

  // This was in the App() return() div. It's now been moved to themeContext
{/* <ThemeContext.Provider value={{
  color: color,
  toggleTheme: toggleTheme
}}>
    <Header/>
    <Button/>
</ThemeContext.Provider> */}