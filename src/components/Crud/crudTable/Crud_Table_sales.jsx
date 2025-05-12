import React, { useEffect, useState } from 'react'

const Crud_Table_sales = ({data}) => {
  const {createdAt,deliveredDate,totalBudget,username,userImg} = data
  const [totalAmount,setTotalAmount]=useState(0)
  useEffect(()=>{
    const {products} = data
    let total = 0
    products.forEach(product=>{
      total+=product.amount
    })
    setTotalAmount(total)
  },[data])

 
 return (
   <div className="crud__table__row  flex" 
   >
<div className="products--box product--image">
 <img src={userImg?.url} alt="" srcset="" />
</div>
<div className="products--box product--Name">{username}</div>
<div className="products--box product--CreatedAt">{new Date(createdAt).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'})}</div>
<div className="products--box product--DeliveredAt">{new Date(deliveredDate).toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'})}</div>
<div className="products--box product--count">{totalAmount}</div>
<div className="products--box product--copon">{totalBudget}$ </div>
<div className="products--box product--controls">
<div className="state-successed">success</div>
</div>
</div>
  )
}

export default Crud_Table_sales