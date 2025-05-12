import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Radar } from 'react-chartjs-2'
import { radarConfig } from './radarConfig'
function RadarChart() {
 const chartRef = useRef(null)
 const [chartData, setChartData] = useState({
  labels:[],
  datasets:[{}]
});
 useEffect(()=>{
    const chart =chartRef.current
    if(chart){
     const gradient = (ctx,color1,color2)=>{
      let gradients = ctx.createLinearGradient(0, 0, 0, 400);
      gradients.addColorStop(0, color2);   
      gradients.addColorStop(1, color1);
      return gradients
     }
     const data ={
      labels: [
       'totalCustomers',
       'yearlySalesTotal',
       'yearlyTotalLikes',
       'yearlyTotalSoldUnits',
       'yearlyTotalSubscribing',
       
     ],
     datasets: [{
      label: 'My First Dataset',
      data: [75, 80, 95, 80, 80,],
      fill: true,
      backgroundColor: gradient(chart.ctx,"rgba(71, 100, 182,0.8)",'rgb(110, 186, 204)'),
      borderWidth:0,
      pointBackgroundColor:"transparent",
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
     },{
      label: 'My Second Dataset',
      data: [900, 1000, 1100, 900, 800,],
      fill: true,
       backgroundColor: gradient(chart.ctx,'rgba(112, 79, 211,0.8)','#f0a27d'),
       borderWidth:0,
      pointBackgroundColor: "transparent",
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
     }]
     }
    
      setChartData(data)
    }
 },[])
  return (
    <>
<Radar ref={chartRef} data={ chartData} options={radarConfig().RadarOptions}/>
    </>
   
  )
}

export default RadarChart