import { handleClick } from "../configs/notificationConfig";

const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const nameRegex = /^[A-Za-z0-9]{3,16}$/;
export const validateUser = (username,email,password,checkPassword,isPassChange)=>{
  console.log(password)
  console.log(checkPassword)
      if(isPassChange &&!passwordRegex.test(password)){
        handleClick({type:"error",msg:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"})
        return false 
      }
      if(isPassChange &&password !== checkPassword){
        handleClick({type:"error",msg:"password dont match!"})
        return false
      }
      if(!nameRegex.test(username)){
        handleClick({type:"error",msg:"Username should be 3-16 characters and shouldn't include any special character!"})
        return false 
      }
      if(!emailRegex.test(email)){
        handleClick({type:"error",msg:"It should be a valid email address!"})
        return false 
      }
      return true
}