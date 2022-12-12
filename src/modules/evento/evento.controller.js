import { buscarEventos } from "./evento.model.js";

export const eventos = async (req, res) => {
    console.log(req.query.page)
    const eventos = await buscarEventos(req.query.page);
    res.json(eventos);
}
