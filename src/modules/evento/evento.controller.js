import * as model from "./evento.model.js";

export const getEventos = async (req, res) => {
    const eventos = await model.getEventos(req.query.page);

    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const getEvento = async (req, res) => {
    const evento = await model.getEvento(req.params.eventoId);
    
    if (!(evento == null)){
        res.json(evento);
    }else{
        res.status(404).send('error');
    }
}

export const getEventosUsuario = async (req, res) => {
    const eventos = await model.getEventosUsuario(req.query.page, req.params.usuario);
    
    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const getEventosRol = async (req, res) => {
    const eventos = await model.getEventosRol(req.query.page, req.params.rol);
    
    if (!(eventos == null)){
        res.json(eventos);
    }else{
        res.status(404).send('error');
    }
}

export const insertEvento = async (req, res) => {

    let ok = await model.insertEvento(req.body);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateEvento = async (req, res) => {

    

    let ok = await model.updateEvento(req.body);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteEvento = async (req, res) => {

    let ok = await model.deleteEvento(req.params.eventoId);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const avanzarEvento = async (req, res) => {
    const ok = await model.avanzarEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}
export const retrocederEvento = async (req, res) => {
    const ok = await model.retrocederEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}

export const reasignarEvento = async (req, res) => {
    const ok = await model.reasignarEvento(req.params.evento, req.query.usuario);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}

export const estimarEvento = async (req, res) => {
    const ok = await model.estimarEvento(req.params.evento, req.query.estimado);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}