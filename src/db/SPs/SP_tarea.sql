
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

-- VER TAREAS ASIGNADAS A UN EVENTO

SELECT 	t.tareaId,
		t.tareaNombre,
        t.tareaRol,
        et.etEvento
FROM tarea AS t
INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId
WHERE et.etEvento = "CUS"
;

-- VER TAREAS NO ASIGNADAS AL EVENTO

SELECT *
FROM tarea AS t
WHERE (SELECT count(et.etTarea) FROM evento_tarea AS et WHERE et.etEvento = 'CUS' AND et.etTarea = t.tareaId) = 0
ORDER BY t.tareaId
;

