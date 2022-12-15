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
("CAS",1000,"Evento de Testeo 3",0,1,1,1,1,"2022-12-05 21:13:00",15),
("CUS",1002,"Evento de Testeo 4",0,1,1,2,1,"2022-12-06 21:13:00",20),
("CAS",1001,"Evento de Testeo 5",0,3,1,1,1,"2022-12-07 21:13:00",200),
("ORG",1000,"Evento de Testeo 6",0,1,1,1,1,"2022-12-08 21:13:00",152),
("ORG",1001,"Evento de Testeo 7",0,1,1,1,1,"2022-12-09 21:13:00",28),
("ORG",1002,"Evento de Testeo 8",0,1,1,1,1,"2022-12-10 21:13:00",85),
("CUS",1003,"Evento de Testeo 9",0,1,1,1,1,"2022-12-11 21:13:00",65),
("CUS",1004,"Evento de Testeo 10",0,1,1,1,1,"2022-12-12 21:13:00",148),
("CAS",1002,"Evento de Testeo 11",0,1,1,1,1,"2022-12-13 21:13:00",65),
("CAS",1003,"Evento de Testeo 12",0,1,1,1,1,"2022-12-14 21:13:00",48),
("MEJ",1000,"Evento de Testeo 13",0,1,1,1,1,"2022-12-15 21:13:00",213),
("MEJ",1001,"Evento de Testeo 14",0,1,1,2,1,"2022-12-16 21:13:00",598),
("ORG",1003,"Evento de Testeo 15",0,1,1,1,1,"2022-12-17 21:13:00",231),
("CUS",1005,"Evento de Testeo 16",0,1,1,1,1,"2022-12-18 21:13:00",12),
("CUS",1006,"Evento de Testeo 17",0,1,1,1,1,"2022-12-19 21:13:00",32),
("CAS",1004,"Evento de Testeo 18",0,1,1,1,1,"2022-12-20 21:13:00",85),
("CAS",1005,"Evento de Testeo 19",0,1,1,1,1,"2022-12-21 21:13:00",28),
("CUS",1007,"Evento de Testeo 20",0,1,1,2,1,"2022-12-22 21:13:00",65),
("CUS",1008,"Evento de Testeo 21",0,1,1,1,1,"2022-12-23 21:13:00",148),
("ORG",1004,"Evento de Testeo 22",0,1,1,1,1,"2022-12-24 21:13:00",895),
("CAS",1006,"Evento de Testeo 23",0,1,1,1,1,"2022-12-25 21:13:00",20),
("CAS",1007,"Evento de Testeo 24",0,1,1,1,1,"2022-12-26 21:13:00",1),
("CUS",1009,"Evento de Testeo 25",0,1,1,1,1,"2022-12-27 21:13:00",20);

INSERT INTO audiEvento(audiEEvento,audiEEtapa,audiEUsuario,audiEFecha) VALUES
(1,1,1,"2022-12-05 21:05:00");

INSERT INTO hora(horaInicio,horaFinal,horaFecha,horaUsuario,horaEvento) VALUES
("22:23:00","22:43:00","2022-12-05",1,1);