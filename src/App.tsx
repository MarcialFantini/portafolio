import { useState } from 'react'

import './App.css'
import { AboutMe } from './components/AboutMe'
import { ContactMe } from './components/ContactMe'
import { Creativity } from './components/Creativity'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Skills } from './components/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
      <Navbar></Navbar>
      <Header/>
      <AboutMe></AboutMe>
      <Creativity></Creativity>
      <Services></Services>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <Footer></Footer>
      
      </div>
     
   
  )
}

export default App
