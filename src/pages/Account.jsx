import React, { useState } from 'react'
// import {  useSelector } from 'react-redux'
import Login from '../components/form/Login'
import { motion } from "framer-motion"
import Register from '../components/form/Register'
function Account() {
 const [login,setLogin]=useState(true)
  return (
   <motion.div className='flex center form-box f-column'>
    <div className="box2 bg-gray flow">
    <nav className='flex nav-form text-white'>
     <div className={login?'form-active uppercase':'uppercase'}  onClick={()=>setLogin(true)}>Log in</div>
     <div className={!login?'form-active uppercase':'uppercase'} onClick={()=>setLogin(false)}>Sign up</div>
    </nav>
    {login?<Login/>:<Register/>}
    </div>
 </motion.div>
  )
}

export default Account