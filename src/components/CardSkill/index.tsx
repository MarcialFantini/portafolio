import React from 'react'
import { CardSkillProp } from '../../Interfaces/interfaces'
import { ContainerCardSkill, TitleSkill } from './style'

export const CardSkill = ({title,
    color,
    src}:CardSkillProp) => {
  return (
    <ContainerCardSkill
        src={src}
        color={color}
    >
        <TitleSkill>
            {title}
        </TitleSkill>
    </ContainerCardSkill>
  )
}
