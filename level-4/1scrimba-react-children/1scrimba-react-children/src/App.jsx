import { useState, useEffect } from 'react'
import './App.css'
import CTA from "./CTA"

function App() {


  return (
    // Figure out what he meant by adding props to the CTA to position the first CTA component to the right of the webpage. I couldn't figure it out.
      <div>
        <CTA>
          <h1>blah blah</h1>
          <button>blah blah btn</button>
        </CTA>
        <br />
        <CTA>
          <form action="">
            <input type="text" placeholder="aaaaaaaaa" />
            <br />
            <button>aaaaaaa</button>
          </form>
        </CTA>
      </div>
  )
}

export default App
