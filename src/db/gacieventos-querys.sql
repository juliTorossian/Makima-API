SELECT * FROM gacieven.evento;

USE gacieven;

SELECT 	e.eventoId,
		e.eventoTipo,
        e.eventoNumero,
        e.eventoTitulo,
        ta.tareaNombre,
        (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
        (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
        (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta' 
FROM evento as e
INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea
WHERE	e.eventoEtapa = tet.etEtapa
;

DELIMITER $$
DROP PROCEDURE IF EXISTS select_eventos$$
CREATE PROCEDURE select_eventos(pagina int, cantidad int)
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    
    SET @query = CONCAT("SELECT e.eventoId,
								e.eventoTipo,
								e.eventoNumero,
								e.eventoTitulo,
								ta.tareaNombre,
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta' 
						FROM evento as e
						INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea
						WHERE	e.eventoEtapa = tet.etEtapa
                        LIMIT ",
                        (pagina - 1) * cantidad,
                        ",",
                        cantidad
                        );
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END;$$
DELIMITER ;

CALL select_eventos(3, 10);

SELECT count(eventoId) as 'total' FROM evento;
