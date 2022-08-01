import styled from "styled-components";

export const ContainerAboutMe = styled.div`
    width: 90%;
   
    
   
    height: 50vh;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(340px,1fr));

     margin: 120px auto 400px auto;
    row-gap: 70px;
    column-gap: -100px;
    
    @media (min-width: 771px) {
        margin: 120px auto ;
    }
`
export const Marco = styled.div`
  
    border-radius: 10px;
    border: solid 20px gold;
    position: relative;
    min-height: 300px;
    max-width: 250px;
    min-width: 250px;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0 0 15px 1px gold,
    0 0 15px 1px gold inset;
    z-index: 0;
    
`

export const MarcoAbsolute = styled.div`
    height: 110%;
    width: 110%;
     overflow: hidden;
     position: absolute;

    top: -60px;
    left: 20px;
    background: white;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 0 0 15px 1px black;
    
`
export const Image = styled.img`
   
    width: 120%;
`

export const TextContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: whitesmoke;
    border-radius: 10px;
    margin-top: 20px;
    border: 5px solid black;
    box-shadow: 0 0 10px 1px black;
    
   

`
export const TitleH = styled.h1`   
    text-align: center;
    color: green;
    margin: 10px;
    font-size: 4rem;

`
export const Text = styled.p`
    width: 70%;
    height: auto;
    margin: auto;
    font-size: 2rem;
    margin: 10px;
`