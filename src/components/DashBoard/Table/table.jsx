import React, { memo, useCallback } from 'react'
import { AddProductIcon, Sort } from '../../icons/SvgIcons'
import {useNavigate} from 'react-router-dom'
import FilterBox from '../../Boxes/filtrerBox/FilterBox'
import { useEffect } from 'react'
import { useState } from 'react'
import PaginationBox from '../../Boxes/paginationBox/PaginationBox'
import useTable from '../../../hooks/useTable'
function TableBox() {
  const [productsData,setProductsData]=useState([])
  const [filterProducts,setFilterProducts]=useState([])
  const [showModel,setShowModel] = useState(false)
  const {currentStep,recordsLength,setRecordsLength,toBack,skipsLength,toNext,steps} = useTable(10)
  
  const filter =useCallback((method,filterText)=>{
    const data = productsData.filter(task => task[method].includes(filterText))
    setFilterProducts(data)
  },[productsData])
  useEffect(()=>{
    setFilterProducts(productsData)
 },[productsData])
  return (
    <div>
       <div className="crud__table">
       <div className="crud__table__header flex">
      <span>Products Data</span>
      <div className="crud__table__header--controls flex">
        <button>{showModel && <FilterBox filter={filter} methods={['title',' tags']}/>}<span onClick={()=> setShowModel(!showModel)}>Filters</span></button>
        <button><Sort width={'20px'} color={'#fff'}/></button>
        
      </div>
    </div>
        <div className='crud__table'>
        <div className="table__header">
    
    <div className="crud__table__row crud__table__titles flex">
      <div className="products--box product--image">
        profile
      </div>
      <div className="products--box product--Name">
        user Name
      </div>
      <div className="products--box product--Name">product Name</div>
      <div className="products--box product--price">varient</div>
      <div className="products--box product--count">Count</div>
      <div className="products--box product--copon">price</div>
      <div className="products--box product--controls">
      Controls Btns
      </div>
      
    </div>
    </div>
    <div className="crud__rows">
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">5</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    <div className="crud__table__row  flex" 
          >
    <div className="products--box product--image">
        <img src="./images/storm.svg" alt="" srcset="" />
        
      </div>
      <div className="products--box product--Name">user 1</div>
      <div className="products--box product--Name">winter jacket</div>
      <div className="products--box product--price">black</div>
      <div className="products--box product--count">54</div>
      <div className="products--box product--copon">120$</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
    
      {filterProducts?.map(product=>{
         const {title,profileImg,count,price,coupon,_id} = product
        return(
          <div className="crud__table__row  flex" key={_id}
          >
    <div className="products--box product--image">
        <img src={profileImg} alt="" srcset="" />
      </div>
      <div className="products--box product--Name">{title}</div>
      <div className="products--box product--price">{price}$</div>
      <div className="products--box product--count">{count}</div>
      <div className="products--box product--copon">{coupon }</div>
      <div className="products--box product--controls">
      <button >Update</button>
      <button className='delete--product--btn'>Delete</button>
      </div>
    </div>
        )
      })}
      

    </div>
        </div>
        <PaginationBox toBack={toBack} toNext={toNext} steps={steps} currentStep={currentStep}/>
    
    
  </div>
    </div>
   
  )
}

export default memo(TableBox) 