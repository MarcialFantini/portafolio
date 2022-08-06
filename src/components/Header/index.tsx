import React, { useEffect, useState } from 'react'
import { ContainerHeader, ContainerImage, ImageHeader, TextContainer, TextP, TitleH1 } from './style'
import { useInView } from 'react-intersection-observer'

import person from '../../assets/person.svg'

export const Header = () => {
  const {
    inView,
    ref
  } = useInView({threshold:1})
  const [state,setState]= useState(false)
  useEffect(()=>{
    if(inView && !state){
      setState(true)
    }
  })

  return (
    <ContainerHeader>
        <TextContainer>
            <TitleH1
            ref={ref}
            state={state}
            >
              Soy Marcial
            </TitleH1>
            <TextP
            state={state}
            >
                Front End Developer
            </TextP>
        </TextContainer>
        <ContainerImage>
          <ImageHeader
          state={state}
          src={person}>

          </ImageHeader>
        </ContainerImage>
    </ContainerHeader>
  )
}
