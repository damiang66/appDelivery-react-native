import React, { useEffect, useState } from 'react'
import { LoginAuthCase } from '../../../Dominio/useCase/auth/loginAuth';
import { SaveUsuarioLocalUseCase } from '../../../Dominio/useCase/usuarioLocal/SaveUsuarioLocal';
import { GetUsuarioLocalUseCase } from '../../../Dominio/useCase/usuarioLocal/GetUsuarioLocal';
import { useUsuarioLocal } from '../../hook/useUsuarioLocal';
 const HomeVIewModel = () => {
   const {user,getUsuarioSession}=useUsuarioLocal();
   console.log('USUARIO DE SESSION: ' + JSON.stringify(user));
   
    
    const [valores, setValores] = useState({
        email:'',
        password:''
    });
    const [errorMensaje, setErrorMensaje] = useState('')
    const onChange=(propiedad:string,value:any)=>{
        setValores({
            ...valores,
                [propiedad]:value
            
        })

    }
    const login = async ()=>{
        if (isValidForm()){
            const respuesta = await LoginAuthCase(valores.email,valores.password)
            console.log('RESPUESTA: ' + JSON.stringify(respuesta));
            if(!respuesta.success){
                console.log(respuesta.message);
                
                setErrorMensaje(respuesta.message);
            }else{
              await SaveUsuarioLocalUseCase(respuesta.data); 
              getUsuarioSession();

            }
        }
      
        
    }
    const isValidForm = ():boolean=>{
        if (valores.email==='' ){
            setErrorMensaje('El campo email se encuentra vacio')
            return false;
        }
        if (valores.password==='' ){
            setErrorMensaje('El campo password se encuentra vacio')
            return false;
        }
        return true;
    }
    
  return { ...valores,onChange,errorMensaje,isValidForm,login,user}
  
  
}
export default HomeVIewModel;
