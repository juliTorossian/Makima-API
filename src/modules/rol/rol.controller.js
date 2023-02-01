import * as model from "./rol.model.js";

export const insertRol = async (req, res) => {

    let ok = await model.insertRol(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const updateRol = async (req, res) => {

    let ok = await model.updateRol(req.body);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const deleteRol = async (req, res) => {

    let ok = await model.deleteRol(req.params.rolId);

    if (ok > 0){
        res.status(201).send("ok");
    }else{
        res.status(404).send('error');
    }

}

export const getRoles = async (req, res) => {
    const roles = await model.getRoles();

    if (!(roles == null)){
        res.json(roles);
    }else{
        res.status(404).send('error');
    }
}
export const getRol = async (req, res) => {
    const rol = await model.getRol(req.params.rolId);

    if (!(rol == null)){
        res.json(rol);
    }else{
        res.status(404).send('error');
    }
}