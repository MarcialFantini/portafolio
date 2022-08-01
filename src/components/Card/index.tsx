import React from 'react'
import { CardProp } from '../../Interfaces/interfaces'
import { ContainerCard, Filter, Icon, TextContainer, TextP, TitleH1 } from './style'





export const Card = 
({title,
    text,
    srcIcon,
    color,
    
}:CardProp) => {
  return (
    <ContainerCard
    color={color}
    
    >
        <Filter
        color={color}
        ></Filter>
        <Icon
        src={srcIcon}
        />
        <TextContainer>
            <TitleH1>
                {title}
            </TitleH1>
            <TextP>
                {text}
            </TextP>
        </TextContainer>
    </ContainerCard>
  )
}
