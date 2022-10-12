import styled from "styled-components";

export const ContainerSkills = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const TitleSkills = styled.h1`
    font-size: 2rem;
    text-align: center;
    color: white;
    width: 100%;
    height: auto;
    padding: 5px;
    background: black;
    border-radius: 10px;
`

export const ContainerCards = styled.div`
    min-height: 200px;
    
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    justify-items: center;
    gap: 20px;

`
