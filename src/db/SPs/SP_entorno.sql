-- INSERT ENTORNO

INSERT entorno(entornoId, entornoNombre)
VALUE ("TEST", "entorno test")
;

-- UPDATE ENTORNO

UPDATE entorno
SET entornoNombre = "entorno"
WHERE entornoId = "TEST"
;

-- DELETE ENTORNO

DELETE FROM entorno
WHERE entornoId = "TEST"
;

-- SELECT ENTORNOS

SELECT * FROM entorno;

-- SELECT ENTORNO

SELECT * FROM entorno WHERE entornoId = "WEB";
