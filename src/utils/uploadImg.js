import { handleClick } from "../configs/notificationConfig";
import axiosConfig from '../configs/axiosConfig'
export const uploadImg = (sourceData,callbacks) => {
  const {images,galleryName} = sourceData
  let {index,count} = sourceData
 console.log(index,count)
  const {setNewData,setShowModel,setUploadingProgress,setUploadImagesStates} =callbacks
  if (count <= 0) {
    setUploadImagesStates(true)
  }
    if(count > 0){
      try {
        setShowModel(true);
        console.log(images[index]);
        axiosConfig
          .post(`/api/products/images`, {...images[index],galleryName})
          .then((res) => {
            setNewData((prev) => {
              const {data} =res.data
              prev.galleryName = data.galleryName
              if (data.type === "otherImg") {
                prev[data.type][data.index - 1].url =
                  data.url;
                  prev[data.type][data.index - 1].public_id = data.public_id
  
              }
              if (data.type === "profileImg") {
                console.log(prev[data.type]);
                prev[data.type].url = data.url;
                prev[data.type].public_id = data.public_id
              }
              if(data.type === "frontImg"){
                prev.colors[data.index][data.type].url=data.url
                prev.colors[data.index][data.type].public_id=data.public_id
              }
              if(data.type === "backImg"){
                prev.colors[data.index][data.type].url=data.url
                prev.colors[data.index][data.type].public_id=data.public_id
              }
             
              return prev;
            });
  
            console.log(`image ${index} uploaded`);
            index++;
            count--;
              setUploadingProgress((prev) => prev + 1);
            uploadImg({...sourceData,index:index++, count:count--},callbacks);
            
          });
      } catch (error) {
        handleClick({ type: "error", msg: "some thing wrong" });
        callbacks.setShowModel(false);
      
      }
    }


   
  };