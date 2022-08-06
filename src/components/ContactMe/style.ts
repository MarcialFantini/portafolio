import styled from "styled-components";

export const ContainerContact = styled.div`
    width: 95%;
    height: auto;

    margin: 120px auto;

`

export const TitleContact = styled.h1`
    font-size: 2.4rem;
    color: black;
    background: white;
    border-radius: 10px;
   
    text-align: center;
    padding: 10px;
`

export const ContainerSocial = styled.div`
width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 40px;
    
    margin: auto;
    
`
export const A = styled.a`
width:30%;
    height: auto;
    max-width: 200px;
    cursor: pointer;

`


export const Image = styled.img`
    width:30%;
    height: auto;
    max-width: 200px;
    cursor: pointer;

`
interface Card {
    isView:boolean
}


export const Card = styled.div<Card>`
    background: ${props=>{
        if(props.isView){
            return 'gold'
        }else{
            return "whitesmoke"
        }
    }};

    transform: scale(${props=>{
        if(props.isView){
            return "1"
        }else{
            return "0.4"
        }
    }});
    padding: 20px;
    border-radius: 10px;
    transition: all 1s;

`