import React from "react";
import ProductInfo from "../ProductInfo";
import "./add.css";
import ImgBox from "../../Boxes/imgBox/ImgBox";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion"
import UploadingBox from "../../Boxes/uploadBox/UploadingBox";
import { handleClick } from "../../../configs/notificationConfig";
import { useDispatch, useSelector } from "react-redux";
import { updateProductNumber } from "../../../redux/slices/userSlice";
import axiosConfig from '../../../configs/axiosConfig'
import { uploadImg } from "../../../utils/uploadImg";
import useCalender from "../../../hooks/useCalender";
import useTime from "../../../hooks/useTime";
import { uploadDetails } from "../../../utils/uploadDetails";
import { config_scale } from "../../../configs/motionConfig";
//======================================================================//
//*************************default product data**********************  *//
const defaultProduct = {
  title: "",
  count: 0,
  price: 0,
  barCode: "",
  profileImg: { url: "",public_id:"" },
  otherImg: [
    { id: 0, url: "",public_id:"" },
    { id: 1, url: "",public_id:"" },
    { id: 2, url: "",public_id:"" },
  ],
  coupon: "",
  couponPersent: 0,
  type: "",
  tags: [],
  desc: "",
  colors: [],
  galleryName:''
};
//=============================================================================//
function Add() {
  const dispatch = useDispatch()
  const productNumber = useSelector(state =>state.user.productNumber)
  const location = useLocation();
  const data = location?.state.dataInfo;
  const [type, setType] = useState(location?.state.type);
  // console.log(type);
  const [newData, setNewData] = useState(defaultProduct);
  const [images, setImages] = useState([]);
  const [uploadImagesStatus,setUploadImagesStates]=useState(false)
  const [showModel, setShowModel] = useState(false);
  const [uploadingProgress, setUploadingProgress] = useState(0);
  const {currentDay,currentMonth,currentYear} = useCalender()
  const {getTime} = useTime()
  const ImgUrl = (type,id)=>{
    
    const url = images.find(img => {
      if((img.type === type) && (img.index === id)){
        return img
      }
    } )?.imgData || ''
    return url 
  }
  const createGalleryName = ()=>{
      return `${currentYear}${currentMonth.index+1}${currentDay.index}${getTime().hour}${getTime().minute}${getTime().seconds}`
  }
  //====================================================================//
  /* 
   update data 
  */
  useEffect(() => {
    console.log('test');
    if (data !== null) {
      setNewData(data);
      console.log(data);
    }
  }, []);
  //====================================================================//
  //====================================================================//

  const updateImgData =(fileData,name,type='add')=>{
    if(type === 'add'){
      const index = name.split("-")[1]
      const nameRef = name.split("-")[0]
    setImages(prev =>{
      
      const data= {}
      data.index= parseInt(index)
      data.type =nameRef
      data.imgData = fileData
      
      prev.push(data)
       return prev
     })
    }
    if(type === 'remove'){
      setImages(prev =>{
        return prev.filter(img =>name !== `${img.type}-${img.index}` )
      })
    }

  }
  const save = (e) => {
    try {
      e.preventDefault();
      console.log(images);
    uploadImg(
        {index:0,count:images.length,images,galleryName:createGalleryName()},
        {setNewData,setShowModel,setUploadingProgress,setUploadImagesStates}
        );
        
        
    } catch (error) {
      console.log(error)
    }
   
  };
  useEffect(()=>{
    if(uploadImagesStatus){
      uploadDetails({type,newData,productNumber},{setNewData,dispatch,setType,setShowModel,setUploadingProgress})
      console.log('finally i can have a peace with this bug ')
    }
  },[uploadImagesStatus])
  return (
    <motion.div {...config_scale} className="flex addProduct">
      {showModel ? (
        <UploadingBox uploadingProgress={uploadingProgress} setShowModel={setShowModel}/>
      ) : null}
      <div className="addProduct__images flex">
        <div className="addProduct__images__box flex">
          <div className="addProduct__images__main ">
            <ImgBox
              imgUrl={ImgUrl('profileImg',0) || newData.profileImg.url || ""}
              updateFn={updateImgData}
              name={"profileImg-0"}
            />
          </div>
          <div className="addProduct__images__others flex">
            <div className="addProduct__images__others__box ">
              <ImgBox
                imgUrl={ImgUrl('otherImg',1) || newData.otherImg[0]?.url || ""}
                updateFn={updateImgData}
                name={"otherImg-1"}
              />
            </div>
            <div className="addProduct__images__others__box ">
              <ImgBox
                imgUrl={ImgUrl('otherImg',2) || newData.otherImg[1]?.url || ""}
                updateFn={updateImgData}
                name={"otherImg-2"}
              />
            </div>
            <div className="addProduct__images__others__box ">
              <ImgBox
                imgUrl={ImgUrl('otherImg',3) || newData.otherImg[2]?.url || ""}
                updateFn={updateImgData}
                name={"otherImg-3"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="addProduct__info">
        <ProductInfo data={newData} setNewData={setNewData} save={save} upateImgData={updateImgData} images={images} imgUrl={ImgUrl}/>
      </div>
    </motion.div>
  );
}

export default Add;
