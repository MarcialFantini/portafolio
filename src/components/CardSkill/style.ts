import styled from "styled-components";

interface propContainer{
    src:string,
    color:string
    state:boolean
}

export const ContainerCardSkill = styled.div<propContainer>`
    border-radius: 10px;
    min-height: 250px;
    width: 100%;
    height: 100%;

    background-image: url(${props=>props.src});
    background-color: ${props=>props.color};
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    
    display: flex;
    align-items: center;
    justify-content: center;


    transform: scale(${props=>{
        if(props.state){
            return "1"
        }else{
            return "0.5"
        }
    }});
    transition: all 1s;
`

export const TitleSkill = styled.h1`
    color: black;
    font-size: 3rem;
    text-decoration: underline ;
   
    
  
`

