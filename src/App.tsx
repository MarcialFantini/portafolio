import { useState } from 'react'

import './App.css'
import { AboutMe } from './components/AboutMe'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
      <Navbar></Navbar>
      <Header/>
      <AboutMe></AboutMe>
      <Services></Services>
      </div>
     
   
  )
}

export default App
