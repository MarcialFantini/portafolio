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
          <MarcoAbsolute
          top={state?"-35px":"-200%"}
          >
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
           Desarrollador Front End experiencia en creación de páginas responsivas, utilizando tecnologías web como Html5, Css3, Javascript, Git, ReactJs, Redux Js, Typescript y Styled-components. Experiencias maquetando y animando diseños para mejor experiencia de usuario. Habilidad de consumos de servicios Rest y promesas asíncronas por protocolo http.
          </Text>
          
        </TextContainer>
    
    </ContainerAboutMe>
  )
}
