import { UsuarioLocalRepositoryImp } from "../../../Data/repository/UsuarioLocalRepository";
import { Usuario } from "../../entity/Usuario";
const {save} = new UsuarioLocalRepositoryImp();
export const SaveUsuarioUseCase = async (usuario:Usuario)=>{
    return await save(usuario);
}