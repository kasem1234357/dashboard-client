import React, { Suspense, useEffect, useState } from 'react'
import BarChart from '../components/DashBoard/BarChart/BarChart'
import CirculerChart from '../components/DashBoard/CirculerCharts/CirculerChart'
import { rateDataGenerator } from '../components/Data/rateData'
import LineCharts from '../components/DashBoard/LineCharts/LineCharts'
import RadarChart from '../components/DashBoard/RaderCharts/RadarChart'
import RateBox from '../components/Boxes/rateBox/RateBox'
import Table from '../components/DashBoard/Table/table'
import ChartControll from '../components/Boxes/chartControllBox/ChartControll'
import { motion } from "framer-motion"
import axiosConfig from '../configs/axiosConfig'
import useCalender from '../hooks/useCalender'
import { protectRoute } from '../utils/protectRoutes'
import { config_animateY } from '../configs/motionConfig'
import Modal from '../components/Boxes/modalBox/Modal'
const renderModal = (openModelInfo,data,setOpenModelInfo)=>{
  switch (openModelInfo?.type) {
    case 'BarChart':
      return <BarChart data={data} setOpenModelInfo={setOpenModelInfo}/>
      break;
    case 'LineChart':
      return <LineCharts data={data[0]||[]} setOpenModelInfo={setOpenModelInfo}/>
      break;
    default: return <></>
      break;
  }
}
function DashBoard() {
  const [data,setData] = useState([])
  const [loading,setLoading]= useState(false)
  const [openModelInfo,setOpenModelInfo]=useState(false)
  const {  currentYear,currentMonth,currentDay } = useCalender();
  const [dataControll, setDataControll] = useState({
    year: currentYear,
    month: currentMonth.index,
    day: currentDay.index,
  });
  const [showIn,setShowIn]=useState('monthly')
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await protectRoute().handle('get',"api/sales")
        
        
        setData(res.data.data)
        
        setLoading(false)
     } catch (err) {
      console.log(err)
      setLoading(false)
     }
   }
    fetchData()
    // try {
        
    //    axiosConfig.get('api/sales').then(res =>{
    //     setData(res.data.data)
        
    //     setLoading(false)
    //    })
    // } catch (error) {
    //    console.log(error)
    // }
  },[])
  return (
    <>
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
        <motion.div {...config_animateY} className='feed'>
   <div className="feed__text">
    <h2>Hello, Kasem Alolo</h2>
     <span> this is your Dashboard</span>
   </div>
   <div className="feed__content">
    {loading?<div className="loading_auth"> <span className="loader_auth"></span> </div>:<>
    <ChartControll dataControll={dataControll} setDataControll={setDataControll} setShowType={setShowIn} showType={showIn}/>
     
     <div className="feed__content__Box1 flex wrap ">
       <div className="bar--chart1 secondary--bg flex  f-colump">
         <BarChart data={data} setOpenModelInfo={setOpenModelInfo}/>
       </div>
       {/* <div className="radear--chart1 secondary--bg flex  f-colump">
         <RadarChart/>
       </div> */}
     </div>
     <div className="feed__content__Box2 flex wrap ">
       {rateDataGenerator(...data,currentMonth.index).map((data,index)=>(
        <RateBox {...data} key={index}/>
       ))}
       
      
     </div>
     <div className="feed__content__Box3 flex wrap">
     <div className="line--chart3 secondary--bg flex  f-colump">
       <LineCharts data={data[0]||[]}   setOpenModelInfo={setOpenModelInfo} />
     </div>
     {/* <CirculerChart color={'#df8c1f'} progress={80}/> */}
     </div>
    <Table/>
    
    </>}
 
   </div>
 </motion.div>
{openModelInfo.state&&<Modal
isOpen={openModelInfo.state}
          onClose={() => {
            setOpenModelInfo(prev => ({ ...prev, state: false }));
          }}
          modalMaxWidth="90vw"
>
{renderModal(openModelInfo,data,setOpenModelInfo)}
  </Modal>}
 </Suspense>
    </>
  
  )
}

export default DashBoard