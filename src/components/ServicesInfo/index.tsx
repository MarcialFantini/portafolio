import React from 'react'
import { Card, ContainerCards, ContainerServices, Image, Picture, TextP, TitleH4 } from './style'

export const ServicesInfo = () => {
  return (
    <ContainerServices>
        <TitleH4>
            En que te puedo ayudar?
        </TitleH4>

        <ContainerCards>
            <Card>
                <Picture>
                    <Image src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg" />
                </Picture>
                <TextP>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae pariatur perferendis debitis ipsum non. Ab eaque doloremque officiis pariatur illo, delectus veniam deserunt cumque nemo odio, animi id quod.
                </TextP>
                
            </Card>
            <Card>
                <Picture>
                    <Image src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg" />
                </Picture>
                <TextP>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae pariatur perferendis debitis ipsum non. Ab eaque doloremque officiis pariatur illo, delectus veniam deserunt cumque nemo odio, animi id quod.
                </TextP>
                
            </Card>
            <Card>
               <Picture>
                    <Image src="https://cdn.pixabay.com/photo/2022/07/25/15/18/cat-7344042_960_720.jpg" />
                </Picture>
                <TextP>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae pariatur perferendis debitis ipsum non. Ab eaque doloremque officiis pariatur illo, delectus veniam deserunt cumque nemo odio, animi id quod.
                </TextP>
                
            </Card>
        </ContainerCards>

    </ContainerServices>
  )
}
