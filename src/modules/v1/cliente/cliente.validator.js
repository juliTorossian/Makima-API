import z from "zod";

/** 
    {
        clienteId char(36) PK 
        clienteSigla char(5) 
        clienteNombre varchar(60) 
        clienteActivo tinyint
    }
**/

const esquema = z.object({
    sigla: z.string().max(5),
    nombre: z.string().max(60),
    // activo: z.boolean().optional()
});

export const validarId = (input) => {
    return z.object({ clienteId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
