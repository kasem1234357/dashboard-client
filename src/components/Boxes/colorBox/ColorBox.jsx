import React, { useState } from 'react'
import { useEffect } from 'react'
import { Close } from '../../icons/SvgIcons';
import ImgBox from '../imgBox/ImgBox'
import { motion } from "framer-motion"
import { config_animateY,config_animate_model } from '../../../configs/motionConfig';
function ColorBox({data,updateColorData,count,updateData,close,imagesFn,imgUrl}) {
  const [colorData,setColorData]=useState({})
  const [colorImgData,setColorImgData]=useState([])
  const [color,setColor]= useState(data.hex );
  const [colorSize,setColorSize]=useState([]);
  //  console.log(imgUrl('frontImg',data.id));
useEffect(()=>{
  setColorData(data)
  console.log(data)
  setColorSize(data.size)
},[data])
 const saveDetails = ()=>{
  updateColorData(colorData,data.id)
 }
 const updateCount = (type)=>{
   if(type === 'i'){
    setColorData(prev =>{
      return {...prev,totalCount:prev.totalCount +1}
    })
    updateData('count',count+1)}
   if(type === 'd'){
    setColorData(prev =>{
      return {...prev,totalCount:prev.totalCount -1}
    })
    updateData('count',count-1)}
 }
  return (
    <motion.div {...config_animate_model} className='colorBox'>
      <Close fill={'#d7d7d7'} width={'20px'} className='close--svg--btn' onClick={()=>close(false)}/>
      <div className="colorBox__images flex">
          <div className='colorBox__images__box flex '>
            <h3>Front</h3>
            <ImgBox imgUrl={imgUrl('frontImg',data.id) || data.frontImg.url } name={`frontImg-${data.id}`} updateFn = {imagesFn}/>
            </div>
          <div  className='colorBox__images__box flex'>
            <h3>Back</h3>
          <ImgBox imgUrl={imgUrl('backImg',data.id) || data.backImg.url } name={`backImg-${data.id}`}  updateFn ={imagesFn}/>
            </div>
         </div>
         <div className="colorBox__controlls flex">
            <div className="colorBox__controlls__box flex">
              <div className="colorBox__controlls__items flex">
              <label htmlFor="">hex</label>
              <input type="text" defaultValue={data.hex || ''} onChange={(e)=>{
                setColorData(prev =>{
                  return {...prev,hex:e.target.value}
                })
                setColor(e.target.value)}} />
              <span className='color--circle' style={{background:color}}></span>
              </div>
              <div className="colorBox__controlls__items flex">
              <label htmlFor="">title</label>
              <input type="text" />
              </div>
            </div>
            <h3>Size</h3>
            <div className="colorBox__controlls__box flex">
            {colorSize.map((size,index)=>{

              return(
                <div key={index} className="colorBox__controlls__items flex">
            <p htmlFor="">{size.name}</p>
               
              <div className='counter flex'>
                <span onClick={()=>{
                   let newSizes = colorSize
                   newSizes[index].count++;
                   setColorSize(newSizes) 
                  updateCount('i')}}>+</span>
              {size.count}
              <span onClick={()=>{
                  let newSizes = colorSize
                  newSizes[index].count--;
                  setColorSize(newSizes) 
                updateCount('d')}}>-</span>
              </div>
              
            </div>
              )
            })}
            </div>
            <div className="colorBox__controlls__box flex">
              <div className="colorBox--count ">
                <strong>total count: <span>{colorData.totalCount}</span></strong>
              </div>
            <button className="controlls--save" onClick={()=>{
              saveDetails()
              close(false)
            }}>
              <p>save</p>
            </button>
            </div>
         </div>
         
    </motion.div>
  )
}

export default ColorBox