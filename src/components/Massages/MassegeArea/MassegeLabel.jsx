import React from 'react'

const MassegeLabel = ({img,color,sender,title,desc}) => {
  return (
   <div className={`massage--box  flex`}>
   <div className="Massage__image" >
     <img src={`./images/${img}`} alt="" srcSet="" style={{
       filter: `drop-shadow(0px 0px 5px ${color} )`
     }}/>
   </div>
   <div className="Massage__content flex f-column">
     <span className="Massage__content__sender">
       {sender}
     </span>
     <p className="Massage__content__title">
       {title}
     </p>

   </div>
   </div>
  )
}

export default MassegeLabel