import styled from "styled-components";

interface propContainer{
    src:string,
    color:string
    state:boolean
}

export const ContainerCardSkill = styled.div<propContainer>`
    border-radius: 10px;

    width: 320px;
    height: 320px;

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
    font-size: 5rem;
    text-decoration: underline ;
   
    
  
`

