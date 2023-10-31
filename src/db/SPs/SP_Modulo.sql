-- INSERT MODULO

INSERT modulo(moduloId, moduloNombre, moduloPadre)
VALUE ("TEST", "modulo test", null)
;

-- UPDATE MODULO

UPDATE modulo
SET moduloNombre = "modulo",
    moduloPadre = "STK"
WHERE moduloId = "TEST"
;

-- DELETE MODULO

DELETE FROM modulo
WHERE moduloId = "TEST"
;

-- SELECT MODULOS

SELECT * FROM modulo;

-- SELECT MODULO

SELECT * FROM modulo WHERE moduloId = "SQLs";

-- SELECT MODULOS BUSQUEDA

SELECT concat(moduloId, " - ", moduloNombre) AS busqueda FROM modulo;

-- SELECT MODULO POR PADRE

SELECT * FROM modulo WHERE moduloPadre = "STK";