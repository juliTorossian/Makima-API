DROP DATABASE IF EXISTS GaciEven;
CREATE DATABASE IF NOT EXISTS GaciEven;

USE GaciEven;

CREATE TABLE `cliente` (
  `clienteId` int auto_increment,
  `clienteSigla` char(5) NOT NULL,
  `clienteNombre` varchar(60),
  PRIMARY KEY (`clienteId`)
);

CREATE TABLE `modulo` (
  `moduloId` char(4) PRIMARY KEY,
  `moduloNombre` varchar(45),
  `moduloPadre` char(4)
);

CREATE TABLE `entorno` (
  `entornoId` char(5) PRIMARY KEY,
  `entornoNombre` varchar(45)
);

CREATE TABLE `producto` (
  `productoId` int PRIMARY KEY auto_increment,
  `productoNombre` varchar(60),
  `productoModulo` char(4),
  `productoSubModulo` char(4),
  `productoEntorno` char(5)
);

CREATE TABLE `rol` (
  `rolId` char(5) PRIMARY KEY,
  `rolDescripcion` varchar(60),
  `rolNivel` int
);

CREATE TABLE `usuario` (
  `usuarioId` int PRIMARY KEY auto_increment,
  `usuarioNombre` varchar(45) NOT NULL,
  `usuarioApellido` varchar(45),
  `usuarioMail` varchar(60) NOT NULL,
  `usuarioUsuario` varchar(45) NOT NULL,
  `usuarioPass` varchar(25) NOT NULL,
  `usuarioRol` char(5) NOT NULL
);

CREATE TABLE `tarea` (
  `tareaId` int PRIMARY KEY auto_increment,
  `tareaNombre` varchar(45),
  `tareaRol` char(5)
);

CREATE TABLE `tipoEvento` (
  `tipoEventoId` char(3) PRIMARY KEY,
  `tipoEventoDesc` varchar(60)
);

CREATE TABLE `evento_tarea` (
  `etEvento` char(3),
  `etTarea` int,
  `etEtapa` int NOT NULL,
  PRIMARY KEY (`etEvento`, `etTarea`)
);

CREATE TABLE `evento` (
  `eventoId` int PRIMARY KEY auto_increment,
  `eventoTipo` char(3),
  `eventoNumero` int,
  `eventoTitulo` varchar(200),
  `eventoCerrado` boolean,
  `eventoEtapa` int,
  `eventoCliente` int,
  `eventoProducto` int,
  `eventoUsuarioAlta` int,
  `eventoFechaAlta` datetime NOT NULL DEFAULT (now()),
  `eventoEstimacion` double
);

CREATE TABLE `EventoAdj` (
  `evAdjId` int PRIMARY KEY auto_increment,
  `evAdjEvento` int NOT NULL,
  `evAdjNombre` varchar(40) NOT NULL,
  `evAdjExt` char(5) NOT NULL,
  `evAdjFile` blob NOT NULL,
  `evAdjTipo` char(10) NOT NULL,
  `evAdjItem` int NOT NULL
);

CREATE TABLE `hora` (
  `horaId` int PRIMARY KEY auto_increment,
  `horaInicio` char(8) NOT NULL,
  `horaFinal` char(8) NOT NULL,
  `horaFecha` date NOT NULL,
  `horaUsuario` int NOT NULL,
  `horaEvento` int NOT NULL
);

CREATE TABLE `audiEvento` (
  `audiEId` int PRIMARY KEY auto_increment,
  `audiEEvento` int NOT NULL,
  `audiEEtapa` int NOT NULL,
  `audiEUsuario` int NOT NULL,
  `audiEFecha` datetime NOT NULL DEFAULT (now())
);

CREATE INDEX `cliente_index_0` ON `cliente` (`clienteSigla`);

CREATE INDEX `producto_index_1` ON `producto` (`productoModulo`);

CREATE INDEX `producto_index_2` ON `producto` (`productoEntorno`);

CREATE INDEX `usuario_index_3` ON `usuario` (`usuarioUsuario`);

CREATE INDEX `usuario_index_4` ON `usuario` (`usuarioRol`);

CREATE UNIQUE INDEX `tarea_index_5` ON `tarea` (`tareaId`, `tareaRol`);

CREATE INDEX `evento_tarea_index_6` ON `evento_tarea` (`etEtapa`);

CREATE UNIQUE INDEX `evento_index_7` ON `evento` (`eventoTipo`, `eventoNumero`);

CREATE INDEX `evento_index_8` ON `evento` (`eventoCliente`);

CREATE UNIQUE INDEX `EventoAdj_index_9` ON `EventoAdj` (`evAdjEvento`, `evAdjTipo`, `evAdjItem`);

CREATE INDEX `hora_index_10` ON `hora` (`horaInicio`, `horaFinal`, `horaFecha`);

CREATE INDEX `hora_index_11` ON `hora` (`horaUsuario`);

CREATE INDEX `hora_index_12` ON `hora` (`horaEvento`);

CREATE INDEX `audiEvento_index_13` ON `audiEvento` (`audiEEvento`);

CREATE INDEX `audiEvento_index_14` ON `audiEvento` (`audiEEtapa`);

CREATE INDEX `audiEvento_index_15` ON `audiEvento` (`audiEUsuario`);

CREATE INDEX `audiEvento_index_16` ON `audiEvento` (`audiEFecha`);

ALTER TABLE `modulo` ADD FOREIGN KEY (`moduloPadre`) REFERENCES `modulo` (`moduloId`);

ALTER TABLE `producto` ADD FOREIGN KEY (`productoModulo`) REFERENCES `modulo` (`moduloId`);

ALTER TABLE `producto` ADD FOREIGN KEY (`productoSubModulo`) REFERENCES `modulo` (`moduloId`);

ALTER TABLE `producto` ADD FOREIGN KEY (`productoEntorno`) REFERENCES `entorno` (`entornoId`);

ALTER TABLE `usuario` ADD FOREIGN KEY (`usuarioRol`) REFERENCES `rol` (`rolId`);

ALTER TABLE `tarea` ADD FOREIGN KEY (`tareaRol`) REFERENCES `rol` (`rolId`);

ALTER TABLE `evento_tarea` ADD FOREIGN KEY (`etEvento`) REFERENCES `tipoEvento` (`tipoEventoId`);

ALTER TABLE `evento_tarea` ADD FOREIGN KEY (`etTarea`) REFERENCES `tarea` (`tareaId`);

ALTER TABLE `evento` ADD FOREIGN KEY (`eventoTipo`) REFERENCES `tipoEvento` (`tipoEventoId`);

ALTER TABLE `evento` ADD FOREIGN KEY (`eventoCliente`) REFERENCES `cliente` (`clienteId`);

ALTER TABLE `evento` ADD FOREIGN KEY (`eventoProducto`) REFERENCES `producto` (`productoId`);

ALTER TABLE `evento` ADD FOREIGN KEY (`eventoUsuarioAlta`) REFERENCES `usuario` (`usuarioId`);

ALTER TABLE `EventoAdj` ADD FOREIGN KEY (`evAdjEvento`) REFERENCES `evento` (`eventoId`);

ALTER TABLE `hora` ADD FOREIGN KEY (`horaUsuario`) REFERENCES `usuario` (`usuarioId`);

ALTER TABLE `hora` ADD FOREIGN KEY (`horaEvento`) REFERENCES `evento` (`eventoId`);

ALTER TABLE `audiEvento` ADD FOREIGN KEY (`audiEEvento`) REFERENCES `evento` (`eventoId`);

ALTER TABLE `audiEvento` ADD FOREIGN KEY (`audiEUsuario`) REFERENCES `usuario` (`usuarioId`);

ALTER TABLE `producto` ADD FOREIGN KEY (`productoModulo`) REFERENCES `producto` (`productoEntorno`);


CREATE TABLE parametros(
	paramId     char(10) primary key,
    paramCodigo varchar(20),
    paramValor  varchar(200)
);


INSERT INTO parametros(paramId, paramCodigo, paramValor)
VALUES ("PAGINACION", "CANTIDAD_FILAS", "5");