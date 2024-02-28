import React, { useEffect, useState } from 'react'
import { LoginAuthCase } from '../../../Dominio/useCase/auth/loginAuth';
import { SaveUsuarioUseCase } from '../../../Dominio/useCase/usuarioLocal/SaveUsuario';
import { GetUsuarioUseCase } from '../../../Dominio/useCase/usuarioLocal/GetUsuario';
 const HomeVIewModel = () => {
    useEffect(() => {
    getUsuarioSession();
    }, [])
    const  getUsuarioSession = async()=>{
        const usuario =  await GetUsuarioUseCase();
        console.log('USUARIO SESSION: ' + JSON.stringify(usuario));
        
    }
    
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
              await SaveUsuarioUseCase(respuesta.data); 
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
    
  return { ...valores,onChange,errorMensaje,isValidForm,login}
  
  
}
export default HomeVIewModel;
