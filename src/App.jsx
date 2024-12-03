import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import './App.css'

function App() {

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  )

}

export default App
