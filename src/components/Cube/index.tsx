import React, { useEffect, useState } from 'react'

import './style.css'

export const Cube = () => {
  const listStep = [
      "Html5",
      "Css3",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Git"
    ]
  const [state,setState] = useState({
    step:"cube",
    cont:0,
    
  })

  const moveFace = ()=>{
    let newCont = state.cont + 1
    
    if(newCont >= 6){
      newCont = 0 
    }
    const newStep = "cube"+" "+ listStep[newCont]
    console.log(newStep)
    setState({
      step:newStep,
      cont:newCont,
      
    })
  }


  useEffect(()=>{
    setTimeout(()=>{
      moveFace()
      console.log(state.step)
    },1500)
  },[state])
  return (
    <div className="container">
      <div className="containerCube ">
        <div className={state.step}>
          <div className="cube_face face_Html5">Html5</div>
          <div className="cube_face face_Css3">Css3</div>
          <div className="cube_face face_JavaScript">JavaScript</div>
          <div className="cube_face face_ReactJs">ReactJs</div>
          <div className="cube_face face_Redux">Redux</div>
          <div className="cube_face face_Git">Git</div>
        </div>
      </div>
    </div>
  )
}
