import { useState } from "react";
import { ApiDelivery } from "../../../Data/source/remote/api/ApiDelivery";
import axios from "axios";


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
    const registro = async()=>{
        try {
          
            console.log(ApiDelivery.toString);
            
            const response = await ApiDelivery.post('/usuario/crear',valores)
            console.log(response);
            
        } catch (error) {
            console.log('Error: ' + error);
            
            
        }
     
        
    }
    
  return { ...valores,onChange,registro}
  
  
}
export default RegistroVIewModel;
