
import { A, Card, ContainerContact, ContainerSocial, Image, TitleContact } from './style'
import LinkedIn from '../../assets/linkedin.png'
import Gmail from '../../assets/gmail.png'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'



export const ContactMe = () => {
  const [states,setStates] = useState({
    cards:false
})

  const options ={
    threshold:1
  }
  const {ref,inView} = useInView(options)
  
  useEffect(()=>{
    if(inView && !states.cards){
      setStates({...states,
      cards:true
      })
    }
  },[inView])
  return (
    <ContainerContact>
        <TitleContact>
            Háblame por estos medios! 
        </TitleContact>
        <ContainerSocial>
         
          <Card
          isView={states.cards}
          ref={ref}
          >
            <A
              

            href='https://www.linkedin.com/in/marcial-domingo-fantini-87b9b920a/'
            ><Image src={LinkedIn} alt="LinkedIn"/></A>
            <h1>Marcial Domingo Fantini</h1>
          </Card>
           <Card
           isView={states.cards}
           >
            <A
            href='mailto:marcialfantini@gmail.com'
            ><Image 
            
            src={Gmail} alt="Gmail"/></A>
            <h1>
              marcialfantini@gmail.com
            </h1>
           </Card>
        
        </ContainerSocial>
    </ContainerContact>
  )
}
