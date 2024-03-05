import { Usuario } from "../entity/Usuario";

export interface UsuarioLocalRepository {
    save(usuario:Usuario):Promise<void>;
    getUsuario():Promise<Usuario>;
    eliminar():Promise<void>;
}