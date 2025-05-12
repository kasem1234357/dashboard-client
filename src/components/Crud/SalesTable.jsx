import React, { useEffect, useLayoutEffect, useState } from 'react'
import Crud_Table_sales from './crudTable/Crud_Table_sales';
import Crud_Header from './crudTable/Crud_Header';
import axiosConfig from '../../configs/axiosConfig'
import EmptyBox from '../Boxes/emptyBox/EmptyBox';
import useDebounce from '../../hooks/useDebounce';
const titles =[ "profile","username", "createdAt","DeliveredAt", "amount", "price", "state"]
function SalesTable({setItemsData,setTotal,setFilterProducts,itemsData,total,filterProducts,filters}) {

const [loading,setLoading] = useState(false);
 const fetchSales = async (query = {}) => {
    try {
       let searchQuery = []
    if(Object.keys(query).length!==0){
        searchQuery = Object.entries(query).map(([key, value]) => {
            return `${key}=${value}`;
        });
    }
        setLoading(true)
      const res = await axiosConfig.get(`/api/transaction${searchQuery.length>0?'?'+searchQuery.join('&'):''}`);
      const { data } = res.data;
      setItemsData(data);
      setTotal(data.length)
      setFilterProducts(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching sales:", error);
      setLoading(false)
      
      // Handle error (e.g., show error message)
    }
  };
useDebounce(()=>{fetchSales(filters)},400,[filters])
useLayoutEffect(() => {
 

  fetchSales();
}, []);
  return (
    <>
    <div>
       <Crud_Header titles={titles}  />
     <div className="crud__rows">
          {loading?<div className="loading_auth" style={{height:'auto'}}> <span className="loader_auth"></span> </div>:
          filterProducts.length >0 ?filterProducts?.map(item =>{
        return(
            <Crud_Table_sales data={item} />
        )
    }):<EmptyBox/>
          }
           
         
        </div>
   
    </div>
    
    </>
  )
}

export default SalesTable