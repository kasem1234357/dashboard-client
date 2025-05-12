import React, { useEffect, useLayoutEffect, useState } from 'react'
import Crud_Table_products from './crudTable/Crud_Table_products';
import Crud_Header from './crudTable/Crud_Header';
import axiosConfig from '../../configs/axiosConfig'
import EmptyBox from '../Boxes/emptyBox/EmptyBox';
import useDebounce from '../../hooks/useDebounce';
 const titles = [
      "poster",
      "Tilte",
      "Price",
      "Count",
      "type",
      "Copon",
      "Controls Btns",
    ]
function ProductsTable({setItemsData,setTotal,setFilterProducts,itemsData,total,filterProducts,filters}) {
 
  const [loading,setLoading] = useState(false);
  const fetchSales = async (query = {}) => {
    let searchQuery = []
    if(Object.keys(query).length!==0){
         Object.entries(query).forEach(([key, value]) => {
          if(value){
             searchQuery.push(`${key}=${value}`);
          }
            
        });
    }
    try {
        setLoading(true)
      const res = await axiosConfig.get(`/api/products${searchQuery.length>0?'?'+searchQuery.join('&'):''}`);
      const { data } = res.data;
      setTotal(data.total)
        setItemsData(data.productsWithStats);
        setFilterProducts(data.productsWithStats)
        setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false)
      
      // Handle error (e.g., show error message)
    } 
  };
useDebounce(()=>{fetchSales(filters)},400,[filters])
useLayoutEffect(() => {
  const fetchSales = async () => {
    try {
        setLoading(true)
      const res = await axiosConfig.get(`/api/products`);
      const { data } = res.data;
      setTotal(data.total)
        setItemsData(data.productsWithStats);
        setFilterProducts(data.productsWithStats)
        setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false)
      
      // Handle error (e.g., show error message)
    } 
  };

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
            <Crud_Table_products data={item} />
        )
    }):<EmptyBox/>
          }
           
         
        </div>
   
    </div>
    
    </>
  )
}

export default ProductsTable