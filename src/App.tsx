import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { ServicesInfo } from './components/ServicesInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <ServicesInfo></ServicesInfo>
      <Header></Header>
     
    </div>
  )
}

export default App
