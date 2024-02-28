
import { Usuario } from '../../entity/Usuario';
import { UsuarioRepositoryImpl } from '../../../Data/repository/UsuarioRepository';
const {registrar} = new UsuarioRepositoryImpl()
export const RegistrarAuthCase= async(usuario:Usuario)=>{
    return await registrar(usuario);

}