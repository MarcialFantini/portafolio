import React from 'react'
import { CardSkill } from '../CardSkill'
import { ContainerCards , ContainerSkills, TitleSkills } from './style'


export const Skills = () => {
  return (
    <ContainerSkills>
        <TitleSkills>
            Mis habilidades técnicas son:
        </TitleSkills>
        <ContainerCards>
            <CardSkill
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            color='rgba(3,169,244,.8)'
            title='ReactJs'
            />
            <CardSkill
            src='https://mirayhazlo.com/wp-content/uploads/2018/09/Html5_dise%C3%B1o_web-1.png'
            color='rgba(244,67,54,.8)'
            title=''
            />
            <CardSkill
            src='https://programandoointentandolo.com/wordpress/wp-content/uploads/2017/10/css3-logo.svg'
            color='#281bd8cc'
            title=''
            />
            <CardSkill
            src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
            color='#f4d003cc'
            title=''
            />
            <CardSkill
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
            color='#c01af3cc'
            title=''
            />
            <CardSkill
            src='https://avatars.githubusercontent.com/u/18133?s=200&v=4'
            color='#050101cc'
            title=''
            />
        </ContainerCards>
    </ContainerSkills>
  )
}
