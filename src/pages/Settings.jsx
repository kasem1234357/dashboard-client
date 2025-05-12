import React, { Suspense, useEffect, useRef } from 'react'
import '../styles/settings.css'
import logo from '../assets/user_placeholder.png'

import { Bulb } from '../components/icons/SvgIcons'
import { useState } from 'react'
import { motion } from "framer-motion"
import { useSelector,useDispatch} from 'react-redux'
import InviteCode from '../components/Boxes/InviteBox/InviteCode'
import { handleClick, toastConfig } from '../configs/notificationConfig'
import { validateUser } from '../utils/updateValidation'
import { toggleDarkMode, toggleNotification, updateUserProfileImg } from '../redux/slices/userSlice'
import {emData} from '../components/Data/employeeData'
import axiosConfig from '../configs/axiosConfig'
import EmployeeBox from '../components/Boxes/employeeBox/EmployeeBox'
import { config_scale } from '../configs/motionConfig'
import { protectRoute } from '../utils/protectRoutes'
import useUpload from '../hooks/useUpload'
import { toast } from 'react-toastify'
import { toastMessage } from '../utils/toastMassege'
import EmployeeSection from '../components/settings/EmployeeSection/EmployeeSection'
function Settings() {
  const dispatch = useDispatch()
  const notification = useSelector(state =>state.user.notification)
  const isDarkMode = useSelector(state =>state.user.darkMode)
  const ID = useSelector(state => state.user?.user?._id)
  const userRole = useSelector(state =>state.user.user.role)
  const user = useSelector(state => {
    if(state.user?.user){
      const {email,username} =state.user?.user
      return ({email,username} )
    }
    return null
    } )
    const reduxProfileImg = useSelector(state =>state.user?.user?.profileImg)
 
  const [pass,setpass] =useState("")
  const [userData,setUserData] = useState(user)
  const [isPassChange,setIsPassChange] = useState(false)
  const [checkPass,setCheckPass]=useState("")
  const [focused, setFocused] = useState(false);
  const { fileData,uploadData,reset,imgName,type,size,ext } = useUpload()
  const inputRef = useRef(null);
  const [isNewImgUpload,setIsNewImgUpload] = useState(false)
  const [profileImg,setProfileImg] = useState(reduxProfileImg?.url )
  const handleFocus=()=>{
   setFocused(true);
  }
  
  const updateUser = async()=>{
   
    try {
      
      if(validateUser(userData.username,userData.email,pass,checkPass,isPassChange)){
       await protectRoute().handle('put',`/api/users/${ID}`,isPassChange?{...userData,password:pass}:userData).then(()=>{
        handleClick({type:"warn",msg:"user data updated"})
       })
      //  axiosConfig.put(`/api/users/${ID}`,isPassChange?{...user,password:pass}:user,{
      //     headers:{
      //       "Authorization":`Bearer ${accessToken}`
      //     }
      //   }).then(()=>{
      //     handleClick({type:"warn",msg:"user data updated"})
      //   })
      }
    } catch (error) {
      handleClick({type:"error",msg:"system error"})
    }
  }
  const handleFile=(e)=>{
    console.log('test');
       uploadData(e,(result)=>{
        
        
           setProfileImg(result)
           setIsNewImgUpload(true)
       })
  }
  const uploadImageToServer = async()=>{
    const galleryName = new Date().getTime()
    try {
      
      await toast.promise(protectRoute().handle('post',`/api/users/profileImg`,{profileImg,galleryName:reduxProfileImg.galleryName || galleryName,public_id:reduxProfileImg.public_id || null}).then((res)=>{
        dispatch(updateUserProfileImg(res.data.data))
        setIsNewImgUpload(false)
        inputRef.current.value = null
        reset()
        return res
      }),toastMessage(),toastConfig)
    }  catch (error) {
      handleClick({type:"error",msg:"system error"})
    }
  }
  const removeProfileImg = async()=>{
    try {
      await toast.promise(protectRoute().handle('delete',`/api/users/profileImg`,).then((res)=>{
        dispatch(updateUserProfileImg(null))
        setProfileImg(null)
        setIsNewImgUpload(false)
        inputRef.current.value = null
        reset()
        return res
      }),toastMessage(),toastConfig)
    }  catch (error) {
    
    }
  }
  return (
    <Suspense fallback={<div className="loading_auth"> <span className="loader_auth"></span> </div>}>
    <motion.div {...config_scale} className='settings'>
         <div className="settings__header flex">
           <div className="settings__header__text">
             <h2>General Details</h2>
             <span>Update your photo and personal details here</span>
           </div>
           <div className="settings__header__controls">
             <button onClick={(e)=>{
               e.stopPropagation()
               e.preventDefault()
                          setUserData(user)
                          setpass("")
                          setCheckPass("")
             }}>cancel</button>
             <button className='save--btn' onClick={updateUser}>save</button>
           </div>
         </div>
         <div className="settings__content flex">
           <div className="settings__content__userInfo">
             <div className="content__userInfo__box Personal--information">
             <h3>Personal information</h3>
             <h4>full Name</h4>
                 <div className="dataInfo--box name--box flex">
                   <input type="text" value={userData?.username } onChange={(e)=>{
                     setUserData({...userData,username:e.target.value})
                   }} />
                 </div>
                 <h4>Email Address</h4>
                 <div className="dataInfo--box">
                   <input type="email" name="" id="" value={userData?.email } onChange={(e)=>{
                     setUserData({...userData,email:e.target.value})
                   }} />
                 </div>
             </div>
              <div className="content__userInfo__box Change--password">
                 <h3> Change password</h3>
                 <div className="dataInfo--box password--box">
                   <div className="password--box__row flex">
                   <label htmlFor="">new password</label>
                 <input onBlur={handleFocus}
           focused={focused.toString()}
           value={pass}
           onChange={(e)=>{
            if(e.target.value !== "") setIsPassChange(true)
            else setIsPassChange(false)
            setpass(e.target.value)}} pattern= {`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`} type="password" />
                
                   </div>
                   
                   <div className="password--box__row flex">
                   <label htmlFor="">new password</label>
                 <input onBlur={handleFocus}
                 value={checkPass}
           focused={focused.toString()} pattern= {pass}
           onChange={(e)=> setCheckPass(e.target.value)}  type="password" />
            <span className='error text-main' style={{maxWidth:'45ch'}}>Passwords don't match!</span>
                   </div>
                 </div>
                 
              </div>
              <div className="content__userInfo__box Short--kit">
              <h3>short keyboards</h3>
              <div className="short--keyboards ">
              <div className="short--keyboards--box1 flex">
                <div className="short--keyboards--icons flex">
                <div className="icon">
                  CTRL
                </div>
                <div className="icon">
                  G
                </div>
                </div>
                <span>Add new task</span>
              
              </div>
              <div className="short--keyboards--box1 flex">
                <div className="short--keyboards--icons flex">
                <div className="icon">
                  CTRL
                </div>
                <div className="icon">
                  shift + P
                </div>
                </div>
                <span>Add new product</span>
              
              </div>
              <div className="short--keyboards--box1 flex">
                <div className="short--keyboards--icons flex">
                <div className="icon">
                  CTRL
                </div>
                <div className="icon">
                  F10
                </div>
                </div>
                <span>mute Notification</span>
              
              </div>
              <div className="short--keyboards--box1 flex">
                <div className="short--keyboards--icons flex">
                <div className="icon">
                  CTRL
                </div>
                <div className="icon">
                  D / L
                </div>
                </div>
                <span>Dark/Light mode</span>
              
              </div>
              </div>
              </div>
              {userRole === 'super_admin'&&
              <EmployeeSection/>
              }
              
           </div>
           <div className="settings__content__others flex">
           <div className="settings__content__others--box">
             <div className="settings--profile flex">
               <img src={profileImg || logo} alt="" />
               <div className="settings--profile--text">
                 
                 <h3>Edit your photo</h3>
                 <span onClick={removeProfileImg} style={{
                  cursor:'pointer'
                 }}>Delete</span> <span className='update--btn' onClick={async()=>{
                  if(fileData && isNewImgUpload){
                   await uploadImageToServer()
                  }
                 }}>update</span>
               </div>
               
             </div>
             <label htmlFor="profile_img" className="settings--profile--dragArea" style={{
               cursor:'pointer'
             }} onClick={(e)=>{
              if(fileData){
                 e.preventDefault()
                  inputRef.current.value = null;
                  setIsNewImgUpload(false)
                  reset()
                  setProfileImg(reduxProfileImg?.url)
                
              }
             }}>
                 { fileData ? <p><span>reset</span></p>: <p><span>click to upload </span> or drag to here</p> }
                 </label>
                 <input ref={inputRef} type="file" id="profile_img" name="profile_img" accept='image/*' onChange={handleFile} style={{display:'none'}}/>
           </div>
           {userRole === 'super_admin'&&
           <div className="settings__content__others--box">
           <div className="settings__content__others--row flex">
             <InviteCode/>
           </div>
           
           
         </div>
           }
           
           <div className="settings__content__others--box settings__content__others--row--controls">
             <div className="settings__content__others--row flex">
               <span >Notification</span>
               <input type="checkbox" name="Notification" id="Notification" checked={notification} onChange={()=>{
                 dispatch(toggleNotification())
               }}/>
                <label htmlFor="Notification"> <span ><Bulb width={'20px'}/></span> </label>
             
             </div>
             <div className="settings__content__others--row  flex">
               <span >Dark mode</span>
               <input type="checkbox" name="Dark" id="Dark" checked={isDarkMode } onChange={()=>{
                dispatch(toggleDarkMode())
               }} />
                <label htmlFor="Dark"> <span ><Bulb width={'20px'}/></span> </label>
             </div>
             
           </div>
           {/* <div className="settings__content__others--box">
            
           </div> */}
           </div>
         </div>
    </motion.div>
    </Suspense>
  )
}

export default Settings
