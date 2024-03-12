import z from "zod";

/** 
    tipoEventoId char(3) PK 
    tipoEventoDesc varchar(60) 
    tipoEventoActivo tinyint(1) 
    tipoEventoColor char(7) 
    tipoEventoPropio tinyint(1)
**/

const esquema = z.object({
    id: z.string().max(3).optional(),
    descripcion: z.string().max(60),
    color: z.string().length(7),
    // propio: z.boolean(),
    // activo: z.boolean().optional()
});

export const validarId = (input) => {
    return z.object({ tipoEventoId: z.string().max(3) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}