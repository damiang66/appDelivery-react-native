import { AxiosError } from 'axios';
import { Usuario } from '../../Dominio/entity/Usuario';
import { UsuarioRepository } from '../../Dominio/repository/UsuarioRepository';
import { ApiDelivery } from '../source/remote/api/ApiDelivery';
import { ResponseAPiDelivery } from '../source/remote/models/ResponseAPiDelivery';
export class UsuarioRepositoryImpl implements UsuarioRepository{
   async login(email: string, password: string): Promise<ResponseAPiDelivery> {
      try {
        const respuesta = await ApiDelivery.post<ResponseAPiDelivery>('/usuario/login',{email:email,password:password})
      
        return Promise.resolve(respuesta.data)
        
        
       } catch (error) {
        let e = (error as AxiosError)
        console.log('Error: ' + JSON.stringify(e.response?.data));
        const apiError: ResponseAPiDelivery = JSON.parse(JSON.stringify(e.response?.data))
        return Promise.resolve(apiError)
        
       }
    }
    async registrar(usuario: Usuario):Promise<ResponseAPiDelivery>{
       try {
        const respuesta = await ApiDelivery.post<ResponseAPiDelivery>('/usuario/crear',usuario)
      //  console.log("Respuesta repository: " + JSON.stringify(respuesta.data));
        return Promise.resolve(respuesta.data)
        
        
       } catch (error) {
        let e = (error as AxiosError)
        console.log('Error: ' + JSON.stringify(e.response?.data));
        const apiError: ResponseAPiDelivery = JSON.parse(JSON.stringify(e.response?.data))
        return Promise.resolve(apiError)
        
       }
    }
}