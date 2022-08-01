import styled from "styled-components";

export const ContainerCard = styled.div`
    
    border-radius: 10px;
    background-image: url(src/assets/cards/pc.jpg);
    background-position: center;
    padding: 5%;
    width: 270px;
    height: 300px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`
export const Filter = styled.div`
top: 0%;
position: absolute;
    width: 100%;
    height: 100%;
    background:${props=>props.color};
`

export const Icon = styled.img`
    width: 30%;
    margin: 0 auto auto 0;
`
export const TextContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 80%;
    position: absolute;

    top: 30%;
    
`

export const TitleH1 = styled.h1`
    font-size: 2.4rem;
    color: white;
`
export const TextP = styled.p`
    font-size: 1.6rem;
    color: white;
`