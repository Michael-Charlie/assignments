import React, {useState} from "react"

const ThemeContext = React.createContext()

// Moving provider definition into our themeContext file so that we're not mixing our context logic with the app component and so that we can use it in multiple parts of our app.

function ThemeContextProvider(props) {
const [color, setColor] = useState("dark")

const toggleTheme = () => {
  setColor(prevColor => prevColor === "dark" ? "light" : "dark")
}
    return (
    <ThemeContext.Provider value={{
      color: color,
      toggleTheme: toggleTheme
    }}>
        {props.children}
    </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}