USE gacieventos;

DELETE FROM audievento
WHERE audiEId != "";

DELETE FROM eventoadicion
WHERE eAdId != "";

DELETE FROM evento
WHERE eventoId != "";

DELETE FROM evento_tarea
WHERE etEvento != "";

DELETE FROM tipoevento
WHERE tipoEventoId != "";

DELETE FROM tarea
WHERE tareaId != "";

DELETE FROM producto
WHERE productoId != "";

DELETE FROM entorno
WHERE entornoId != "";

DELETE FROM modulo
WHERE moduloId != "";

DELETE FROM cliente
WHERE clienteId != "";

