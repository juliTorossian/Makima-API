import * as model from "./usuario.model.js";

export const insertUsuario = async (req, res) => {

    const ok = await model.insertUsuario(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateUsuario = async (req, res) => {

    const ok = await model.updateUsuario(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteUsuario = async (req, res) => {

    const ok = await model.deleteUsuario(req.params.usuarioId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const reactivarUsuario = async (req, res) => {

    const ok = await model.reactivarUsuario(req.params.usuarioId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const iniciarSesion = async (req, res) => {

    const usuarioToken = await model.existeUsuario(req.query.usuario, req.query.password);

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

export const getEventosUsuarioEstadisticas = async (req, res) => {
    const eventos = await model.getEventosUsuarioEstadisticas(req.params.usuarioId);

    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}