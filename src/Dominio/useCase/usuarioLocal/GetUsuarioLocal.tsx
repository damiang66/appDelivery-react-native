import { UsuarioLocalRepositoryImp } from "../../../Data/repository/UsuarioLocalRepository";
import { Usuario } from "../../entity/Usuario";
const {getUsuario} = new UsuarioLocalRepositoryImp();
export const GetUsuarioLocalUseCase = async ()=>{
    return await getUsuario();
}