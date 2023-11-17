import React from "react";
import { useState } from "react";

function ColorChoice(props) {

    const {item, updateColor} = props

    const [inputColors, setInputColors] = useState({
        title: item.title,
        value: item.value,
        name: item.name
    })
    
    function handleChange(e) {
        const {name, value} = e.target
        setInputColors(prevInputColors => {
            return {
                ...prevInputColors,
                [name]: value
            }
        })
        updateColor(item.title, inputColors)
    }

    return (
        <div>
            <h3>{item.title}</h3>
            <input type="color" value={item.value} name="value" onChange={handleChange} />
        </div>
    )
}

export default ColorChoice