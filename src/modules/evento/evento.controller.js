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

export const getEventoDetalle = async (req, res) => {
    const evento = await model.getEventoDetalle(req.params.evento);
    
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

    let eventoId = await model.insertEvento(req.body);

    if (!(eventoId === "" || eventoId === undefined)){
        res.send(eventoId);
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

export const comentarEvento = async (req, res) => {
    const ok = await model.comentarEvento(req.body);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }
}
export const comentarEventoArchivo = async (req, res) => {
    // let sampleFile;
    // let uploadPath;
  
    // if (!req.files || Object.keys(req.files).length === 0) {
    //   return res.status(400).send('No files were uploaded.');
    // }
  
    // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    // sampleFile = req.files.sampleFile;
    // uploadPath = __dirname + '/somewhere/on/your/server/' + sampleFile.name;
  
    // // Use the mv() method to place the file somewhere on your server
    // sampleFile.mv(uploadPath, function(err) {
    //   if (err)
    //     return res.status(500).send(err);
  
    //   res.send('File uploaded!');
    // });

    // const ok = await model.comentarEventoArchivo(req.body);

    // if (ok > 0){
    //     res.send("ok");
    // }else{
    //     res.status(404).send('error');
    // }
    const file = req.file

    console.log(file)

    if (!req.file || Object.keys(req.file).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }


    const ok = await model.comentarEventoArchivo(file);

    if (ok > 0){
        res.send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getComentariosEvento = async (req, res) => {
    const comentarios = await model.getComentariosEvento(req.params.evento);

    if (comentarios != null){
        res.json(comentarios);
    }else{
        res.status(404).send('error');
    }
}
export const getTareasPorTipo = async (req, res) => {
    const tareasTipo = await model.getTareasPorTipo();
    
    if (!(tareasTipo == null)){
        res.json(tareasTipo);
    }else{
        res.status(404).send('error');
    }
}

export const getVidaEvento = async (req, res) => {
    const vida = await model.getVidaEvento(req.params.evento);

    if (vida.length > 0){
        res.json(vida);
    }else{
        res.status(404).send('error');
    }
}
