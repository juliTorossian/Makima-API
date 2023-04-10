import * as model from "./dashboard.model.js";

export const getUltimosMovimientos = async (req, res) => {
    const ultMovimientos = await model.getUltimosMovimientos(req.query.cantidad, req.query.rol);

    if (!(ultMovimientos == null)){
        res.json(ultMovimientos);
    }else{
        res.status(404).send('error');
    }
}