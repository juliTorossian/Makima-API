import { log, error, flash, warning, info } from "./helper/debugger.js"
import { createPool } from "mysql2/promise";
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from "./config.js";


export const pool = createPool({
    connectionLimit: 100,
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

// log("conectado a la base de datos");
// error("Mensaje de error");
// info("mesaje de informacion");
// flash("flash");
// warning("warning")