import z from "zod";

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


//! ESTIMACION
/**
    {
        "evento": "b5294d37-48d0-11ee-932a-1c1b0d9efeb6",
        "usuario": "0321742d-7dcc-4e33-9b46-6d02aaf99fa1",
        "comentario": "Algun comentario",
        "rol": "ADMIN",
        "estimacion": 31
    }
**/

const estimacionEsquema = z.object({
    evento: z.string().max(36),
    usuario: z.string().max(36),
    comentario: z.string(),
    rol: z.string(),
    estimacion: z.number().nonnegative()
});

export const validarEstimacion = (input) => {
    return estimacionEsquema.safeParse(input);
}

export const validacionParcialEstimacion = (input) => {
    return estimacionEsquema.partial().safeParse(input);
}