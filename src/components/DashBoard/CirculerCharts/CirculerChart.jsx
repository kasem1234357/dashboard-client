import React, { useEffect, useRef, useState } from 'react'
import './circulerChart.css'
function CirculerChart({ progress}) {
 const [strokeDash,setStrokeDash]= useState();
 const svgRef = useRef(null);
 useEffect(()=>{
  const svg = svgRef.current
  if(svg){
   setStrokeDash(svg.getTotalLength())
  } 
 },[])
  return (
    <div className="circuler--chart3 secondary--bg">
     <h4>revenune per month</h4>
     <div className='circuler--chart3__bar'>
    <span className='circuler--chart3__progress'>{progress}%</span>
    <svg  id="circuler--chart3__svg" width="150" height="150" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <circle r="67" cx="75" cy="75" fill="transparent"  ></circle>
  
  <circle   ref={svgRef} id="bar" r="67" cx="75" cy="75"  fill="transparent" stroke-dasharray={strokeDash} stroke-dashoffset={(strokeDash-(strokeDash*progress/100))}></circle>
</svg>
    </div>
    </div>
  )
}

export default CirculerChart