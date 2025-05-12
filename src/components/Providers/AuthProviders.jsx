import React, { Suspense, useMemo, useState } from "react";
import Account from "../../pages/Account";
import { getUser } from "../../redux/actions/auth";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import { ToastContainer } from "react-toastify";
import '../../styles/loader_auth.css'
import { getStatus } from "../../redux/slices/userSlice";
import useCalender from "../../hooks/useCalender";
import useTime from "../../hooks/useTime";
import ForgetPassword from "../form/ForgetPassword";
import { Route, Routes } from "react-router-dom";
import axiosConfig from '../../configs/axiosConfig'
const AuthProvider = ({ children }) => {
  const [isFirstFetsh,setIsFirstFetsh]=useState(true)
  const dispatch = useDispatch()

  const loading = useSelector(state => state.user.loading)
  loading  &&  dispatch(getUser())
 const status = useSelector(state => state.user.status)
 const auth = useSelector(state => state.user.auth)
 if((status === 'failure')&& !auth &&isFirstFetsh){
  axiosConfig.get('api/auth/token',{withCredentials:true}).then(res =>{
    const {accessToken}=res.data.data
    localStorage.setItem('accessToken',accessToken)
    dispatch(getUser())
  }).catch(err => console.log(err))
  setIsFirstFetsh(false)
 }
  const PageContent = useMemo(() => {
    return !auth ? (
      <div className="App flex">
      <Routes>
         <Route  path='/login' element={<Account />}/>
         <Route path='/forgetPassword/:tokenId' element={<ForgetPassword/>}/>
         <Route path="*" element={<Account/>}/>
         
      
       </Routes>
       <ToastContainer/>
      </div>
    ) : (
      children
    );
  }, [auth]);


  return  status === 'loading'? <div className="loading_auth"> <span className="loader_auth"></span> </div> 
  :PageContent
};

export default AuthProvider;
