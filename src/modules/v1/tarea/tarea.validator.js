import z from "zod";

/** 
    tareaId char(36) PK 
    tareaNombre varchar(45) 
    tareaRol char(5) 
    tareaControla tinyint(1) 
    tareaClave char(10) 
    tareaComentario tinyint(1) 
    tareaColor char(7)
**/

const esquema = z.object({
    nombre: z.string().max(45),
    rol: z.string().max(5),
    clave: z.string().max(10).nullable(),
    // controla: z.boolean(),
    // comentario: z.boolean(),
    color: z.string().max(7)
});

export const validarId = (input) => {
    return z.object({ tareaId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
