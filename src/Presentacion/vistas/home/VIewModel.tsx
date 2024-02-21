import React, { useState } from 'react'

 const HomeVIewModel = () => {
    const [valores, setValores] = useState({
        email:'',
        password:''
    });
    const onChange=(propiedad:string,value:any)=>{
        setValores({
            ...valores,
                [propiedad]:value
            
        })

    }
    
  return { ...valores,onChange}
  
  
}
export default HomeVIewModel;
