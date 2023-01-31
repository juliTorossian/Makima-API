-- INSERT PRODUCTO

INSERT producto(productoNombre, productoModulo, productoSubModulo, productoEntorno, productoActivo)
VALUE ("PrdTesteo", "VEN", "SQLs", "WEB", true)
;

-- UPDATE PRODUCTO

UPDATE producto
SET productoNombre = "nuevo nombre",
	productoModulo = "VEN",
    productoSubModulo = "SQLs",
    productoEntorno = "WEB"
WHERE productoId = 3
;

-- DELETE PRODUCTO

DELIMITER $$
DROP PROCEDURE IF EXISTS delete_producto$$
CREATE PROCEDURE delete_producto(id INT)
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxProducto(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE producto
		SET productoActivo = false
		WHERE productoId = id
		;
    ELSE
		DELETE FROM producto
		WHERE productoId = id
		;
    END IF;

END$$
DELIMITER ;

CALL delete_producto(1); -- desactiva
CALL delete_producto(4); -- elimina

-- REACTIVAR PRODUCTO

UPDATE producto
SET productoActivo = true
WHERE productoId = 1 AND
productoActivo = false
;

-- SELECT PRODUCTOS

SELECT * FROM producto WHERE productoActivo = true;

-- SELECT PRODUCTO

SELECT * FROM producto WHERE productoActivo = true AND productoId = "2";

-- MISSELANEOUS

DELIMITER $$
CREATE FUNCTION getCantEventosxProducto(id INT) RETURNS INT
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoProducto = id
                    );
	RETURN cantidad;
END$$
DELIMITER ;

SELECT getCantEventosxProducto(2);