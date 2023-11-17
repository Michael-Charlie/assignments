import { useState, useContext } from 'react'
import './App.css'
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"
import {ThemeContextProvider} from "./themeContext"

function App() {


  return (
<div>
    <ThemeContextProvider>
      <Navbar />
      <MainContent />
      <Footer />
    </ThemeContextProvider>
    
</div>
  )
}

export default App
