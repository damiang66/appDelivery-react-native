import { useState } from "react";
import { ApiDelivery } from "../../../Data/source/remote/api/ApiDelivery";
import { RegistrarAuthCase } from '../../../Dominio/useCase/auth/RegisterAuth';



 const RegistroVIewModel = () => {
    const [errorMensaje, setErrorMensaje] = useState('')
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
    const isValidForm = ():boolean=>{
        if (valores.nombre == ''){
            setErrorMensaje('El campo Nombre se encuentra vacio')
            return false;
        }
        if (valores.apellido == ''){
            setErrorMensaje('El campo Apellido se encuentra vacio')
            return false;
        }
        if (valores.email == ''){
            setErrorMensaje('El campo Email se encuentra vacio')
            return false;
        }
        if (valores.telefono == ''){
            setErrorMensaje('El campo Telefono se encuentra vacio')
            return false;
        }
        if (valores.password == ''){
            setErrorMensaje('El campo Password se encuentra vacio')
            return false;
        }
        if (valores.confirmarPassword == ''){
            setErrorMensaje('El campo para convirmar el password se encuentra vacio')
            return false;
        }
        if (valores.confirmarPassword !== valores.password){
            setErrorMensaje('El campo password y confirmar password no son iguales')
            return false;
        }

        return true;
    }
    const limpiarFormulario = ()=>{
        valores.nombre =''
        valores.apellido=''
        valores.email=''
        valores.telefono=''
        valores.password=''
        valores.confirmarPassword=''
    }
    
    const registro = async()=>{
        
        if(isValidForm()){
            const respuesta = await RegistrarAuthCase(valores)
            console.log("Resultado : " + JSON.stringify(respuesta));
           limpiarFormulario()
          
        }
       
     
        
    }
    
  return { ...valores,onChange,registro,isValidForm,errorMensaje}
  
  
}
export default RegistroVIewModel;
