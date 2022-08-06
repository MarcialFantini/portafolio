import { useState } from 'react'

import './App.css'
import { AboutMe } from './components/AboutMe'
import { ContactMe } from './components/ContactMe'
import { ContainerFooter } from './components/Footer/style'
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
      <Services></Services>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <ContainerFooter></ContainerFooter>
      
      </div>
     
   
  )
}

export default App
