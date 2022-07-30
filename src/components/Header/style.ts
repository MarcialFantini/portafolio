import styled from "styled-components";
import { segundo, tercero } from "../../colors/colors";

export const HeaderContainer = styled.div`
    width: 80%;
    height: auto;
    margin: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    gap: 5px;

    margin: 20px auto;

`

export const ContainerImg = styled.div`
    height: 50vh;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 5px solid black;

    background: #A569BD;
`

export const Img = styled.img`
    width: 95%;
   

   border-radius: 10px;
    border: 4px solid black;
`

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    height: 50vh;
    gap: 10px;

`

export const Box = styled.div`
    height: 50%;
    width: 100%;

    margin: auto;

    background:#F5B041;
    
    text-align: center;

    display: flex;
    flex-direction: column;

    border-radius: 10px;
    border: 5px solid black;
`

export const TitleH2 = styled.h2`
    font-size: 2.4rem;
    color: black;
    margin: 30px auto;
    padding: 0;

    display: block;
`
export const Span = styled.span`
    margin: 10px;
    display: block;
`