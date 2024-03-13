import { notFound } from "@hapi/boom";

export const notFoundMiddleware = (req, res) => {
    const { statusCode, payload } = notFound();
    res.status(404).json({success: false, data: {  message: "Not found" }});
}