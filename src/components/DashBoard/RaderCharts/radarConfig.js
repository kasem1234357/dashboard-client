export const radarConfig = (ctx)=>{
 const gradient = (ctx,color1,color2)=>{
  let gradients = ctx.createLinearGradient(0, 0, 0, 400);
  gradients.addColorStop(0, color2);   
  gradients.addColorStop(1, color1);
  return gradients
 }
 const RadarData =
  {
   labels: [
       'totalCustomers',
       'yearlySalesTotal',
       'yearlyTotalLikes',
       'yearlyTotalSoldUnits',
       'yearlyTotalSubscribing',
   ],
  datasets: [{
   label: 'My First Dataset',
   data: [65, 59, 90, 81, 56, ],
   fill: true,
    // backgroundColor: gradient(ctx,"#00D5FF",'#01F0D1'),
   borderColor: 'rgb(255, 99, 132)',
   backgroundColor:'red',
   pointBackgroundColor: 'rgb(255, 99, 132)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgb(255, 99, 132)'
  },{
   label: 'My Second Dataset',
   data: [28, 48, 40, 19, 96, ],
   fill: true,
   // backgroundColor: gradient(ctx,'#F699D0','#FEC2A0'),
   borderColor: 'rgb(54, 162, 235)',
   pointBackgroundColor: 'rgb(54, 162, 235)',
   pointBorderColor: '#fff',
   pointHoverBackgroundColor: '#fff',
   pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
  }
 
 const RadarOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  elements:{
   point:{
    borderWidth:0
   }
  },
  scales: {
   r:{
    ticks:{
     backdropColor:'transparent',
     color:'#7a8195'
    },
    pointLabels:{
     color:'#7a8195'
    }
   }
  },
  plugins:{
    legend:{
      labels:{
        color:"#7a8195"
      }
     }
  }
 };
 return {
  RadarData,
  RadarOptions
 }
}



