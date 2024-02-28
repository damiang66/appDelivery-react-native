import { UsuarioRepositoryImpl } from '../../../Data/repository/UsuarioRepository';
const {login} = new UsuarioRepositoryImpl()
export const LoginAuthCase= async(email:string,password:string)=>{
    return await login(email,password);

}