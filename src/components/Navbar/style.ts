import styled from 'styled-components'



export const ContainerNavbar = styled.div`
    top: 0;
    position: fixed;
    width: 100%;
    height: 120px;

   

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    background: rgb(255,255,255,0.7);

    z-index: 100;
    
`
export const IconPerson = styled.img`
    width: 100px;
    height: 100px;

    margin: auto 20px;

    border-radius: 10px;

    border: 2px solid black;
`

export const TitleNav = styled.h1`
    font-size: 4rem;
    color: black;
    margin: 0;
    padding: 0;

`

