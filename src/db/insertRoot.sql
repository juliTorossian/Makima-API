
CREATE DATABASE IF NOT EXISTS gacieventos;
USE gacieventos;

SET GLOBAL log_bin_trust_function_creators = 1;

INSERT INTO rol(rolId, rolDescripcion, rolCtrlTotal, rolCtrlEvento, rolCtrlCliente, rolCtrlProducto, rolCtrlTipo, rolCtrlUsuario, rolCtrlHora)
VALUES('ROOT', 'Rol de configuracion', true, true, true, true, true, true, true);

INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioActivo, usuarioColor)
VALUES ('usuarioRootTemporal', 'Administrador', 'Temporal','', 'ROOT', 'G3U4IjzqPdNqJSDPrePNhg==', True, '#3ACEE5');

INSERT INTO usuariorol(usuRolUsuario, usuRolRol) VALUES ('usuarioRootTemporal', 'ROOT');

SET GLOBAL sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
SET sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';