export interface Admin {
    id_admin?:number;
    nombre_admin?:string;
    apellido_admin?:string;
    telefono?:string;
    email_admin?:string;
    nro_documento?:string;
    rol_admin?:string;
    cod_equipo?:number;
    image?:string;
    created_at?:Date;
    usuario?:string;
    contrasena?:string
}