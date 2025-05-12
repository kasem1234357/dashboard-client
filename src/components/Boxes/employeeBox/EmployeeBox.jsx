import React, { useRef, useState } from 'react'
import logo from '../../../assets/user_placeholder.png'
import { toastConfig } from '../../../configs/notificationConfig'
import { toastMessage } from '../../../utils/toastMassege'
import { toast } from 'react-toastify'
import { protectRoute } from '../../../utils/protectRoutes'
import useOutsideClick from '../../../hooks/useOutsideClick'
function EmployeeBox({data,setEmployeeData,user}) {
  const [openModel,setOpenModel]=useState(false)
  
  const roleBtnRef = useRef(null)
  const removeEmployee = async()=>{
    try {
      await toast.promise(protectRoute().handle('delete',`/api/users/${data._id}`).then(res =>{
        setEmployeeData(prev =>{
          return prev.filter(el=>el._id !== data._id)
        })
        return res
        
      }),toastMessage(),toastConfig)
    } catch (error) {
      
    }
  }
  const changeRole = async(role)=>{
    setOpenModel(false)
    try {
      await toast.promise(protectRoute().handle('post',`/api/users/role/${data._id}`,{
        role:role
      }),toastMessage(),toastConfig)
    } catch (error) {
      
    }
  }
  useOutsideClick(roleBtnRef,()=>{
    setOpenModel(false)
  })
  return (
    <div className='settings__content__others--row flex empeloyee'>
      <div className='flex center'>
      <div className="employeeBox-imgBox">
        <img src={`${data.profileImg.url}`||logo} alt="" />
       </div>
       <div className="employeeBox-infoBox">
        <h4>{data.username}</h4>
        <span>{data.role}</span>
       </div>
      </div>
      
       <div className="employeeBox-controllBox">
       
      {user?.role === 'super_admin' && <button  className='change-role-btn' ref={roleBtnRef} onClick={()=>{
        setOpenModel(prev=>!prev)
      }}>
      {openModel && <ul name="" id="" className='roles-list' >
      
      <li value="normal" onClick={async()=>{
await changeRole('normal')
      }}>normal</li>
      <li value="admin" onClick={async()=>{
await changeRole('admin')
      }}>admin</li>
      <li value="super_admin" onClick={async()=>{
await changeRole('super_admin')
      }}>super admin</li>
      <li value="sales_manger" onClick={async()=>{
await changeRole('sales_manger')
      }}>sales manger</li>
      <li value="Receptionist" onClick={async()=>{
await changeRole('Receptionist')
      }}>Receptionist</li>
     </ul>}
        change Role
        </button>}
        <button className='remove-btn' onClick={removeEmployee}>remove</button>
        
       </div>
    </div>
  )
}

export default EmployeeBox
