import z from "zod";

/** {
        "usuario": "idusuario",         //* usuario
        "fecha": "27-03-2023",          //* fecha de registro
        "horas": [
            {
                "evento": "idevento",   //* evento
                "final": "10:20",  //* inicio de registro
                "horaFin": "11:20",     //* fecha de registro
                "observaciones": "obs", //* observaciones de registro
                "total": 1     //* total horas
            }
        ]
    }
**/

const esquemaHora = z.object({
    evento: z.object({ id: z.string().max(36)}),
    inicio: z.string().min(5).max(8),
    final: z.string().min(5).max(8),
    total: z.number(),
    observaciones: z.string()
})

const esquema = z.object({
    usuario: z.string().max(36),
    fecha: z.string().min(10),
    horas: z.array(esquemaHora)
});

export const validarId = (input) => {
    return z.object({ horaId: z.string().max(36) }).safeParse(input);
}
export const validar = (input) => {
    return esquema.safeParse(input);
}
export const validacionParcial = (input) => {
    return esquema.partial().safeParse(input);
}
