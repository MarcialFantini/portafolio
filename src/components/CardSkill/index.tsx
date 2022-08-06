import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CardSkillProp } from '../../Interfaces/interfaces'
import { ContainerCardSkill, TitleSkill } from './style'

export const CardSkill = ({title,
    color,
    src}:CardSkillProp) => {

const [state,setState] = useState(false)
  const {inView,ref} = useInView({threshold:1}) 

  useEffect(()=>{
    if(inView && !state){
      setState(true)
    }
  },[inView])

  return (
    <ContainerCardSkill
    ref={ref}
        src={src}
        color={color}
        state={state}
    >
        <TitleSkill>
            {title}
        </TitleSkill>
    </ContainerCardSkill>
  )
}
