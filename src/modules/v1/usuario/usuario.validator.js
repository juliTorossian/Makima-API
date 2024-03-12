import z from "zod";
import * as rolModel from "./../rol/rol.model.js";

/** 
    {
        "nombre": "julian",         //* nombre del usuario
        "apellido": "torossian",    //* apellido del usuario
        "mail": "mail@mail.com",    //* mail del usuario
        "usuario": "usuario",       //* usuario del usuario
        "password": 123,            //* contraseña del usuario
        "color": "#D677A1",         //* color de usuario 
        "rol": {
            rol1, rol2, rol3
        }
    }
**/

const esquema = z.object({
    nombre: z.string().max(45),
    apellido: z.string().max(60),
    mail: z.string().email().max(60),
    usuario: z.string().max(45),
    password: z.string(),
    color: z.string().length(7),
    rol: z.string().array().max(5)
});

export const validarId = (input) => {
    return z.object({ usuarioId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
