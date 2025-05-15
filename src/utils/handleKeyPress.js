import store from "../redux/store";
import { toggleNotification, updateDarkMode } from "../redux/slices/userSlice";

export const handleKeyPress = (event,navigate) => {
    console.log(event);
    const tasknumber = store.getState().user.taskNumber
    const productNumber = store.getState().user.productNumber
    if(event.ctrlKey){
       
        if(event.shiftKey){
            if(event.keyCode === 80){
                 event.preventDefault()
                navigate(`crud/product/${productNumber +1}`,{ state: { dataInfo: null, type: "New" }})
            }
        }
        switch (event.keyCode) {
             
             case 71:{
                event.preventDefault()
                navigate(`tasks/task/${tasknumber +1}`,{ state: { dataInfo:null, type:"New",state:'To do'} })}
                break;
              case 68:{
                event.preventDefault()
                store.dispatch(updateDarkMode(true))
            }
              break;
              case 76:{
                event.preventDefault()
                store.dispatch(updateDarkMode(false))
            }
              break;
              case 121:{
                event.preventDefault()
                store.dispatch(toggleNotification())
            }
            default:return null
        }
        
    }
   
    // if (event.shiftKey && event.keyCode === 78) {
    //   console.log("Hello");
    // }
    // console.log(`Key pressed: ${event.key}`);
  };