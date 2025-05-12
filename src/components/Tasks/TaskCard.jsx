
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Drag } from '../icons/SvgIcons';

function TaskCard(props) {
  console.log('jjj');
  const {setDraggableEl,dropEvent,setDropType,taskId,...data} = props
  const {progressColor,tagColor,tag ,reminderDate ,desc,progress,tasks,title,number,state,...otherdata} = data

  
  let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    const [currentDate,setCurrentDate]= useState(null)
    useEffect(()=>{
      if(reminderDate !== ''){
        setCurrentDate(reminderDate.split('-'))
      }
    },[reminderDate])
    
  const navigate = useNavigate()
  
  return (
    <div className='TaskCard_container' draggable="true" onDragStart={(e) =>{
       setDraggableEl({id:taskId,number:number-1})
       setDropType(state)
       }}  onDragEnd={()=>{dropEvent()}}>
      <div className='drag-icon-area' >
      <Drag width="20px" color="#0db8d3" className="drag-icon"/>
      </div>
     
       <div className='TaskCard' onClick={()=>navigate(`task/${number}`,{ state: { dataInfo:data} })}>
      <div className="TaskCard__header flex">
        <div className="TaskCard__header__title">
          <h4>{title}</h4>
          <span>{desc[0].substring(0,30)}...</span>
        </div>
      </div>
      <div className="TaskCard__progress">
         <div className='TaskCard__progress__text flex'>
           <span> Progress</span>
           <span> {progress}/{tasks?.length}</span>
         </div>
         <div className="TaskCard__progress__progressArea">
             <div className="TaskCard__progress__progressBar" style={{background:`${progressColor}`,width:`${Math.floor((progress /(tasks?.length || 1 ) )*100)}%`}}></div>
         </div> 
      </div>
      <div className="TaskCard__footer flex">
        <div className="TaskCard__footer__date">{currentDate?`${currentDate[0]} ${monthShortNames[currentDate[1]-1]} ${currentDate[2]}`:'not connected' }</div>
        <div className="TaskCard__footer__tag" style={{background:`${tagColor}`}}> <span> {tag}</span></div>
      </div>
    </div>
    </div>
   
  )
}

export default TaskCard