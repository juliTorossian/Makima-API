import z from "zod";

/** 
    {
        "sigla": "SIG"
        "nombre": "Producto de testeo",
        "entorno": "WEB"
    }
**/

const esquema = z.object({
    sigla: z.string().max(5),
    nombre: z.string().max(45),
    entorno: z.string().max(5)
});

export const validarId = (input) => {
    return z.object({ productoId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
