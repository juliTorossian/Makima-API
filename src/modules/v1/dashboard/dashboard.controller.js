import * as model from "./dashboard.model.js";

export const getUltimosMovimientos = async (req, res, next) => {
    try {
        const { cantidad, rol } = req.query;
        let ultimosMovimientos = await model.getUltimosMovimientos(cantidad, rol);
        if (ultimosMovimientos){
            res.status(200).json({
                success: true,
                data: ultimosMovimientos
            });
        }else{
            res.status(404).json({
                success: false,
                data: {
                    message: "Not found"
                }
            });
        }
    } catch (err) {
        next(err);
    }
}