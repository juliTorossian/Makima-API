// const { pool } = require('../bd.js');
import { pool } from '../../db.js';

export const buscarEventos = async (page) => {
    const totalRows = 5;

    const [ total ] = await pool.query("SELECT count(eventoId) as 'total' FROM evento");
    // console.log(total[0].total);

    const totalPages = total[0].total / totalRows;

    const [rows] = await pool.query('CALL select_eventos(?,?);', [page, totalRows]);

    // console.log(rows);
    // console.log(rows[0]);

    page = parseInt(page)

    const results = {
        "info": {
            "total": total[0].total,
            "totalPages": totalPages,
            "next": (page == totalPages ? null : (page + 1)),
            "prev": (page <= 1 ? null : (page - 1))
        },
        "results":rows[0]
    };


    return results;
};
