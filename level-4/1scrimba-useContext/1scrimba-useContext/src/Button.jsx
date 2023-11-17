import React, {useContext} from 'react';
import {ThemeContext} from './themeContext';

// Note the above ThemeContext is wrapped in curly braces {} because we are no longer using a default export. (That's the explanation given in the scrimba video - not entirely sure what it means)

function Button(props) {

    // const context = useContext(ThemeContext)
    // Previously we had context.color and context.toggleTheme for the button but we destructured it to pass in the props color and toggle theme from App.jsx

    const {color, toggleTheme} = useContext(ThemeContext)
    
    return (
        <button 
        onClick={toggleTheme} 
        className={`${color}-theme`}        
        >
        Change Theme
        </button>
    );
}

export default Button;