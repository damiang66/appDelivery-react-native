import { UsuarioLocalRepositoryImp } from "../../../Data/repository/UsuarioLocalRepository";
import { Usuario } from "../../entity/Usuario";
const {getUsuario} = new UsuarioLocalRepositoryImp();
export const GetUsuarioUseCase = async ()=>{
    return await getUsuario();
}