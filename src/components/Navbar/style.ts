import styled from 'styled-components'
import {  primero, segundo  } from '../../colors/colors'



export const ContainerNavbar = styled.div`
top: 0;
    position: fixed;
    width: 100%;
    height: 120px;

    background: ${primero};

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    border-bottom: 5px solid black;
    z-index: 100;
    box-shadow: 0 0 20px 10px black;
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
    color: ${segundo};
    margin: 0;
    padding: 0;

`

