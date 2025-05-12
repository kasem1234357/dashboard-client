import React from 'react'
import { useNavigate } from 'react-router-dom';

const Crud_Table_products = ({data}) => {
  console.log(data);
  
  const navigate = useNavigate();
  return (
   <div className="crud__table__row  flex" 
   >
<div className="products--box product--image" onClick={()=>{navigate(`productInfo/${data._id}`)}}>
 <img src={data.profileImg.url} alt="" srcset="" />
</div>
<div className="products--box product--Name">{data.title}</div>
<div className="products--box product--price">{data.price}</div>
<div className="products--box product--count">{data.count}</div>
<div className="products--box product--copon">{data.type} </div>
<div className="products--box product--copon">{data.coupon
} </div>
<div className="products--box product--controls">
<button onClick={() =>
                navigate(`product/${data._id}`, {
                  state: { dataInfo: data, type: "update" },
                })
              }>Update</button>
<button className='delete--product--btn' >Delete</button>
</div>
</div>
  )
}

export default Crud_Table_products