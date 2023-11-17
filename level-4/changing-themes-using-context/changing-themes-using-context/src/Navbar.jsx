import React, {useContext} from "react";
import { ThemeContext } from "./themeContext";

function Navbar(props) {
    const {color} = useContext(ThemeContext)
    return (
        <div className={`${color}-theme`}>
            <ul className="navbar">
                <li className="nav--home">Home</li>
                <li className="nav--about">About</li>
                <li className="nav--contact">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar