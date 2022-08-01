import React from 'react'

import { ContainerAboutMe, Image, Marco, MarcoAbsolute, Text, TextContainer, TitleH } from './style'
import person from '../../assets/person.svg'

export const AboutMe = () => {
  return (
    <ContainerAboutMe>
      
        <Marco>
          <MarcoAbsolute>
            <Image src={person}>

          </Image>
          </MarcoAbsolute>
        </Marco>
        <TextContainer>
          <TitleH>
            Sobre mi
          </TitleH>
          <Text>
            Soy un desarrollador de codigo Front End. 
           Podre hacer tus maquetaciones, animaciones 
            y funcionalidades graficas que necesitas en tu 
            proyecto.
          </Text>
          
        </TextContainer>
    
    </ContainerAboutMe>
  )
}
