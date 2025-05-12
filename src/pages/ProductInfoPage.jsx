import React, { Suspense } from 'react'
import ChartControll from '../components/Boxes/chartControllBox/ChartControll'
import {useParams} from 'react-router-dom'
import BarChart from '../components/DashBoard/BarChart/BarChart'
import RadarChart from '../components/DashBoard/RaderCharts/RadarChart'
import RateBox from '../components/Boxes/rateBox/RateBox'
import LineCharts from '../components/DashBoard/LineCharts/LineCharts'
import CirculerChart from '../components/DashBoard/CirculerCharts/CirculerChart'
import { motion } from "framer-motion"
import { rateData } from '../components/Data/rateData'

function ProductInfoPage() {
    const {id} =useParams()
    return (
        <>
        <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
            <div className='feed'>
       <div className="feed__text">
        <h2>Hello, Kasem Alolo</h2>
         <span> this is your Project number {id}</span>
       </div>
       <div className="feed__content">
       <ChartControll/>
         
         <div className="feed__content__Box1 flex wrap ">
           <div className="bar--chart1 secondary--bg flex  f-colump">
             <BarChart/>
           </div>
           <div className="radear--chart1 secondary--bg flex  f-colump">
             <RadarChart/>
           </div>
         </div>
         <div className="feed__content__Box2 flex wrap ">
           {rateData.map((data,index)=>(
            <RateBox {...data} key={index}/>
           ))}
           
          
         </div>
         <div className="feed__content__Box3 flex wrap">
         <div className="line--chart3 secondary--bg flex  f-colump">
           <LineCharts/>
         </div>
         <CirculerChart color={'#df8c1f'} progress={80}/>
         </div>
       </div>
     </div>
     </Suspense>
        </>
      
      )
}

export default ProductInfoPage
