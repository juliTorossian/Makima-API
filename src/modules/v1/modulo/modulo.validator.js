
import z from "zod";

/** 
    {
        "id": row.moduloId,
        "nombre": row.moduloNombre,
        "padre": row.moduloPadre
    }
**/

const moduloEsquema = z.object({
    nombre: z.string().max(45),
    padre: z.string().max(60).nullable().optional()
});

export const validarModuloId = (input) => {
    return z.object({ moduloId: z.string().max(4) }).safeParse(input);
}
export const validarModulo = (input) => {
    return moduloEsquema.safeParse(input);
}
export const validacionParcialmodulo = (input) => {
    return moduloEsquema.partial().safeParse(input);
}
