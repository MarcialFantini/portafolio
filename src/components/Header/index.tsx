import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Box, ContainerImg, ContainerText, HeaderContainer, Img, Span, TitleH2 } from './style'

import Bueno from '../../assets/bueno.gif'


export const Header = () => {
   

    

  return (
    <HeaderContainer>
        <ContainerImg
  
        >
            <Img
            src={Bueno}
            >
            </Img>

            
            
        </ContainerImg>
        <ContainerText>
            <Box>
            <TitleH2>
                Hola
                Soy marcial!
            </TitleH2>
            </Box>
            <Box>
            <TitleH2>
                <span>Hola!</span>
                Soy marcial!
            </TitleH2>
            </Box>
        </ContainerText>
    </HeaderContainer>
  )
}
