import React, { useEffect, useState } from 'react'

import { ContainerAboutMe, Image, Marco, MarcoAbsolute, Text, TextContainer, TitleH } from './style'
import person from '../../assets/person.svg'
import { useInView } from 'react-intersection-observer'

export const AboutMe = () => {
  const [state,setState] = useState(false)
  const {inView,ref} = useInView({threshold:0.1}) 

  useEffect(()=>{
    if(inView && !state){
      setState(true)
    }
  },[inView])

  return (
    <ContainerAboutMe
    
   
    >
      
        <Marco
       
        >
          <MarcoAbsolute>
            <Image 
            
            src={person}>
              
          </Image>
          </MarcoAbsolute>
        </Marco>
        <TextContainer
        inView={state}
          ref={ref}
        >
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
