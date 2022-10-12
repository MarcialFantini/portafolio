import React from 'react'
import { Color, ColorsContainer } from './styled'

interface props{
    size?:number
    colors:string[]
}

export const BigColors = (props:props) => {
  console.table(props.colors)

  return (
    <ColorsContainer>
      <Color 
      color={props.colors[1]}
      position={1}
      />
      <Color 
      color={props.colors[0]}
      position={2}
      />
      
    </ColorsContainer>
  )
}
