
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FormInput from './FormInput'
import {schema} from '../../utils/validateSchema'
import './form.css'
import axiosConfig from "../../configs/axiosConfig";
import { handleClick, toastConfig } from '../../configs/notificationConfig';
import { logUser } from '../../redux/slices/userSlice';
import { toast } from 'react-toastify';
import { toastMessage } from '../../utils/toastMassege';
function Login() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const status = useSelector(state =>state.user.status)
  const [values,setValues]=useState({
    email:'',
    password:''
  })
    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await toast.promise(axiosConfig
          .post(`api/auth/login`, {
           ...values,
          })
          .then((responce) => {
             dispatch(logUser(responce.data.data));
             return responce
           // Navigate("/");
          }),toastMessage(),toastConfig)
      } catch (error) {
        console.log(error);
      }
    };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //    dispatch(logUser({initialUser:values}))
  // };

  const onChange=(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  useLayoutEffect(()=>{
    if(status ===  'succeeded'){handleClick({type:'success',msg:"user log in"})
      Navigate('/')
  } 
   

  },[status])
  const forgetPassword = async ()=>{

     try {
      toast.promise(axiosConfig.post('/api/auth/forgetPassword',{
        email:values.email
      }),toastMessage(),toastConfig)
     } catch (error) {
      
     }
  }
  return (
    <div className="form-box2 bg-gray flex f-column padding">
   <form className='bg-gray flex f-column flow text-white' onSubmit={handleSubmit} >
     
   {schema(values).login.map(input=>{

return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
})}
     <div className='flex flex-between checkbox'>
       <div className='flex center' >
        
       <input className='none' type="checkbox" name="remmember" id="remmember" />
       <label className='custom-check' htmlFor="remmember"></label>
       <span>Remmember me</span>
       </div>
     
     <p className='text-main' onClick={forgetPassword} >forget password</p>
     </div>
     <input className='submit ' type="submit" value={'Login Now'} />
   </form>
   </div>
  )
}

export default Login