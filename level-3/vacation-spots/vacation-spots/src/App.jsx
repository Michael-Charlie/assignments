import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'
import Data from './Data'

function App() {
  const vacations = Data.map(spot => {
    return (
      <Card 
      {...spot}
      />
        
    )
  })
  return (
    <div>

      <section>
        {vacations}
      </section>

    </div>
  )
}

export default App
