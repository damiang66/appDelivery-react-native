import { ResponseAPiDelivery } from "../../Data/source/remote/models/ResponseAPiDelivery";
import { Usuario } from "../entity/Usuario";

export interface UsuarioRepository{
    registrar(usuario: Usuario):Promise<ResponseAPiDelivery>
    login(email:string,password:string):Promise<ResponseAPiDelivery>
}