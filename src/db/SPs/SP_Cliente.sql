-- INSERT CLIENTE

INSERT cliente(clienteSigla, clienteNombre, clienteActivo)
VALUE ("TES", "CLIENTE TESTEO", true)
;

-- UPDATE CLIENTE

UPDATE cliente
SET clienteSigla = "TEST",
	clienteNombre = "cliente de testeo"
WHERE clienteId = 3
;

-- DELETE CLIENTE
-- CORRESPONDE UN SOFT, PARA NO PERDER LOS EVENTOS YA CREADOS | SI NO TIENE EVENTOS CREADOS HARD DELETE, SI TIENE EVENTOS SOFT DELETE

DELIMITER $$
DROP PROCEDURE IF EXISTS delete_cliente$$
CREATE PROCEDURE delete_cliente(id char(24))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxCliente(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE cliente
		SET clienteActivo = false
		WHERE clienteId = id
		;
    ELSE
		DELETE FROM cliente
		WHERE clienteId = id
		;
    END IF;

END$$
DELIMITER ;

CALL delete_cliente(1); -- desactiva
CALL delete_cliente(6); -- elimina

-- REACTIVAR CLIENTE

UPDATE cliente
SET clienteActivo = true
WHERE 	clienteId = 1 AND
		clienteActivo = false
;

-- SELECT CLIENTES

SELECT * FROM cliente WHERE clienteActivo = true;

-- SELECT CLIENTE

SELECT * FROM cliente WHERE clienteId = 2 AND clienteActivo = true;

-- MISSELANEOUS

DELIMITER $$
CREATE FUNCTION getCantEventosxCliente(id char(24)) RETURNS INT
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoCliente = id
                    );
	RETURN cantidad;
END$$
DELIMITER ;

SELECT getCantEventosxCliente(4);