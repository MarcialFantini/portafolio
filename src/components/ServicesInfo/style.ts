import styled from "styled-components";
import { tercero } from "../../colors/colors";

export const ContainerServices = styled.div`
    width: 80%;
    height: auto;

    display: flex;
    flex-direction: column;
    margin: auto;

    gap: 40px;
`

export const TitleH4 = styled.h2`
    margin: 0;
    font-size: 4rem;
    text-align: center;

    background: #E74C3C;
    color: whitesmoke;

    padding: 30px;

    border: 5px solid black;
    border-radius: 10px;
    text-decoration: underline #A569BD;
    
`

export const ContainerCards = styled.div`
    display: grid;
    width: 100%;
    height: auto;

    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    gap: 30px;
    
`
export const Card = styled.div`
    height: auto;
    width: auto;
    
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    border: 5px solid black;
    border-radius: 10px;
    
    overflow: hidden;

    background:#D35400;
`

export const Picture = styled.div`
    width: 110%;
    height: 300px;

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-content: center;
     border-radius: 10px;
     border-bottom: 5px solid black;
`

export const Image = styled.img`
    height: 130%;
   
    
   
`

export const TextP = styled.p`
    margin: 5px;
    font-size: 2.4rem;
    color: black;
    padding: 10px;
`