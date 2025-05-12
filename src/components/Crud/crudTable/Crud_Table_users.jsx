import React from 'react'

const Crud_Table_users = ({data}) => {
  return (
   <div className="crud__table__row  flex" 
   >
<div className="products--box product--image">
 <img src={data.profileImg} alt="" srcset="" />
</div>
<div className="products--box product--Name">{data.userName}</div>
<div className="products--box product--price">{data.budget}</div>
<div className="products--box product--count">{data.amount}</div>
<div className="products--box product--copon">{data.ordersInWaiting} </div>
<div className="products--box product--controls">
<button >contact</button>
</div>
</div>
  )
}

export default Crud_Table_users