// Dependencies
import { useState } from "react";

const useTable = (steps) => {
  //steps page number ==> total number products / number of element in single view
  // const [steps,setSteps] = useState(stepsNumber)
  const [currentStep, setCurrentStep] = useState(0);
  const [orderBy, setOrderBy] = useState("id");
  const [searchIn, setSearchIn] = useState('id');
  const [searchQuery, setSearchQuery] = useState("");
  const [orderMode, setOrderMode] = useState("desc");
  // number of element in single view
  const [recordsLength, setRecordsLength] = useState(10);

  /**
   * @desc This function using to move one step.
   * @return { void }
   */
  const toNext = () => {
    currentStep + 1 < steps && setCurrentStep((prev) => prev + 1);
  }

  /**
   * @desc This function using to back one step.
   * @return { void }
   */
  const toBack = () => {
    currentStep > 0 && setCurrentStep((prev) => prev - 1);
  }

  /**
   * @desc This function using to get how many skips you want.
   * @return { number }
   */
  const skipsLength = () => Math.ceil(recordsLength * currentStep);

  /**
   * @desc This function using to handle search time to send a request to database.
   * @param { number } time
   * @return { void }
   */
  const handleSearch = (time, callback)=>{
    let timer;
    clearInterval(timer);
    timer = setTimeout(()=> {
      callback();
      clearTimeout(timer);
    }, time);
  }
  
  return {
    currentStep,
    setCurrentStep,
    orderBy,
    steps,
    setOrderBy,
    searchIn,
    setSearchIn,
    searchQuery,
    setSearchQuery,
    orderMode,
    setOrderMode,
    recordsLength,
    setRecordsLength,
    toNext,
    toBack,
    skipsLength,
    handleSearch
  }
}

export default useTable;
