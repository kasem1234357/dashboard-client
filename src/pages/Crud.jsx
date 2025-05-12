
import React, { Suspense } from "react";
import { AddProductIcon, Sheets, Sort } from "../components/icons/SvgIcons";
import { useNavigate } from "react-router-dom";
import "../styles/crud.css";
import FilterBox from "../components/Boxes/filtrerBox/FilterBox";
import { useEffect,useState } from "react";
import Crud_Table_products from "../components/Crud/crudTable/Crud_Table_products";
import Crud_Header from "../components/Crud/crudTable/Crud_Header";
import Crud_Table_sales from "../components/Crud/crudTable/Crud_Table_sales";
import Crud_Table_users from "../components/Crud/crudTable/Crud_Table_users";
import axiosConfig from '../configs/axiosConfig'
import useExport from "../hooks/useExport";
import useTable from "../hooks/useTable";
import PaginationBox from "../components/Boxes/paginationBox/PaginationBox";
import { motion } from "framer-motion"
import { useSelector } from "react-redux";
import { FAKE_USER_DATA } from "../configs/FAKE_USER_DATA";
import { config_animateY } from "../configs/motionConfig";
import SalesTable from "../components/Crud/SalesTable";
import ProductsTable from "../components/Crud/ProductsTable";

const renderEl = (currentTitle,setItemsData,setTotal,setFilterProducts,itemsData,total,filterProducts,filters) =>{
  switch (currentTitle) {
    case "products": return <ProductsTable setItemsData={setItemsData} setTotal={setTotal} setFilterProducts={setFilterProducts} itemsData={itemsData} total={total} filterProducts={filterProducts} filters={filters}/>
      
      break;
   case 'sales':return <SalesTable setItemsData={setItemsData} setTotal={setTotal} setFilterProducts={setFilterProducts} itemsData={itemsData} total={total} filterProducts={filterProducts} filters={filters}/>
    default:
      break;
  }
}
const titles = (type)=>{
  const methods = {
    products:["title","tags"],
    sales:["username"],
    users:["username"]
  }
  return methods[type]
}
function Crud() {

  const productNumbers = useSelector(state =>state.user.productNumber)
  const [itemsData, setItemsData] = useState([]);
  const [total,setTotal]=useState(20)
  const [methods,setMethods] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filters,setFilters]=useState({})
  
  const [showModel, setShowModel] = useState(false);
  const [currentTitle, setCurrentTitle] = useState({
    type: "products",
  });
 
  const {
    currentStep,
    recordsLength, // number of element in single view
    setRecordsLength,
    toBack,
    skipsLength, // number of steps * records length
    toNext, 
    steps /** number of steps */
  } = useTable(Math.ceil(total/20) || 20)
  
  const {generateExcelFile} = useExport()
  const filter = (method, filterText) => {
    setFilters(prev =>{
      return {...prev,[method]:filterText}
    })
  };


  const navigate = useNavigate();

  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
    <motion.div {...config_animateY} className="Crud">
      <div className="Crud__header">
        <h2 >my products data</h2>
        <span>show your data and customize them</span>
      </div>
      <div className="crud__table">
        <div className="table__header">
          <div className="crud__table__header flex">
            <select
              name=""
              id=""
              onChange={(e) =>{
                setFilters({})
                setItemsData([])
                 setFilterProducts([])
                 
                setCurrentTitle({
                  type: e.target.value,
                  
                })}
              }
            >
              <option value="products">Products Data</option>
              <option value="sales">Sales Data</option>
              <option value="users">user Data</option>
            </select>
            <div className="crud__table__header--controls flex">
              <button>
                <Sheets width={"20px"} color={"#d7d7d7"} onClick={()=>{
                
                  generateExcelFile(itemsData,`${currentTitle.type}-sheet-1`,{limitFields:['_id','galleryName','stat',"otherImg",'colors']})
                }}/>
              </button>
              <button>
                {showModel && (
                  <FilterBox filter={filter} type={currentTitle.type} methods={titles(currentTitle.type)} />
                )}
                <span onClick={() => setShowModel(!showModel)}>Filters</span>
              </button>
              <button>
                <Sort width={"20px"} color={"#fff"} />
              </button>
              <button>
                <AddProductIcon
                  width={"15px"}
                  color={"#fff"}
                  onClick={() =>
                    navigate(`product/${productNumbers + 1}`, {
                      state: { dataInfo: null, type: "New" },
                    })
                  }
                />
              </button>
            </div>
          </div>
         
        </div>
         {/* <Crud_Header titles={currentTitle.data} hasImage={currentTitle.type !== "sales"} />
        <div className="crud__rows">
          {loading?<div className="loading_auth" style={{height:'auto'}}> <span className="loader_auth"></span> </div>:
          renderEl()
          }
           
         
        </div> */}
        {renderEl(currentTitle.type,setItemsData,setTotal,setFilterProducts,itemsData,total,filterProducts,filters)}
        <PaginationBox toBack={toBack} toNext={toNext} steps={steps} currentStep={currentStep}/>
      </div>
    </motion.div >
    </Suspense>
  );
}

export default Crud;
