import z from "zod";

/** 
    {
        "sigla": "SIG"
        "nombre": "Producto de testeo",
        "entorno": "WEB"
    }
**/

// const roles = await rolModel.getRoles();

const produtoEsquema = z.object({
    sigla: z.string().max(5),
    nombre: z.string().max(45),
    entorno: z.string().max(5)
});

export const validarProducto = (input) => {
    return produtoEsquema.safeParse(input);
}

export const validacionParcialProducto = (input) => {
    return produtoEsquema.partial().safeParse(input);
}
