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

// const roles = await rolModel.getRoles();

const usuarioEsquema = z.object({
    nombre: z.string(),
    apellido: z.string(),
    mail: z.string().email(),
    usuario: z.string(),
    password: z.string(),
    color: z.string(),
    // rol: z.array(
    //     z.enum(roles)
    // )
});

export const validarUsuario = (input) => {
    return usuarioEsquema.safeParse(input);
}

export const validacionParcialUsuario = (input) => {
    return usuarioEsquema.partial().safeParse(input);
}
