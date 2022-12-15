// const { pool } = require('../bd.js');
import { pool } from '../../db.js';

export const buscarEventos = async (page) => {
    const totalRows = 5;
    page = parseInt(page);
    console.log(page);

    let paginacion = false;
    let params = [];

    let query = 'CALL select_eventos(?,?,?)';

    if (page > 0){
        paginacion = true;

        params.push(paginacion);
        params.push(page);
        params.push(totalRows);

    }else{
        params.push(paginacion);
        params.push(0);
        params.push(0);
    }

    // console.log(query);
    // console.log(params);
    const [ total ] = await pool.query("SELECT count(eventoId) as 'total' FROM evento");
    const totalPages = total[0].total / totalRows;

    const [rows] = await pool.query(query, params);

    // console.log(rows);
    // console.log(rows[0]);

    const results = {
        "info": {
            "total": total[0].total,
            "totalPages": (paginacion ? totalPages : 1 ),
            "next": (page == totalPages ? null : (page + 1)),
            "prev": (page <= 1 ? null : (page - 1))
        },
        "results":rows[0]
    };

    return results;
};
