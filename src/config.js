import {config} from "dotenv";
config();

export const PORT = process.env.PORT || '3000';

let devaux = (process.env.DEV) ? (process.env.DEV == "1") : false;
export const DEV = devaux;

export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '3306';
export const DB_DATABASE = process.env.DB_DATABASE || 'gacieventos';
export const DB_USER = process.env.DB_USER || 'sa';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'segura';

export const MAIL_USER = process.env.MAIL_USER || '';
export const MAIL_PASS = process.env.MAIL_PASS || '';