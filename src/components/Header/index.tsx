import React from 'react'
import { ContainerHeader, ContainerImage, ImageHeader, TextContainer, TextP, TitleH1 } from './style'

import person from '../../assets/person.svg'

export const Header = () => {
  return (
    <ContainerHeader>
        <TextContainer>
            <TitleH1>
              Soy Marcial
            </TitleH1>
            <TextP>
                Front End Developer
            </TextP>
        </TextContainer>
        <ContainerImage>
          <ImageHeader src={person}>

          </ImageHeader>
        </ContainerImage>
    </ContainerHeader>
  )
}
