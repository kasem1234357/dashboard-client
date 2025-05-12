const intialRateData = 
  [
    {
      title: "Page followers",
      progress: 0,
      number: 0,
      color: "#d9234b",
      numberState: 0,
    },
    {
      title: "Page views",
      progress: 0,
      number: 0,
      color: "#0DB8D3",
      numberState: 0,
    },
    {
      title: "Likes",
      progress: 0,
      number: 0,
      color: "#C33ECE",
      numberState: 0,
    },
    {
      title: "Comments",
      progress: 0,
      number: 0,
      color: "#dfe515",
      numberState: 0,
    },
  ]

export const rateDataGenerator = (data, currentMonthIndex) => {
   const index = parseInt(currentMonthIndex)
   console.log(data,currentMonthIndex)
   const prevIndex = index-1 <0?11:index-1
   const result = [];
  const colors = ["#d9234b","#0DB8D3","#C33ECE","#dfe515"]
  let count = 0
   if(Object.keys(data).length >= currentMonthIndex ){
    data?.monthlyData[index]["month"] &&
    delete data.monthlyData[index]["month"];
  data?.monthlyData[index]["date"] &&
    delete data.monthlyData[index]["date"];
    for (let keys of Object.keys(data.monthlyData[index])) {
      const item = {
        title: keys,
        progress: Object.keys(data).length !== 0 && getProgress(data,keys,index,prevIndex),
        number: data.monthlyData[index][keys],
        color: colors[count],
        numberState: getState(data,keys,index,prevIndex)
      };
      result.push(item);
      count++
    }
   }
   else{
    return intialRateData
   }
   return result
};
export const rateData = [
  {
    title: "Page followers",
    progress: 70,
    number: 3456,
    color: "#d9234b",
    numberState: 10,
  },
  {
    title: "Page views",
    progress: 47,
    number: 564,
    color: "#0DB8D3",
    numberState: 16,
  },
  {
    title: "Likes",
    progress: 20,
    number: 190,
    color: "#C33ECE",
    numberState: -9,
  },
  {
    title: "Comments",
    progress: 25,
    number: 140,
    color: "#dfe515",
    numberState: -12,
  },
];
const getProgress = (data,keys,currentMonthIndex,prevIndex ) => {
  const dataProgress = Math.floor(
    ((data.monthlyData[currentMonthIndex][keys] -
      data.monthlyData[prevIndex][keys]) *
      100) /
      data.monthlyData[currentMonthIndex][keys]
  );
  if(dataProgress <-100 ||dataProgress > 100){
   return 100
  }
  if(dataProgress <0){
   
      return -( dataProgress)
   
  }else{
    return dataProgress
  }
};
const getState = (data,keys,currentMonthIndex,prevIndex ) => {
   const dataProgress = Math.floor(
     ((data.monthlyData[currentMonthIndex][keys] -
       data.monthlyData[prevIndex][keys]) *
       100) /
       data.monthlyData[currentMonthIndex][keys]
   );

   return dataProgress
 };