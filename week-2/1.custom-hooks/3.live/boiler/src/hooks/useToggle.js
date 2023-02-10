import { useState } from "react";

const useToggle =(initialValue) =>{
 const [value,setVelue] =useState(initialValue);
 
 const toggleValue =() =>{
    setVelue(!value);
 };

 return [value, toggleValue];


};

export default useToggle