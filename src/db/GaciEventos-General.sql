
-- FUNCION DE GENERACION ID

DELIMITER $$
DROP FUNCTION IF EXISTS getNewId$$
CREATE FUNCTION getNewId() RETURNS CHAR(24)
BEGIN
    DECLARE id CHAR(24);
	SET id = (SELECT SUBSTR(MD5(RAND()),1,24) AS RandomString);
	RETURN id;
END$$
DELIMITER ;

SELECT getNewId();