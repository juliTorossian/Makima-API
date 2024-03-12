import z from "zod";

/** 
    rolId char(5) PK 
    rolDescripcion varchar(60)
**/

const esquema = z.object({
    descripcion: z.string().max(60)
});

export const validarId = (input) => {
    return z.object({ rolId: z.string().max(5) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
