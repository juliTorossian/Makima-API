INSERT INTO cliente(clienteSigla,clienteNombre) VALUES
("DILTA","Diltacross"),
("CMP","Comercial CMP");

INSERT INTO producto(productoNombre,productoModulo,productoSubModulo,productoEntorno) VALUES
("VENTAS",NULL,NULL,NULL),
("STOCK",NULL,NULL,NULL);


INSERT INTO rol(rolId,rolDescripcion,rolNivel) VALUES
("ADMIN","Administrativo","1"),
("CONS","Consultor","1"),
("DESA","Desarrollador","1");

INSERT INTO usuario(usuarioNombre,usuarioApellido,usuarioMail,usuarioUsuario,usuarioPass,usuarioRol) VALUES
("julian","Torossian","jtorossian@gaci.com.ar","JTAdmin","123","ADMIN"),
("Iluj","Torossian","julian.torossian@outlook.com","JTCons","123","CONS"),
("Juli","Torossian","julitoro2009@gmail.com","JTDesa","123","DESA");

INSERT INTO tarea(tareaNombre,tareaRol) VALUES
("Ingreso","ADMIN"),
("Autorizacion","ADMIN"),
("Analizar","CONS"),
("Aprobar","ADMIN"),
("Estimar","CONS"),
("Presupuestar","ADMIN"),
("Asignar Desarrollador","CONS"),
("Construir","DESA"),
("Testear","CONS"),
("Distribucion","DESA"),
("Documentacion Interna","DESA"),
("Consolidar","DESA"),
("Documentacion","CONS"),
("Testeo General","CONS"),
("Envio","ADMIN"),
("Propio","ADMIN");

INSERT INTO tipoEvento(tipoEventoId,tipoEventoDesc) VALUES
("CAS","Arreglo de Errores"),
("CUS","Customizacion para cliente"),
("MEJ","Mejora de producto"),
("ORG","Organizacion");

INSERT INTO evento_tarea(etEvento,etTarea,etEtapa) VALUES
("CAS","1","1"),
("CAS","2","2"),
("CAS","4","3"),
("CAS","5","4"),
("CAS","7","5"),
("CAS","8","6"),
("CAS","9","7"),
("CAS","10","8"),
("CAS","11","9"),
("CAS","12","10"),
("CAS","13","11"),
("CAS","14","12"),
("CAS","15","13"),
("CUS","1","1"),
("CUS","2","2"),
("CUS","3","3"),
("CUS","4","4"),
("CUS","5","5"),
("CUS","6","6"),
("CUS","7","7"),
("CUS","8","8"),
("CUS","9","9"),
("CUS","10","10"),
("CUS","11","11"),
("CUS","12","12"),
("CUS","13","13"),
("CUS","14","14"),
("CUS","15","15"),
("MEJ","1","1"),
("MEJ","2","2"),
("MEJ","3","3"),
("MEJ","4","4"),
("MEJ","5","5"),
("MEJ","7","6"),
("MEJ","8","7"),
("MEJ","9","8"),
("MEJ","11","9"),
("MEJ","12","10"),
("MEJ","13","11"),
("MEJ","14","12"),
("MEJ","15","13"),
("ORG","16","1");

INSERT INTO evento(eventoTipo,eventoNumero,eventoTitulo,eventoCerrado,eventoEtapa,eventoCliente,eventoProducto,eventoUsuarioAlta,eventoFechaAlta,eventoEstimacion) VALUES
("CUS",1000,"Evento de Testeo 1",0,1,1,1,1,"2022-12-05 21:05:00",19),
("CUS",1001,"Evento de Testeo 2",0,1,1,1,1,"2022-12-05 21:13:00",30),
("CAS",1000,"Evento de Testeo 3",0,1,1,1,1,"2022-12-05 21:13:00",15);

INSERT INTO audiEvento(audiEEvento,audiEEtapa,audiEUsuario,audiEFecha) VALUES
(1,1,1,"2022-12-05 21:05:00");

INSERT INTO hora(horaInicio,horaFinal,horaFecha,horaUsuario,horaEvento) VALUES
("22:23:00","22:43:00","2022-12-05",1,1);