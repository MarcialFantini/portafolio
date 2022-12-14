import styled from "styled-components";

export const ContainerAboutMe = styled.div`
    width: 90%;
    overflow: hidden;
    
   
    height: auto;
    

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(340px,1fr));

     margin: 120px auto ;
    row-gap: 70px;
    column-gap: -100px;
    
    
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
interface activeAbsolute{
    top:string
}


export const MarcoAbsolute = styled.div<activeAbsolute>`
    height: 110%;
    width: 110%;
    overflow: hidden;
    position: absolute;


    
    top: ${props=>props.top};
    left: 20px;
    background: white;
    border-radius: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 15px 1px black;

    transition: all .7s;
    
`
export const Image = styled.img`
   
    width: 120%;
`
interface props{
    inView:boolean
}

export const TextContainer = styled.div<props>`

    position: relative;

    left: ${props=>{
        if(props.inView){
            return "0"
        }else{
            return "90%"
        }
    }};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: whitesmoke;
    border-radius: 10px;
    margin-top: 20px;
    border: 5px solid black;
    box-shadow: 0 0 10px 1px black;
    
    transition: all .8s;
    min-height: 300px;

`
export const TitleH = styled.h1`   
    text-align: center;
    color: pink;
    margin: 10px;
    font-size: 4rem;
    background: grey;
    padding: 20px;
    border-radius: 10px;
`
export const Text = styled.p`
    width: 70%;
    height: auto;
    margin: auto;
    font-size: 2rem;
    margin: 10px;
`