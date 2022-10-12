import { useState } from 'react'

import './App.css'
import { AboutMe } from './components/AboutMe'
import { BigColors } from './components/BigColors'
import { ColorsContainer } from './components/BigColors/styled'
import { BtnTheme } from './components/BtnTheme'
import { ContactMe } from './components/ContactMe'
import { Creativity } from './components/Creativity'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'
import { Skills } from './components/Skills'


function App() {
  const [activeTheme, setActiveTheme] = useState(true)

  const handlerActiveTheme = ()=>{
    setActiveTheme(!activeTheme)
  }

  const colorMain = "#E9EBF2"
  const colorSecondary = "#34373f"
  return (
   
      
      <div

      className='TransitionsAll'
      style={{
        background:activeTheme?colorMain:colorSecondary
        
      }}
      >
      <BtnTheme
     
      callback={handlerActiveTheme}
      ></BtnTheme>
      <Navbar
      
      active={activeTheme}
      ></Navbar>
      <BigColors
        colors={["rgb(235,202,200,0.5)","rgb(233,180,244,0.5)"]}
        />
      <Header
      active={activeTheme}
      />
      
      <AboutMe
      
      ></AboutMe>
      <Creativity></Creativity>
      <Services
     
      ></Services>
      <Skills></Skills>
      <ContactMe></ContactMe>
      <Footer></Footer>
        
        </div>
      
   
     
   
  )
}

export default App
