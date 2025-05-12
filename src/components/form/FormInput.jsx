import React, { useState } from 'react'

function FormInput(props) {
 const { label, errorMessage, onChange,  id, ...inputProps } = props;
 const [focused, setFocused] = useState(false);
 const handleFocus=()=>{
  setFocused(true);
 }
  return (
   <div className='flex f-column'>
   <label htmlFor="">{label}</label>
   <input type="text"
    {...inputProps}
      onFocus={() =>
         inputProps.name === "confirmPassword" && setFocused(true)
       }
      onChange={onChange}
      onBlur={handleFocus}
      focused={focused.toString()}
      autoComplete={true}  />
   <span className='error text-main' style={{maxWidth:'45ch'}}>{errorMessage}</span>
   </div>
  )
}

export default FormInput