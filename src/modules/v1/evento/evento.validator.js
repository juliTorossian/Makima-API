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


const esquema = z.object({
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

export const validarId = (input) => {
    return z.object({ eventoId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}

