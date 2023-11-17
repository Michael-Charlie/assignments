import React from "react";
import { useState } from "react";

export default function DiceBox(props) {

    
    return (
        <div>

        <h3>Generate random number: {props.number}</h3>
        <button onClick={props.randomize}>Randomize</button>

        </div>
    )
}