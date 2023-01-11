import { existeUsuario } from "./usuario.model.js";

export const iniciarSesion = async (req, res) => {
    // console.log(req.query.page)
    const usuario = await existeUsuario(req.query.usuario, req.query.password);

    if (usuario){
        res.json(usuario); 
    }else{
        const error = {
            "error": "No existe usuario"
        };
        res.json(error);
    }

    // res.json(eventos);
    // res.send('ok');
}
