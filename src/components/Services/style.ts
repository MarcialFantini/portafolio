import styled from "styled-components"

export const ContainerServices = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 80%;
margin: auto;
    

`
export const ContainerText = styled.div`

height: auto;
margin: auto;
`

export const TextServices = styled.p`
    font-size: 2.4rem;
    color: black;
    background: white;
    border-radius: 10px;
    padding: 10px;
`

export const TitleServices = styled.h1`
    font-size: 4rem;
    color: green;
    margin: 10px;
    text-align: start;
    background: white;
    border-radius: 10px;
    padding: 20px;
`

export const Divider = styled.div`
    width: 60%;
    height: 20px ;

    background: gold;
    box-shadow: gold 0 0 10px 1px,
    gold 0 0 10px 1px inset;
    ;
`

export const ServicesCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(270px,1fr));
    width: 100%;
    height: auto;
    margin: 30px auto;
    gap: 50px;
   justify-items: center;
`
