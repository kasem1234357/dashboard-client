import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import './rateBox.css'
function RateBox({title, progress,number,color,numberState}) {
 const [strokeDash,setStrokeDash]= useState();
 const increese=numberState >0
 const svgRef = useRef(null);
 useEffect(()=>{
  const svg = svgRef.current
  if(svg){
   setStrokeDash(svg.getTotalLength())
  } 
 },[])
  return (
   <div className="analystic--box secondary--bg rateBox">
    <h4>{title}</h4>
    <div className="rateBox__analystic flex">
    <span className='rateBox__analystic__count' style={{borderLeft:` 1.5px solid ${color} `}}>{number}</span>
     <div className="rateBox__analystic__state">
      <span className={`arrow ${increese?'arrow--green':'arrow--red'}`}  >{increese ?`↑ `:`↓`} </span>
     <span> {increese ?`+${numberState}`:`${numberState}`}</span>
     </div>
    <div className='rateBox__bar'>
    <span className='rateBox__svg__progress'>{progress}%</span>
    <svg  id="rateBox__svg" width="70" height="70" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="25" cx="35" cy="35" fill="transparent"  ></circle>
  
  <circle style={{stroke:color}}  ref={svgRef} id="bar" r="25" cx="35" cy="35"  fill="transparent" stroke-dasharray={strokeDash} stroke-dashoffset={(strokeDash-(strokeDash*progress/100))}></circle>
</svg>
    </div>
    
    </div>
    
   </div>
  )
}

export default RateBox