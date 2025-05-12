import React from 'react'
import EmptyImg from '../../../assets/empty_data.svg'
function EmptyBox() {
  return (
    <div className='flex center empty-box f-colump'>
        <div className="img">
            <img src={EmptyImg} alt="" />
        </div>
        <h3>no data found</h3>
    </div>
  )
}

export default EmptyBox