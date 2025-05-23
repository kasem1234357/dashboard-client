import { useEffect, useState } from "react";

function clipBoardSupported(successCb=null,failedCb=null) {
    if (navigator.clipboard) {
      console.log("clipboard is supported by this browser :)");
      successCb && successCb()
      return true
    } else {
      console.log("clipboard is NOT supported by this browser :(");
      failedCb && failedCb()
      return false
    }
  }
  const useClipBoard = ()=>{
    const [isPremmisionAllow,setIsPremmisionAllow]=useState(true)
    const [coppedText,setCoppedText] = useState('')
    const copyText =(text,callback)=>{
        if(navigator.clipboard){
            navigator.clipboard.readText()
            navigator.clipboard.writeText(text)
            setCoppedText(text)
            callback && callback()
        }
        
    }
    const readTextFn = (callback)=>{
        if(navigator.clipboard){
            navigator.clipboard.readText()
            callback && callback()
        }
    }
  useEffect(()=>{
    clipBoardSupported()&& setIsPremmisionAllow(true)
  },[])
    // clipBoardSupported()&& setIsPremmisionAllow(true)
     const isClibBoardEmpty = navigator.clipboard?navigator.clipboard.readText()=='':null

    return{
        isPremmisionAllow,
        clipBoardSupported,
        coppedText,
        copyText,
        readTextFn,
        isClibBoardEmpty
    }
  }
  export default useClipBoard