import { UsuarioLocalRepositoryImp } from "../../../Data/repository/UsuarioLocalRepository";
import { Usuario } from "../../entity/Usuario";
const {eliminar} = new UsuarioLocalRepositoryImp();
export const DeleteUsuarioLocalUseCase = async ()=>{
    return await eliminar();
}