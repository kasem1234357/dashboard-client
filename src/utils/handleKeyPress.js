import store from "../redux/store";
import { toggleNotification, updateDarkMode } from "../redux/slices/userSlice";

export const handleKeyPress = (event,navigate) => {
    console.log(event);
    const tasknumber = store.getState().user.taskNumber
    const productNumber = store.getState().user.productNumber
    if(event.ctrlKey){
        event.preventDefault()
        if(event.shiftKey){
            if(event.keyCode === 80){
                navigate(`crud/product/${productNumber +1}`,{ state: { dataInfo: null, type: "New" }})
            }
        }
        switch (event.keyCode) {
             case 71:navigate(`tasks/task/${tasknumber +1}`,{ state: { dataInfo:null, type:"New",state:'To do'} })
                break;
              case 68:store.dispatch(updateDarkMode(true))
              break;
              case 76:store.dispatch(updateDarkMode(false))
              break;
              case 121:store.dispatch(toggleNotification())
            default:return null
        }
        
    }
   
    // if (event.shiftKey && event.keyCode === 78) {
    //   console.log("Hello");
    // }
    // console.log(`Key pressed: ${event.key}`);
  };