import { body, param } from "express-validator";
import { validateResult } from "./../../../helper/validateHelper.js";

/** 
    {
        "nombre": "julian",         //* nombre del usuario
        "apellido": "torossian",    //* apellido del usuario
        "mail": "mail@mail.com",    //* mail del usuario
        "usuario": "usuario",       //* usuario del usuario
        "password": 123,            //* contraseña del usuario
        "color": "#D677A1",         //* color de usuario 
        "rol": {
            rol1, rol2, rol3
        }
    }
**/

export const insertUsuario = {

    nombre: {
        exists: true,
        trim: true,
        notEmpty: true,
    },
    apellido: {
        exists: true,
        trim: true,
        notEmpty: true,
    },
    mail: {
        exists: true,
        trim: true,
        notEmpty: true,
        isEmail: true,
    },
    usuario: {
        exists: true,
        trim: true,
        notEmpty: true,
    },
    password: {
        exists: true,
        trim: true,
        notEmpty: true,
    },
    color: {
        exists: true,
        trim: true,
        notEmpty: true,
    },
    rol: {
        exists: true,
        isArray: { options: {min:1} }
    }

    //     .exists()
    //     .trim()
    //     .notEmpty()
    //     .withMessage("Debe ingresar un nombre valido."),
    // body('apellido')
    //     .exists()
    //     .trim()
    //     .notEmpty()
    //     .withMessage("Debe ingresar un apellido valido."),
    // body('mail')
    //     .exists()
    //     .trim()
    //     .isEmail()
    //     .withMessage("Debe ingresar un mail valido."),
    // body('usuario')
    //     .exists()
    //     .trim()
    //     .notEmpty()
    //     .withMessage("Debe ingresar un usuario valido."),
    // body('password')
    //     .exists()
    //     .trim()
    //     .notEmpty()
    //     .withMessage("Debe ingresar una contraseña valida."),
    // body('color')
    //     .exists()
    //     .trim()
    //     .notEmpty()
    //     .withMessage("Debe ingresar un color valido."),
    // body('rol')
    //     .exists()
    //     .trim()
    //     .isArray({ min: 1 })
    //     .withMessage("Debe ingresar por lo menos un rol."),
}

//     (req, res, next) => {
//         validateResult(req, res, next);
//     }

// ]

export const updateUsuario = [

    body('nombre')
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar un nombre valido."),
    body('apellido')
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar un apellido valido."),
    body('mail')
        .optional()
        .trim()
        .isEmail()
        .withMessage("Debe ingresar un mail valido."),
    body('usuario')
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar un usuario valido."),
    body('color')
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Debe ingresar un color valido."),
    body('rol')
        .optional()
        .trim()
        .isArray({ min: 1 })
        .withMessage("Debe ingresar por lo menos un rol."),

    (req, res, next) => {
        validateResult(req, res, next);
    }
]