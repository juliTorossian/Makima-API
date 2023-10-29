import * as model from "./usuario.model.js";
import * as validador from "./usuario.validator.js";

export const insertUsuario = async (req, res) => {

    try {

        const resultado = validador.validarUsuario(req.body);
        console.log(resultado);

        if (!resultado.success) {
            // 422 Unprocessable Entity
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }
        const nuevoUsuario = await model.insertUsuario(resultado.data);
    
        if (nuevoUsuario != null){
            res.status(201).json(nuevoUsuario);
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

}

export const updateUsuario = async (req, res) => {

    try {

        const resultado = validador.validacionParcialUsuario(req.body);
        if (!resultado.success) {
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }

        let aux;
        if (!resultado.data.id){
            aux = {id:req.params.usuarioId, ...resultado.data}
        }else{
            aux = resultado.data
        }

        const ok = await model.updateUsuario(aux);

        if (ok > 0){
            res.status(201).json("ok");
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }


}

export const deleteUsuario = async (req, res) => {

    try {

        const ok = await model.deleteUsuario(req.params.usuarioId);

        if (ok > 0){
            res.status(201).json("ok");
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        res.status(500).json(err);
    }


}

export const reactivarUsuario = async (req, res) => {

    try {

        const resultado = validador.validacionParcialUsuario({ id: req.params.usuarioId});
        if (!resultado.success) {
            return res.status(400).json({ error: JSON.parse(resultado.error.message) })
        }

        const ok = await model.reactivarUsuario(resultado.data.id);

        if (ok > 0){
            res.status(201).json("ok");
        }else{
            res.status(404).send('error');
        }

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }

}

export const iniciarSesion = async (req, res) => {

    const { usuario, password } = req.query;

    const usuarioToken = await model.existeUsuario(usuario, password);
    console.log(usuarioToken)

    if (usuarioToken != ""){
        res.json(usuarioToken); 
    }else{
        res.status(404).send('error');
    }
}

export const getUsuarios = async (req, res) => {
    const usuarios = await model.getUsuarios();

    if (!(usuarios == null)){
        res.json(usuarios);
    }else{
        res.status(404).send('error');
    }
}

export const getUsuario = async (req, res) => {

    let usuario = null;
    if (req.query.token){
        usuario = await model.getUsuarioToken(req.params.usuarioId);
    }else{
        usuario = await model.getUsuario(req.params.usuarioId);
    }

    if (!(usuario == null)){
        res.json({"tokenUsuario":usuario});
    }else{
        res.status(404).send('error');
    }
}

export const getUsuariosRol = async (req, res) => {
    const usuarios = await model.getUsuariosRol(req.params.rol);

    if (!(usuarios == null)){
        res.json(usuarios);
    }else{
        res.status(404).send('error');
    }
}

export const getUsuarioDetalle = async (req, res) => {

    const usuario = await model.getUsuarioDetalle(req.params.usuarioId);

    if (!(usuario == null)){
        res.json(usuario);
    }else{
        res.status(404).send('error');
    }
}

export const getUsuarioPreferencias = async (req, res) => {

    const preferencias = await model.getUsuarioPreferencias(req.params.usuarioId);

    if (!(preferencias == null)){
        res.json(preferencias);
    }else{
        res.status(404).send('error');
    }
}

export const setDelUsuarioPreferencias = async (req, res) => {

    const ok = await model.setDelUsuarioPreferencias(req.params.usuarioId,req.params.preferencia);

    if (ok>0){
        res.json(ok);
    }else{
        res.status(404).send('error');
    }
}

export const getEventosUsuarioEstadisticas = async (req, res) => {
    const eventos = await model.getEventosUsuarioEstadisticas(req.params.usuarioId);

    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}