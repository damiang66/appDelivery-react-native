import { Usuario } from "../../Dominio/entity/Usuario";
import { UsuarioLocalRepository } from "../../Dominio/repository/UsuarioLocalRepository";
import { LocalStorage } from "../source/remote/local/LocalStorage";
export class UsuarioLocalRepositoryImp implements UsuarioLocalRepository{
  async  eliminar(): Promise<void> {
        const {remove} = LocalStorage();
        await remove('usuario')
    }
    async save(usuario: Usuario): Promise<void> {
        const {save} = LocalStorage();
        await save('usuario',JSON.stringify(usuario))
    }
    async getUsuario(): Promise<Usuario> {
        const {getItem} = LocalStorage();
        const data = await getItem('usuario');
        const usuario:Usuario = JSON.parse(data as any);
        return usuario;
    }

}