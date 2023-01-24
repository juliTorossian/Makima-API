
-- GET TAREA

-- SELECT * FROM tipoevento WHERE tipoEventoActivo = true;

SELECT * FROM tarea;

-- INSERT TAREA

INSERT INTO tarea(tareaNombre, tareaRol)
VALUES ("tarea de Prueba", "DESA")
;

-- UPDATE TAREA

UPDATE tarea
SET tareaNombre = 'Tarea de Testeo',
	tareaRol = 'ADMIN'
WHERE tareaId = 17
;

-- DELETE TAREA
-- VER SI HACE FALTA

-- VER TAREAS DEL ROL

SELECT * 
FROM tarea
WHERE tareaRol = 'DESA'
;


