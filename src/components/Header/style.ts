import styled from "styled-components";

interface props{
    state:boolean
}

export const ContainerHeader = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));

    min-height: 400px;

    position: relative;
    
    backdrop-filter: blur(20px);
  
`

export const TextContainer  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

     width: 100%;
    height: 50vh;
    max-width: 400px;
    max-height: 400px;

    margin: auto;
    
`

export const TitleH1 = styled.h1<props>`
    
    font-size: 4rem;
    
    margin:0 0 10px 0;
    color: ${props=>{
        if(props.state){
            return "green"
        }else{
            return "transparent"
        }
    }};
   
    transition: all 1s linear;
   
`
export const TextP = styled.p<props>`
    font-size: 2rem;
 
    color: ${props=>{
        if(props.state){
            return "black"
        }else{
            return "transparent"
        }
    }};
     
    transition: all 1s linear;
`

export const ContainerImage = styled.div`
    overflow: hidden;
    position: relative;
      width: 100%;
    height: 50vh;
    max-width: 400px;
    max-height: 400px;

    
`

export const ImageHeader = styled.img<props>`
    
    position: absolute;
    left: ${props=>{
        if(props.state){
            return "-10%"
        }else{
            return "100%"
        }
    }};
    top: 0;
    height: 130%;
    transition: left 1s ease-in-out,filter 0.3s linear;
    backdrop-filter: invert(80%);
`