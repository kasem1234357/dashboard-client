import {utils,writeFile, readFile,} from "xlsx";
const useExport =()=>{
  /*
    option :{
      limitFields:[],

    }



  */
    const unvalidKey =[]
 const convertArrayToString = (key,item,data,i)=>{
    if(item.hasOwnProperty('length')){
      if(i === 0){
        const state = item.every(el => typeof(el) !=='object')
        if(!state) {
          unvalidKey.push(key)
          return item
        }
        else{
          return item.join(', ')
      }
      }else if(unvalidKey.indexOf(key) === -1){
        return item.join(', ')
      }
     
    }else{
      for(let dataItem of Object.keys(item)){
        data[key+' => '+dataItem] = item[dataItem]
      }
      delete data[key]
    }
 }
    const  generateExcelFile=(data,fileName,option={})=>{
        for(let i=0;i<data.length;i++){
          if(option?.limitFields){
            for(let item of option.limitFields){
              delete data[i][item]
            }
          } 
            for(let dataItem of Object.keys(data[i])){
                if(typeof data[i][dataItem] === 'object'){

                  data[i][dataItem] = convertArrayToString(dataItem,data[i][dataItem],data[i],i)
                }
                if(data[i][dataItem] === undefined){
                  delete data[i][dataItem]
                }
            }
            

        }
      
        const worksheet = utils.json_to_sheet(data);
        console.log(worksheet)
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Sheet1");
        writeFile(workbook, `${fileName}.xlsx`);
      }
      const importExcelFile =(e)=>{
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = readFile(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
      }
      return{
        generateExcelFile,
        importExcelFile
      }
}
export default useExport