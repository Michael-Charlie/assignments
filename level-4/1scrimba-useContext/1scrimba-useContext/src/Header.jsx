import React, { useContext } from 'react';
import {ThemeContext} from './themeContext';

// Note the above ThemeContext is wrapped in curly braces {} because we are no longer using a default export. (That's the explanation given in the scrimba video - not entirely sure what it means)

function Header(props) {
    
    // const context = useContext(ThemeContext)
    // In the video they destructured context like 
    // const {color} = useContext(ThemeContext) to pull just the color value from useState(?) Just want to confirm this.
    // Everywhere {context.color} is being used, you can remove context and just call {color} from App.jsx

    const {color} = useContext(ThemeContext)
    
    return (
        <div className={`${color}-theme`}>
            <h2>Theme Context</h2>
            <h3>You are currently using {color} mode</h3>
        </div>
    );
}

export default Header;