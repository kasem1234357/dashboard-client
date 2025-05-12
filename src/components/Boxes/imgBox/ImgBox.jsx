import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Close } from '../../icons/SvgIcons';
import useUpload from '../../../hooks/useUpload';

function ImgBox({imgUrl,name,updateFn}) {
 const [imgData,setImgData]=useState('')
//  console.log(imgUrl);
 const [uploadedImg,setUploadedImg]=useState('')
 const [propertyImage, setPropertyImage] = useState({ name: "", url: "" });
 const {uploadData,fileData,imgName,path,reset} = useUpload()

 useEffect(()=>{
  // console.log(imgUrl);
 setImgData(imgUrl)
 },[imgUrl])
 useEffect(()=>{
   setPropertyImage({ name: imgName, url: fileData })
  //  console.log(fileData);
  //  console.log(imgData);
   setUploadedImg(fileData) 
       fileData&& updateFn(fileData,name,'add')
 },[fileData])

  return (
   <div className="addImg">
    {(imgData === '' && uploadedImg === '' )?(
     <>
        <label className='addImg--icon' htmlFor={name}><h1>+</h1></label>
     <input className='img--file' accept="image/*" type="file"  name={name} id={name} onChange={(e)=>{
       console.warn(e.target.files)
       uploadData(e)
      }} />
     </>
    ):<>
    <Close width={"20px"} onClick={()=>{
      setImgData("")
      updateFn('',name,'remove')
      setPropertyImage({ name: "", url: "" })
      reset()
    }} className="remove-img-icon" color={"#fff"}/>
       <img src={imgData || uploadedImg} alt="" srcset="" style={{zIndex:1000}} />
    </>
    }
     
     </div>
  )
}

export default ImgBox