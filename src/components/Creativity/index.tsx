import React from 'react'
import { Cube } from '../Cube'
import './style.css'

export const Creativity = () => {
  return (
    <div className='container'>
        <div className='containerText'>
            <h1>Creatividad</h1>
            <p>Cuento con una espectacular creatividad para resolver los problemas que tengas.</p>
        </div>
        <div>
            <Cube></Cube>
        </div>
    </div>
  )
}
