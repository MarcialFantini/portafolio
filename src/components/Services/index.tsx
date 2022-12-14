import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { CardProp } from '../../Interfaces/interfaces'
import { Card } from '../Card'
import { ContainerServices, ContainerText, Divider, ServicesCards, TextServices, TitleServices } from './style'
import CodeIcon from '../../assets/imagenes/codeIcon.png'


const List:CardProp[] = [
  {
    title:"Desarrollar software",
    text:"Puedo desarrollar la parte visual y estructural de un site o app web, además de mantener y optimizar sitios .",
    srcIcon:CodeIcon,
    color:"rgba(255,152,0,.8)",
    
  },
  {
    title:"Soluciones de calidad",
    text:"Voy a facilitar la navegación del usuario y mejorar la usabilidad e interacción con el sitio en cualquier dispositivo.",
    srcIcon:CodeIcon,
    color:"rgba(138,74,243,.8)",
    
  },
  {
    title:"Entregas de calidad",
    text:"Agregar responsive a tu proyecto para que se pueda ver en la mayorías de plataformas.",
    srcIcon:CodeIcon,
    color:"rgba(233,30,99,0.8)",
    
  },
  // {
  //   title:"Rendimiento",
  //   text:"Hacer que tu pagina web tenga un buen rendimiento al cargarse en los navegadores. ",
  //   srcIcon:"https://cdn.icon-icons.com/icons2/2064/PNG/512/code_coding_programming_browser_icon_124774.png",
  //   color:"rgba(3,169,244,0.8)",
    
  // }
]

export const Services = () => {
  const [isView,setIsView] = useState(false)
  const {inView,ref:services} = useInView({
    threshold:1
  })
  useEffect(()=>{
    if(inView && !isView){
      setIsView(true)
    }
  },[inView])
  return (
    <ContainerServices>
        <ContainerText>
            <TitleServices
            ref={services}
            isVisible={isView}
            >
                Services
            </TitleServices>
            <Divider
            isVisible={isView}
            ></Divider>
            <TextServices
            isVisible={isView}
            >
                Estos son algunas de las funciones en que puedo realizar
                en tus proyectos:
            </TextServices>
        </ContainerText>
        <ServicesCards>
            {List.map((item:CardProp)=>{
              return <Card
              key={item.title}
              title={item.title}
              text={item.text}
              srcIcon={item.srcIcon}
     
              color={item.color}
              />           
            })}
        </ServicesCards>
    </ContainerServices>
  )
}
