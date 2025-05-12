import React, { useState } from "react";
import useCalender from "../../../hooks/useCalender";
import './chartControll.css'
function ChartControll({dataControll,setDataControll,setShowType,showType}) {
    const { numberDaysInMonth, months, currentYear,currentMonth,currentDay } = useCalender();
  
  const addYears = (start) => {
    const years = [];
    for (let i = currentYear; i >= start; i--) {
      years.push(i);
    }
    return years;
  };
  const addWeeks = (end) => {
    const days = [];
    for (let i = 1; i <= end/7; i++) {
      days.push(i);
    }
    return days;
  };
  return (
    <div className="flex chart-controll">
    
      <select
        onChange={(e) =>
          setDataControll({ ...dataControll, year: parseInt(e.target.value) })
        }
        defaultValue={currentYear}
        name=""
        id=""
      >
        
        {addYears(2020).map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      
      {showType == 'weekly'&&<><select
        onChange={(e) =>
          setDataControll({ ...dataControll, month: parseInt(e.target.value) })
        }
        defaultValue={currentMonth.index}
        name=""
        id=""
      >
        {months.map((month, index) => (
          <option value={index}>{month}</option>
        ))}
      </select>  <select
        onChange={(e) =>
          setDataControll({ ...dataControll, day: parseInt(e.target.value) })
        }
        defaultValue={`${currentDay.index}`}
        name=""
        id=""
      >
        {addWeeks(numberDaysInMonth(dataControll.year,dataControll.month)).map((week) => (
          <option value={week}>week {week}</option>
        ))}
      </select></>}
     
      <select name="" id="" title="show data in" onChange={(e)=>{
        setShowType(e.target.value)
      }}>
        <option value={'monthly'}>Monthly</option>
        <option value={'weekly'}>Weekly</option>
      </select>
    </div>
  );
}

export default ChartControll;
