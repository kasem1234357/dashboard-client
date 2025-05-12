import { useState } from "react";
function getType(name){
   return name?name.slice(name.lastIndexOf('.')+1,name.length):''
}
const useUpload = () => {
  const [path, setPath] = useState("");
  const [fileData, setData] = useState("");
  const [ext,setExt] = useState('');
  const [name,setName] = useState('');
  const [type,setType] = useState('');
  const [size,setSize] = useState(0)
  const uploadData = (e,callBack) => {
    e.preventDefault();
    const reader = (readFile) =>
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result);
        fileReader.readAsDataURL(readFile);
      });
    if (e.target.files) {
        setName(e.target.files[0]?.name || null)
       reader(e.target.files[0]).then((result) => {
        console.log(e.target.files[0],result);
        console.log(typeof(result));
        
        callBack && callBack(result)
        setData(result)
        setSize(parseFloat(((e.target.files[0].size)/(1024*1024)).toFixed(2)))
        setType(e.target.files[0].type)
        setExt(getType(e.target.files[0].name))

      });
    }
    return ({})
  };
  const reset = ()=>{
    setData('')
    setExt('')
    setName('')
    setSize(0)
    setPath('')
    setType('')
  }
  return {
    path,
    fileData,
    imgName:name,
    type,
    size,
    ext,
    uploadData,
    reset
  };
};
export default useUpload