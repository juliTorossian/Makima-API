
INSERT INTO rol(rolId, rolDescripcion, rolCtrlTotal)
VALUES('ROOT', 'Rol de configuracion', true);

INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioActivo, usuarioColor)
VALUES ((SELECT getNewId()), 'Administrador', 'Temporal','', 'ROOT', '123', True, '#3ACEE5');