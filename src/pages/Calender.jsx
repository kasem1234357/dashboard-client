import React, { Suspense, useRef } from 'react'
import { useState } from 'react';
import CalendarBox from '../components/Boxes/calenderBox/CalendarBox'
import useCalender from '../hooks/useCalender'
import '../styles/calendar.css'
import { motion } from "framer-motion"
import { config_animateY } from '../configs/motionConfig';
import useOutsideClick from '../hooks/useOutsideClick';
function Calender() {
  const {currentYear,currentMonth,months} = useCalender()
  const [openModel,setOpenModel]=useState(false)
  const fieldRef = useRef(null);
  const [data,setData] =useState({
    year:currentYear,
    month:currentMonth.index
  })
  useOutsideClick(fieldRef,()=>{
    setOpenModel(false)
  })
  const addYears = (start) => {
    const years = [];
    for (let i = currentYear; i >= start; i--) {
      years.push(i);
    }
    return years;
  };
  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
    <motion.div {...config_animateY} className='calendar flex'>
      <div className="calendar__navbar flex">
        <h1 className=''>
            Calender
          </h1>
        <h2 ref={fieldRef} className='calendar__year'> <label htmlFor="year" onClick={()=>{
            setOpenModel(!openModel)
          }
          }>{data.year}</label>
         {openModel && <select
          className='calendar__year__select'
        onChange={(e) =>
          setData({ ...data, year: parseInt(e.target.value) })
        }
        defaultValue={data.year}
        name=""
        id=""
      >
        
        {addYears(2020).map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
          }</h2>
        <select onChange={(e)=>setData({...data,month:parseInt(e.target.value)})}  defaultValue={`${currentMonth.index}`} name="" id="">
          {months.map((month,index)=>(
            <option value={index}>{month}</option>
          ))}
        </select>
      </div>
      <div className="calendar__box secondary--bg flex">
        <CalendarBox year={data.year} month={data.month}/>
      </div>
    </motion.div>
    </Suspense>
  )
}

export default Calender