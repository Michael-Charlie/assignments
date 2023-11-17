import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from "./components/Header"
import Navbar from './components/Navbar'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import Footer from './components/Footer'
import Data from './Data'

function App() {
  const blogs = Data.map(item => {
    return (
      <BlogPost
        {...item}
      />
    )
  })
  return (
    <div className="container">
        <Navbar />
      <Header />
      <BlogList />
        <section className = "blogs--section">{blogs}</section>
      <Footer />
    </div>
  )
}

export default App
