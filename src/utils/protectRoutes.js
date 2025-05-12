import axiosConfig from '../configs/axiosConfig'
export const protectRoute = (callBackEvent)=>{
    const accessToken = localStorage.getItem('accessToken') 
    let options = {
        withCredentials:true,
        headers: {
            "Authorization": `Bearer ${accessToken}`
          }
    }
    const operationHandler = async(method,...arg)=>{
      let responce
      const arg2 = [...arg,options] 
      await axiosConfig[method](...arg2).then(res => {
          responce =res
      }).catch(async() =>{
        const accessToken = await generateNewAccessToken()
        options.headers={
          "Authorization": 'Bearer ' +accessToken
        }
        localStorage.setItem('accessToken',accessToken)
         await axiosConfig[method](...arg2).then(res => {
          responce =res
      }).catch(err =>{
        callBackEvent && callBackEvent()
        console.log(err);
        throw err
        //return err
      })
      })
       return responce
      
  }
  return {
    handle:operationHandler
  }

}
const generateNewAccessToken = async()=>{
   
        let responce ; 
         await axiosConfig.get('api/auth/token', {
          withCredentials:true,
      }).then(res =>{
          responce = res
         })
        return responce.data.data.accessToken || ''
  
 
}
