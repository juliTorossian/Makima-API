USE gacieventos;
SELECT * FROM audievento;
DELETE FROM audievento WHERE audiEId <> "";

SELECT * FROM eventoAdicion;
DELETE FROM eventoAdicion WHERE eAdId <> "";

SELECT * FROM hora;
DELETE FROM hora WHERE horaId <> "";

SELECT * FROM registrohora;
DELETE FROM registrohora WHERE regHoraId <> "";

SELECT * FROM evento;
DELETE FROM evento WHERE eventoid <> "";