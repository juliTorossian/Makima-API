-- INSERT USUARIO

INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioRol, usuarioActivo)
VALUES ((SELECT getNewId()), "tst", "Torossian", "julian.torossian@outlook.com", "JTAdmin", "123", "ADMIN", true)
;

-- UPDATE USUARIO

UPDATE usuario
SET usuarioNombre = "Julian",
	usuarioApellido = "Torossian",
    usuarioMail = "julian.torossian@outlook.com",
    usuarioUsuario = "JTAdmin",
    usuarioPass = "1234",
    usuarioRol = "ADMIN"
WHERE usuarioId = "d246a6b26efc4cf129a40361"
;

-- UPDATE CONTRASEÑA

UPDATE usuario
SET usuarioPass = "1234"
WHERE usuarioId = "d246a6b26efc4cf129a40361"
;

-- DELETE USUARIO

DELIMITER $$
DROP PROCEDURE IF EXISTS delete_usuario$$
CREATE PROCEDURE delete_usuario(id char(24))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxUsuario(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE usuario
		SET usuarioActivo = false
		WHERE usuarioId = id
		;
    ELSE
		DELETE FROM usuario
		WHERE usuarioId = id
		;
    END IF;

END$$
DELIMITER ;

CALL delete_usuario("876b2e568a135e92f47e12a7"); -- elimina

-- SELECT USUARIO

SELECT * FROM usuario;

-- SELECT USUARIO ACTIVOS

SELECT * FROM usuario WHERE usuarioActivo = true;

-- SELECT USUARIO POR ROL

SELECT * 
FROM usuario 
WHERE 	usuarioActivo = true AND
		usuarioRol = 'ADMIN'
;

-- INICIAR SESION

SELECT COUNT(usuarioId)
FROM usuario
WHERE 	usuarioUsuario = "JTAdmin" AND
		usuarioPass = "123"
;

DELIMITER $$
CREATE FUNCTION getCantEventosxUsuario(id CHAR(24)) RETURNS INT
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(ae.audiEId) 
						FROM audievento AS ae
						INNER JOIN evento AS e ON e.eventoId = ae.audiEEvento
						WHERE 	ae.audiEEvento = id      	AND
								e.eventoCerrado = false		AND
								e.eventoEtapa = ae.audiEEtapa
                    );
	RETURN cantidad;
END$$
DELIMITER ;

SELECT getCantEventosxUsuario("JTADMIN");