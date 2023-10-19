import multer from "multer";
import * as path from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer storage and file name
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: path.normalize(`${__dirname}\\..\\..\\..\\temp\\`),
//         limits: { fileSize: 10 * 1024 * 1024 * 1024}, // Maximo 10Mb
//         filename: ( req, file, cb ) => {
//             console.log("file");
//             console.log(file);
//             console.log("type");
//             console.log(file.type);
//             cb( null, `${Date.now()}&${file.originalname}`);
//         }
//     })
// })

const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {

        const carpetaNombre = path.normalize(`${__dirname}\\..\\..\\..\\temp\\${req.params.evento}`);
        fs.mkdirSync(carpetaNombre,{recursive:true});
        // console.log(carpetaNombre);
        cb(null, carpetaNombre);
    },
    filename: ( req, file, cb ) => {
        cb(null, Date.now() + "&" + file.originalname);
    }
})

// Create multer upload instance
const upload = multer({ storage: storage });

// Custom file upload middleware
export const uploadMiddleware = (req, res, next) => {


  // Use multer upload instance
    upload.array("files", 5)(req, res, (err) => {
        if (err) {
            console.log(err);
            return res.status(400).json({ error: err.message });
        }

        // Retrieve uploaded files
        const files = req.files;
        const errors = [];

        // Validate file types and sizes
        files.forEach((file) => {
            const allowedTypes = ["image/jpeg", "image/png"];
            const maxSize = 5 * 1024 * 1024; // 5MB   

            // if (!allowedTypes.includes(file.mimetype)) {
            //     errors.push(`Invalid file type: ${file.originalname}`);
            // }

            if (file.size > maxSize) {
                errors.push(`File too large: ${file.originalname}`);
            }
        });

        // Handle validation errors
        if (errors.length > 0) {
        // Remove uploaded files
            files.forEach((file) => {
                fs.unlinkSync(file.path);
            });

            return res.status(400).json({ errors });
        }

        // Attach files to the request object
        req.files = files;

        // Proceed to the next middleware or route handler
        next();
    });
};