
-- INSERT ROL

INSERT INTO rol(rolId, rolDescripcion, rolNivel)
VALUES  ("TEST", "TESTEOS", 0)
;

-- UPDATE ROL

UPDATE rol
SET rolDescripcion = "testssss"
WHERE rolId = "TEST"
;

-- DELETE ROL

DELETE FROM rol
WHERE rolId = "TEST"
;

-- SELECT ROLS

SELECT * FROM rol;

-- SELECT ROL

SELECT * FROM rol WHERE rolId = "DESA";
