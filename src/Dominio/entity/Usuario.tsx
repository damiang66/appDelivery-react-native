export interface Usuario {
    id?: string
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    password: string;
    confirmarPassword: string;
    session_token?: string;

}