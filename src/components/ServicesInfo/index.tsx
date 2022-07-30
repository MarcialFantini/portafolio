import React from 'react'
import { Card, ContainerCards, ContainerServices, Image, Picture, TextP, TitleH4 } from './style'
import code1 from '../../assets/imagenes/code1.jpg'
import code2 from '../../assets/imagenes/code2.jpg'
import code3 from '../../assets/imagenes/code3.jpg'


export const ServicesInfo = () => {
  return (
    <ContainerServices>
        <TitleH4>
            En que te puedo ayudar?
        </TitleH4>

        <ContainerCards>
            <Card>
                <Picture>
                    <Image src={code1} />
                </Picture>
                <TextP>
                    Maquetar tus proyectos usando las ultimas herramientas del mercado como ReactJS. 
                </TextP>
                
            </Card>
            <Card>
                <Picture>
                    <Image src={code2} />
                </Picture>
                <TextP>
                    Crear e implementar nuevas funcionalidades que necesitas en tu proyectos.
                </TextP>
                
            </Card>
            <Card>
               <Picture>
                    <Image src={code3} />
                </Picture>
                <TextP>
                   Revisar tu código en busca de errores y entregarte un código de muy buena calidad.
                </TextP>
                
            </Card>
        </ContainerCards>

    </ContainerServices>
  )
}
