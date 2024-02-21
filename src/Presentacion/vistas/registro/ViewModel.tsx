import { useState } from "react";


 const RegistroVIewModel = () => {
    const [valores, setValores] = useState({
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        password:'',
        confirmarPassword:'',


    });
    const onChange=(propiedad:string,value:any)=>{
        setValores({
            ...valores,
                [propiedad]:value
            
        })

    }
    const registro = ()=>{
        console.log(valores);
        
    }
    
  return { ...valores,onChange,registro}
  
  
}
export default RegistroVIewModel;
