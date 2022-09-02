import React from 'react'
import { Cube } from '../Cube'
import './style.css'

export const Creativity = () => {
  return (
    <div className='container'>
        <div className='containerText'>
            <h1>Creatividad</h1>
            <p>Soy creativo y me encanta hacer animaciones!</p>
        </div>
        <div>
            <Cube></Cube>
        </div>
    </div>
  )
}
