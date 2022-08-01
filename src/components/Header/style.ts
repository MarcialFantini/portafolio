import styled from "styled-components";

export const ContainerHeader = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
    background: rgba(229,230,255);
  
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

export const TitleH1 = styled.h1`
    color: green;
    font-size: 4rem;

    margin:0 0 10px 0;
   
`
export const TextP = styled.p`
    font-size: 2rem;
 
    color: black;
`

export const ContainerImage = styled.div`
    
    
`

export const ImageHeader = styled.img`
    width: 100%;
    height: auto;
    max-width: 400px;
    max-height: 500px;
`