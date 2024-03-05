import React, { useEffect, useState } from 'react'
import { GetUsuarioLocalUseCase } from '../../Dominio/useCase/usuarioLocal/GetUsuarioLocal';
import { Usuario } from '../../Dominio/entity/Usuario';

export const useUsuarioLocal = () => {
  const [user,setUser] = useState<Usuario>()
  useEffect(() => {
    getUsuarioSession();
    }, [])
    const  getUsuarioSession = async()=>{
        const usuario =  await GetUsuarioLocalUseCase();
       // console.log('USUARIO SESSION: ' + JSON.stringify(usuario));
        setUser(usuario);
        
    }
  return {user,
    getUsuarioSession,
  }
}
