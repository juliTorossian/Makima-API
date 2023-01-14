-- SELECT EVENTOS

USE gacieven;

DELIMITER $$
DROP PROCEDURE IF EXISTS select_eventos$$ 
CREATE PROCEDURE select_eventos(paginacion boolean, pagina int, cantidad int)
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT e.eventoId,
								e.eventoTipo,
								e.eventoNumero,
								e.eventoTitulo,
								ta.tareaNombre,
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta' 
						FROM evento as e
						INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea
						WHERE	e.eventoEtapa = tet.etEtapa
                        AND     e.eventoCerrado = false
                        LIMIT ",
                        (pagina - 1) * cantidad,
                        ",",
                        cantidad
                        );
	ELSE
		SET @query ="SELECT e.eventoId,
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
                        AND     e.eventoCerrado = false
                        ";
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END$$
DELIMITER ;

CALL select_eventos(0, 3, 10);

-- SELECT POR USUARIO

DELIMITER $$
DROP PROCEDURE IF EXISTS select_eventos_usuario$$
CREATE PROCEDURE select_eventos_usuario(paginacion boolean, pagina int, cantidad int, usuario int)
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.eventoId,
									 e.eventoTipo,
									 e.eventoNumero,
									 e.eventoTitulo,
									 (SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									 (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									 (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									 (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
							 FROM audiEvento AS auE
							 INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							 WHERE 	auE.audiEEtapa = e.eventoEtapa
							 AND 	auE.audiEUsuario = ", usuario, " 
							LIMIT ",
							(pagina - 1) * cantidad,
							",",
							cantidad
							);
	ELSE
		SET @query = CONCAT("SELECT e.eventoId,
							e.eventoTipo,
							e.eventoNumero,
							e.eventoTitulo,
							(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
							(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
							(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
							(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
					FROM audiEvento AS auE
					INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
					WHERE 	auE.audiEEtapa = e.eventoEtapa
					AND 	auE.audiEUsuario = ", usuario
                    );
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END$$
DELIMITER ;

CALL select_eventos_usuario(false, 3, 10, 2);

-- SELECT POR ROL

DELIMITER $$
DROP PROCEDURE IF EXISTS select_eventos_rol$$
CREATE PROCEDURE select_eventos_rol(paginacion boolean, pagina int, cantidad int, rol VARCHAR(5))
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.eventoId,
									e.eventoTipo,
									e.eventoNumero,
									e.eventoTitulo,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
							FROM audiEvento AS auE
							INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario
							WHERE 	auE.audiEEtapa = e.eventoEtapa
							AND 	usu.usuarioRol = '", rol, "' 
							LIMIT ",
							(pagina - 1) * cantidad,
							",",
							cantidad
							);
	ELSE
		SET @query = CONCAT("SELECT  e.eventoId,
									e.eventoTipo,
									e.eventoNumero,
									e.eventoTitulo,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
							FROM audiEvento AS auE
							INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario
							WHERE 	auE.audiEEtapa = e.eventoEtapa
							AND 	usu.usuarioRol = '", rol, "'"
                    );
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END$$
DELIMITER ;

CALL select_eventos_rol(false, 3, 10, "ADMIN");

-- INSERT AUDIEVENTOS

DELIMITER $$
DROP PROCEDURE IF EXISTS insert_audiEvento$$
CREATE PROCEDURE insert_audiEvento(evento int, etapa int, usuario int)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL INSERTAR REGISTRO";
	END;
    
    INSERT INTO audievento(audiEEvento, audiEEtapa, audiEUsuario, audiEFecha)
    VALUES (evento, etapa, usuario, now());

END$$
DELIMITER ;

-- INSERT EVENTOS
DELIMITER $$
DROP PROCEDURE IF EXISTS insert_eventos$$
CREATE PROCEDURE insert_eventos(tipo char(3), titulo varchar(200), cliente int, producto int, usuario int)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL INSERTAR REGISTRO";
	END;
	SET @numero = (SELECT getUltimoNumero_eventos(tipo)) + 1;
	
	INSERT INTO evento(eventoTipo,eventoNumero,eventoTitulo,eventoCerrado,eventoEtapa,eventoCliente,eventoProducto,eventoUsuarioAlta,eventoFechaAlta) 
	VALUES (tipo,@numero,titulo,0,1,cliente,producto,usuario,now());

	SET @eventoId = (SELECT LAST_INSERT_ID());
    
    CALL insert_audiEvento(@eventoId, 1, usuario);
    
END$$
DELIMITER ;

CALL insert_eventos("MEJ", "insert desde sp", 1, 2, 1);

-- UPDATE EVENTOS

DELIMITER $$
DROP PROCEDURE IF EXISTS update_eventos$$
CREATE PROCEDURE update_eventos(eventoCodigo int, titulo varchar(200), cliente int, producto int)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL INSERTAR REGISTRO";
	END;
	
    UPDATE evento
    SET
		eventoTitulo = titulo,
        eventoCliente = cliente,
        eventoProducto = producto
	WHERE
		eventoId = eventoCodigo
	;
    
END$$
DELIMITER ;

CALL update_eventos(30, "Titulo actualizado", 1, 1);


-- DELETE EVENTOS

DELIMITER $$
DROP PROCEDURE IF EXISTS delete_eventos$$
CREATE PROCEDURE delete_eventos(eventoCodigo int)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL ELIMINAR REGISTRO";
	END;
    
    UPDATE evento
    SET
		eventoCerrado = true
	WHERE
		eventoId = eventoCodigo
	;
    
END$$
DELIMITER ;

CALL delete_eventos(30);

-- CIRCULAR EVENTO

DELIMITER $$
DROP PROCEDURE IF EXISTS circular_evento$$
CREATE PROCEDURE circular_evento(id int, etapa int, usuario int)
BEGIN
	UPDATE evento
    SET eventoEtapa = etapa
	WHERE eventoId = id;
    
    CALL insert_audiEvento(id, etapa, usuario);
END$$
DELIMITER ;

CALL circular_evento(20, 2, 1);

-- MISELANIOUS

DELIMITER $$
DROP FUNCTION IF EXISTS getUltimoNumero_eventos;
CREATE FUNCTION getUltimoNumero_eventos(tipo CHAR(3)) RETURNS INT
BEGIN
    DECLARE ultimoNumero INT;
	SET ultimoNumero = (SELECT eventoNumero FROM evento WHERE eventoTipo = tipo ORDER BY eventoNumero DESC LIMIT 1);
	RETURN ultimoNumero;
END$$
DELIMITER ;

SELECT getUltimoNumero_eventos("CUS");

DELIMITER $$
DROP FUNCTION IF EXISTS getNombreTarea_eventos;
CREATE FUNCTION getNombreTarea_eventos(tipo CHAR(3), etapa int) RETURNS VARCHAR(45)
BEGIN
    DECLARE nombre VARCHAR(45);
	SET nombre = (	SELECT t.tareaNombre
					FROM tarea AS t
                    INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId
                    WHERE et.etEvento = tipo
                    AND   et.etEtapa = etapa
                    );
	RETURN nombre;
END$$
DELIMITER ;

SELECT getNombreTarea_eventos("CUS", 6);

-- SIGUIENTE ETAPA

DELIMITER $$
DROP FUNCTION IF EXISTS getEtapaSig_evento;
CREATE FUNCTION getEtapaSig_evento(tipo CHAR(3), etapa int) RETURNS INT
BEGIN
    DECLARE proxEtapa INT;
	SET proxEtapa = (	SELECT et.etEtapa AS etapa
						FROM evento_tarea AS et
						WHERE et.etEvento = tipo
						AND   et.etEtapa > etapa
						ORDER BY et.etEtapa
						LIMIT 1 
                    );
	RETURN proxEtapa;
END$$
DELIMITER ;

SELECT getEtapaSig_evento("CUS", 15);

-- ANTERIOR ETAPA

DELIMITER $$
DROP FUNCTION IF EXISTS getEtapaAnt_evento;
CREATE FUNCTION getEtapaAnt_evento(tipo CHAR(3), etapa int) RETURNS INT
BEGIN
    DECLARE antEtapa INT;
	SET antEtapa = (	SELECT et.etEtapa AS etapa
						FROM evento_tarea AS et
						WHERE et.etEvento = tipo
						AND   et.etEtapa < etapa
						ORDER BY et.etEtapa DESC
						LIMIT 1 
                    );
	RETURN antEtapa;
END$$
DELIMITER ;

SELECT getEtapaAnt_evento("CUS", 1);