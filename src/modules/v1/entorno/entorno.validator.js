import z from "zod";

/** 
    {
        id: id del entorno,
        nombre: nombre del entorno,
    }
**/

const esquema = z.object({
    nombre: z.string().max(45)
});

export const validarId = (input) => {
    return z.object({ entornoId: z.string().max(4) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
