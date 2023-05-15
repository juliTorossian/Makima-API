
INSERT INTO usuario(usuarioId, usuarioNombre, usuarioApellido, usuarioMail, usuarioUsuario, usuarioPass, usuarioActivo, usuarioColor)
VALUES ((SELECT getNewId()), "Administrador", "Temporal","", "Root", "123", 1, "#3ACEE5");