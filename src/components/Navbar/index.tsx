import React from 'react'
import { ContainerNavbar, IconPerson, TitleNav } from './style'

import icon from '../../assets/imagenes/MF.png'

export const Navbar = () => {
  return (
    <ContainerNavbar>
        <IconPerson
        src={icon}
        />
        <TitleNav>
          Marcial Fantini
        </TitleNav>
        
    </ContainerNavbar>
  )
}
