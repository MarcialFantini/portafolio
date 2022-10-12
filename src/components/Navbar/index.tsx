import React from 'react'
import { ContainerNavbar, IconPerson, TitleNav } from './style'

import icon from '../../assets/imagenes/MF.png'

export const Navbar = (props:{active:boolean}) => {

  const colorMain = "#E9EBF2"
  const colorSecondary = "#34373f"
  return (
    <ContainerNavbar
    className='TransitionsAll'
    style={{
      background:props.active?colorMain:colorSecondary,
      
    
    }}
    >
        <IconPerson
        src={icon}
        />
        <TitleNav
        style={{color:!props.active?colorMain:colorSecondary}}
        >
          Marcial Fantini
        </TitleNav>
        
    </ContainerNavbar>
  )
}
