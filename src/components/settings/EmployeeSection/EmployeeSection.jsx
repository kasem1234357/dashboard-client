import React, { useEffect, useState } from 'react'
import EmployeeBox from '../../Boxes/employeeBox/EmployeeBox'
import { toast } from 'react-toastify'
import { toastMessage } from '../../../utils/toastMassege'
import { toastConfig } from '../../../configs/notificationConfig'
import axiosConfig from '../../../configs/axiosConfig'
import { useSelector } from 'react-redux'
function EmployeeSection() {
    const [employeeData,setEmployeeData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)
    const user = useSelector(state =>state.user.user)
    useEffect(()=>{
      const getEmployee = async()=>{
        try {
            await  axiosConfig.get('api/users/all').then(res=>{
                //
               setEmployeeData(res.data.data.users.filter(item =>item.username !== user.username))
            }).catch(err =>{
                setIsError(true)
                console.log(err)
            }).finally(()=>{
                setIsLoading(false)
            })
            
            
            
        } catch (error) {
            
        }
       
      }
      getEmployee()
    },[])
  return (
    <div className="content__userInfo__box  flex f-colump">
              <h3>Employees</h3>
              <div>
              {
               employeeData.length === 0 ? <h4 className='not-found-employee'>No employee found</h4>:
                employeeData?.map(data =>(
                <EmployeeBox key={data._id} data={data} setEmployeeData={setEmployeeData} user={user}/>
              ))
             }
              </div>
            
              </div>
  )
}

export default EmployeeSection