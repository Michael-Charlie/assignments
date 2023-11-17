import React, {useContext} from "react";
import { ThemeContext } from "./themeContext";

function Main(props) {
    const {color, toggleTheme} = useContext(ThemeContext)
    return (
        <div className={`${color}-theme`}>
            <h1>Click the button to toggle {`${color === "dark" ? "light" : "dark"} theme`}</h1>
            <button 
            className={`${color}-theme`}
            onClick={toggleTheme}
            >Toggle Theme</button>
        </div>
    )
}

export default Main