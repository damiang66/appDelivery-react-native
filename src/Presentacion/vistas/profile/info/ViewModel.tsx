import React from 'react'
import { DeleteUsuarioLocalUseCase } from '../../../../Dominio/useCase/usuarioLocal/DeleteUsuarioLocal';

 const ProfileInfoViewModel = () => {
    const removeSession = async()=>{
        await DeleteUsuarioLocalUseCase();

    }
  return {removeSession
}
}
export default ProfileInfoViewModel;