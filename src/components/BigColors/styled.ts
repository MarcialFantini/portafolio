import styled from "styled-components";

export const ColorsContainer = styled.div`
    width: 97%;
    height: 400px;
    min-width: 200px;

    position: absolute;
    top: 120px;
    right: 0;

    display: flex;

    overflow: hidden;
    
`

interface colorsProps{
    color:string
    position:number
}

export const Color = styled.div<colorsProps>`
    width: 100%;
    height: 100%;
    left: ${props=>{
        if(props.position===1){
            return "0"
        }
        else{
            return "50%"
        }
    }};

    background: ${props=>props.color};

    border-radius: 30%;
    /* box-shadow: inset 0 0 20px 0 ${props=>props.color},
    inset 0 0 50px 0 ${props=>props.color},
    inset 0 0 40px 0 ${props=>props.color},
    inset 0 0 10px 0 ${props=>props.color}; */
    position: absolute;
`