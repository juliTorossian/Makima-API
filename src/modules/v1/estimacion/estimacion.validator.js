import z from "zod";

/**
    {
        "evento": "b5294d37-48d0-11ee-932a-1c1b0d9efeb6",
        "usuario": "0321742d-7dcc-4e33-9b46-6d02aaf99fa1",
        "comentario": "Algun comentario",
        "rol": "ADMIN",
        "estimacion": 31
    }
**/

const esquema = z.object({
    evento: z.string().max(36),
    usuario: z.string().max(36),
    comentario: z.string(),
    rol: z.string(),
    estimacion: z.number().nonnegative(),
    descripcion: z.string().max(1000).optional()
});

export const validarId = (input) => {
    return z.object({ eventoId: z.string().max(36), usuarioId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}