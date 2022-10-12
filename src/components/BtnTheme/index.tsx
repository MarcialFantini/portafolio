import React from 'react'

import theme from '../../assets/theme.png'
import { Btn, ContainerBtnTheme, Img } from './style'

export const BtnTheme = (props:{callback:()=>void}) => {
  return (
    <ContainerBtnTheme>
        <Btn>
            <Img 
            onClick={props.callback}
            src={theme} alt="" />
        </Btn>
    </ContainerBtnTheme>
  )
}
