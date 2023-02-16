
-- GET TIPO EVENTO

SELECT * FROM tipoevento WHERE tipoEventoActivo = true;

SELECT * FROM tipoevento;

-- INSERT TIPO EVENTO

INSERT INTO tipoEvento(tipoEventoId, tipoEventoDesc, tipoEventoActivo)
VALUES ("TES", "tipo de testeo", true)
;

-- UPDATE TIPO EVENTO

UPDATE tipoevento 
SET tipoEventoDesc = 'Eventos de la Empresa' 
WHERE tipoEventoId = 'ORG'
;

-- DELETE TIPO EVENTO
-- VER SI HACER UN HARD DELETE O UN SOFT DELETE
-- CORRESPONDE UN SOFT, PARA NO PERDER LOS EVENTOS YA CREADOS | SI NO TIENE EVENTOS CREADOS HARD DELETE, SI TIENE EVENTOS SOFT DELETE

DELIMITER $$
DROP PROCEDURE IF EXISTS delete_tipoEvento$$
CREATE PROCEDURE delete_tipoEvento(id CHAR(3))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxTipoEvento(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE tipoevento 
		SET tipoEventoActivo = false
		WHERE tipoEventoId = id
		;
    ELSE
		DELETE FROM tipoevento
		WHERE tipoEventoId = id
		;
    END IF;

END$$
DELIMITER ;

CALL delete_tipoEvento('CUS'); -- desactiva
CALL delete_tipoEvento('TES'); -- elimina

-- REACTIVAR TIPO EVENTO

UPDATE tipoEvento
SET tipoEventoActivo = true
WHERE 	tipoEventoId = 'CUS' AND
		tipoEventoActivo = false
;

-- GET TAREAS Y ORDEN
SELECT 	et.etEvento,
		et.etTarea,
        et.etEtapa,
        t.tareaNombre
FROM evento_tarea AS et
INNER JOIN tarea AS t ON t.tareaId = et.etTarea
WHERE et.etEvento = 'TES'
ORDER BY et.etEtapa
;

-- INSERT TAREA AL TIPO EVENTO

INSERT INTO evento_tarea(etEvento, etTarea, etEtapa)
VALUES 	('TES', 1, 1),
		('TES', 6, 2)
;

-- GET TAREA SEGUN ORDEN

SELECT *
FROM evento_tarea
WHERE	etEvento = 'ORG' AND
		etEtapa = 1
;

-- UPDATE ORDEN DE TAREA
UPDATE evento_tarea
SET etEtapa = 3
WHERE 	etEvento = 'TES' AND
		etTarea = 6
;

-- DELETE TAREA DEL EVENTO

DELETE FROM evento_tarea
WHERE 	etEvento = 'TES' AND
		etTarea = 6
;

-- MISSELANEOUS

-- GET CANTIDAD DE EVENTOS CON ESTE TIPO

DELIMITER $$
CREATE FUNCTION getCantEventosxTipoEvento(tipo CHAR(3)) RETURNS INT
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoTipo = tipo AND
								eventoCerrado = false
                    );
	RETURN cantidad;
END$$
DELIMITER ;

SELECT getCantEventosxTipoEvento("CUS");




