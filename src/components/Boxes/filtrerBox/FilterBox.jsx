import React, {  useEffect, useState } from 'react'
function FilterBox({filter,methods}) {
  const [filterText,setFilterText] = useState('')
  const [filterMethod ,setFilterMethod]= useState(methods[0])
  useEffect(()=>{
    
     filter(filterMethod,filterText)
    
  },[filterText,filterMethod])
  return (
    <div className='filterBox '>
      <h3>Filter Box</h3>
      <select name="" id="" onInput={(e)=>{
        
        setFilterMethod(e.target.value)
        }}>
        {methods.map(method =>(
           <option value={method}>{method}</option>
        ))}
      </select>
      <input type="text" onInput={(e)=>{
        
        setFilterText(e.target.value)
      }} />
    </div>
  )
}

export default  FilterBox