import React, { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {  Labels, options } from './LineConfig'
import { ExportImage, Extend } from '../../icons/SvgIcons';
import { toJpeg, toPng } from "html-to-image";
function LineCharts({data,setOpenModelInfo}) {
  console.log(data.monthlyData);
  const elementRef = useRef();
     const htmlToImageConvert = () => {
      //@ts-ignore
      toJpeg(elementRef.current, { cacheBust: false })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `LineChart-${data.year}.jpg`;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  const lineData = {
   labels: Labels,
   datasets: [
     {
      tension: 0.4,
       label: 'units',
       data: data?.monthlyData?.map(item => item.totalUnits) || [],
       borderColor: '#0DB8D3',
       backgroundColor: '#0DB8D3',
       yAxisID: 'y',
       
     },
     {
      label: 'likes',
      data: data?.monthlyData?.map(item => item.totalLikes) || [],
      borderColor: '#C33ECE',
      backgroundColor: '#C33ECE',
      yAxisID: 'y1',
      tension: 0.4,
    
      
    },
    {
     label: 'sales',
     data: data?.monthlyData?.map(item => item.totalSales) || [],
     borderColor: '#d9234b',
     backgroundColor: '#d9234b',
     yAxisID: 'y2',
     tension: 0.4,
   },
   ]
  };
  return (
    <div  style={{
      position:'relative'
    }}>


       <Extend width={20} height={20} color={'#7a8195'} onClick={()=>{
              setOpenModelInfo(prev => ({  type: 'LineChart', state: !prev.state }));
            }} style ={{
              position:"absolute",
              right:'10px',
              top:'10px'

            }}/>
            <ExportImage width={20} height={20} color={'#7a8195'} onClick={()=>{
              htmlToImageConvert()
            }} style ={{
              position:"absolute",
              right:'50px',
              top:'10px'

            }}/>
            <div ref={elementRef}>
               <Line data={lineData} options={options}/>
            </div>
           
    </div>
    
  )
}

export default LineCharts