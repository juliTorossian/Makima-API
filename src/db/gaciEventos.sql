-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gacieventos
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audievento`
--

DROP TABLE IF EXISTS `audievento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audievento` (
  `audiEId` char(24) NOT NULL,
  `audiEEvento` char(24) NOT NULL,
  `audiEEtapa` int NOT NULL,
  `audiEUsuario` char(24) NOT NULL,
  `audiEFecha` datetime NOT NULL DEFAULT (now()),
  `audiEAdi` char(24) DEFAULT NULL,
  `audiEAccion` char(10) DEFAULT NULL,
  PRIMARY KEY (`audiEId`),
  KEY `audiEvento_index_13` (`audiEEvento`),
  KEY `audiEvento_index_14` (`audiEEtapa`),
  KEY `audiEvento_index_15` (`audiEUsuario`),
  KEY `audiEvento_index_16` (`audiEFecha`),
  CONSTRAINT `audievento_ibfk_1` FOREIGN KEY (`audiEEvento`) REFERENCES `evento` (`eventoId`),
  CONSTRAINT `audievento_ibfk_2` FOREIGN KEY (`audiEUsuario`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audievento`
--

LOCK TABLES `audievento` WRITE;
/*!40000 ALTER TABLE `audievento` DISABLE KEYS */;
INSERT INTO `audievento` VALUES ('0c80bfa0b8c0546eeab4af6d','3f6dc9d64d14339cf46bf6dd',4,'2f0727442b3125f656ec12de','2023-03-18 03:07:36',NULL,'AVANZO'),('16b270ae7bc414415d1759da','3f6dc9d64d14339cf46bf6dd',7,'60dba550879c88cfdd2d4906','2023-03-18 03:12:51',NULL,'AVANZO'),('25cbab27fd9ff4de141d537f','3f6dc9d64d14339cf46bf6dd',11,'264b0ce34fa762a3dba657fe','2023-03-18 21:11:54','801c3bc2b97c793a25c6083b','COMENTARIO'),('283be12c3844c2db3102a000','2e04f25c0bbef8e5f71d1f37',7,'2f0727442b3125f656ec12de','2023-03-18 13:28:15',NULL,'RETROCESO'),('34022ee63825e6a390bd215e','2cbea655b23085e57da2268c',1,'264b0ce34fa762a3dba657fe','2023-03-18 03:04:15',NULL,'CREO'),('38687bf8ebac0664bd67a9ba','3f6dc9d64d14339cf46bf6dd',9,'2f0727442b3125f656ec12de','2023-03-18 03:13:13',NULL,'AVANZO'),('3d12b50ae36d60ca8628206c','3f6dc9d64d14339cf46bf6dd',6,'60dba550879c88cfdd2d4906','2023-03-18 03:08:02',NULL,'AVANZO'),('42ab57f932580d1841730897','2e04f25c0bbef8e5f71d1f37',4,'60dba550879c88cfdd2d4906','2023-03-18 12:49:14',NULL,'AVANZO'),('450980211da0ba414407e645','3f6dc9d64d14339cf46bf6dd',9,'2f0727442b3125f656ec12de','2023-03-18 03:08:58',NULL,'AVANZO'),('6050c97fba07516cc1a769f6','2e04f25c0bbef8e5f71d1f37',7,'b092296c495f89e0ef2ebdfa','2023-03-18 14:03:46',NULL,'REASIGNO'),('65dc2cae2d5f36354210ff5d','3f6dc9d64d14339cf46bf6dd',3,'60dba550879c88cfdd2d4906','2023-03-18 03:06:52',NULL,'AVANZO'),('68f057f29ea6257a0693356f','2cd4fbe3788945eaf7d876a9',1,'264b0ce34fa762a3dba657fe','2023-03-18 03:05:23',NULL,'CREO'),('6b082be990de5fddad90fe66','2e04f25c0bbef8e5f71d1f37',1,'264b0ce34fa762a3dba657fe','2023-03-18 03:04:45',NULL,'CREO'),('859e7d0a4e19bc21fd9b6ba0','2e04f25c0bbef8e5f71d1f37',3,'60dba550879c88cfdd2d4906','2023-03-18 03:14:29',NULL,'AVANZO'),('8b97247e597950dfc8e4750f','56b6f12423b59473d463b106',1,'264b0ce34fa762a3dba657fe','2023-03-18 13:53:36',NULL,'CREO'),('93f184ff682c85bdfabe7e75','3f6dc9d64d14339cf46bf6dd',8,'2f0727442b3125f656ec12de','2023-03-18 03:08:39',NULL,'AVANZO'),('9cffc63657d0c3903511755d','2e04f25c0bbef8e5f71d1f37',6,'264b0ce34fa762a3dba657fe','2023-03-18 13:25:19',NULL,'AVANZO'),('9d0d8c897d1074f7973bfd8e','3f6dc9d64d14339cf46bf6dd',5,'2f0727442b3125f656ec12de','2023-03-18 03:07:52',NULL,'AVANZO'),('9dc7956a15fb68c65ed135da','3f6dc9d64d14339cf46bf6dd',11,'264b0ce34fa762a3dba657fe','2023-03-18 15:56:26',NULL,'CERRO'),('a184293df70cd412369bae0e','2e04f25c0bbef8e5f71d1f37',5,'2f0727442b3125f656ec12de','2023-03-18 13:22:54',NULL,'AVANZO'),('a7b93888a9fd2dd65ec8ac68','2cbea655b23085e57da2268c',2,'264b0ce34fa762a3dba657fe','2023-03-18 13:20:38',NULL,'AVANZO'),('a7eb79f48419843a56d65fec','2e04f25c0bbef8e5f71d1f37',7,'264b0ce34fa762a3dba657fe','2023-03-18 16:27:08','c2a6c54581b89e38e90147c4','COMENTARIO'),('ae84a976a9f5702dfd5ba9d6','3f6dc9d64d14339cf46bf6dd',6,'60dba550879c88cfdd2d4906','2023-03-18 03:12:34',NULL,'AVANZO'),('b4678b0ac4623c7e9e552714','3f6dc9d64d14339cf46bf6dd',5,'2f0727442b3125f656ec12de','2023-03-18 03:09:23',NULL,'RETROCESO'),('b7e3e9cd44714e5ec42a4ef5','2cbea655b23085e57da2268c',3,'60dba550879c88cfdd2d4906','2023-03-18 22:57:05','aa4dc67ead58d17e45d93dc7','COMENTARIO'),('bbc12d3a7f7c4e68101e7573','2e04f25c0bbef8e5f71d1f37',7,'2f0727442b3125f656ec12de','2023-03-18 13:27:13',NULL,'AVANZO'),('c12c51e45a65c4a9ab3bada1','2e04f25c0bbef8e5f71d1f37',2,'264b0ce34fa762a3dba657fe','2023-03-18 03:14:19',NULL,'AVANZO'),('c1c3d3b1fef611b09e970729','a88c71781fa704d9a988cdc5',1,'264b0ce34fa762a3dba657fe','2023-03-18 03:05:04',NULL,'CREO'),('c340a27d4a8a7353800c1652','2cbea655b23085e57da2268c',3,'60dba550879c88cfdd2d4906','2023-03-18 13:21:16',NULL,'AVANZO'),('c7c35f66119b1d660616fb30','3f6dc9d64d14339cf46bf6dd',1,'264b0ce34fa762a3dba657fe','2023-03-18 03:06:22',NULL,'CREO'),('cca656f100d5e4232da6077e','2e04f25c0bbef8e5f71d1f37',8,'60dba550879c88cfdd2d4906','2023-03-18 13:28:03',NULL,'AVANZO'),('d9e2fdc076d0b7477bf3998d','3f6dc9d64d14339cf46bf6dd',7,'60dba550879c88cfdd2d4906','2023-03-18 03:08:34',NULL,'AVANZO'),('dcc8eeb7be690c13ee834f22','3f6dc9d64d14339cf46bf6dd',8,'2f0727442b3125f656ec12de','2023-03-18 03:12:58',NULL,'AVANZO'),('e2f7bae82574a1a8070e12e3','2cbea655b23085e57da2268c',3,'60dba550879c88cfdd2d4906','2023-03-18 22:56:38','5a97e9454d4f4431efbcb498','COMENTARIO'),('f1b2caa7202836fe61326098','2e04f25c0bbef8e5f71d1f37',3,'60dba550879c88cfdd2d4906','2023-03-18 12:49:26',NULL,'RETROCESO'),('f5ed2494fe8daa1076884440','2e04f25c0bbef8e5f71d1f37',4,'60dba550879c88cfdd2d4906','2023-03-18 13:22:49',NULL,'AVANZO'),('f67dcf1f9014410f43c1a2dd','3f6dc9d64d14339cf46bf6dd',11,'264b0ce34fa762a3dba657fe','2023-03-18 03:13:35',NULL,'AVANZO'),('fd20e4b0f3d2014c4c9fac60','3f6dc9d64d14339cf46bf6dd',10,'60dba550879c88cfdd2d4906','2023-03-18 03:13:17',NULL,'AVANZO'),('fe3ee4a703681d16bcb453eb','3f6dc9d64d14339cf46bf6dd',10,'60dba550879c88cfdd2d4906','2023-03-18 03:09:04',NULL,'AVANZO'),('ffcd23959fe32a62b26d55e8','3f6dc9d64d14339cf46bf6dd',2,'264b0ce34fa762a3dba657fe','2023-03-18 03:06:37',NULL,'AVANZO');
/*!40000 ALTER TABLE `audievento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `clienteId` char(24) NOT NULL,
  `clienteSigla` char(5) NOT NULL,
  `clienteNombre` varchar(60) DEFAULT NULL,
  `clienteActivo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`clienteId`),
  KEY `cliente_index_0` (`clienteSigla`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES ('1585833c648dfe42b2e7b878','CFAV','Clinica favaloro',1),('3524f5ee10660f76b18409a3','GACI','Diltacross',1),('65bebd58838348fe056bf6c7','UFAV','Universidad Favaloro',1),('a83388c5255aa9a65e031eb0','CMP','Comercial CMP',1);
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entorno`
--

DROP TABLE IF EXISTS `entorno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entorno` (
  `entornoId` char(5) NOT NULL,
  `entornoNombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`entornoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entorno`
--

LOCK TABLES `entorno` WRITE;
/*!40000 ALTER TABLE `entorno` DISABLE KEYS */;
INSERT INTO `entorno` VALUES ('WEB','Aplicacion Web'),('WIN','Windows');
/*!40000 ALTER TABLE `entorno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `eventoId` char(24) NOT NULL,
  `eventoTipo` char(3) DEFAULT NULL,
  `eventoNumero` int DEFAULT NULL,
  `eventoTitulo` varchar(200) DEFAULT NULL,
  `eventoCerrado` tinyint(1) DEFAULT NULL,
  `eventoEtapa` int DEFAULT NULL,
  `eventoCliente` char(24) DEFAULT NULL,
  `eventoProducto` char(24) DEFAULT NULL,
  `eventoUsuarioAlta` char(24) DEFAULT NULL,
  `eventoFechaAlta` datetime NOT NULL DEFAULT (now()),
  `eventoEstimacion` double DEFAULT NULL,
  PRIMARY KEY (`eventoId`),
  UNIQUE KEY `evento_index_7` (`eventoTipo`,`eventoNumero`),
  KEY `evento_index_8` (`eventoCliente`),
  KEY `eventoProducto` (`eventoProducto`),
  KEY `eventoUsuarioAlta` (`eventoUsuarioAlta`),
  CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`eventoTipo`) REFERENCES `tipoevento` (`tipoEventoId`),
  CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`eventoCliente`) REFERENCES `cliente` (`clienteId`),
  CONSTRAINT `evento_ibfk_3` FOREIGN KEY (`eventoProducto`) REFERENCES `producto` (`productoId`),
  CONSTRAINT `evento_ibfk_4` FOREIGN KEY (`eventoUsuarioAlta`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES ('2cbea655b23085e57da2268c','CUS',1000,'Agregar Filtro de empresas',0,3,'a83388c5255aa9a65e031eb0','22e73c69fc84d1051a211ba0','264b0ce34fa762a3dba657fe','2023-03-18 03:04:15',NULL),('2cd4fbe3788945eaf7d876a9','ORG',1000,'Viajes a clientes',0,1,'3524f5ee10660f76b18409a3','22e73c69fc84d1051a211ba0','264b0ce34fa762a3dba657fe','2023-03-18 03:05:23',NULL),('2e04f25c0bbef8e5f71d1f37','CUS',1001,'Agregar Ordenes de Compras',0,7,'1585833c648dfe42b2e7b878','22e73c69fc84d1051a211ba0','264b0ce34fa762a3dba657fe','2023-03-18 03:04:45',NULL),('3f6dc9d64d14339cf46bf6dd','CAS',1000,'Corregir bug en el home',1,11,'1585833c648dfe42b2e7b878','22e73c69fc84d1051a211ba0','264b0ce34fa762a3dba657fe','2023-03-18 03:06:22',NULL),('56b6f12423b59473d463b106','ORG',1001,'testeo 1',0,1,NULL,NULL,'264b0ce34fa762a3dba657fe','2023-03-18 13:53:36',NULL),('a88c71781fa704d9a988cdc5','MEJ',1000,'Migracion a web modulo Stock',0,1,'3524f5ee10660f76b18409a3','c24ea676a19ad4214aab7fdc','264b0ce34fa762a3dba657fe','2023-03-18 03:05:04',NULL);
/*!40000 ALTER TABLE `evento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_tarea`
--

DROP TABLE IF EXISTS `evento_tarea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_tarea` (
  `etEvento` char(3) NOT NULL,
  `etTarea` char(24) NOT NULL,
  `etEtapa` int NOT NULL,
  `etEtapaRollback` int DEFAULT NULL,
  PRIMARY KEY (`etEvento`,`etTarea`),
  KEY `evento_tarea_index_6` (`etEtapa`),
  KEY `etTarea` (`etTarea`),
  CONSTRAINT `evento_tarea_ibfk_1` FOREIGN KEY (`etEvento`) REFERENCES `tipoevento` (`tipoEventoId`),
  CONSTRAINT `evento_tarea_ibfk_2` FOREIGN KEY (`etTarea`) REFERENCES `tarea` (`tareaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_tarea`
--

LOCK TABLES `evento_tarea` WRITE;
/*!40000 ALTER TABLE `evento_tarea` DISABLE KEYS */;
INSERT INTO `evento_tarea` VALUES ('CAS','0a2cd2e6258e8ba3f1fbacec',3,2),('CAS','25d7027c41a75ab963ebe537',10,5),('CAS','3ee49de94e1dc7398ebad197',6,5),('CAS','46c57154204a6dcf024c5f85',2,NULL),('CAS','4ac8c7bd4d647e75e28eda93',5,NULL),('CAS','56e8801a608c8975fe1e122c',4,NULL),('CAS','7ce7a3c0607fb22a8d77fec4',11,NULL),('CAS','c11d3979df46a61d4e519ef8',1,NULL),('CAS','c1a5e7940180c994bdbb606f',8,NULL),('CAS','e16ac576f37dc484386c4b99',7,NULL),('CAS','f1b888780129e9b8e5471881',9,NULL),('CUS','0a2cd2e6258e8ba3f1fbacec',4,3),('CUS','25d7027c41a75ab963ebe537',12,7),('CUS','3ee49de94e1dc7398ebad197',8,7),('CUS','40240518a035242eb0d8e65a',3,NULL),('CUS','46c57154204a6dcf024c5f85',2,NULL),('CUS','4ac8c7bd4d647e75e28eda93',7,NULL),('CUS','56e8801a608c8975fe1e122c',5,NULL),('CUS','7ce7a3c0607fb22a8d77fec4',13,NULL),('CUS','c11d3979df46a61d4e519ef8',1,NULL),('CUS','c1a5e7940180c994bdbb606f',10,NULL),('CUS','e16ac576f37dc484386c4b99',9,NULL),('CUS','ef73df7e140144880f32aa7a',6,NULL),('CUS','f1b888780129e9b8e5471881',11,NULL),('MEJ','0a2cd2e6258e8ba3f1fbacec',4,3),('MEJ','25d7027c41a75ab963ebe537',11,6),('MEJ','3ee49de94e1dc7398ebad197',7,6),('MEJ','40240518a035242eb0d8e65a',3,NULL),('MEJ','46c57154204a6dcf024c5f85',2,NULL),('MEJ','4ac8c7bd4d647e75e28eda93',6,NULL),('MEJ','56e8801a608c8975fe1e122c',5,NULL),('MEJ','7ce7a3c0607fb22a8d77fec4',12,NULL),('MEJ','c11d3979df46a61d4e519ef8',1,NULL),('MEJ','c1a5e7940180c994bdbb606f',9,NULL),('MEJ','e16ac576f37dc484386c4b99',8,NULL),('MEJ','f1b888780129e9b8e5471881',10,NULL);
/*!40000 ALTER TABLE `evento_tarea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventoadicion`
--

DROP TABLE IF EXISTS `eventoadicion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoadicion` (
  `eAdId` char(24) NOT NULL,
  `eAdEvento` char(24) DEFAULT NULL,
  `eAdTipo` char(10) DEFAULT NULL,
  `eAdComentario` text,
  `eAdAdjFile` tinyint(1) DEFAULT NULL,
  `eAdPathFile` varchar(255) DEFAULT NULL,
  `eAdFecha` datetime DEFAULT NULL,
  `eAdMimeFile` varchar(100) DEFAULT NULL,
  `eAdNombreFile` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`eAdId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventoadicion`
--

LOCK TABLES `eventoadicion` WRITE;
/*!40000 ALTER TABLE `eventoadicion` DISABLE KEYS */;
INSERT INTO `eventoadicion` VALUES ('5a97e9454d4f4431efbcb498','2cbea655b23085e57da2268c','COMENTARIO','<p>Archivo css para tener de referencia</p>',1,'E:\\Proyectos\\Gaci\\Makima-Api\\src\\temp\\1679190998734&theme.css','2023-03-18 22:56:38','text/css','theme.css'),('801c3bc2b97c793a25c6083b','3f6dc9d64d14339cf46bf6dd','COMENTARIO','<p>Este evento fue cerrado pero igual hago un comentario</p>',0,NULL,'2023-03-18 21:11:54',NULL,NULL),('aa4dc67ead58d17e45d93dc7','2cbea655b23085e57da2268c','COMENTARIO','<p>Certificado de wwp</p>',1,'E:\\Proyectos\\Gaci\\Makima-Api\\src\\temp\\1679191025281&Certificado-WWP15.pdf','2023-03-18 22:57:05','application/pdf','Certificado-WWP15.pdf'),('c2a6c54581b89e38e90147c4','2e04f25c0bbef8e5f71d1f37','COMENTARIO','<p>Comentario para ver si sigue funcionando esto</p>',0,NULL,'2023-03-18 16:27:08',NULL,NULL);
/*!40000 ALTER TABLE `eventoadicion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventoadj`
--

DROP TABLE IF EXISTS `eventoadj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoadj` (
  `evAdjId` char(24) NOT NULL,
  `evAdjEvento` char(24) NOT NULL,
  `evAdjNombre` varchar(40) NOT NULL,
  `evAdjExt` char(5) NOT NULL,
  `evAdjFile` blob NOT NULL,
  `evAdjTipo` char(10) NOT NULL,
  `evAdjItem` int NOT NULL,
  PRIMARY KEY (`evAdjId`),
  UNIQUE KEY `EventoAdj_index_9` (`evAdjEvento`,`evAdjTipo`,`evAdjItem`),
  CONSTRAINT `eventoadj_ibfk_1` FOREIGN KEY (`evAdjEvento`) REFERENCES `evento` (`eventoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventoadj`
--

LOCK TABLES `eventoadj` WRITE;
/*!40000 ALTER TABLE `eventoadj` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventoadj` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hora`
--

DROP TABLE IF EXISTS `hora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hora` (
  `horaId` char(24) NOT NULL,
  `horaInicio` char(8) NOT NULL,
  `horaFinal` char(8) NOT NULL,
  `horaFecha` date NOT NULL,
  `horaUsuario` char(24) NOT NULL,
  `horaEvento` char(24) NOT NULL,
  PRIMARY KEY (`horaId`),
  KEY `hora_index_10` (`horaInicio`,`horaFinal`,`horaFecha`),
  KEY `hora_index_11` (`horaUsuario`),
  KEY `hora_index_12` (`horaEvento`),
  CONSTRAINT `hora_ibfk_1` FOREIGN KEY (`horaUsuario`) REFERENCES `usuario` (`usuarioId`),
  CONSTRAINT `hora_ibfk_2` FOREIGN KEY (`horaEvento`) REFERENCES `evento` (`eventoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hora`
--

LOCK TABLES `hora` WRITE;
/*!40000 ALTER TABLE `hora` DISABLE KEYS */;
/*!40000 ALTER TABLE `hora` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulo`
--

DROP TABLE IF EXISTS `modulo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulo` (
  `moduloId` char(4) NOT NULL,
  `moduloNombre` varchar(45) DEFAULT NULL,
  `moduloPadre` char(4) DEFAULT NULL,
  PRIMARY KEY (`moduloId`),
  KEY `moduloPadre` (`moduloPadre`),
  CONSTRAINT `modulo_ibfk_1` FOREIGN KEY (`moduloPadre`) REFERENCES `modulo` (`moduloId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulo`
--

LOCK TABLES `modulo` WRITE;
/*!40000 ALTER TABLE `modulo` DISABLE KEYS */;
INSERT INTO `modulo` VALUES ('MSQL','MySQL',NULL),('SQLs','SQL Server',NULL),('STK','Stock',NULL),('VEN','Ventas',NULL);
/*!40000 ALTER TABLE `modulo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parametros`
--

DROP TABLE IF EXISTS `parametros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parametros` (
  `paramId` char(10) NOT NULL,
  `paramCodigo` varchar(20) DEFAULT NULL,
  `paramValor` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`paramId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parametros`
--

LOCK TABLES `parametros` WRITE;
/*!40000 ALTER TABLE `parametros` DISABLE KEYS */;
INSERT INTO `parametros` VALUES ('PAGINACION','CANTIDAD_FILAS','5');
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `productoId` char(24) NOT NULL,
  `productoNombre` varchar(60) DEFAULT NULL,
  `productoModulo` char(4) DEFAULT NULL,
  `productoSubModulo` char(4) DEFAULT NULL,
  `productoEntorno` char(5) DEFAULT NULL,
  `productoActivo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`productoId`),
  KEY `producto_index_1` (`productoModulo`),
  KEY `producto_index_2` (`productoEntorno`),
  KEY `productoSubModulo` (`productoSubModulo`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`productoModulo`) REFERENCES `modulo` (`moduloId`),
  CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`productoSubModulo`) REFERENCES `modulo` (`moduloId`),
  CONSTRAINT `producto_ibfk_3` FOREIGN KEY (`productoEntorno`) REFERENCES `entorno` (`entornoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES ('22e73c69fc84d1051a211ba0','Gestion Web','VEN','SQLs','WEB',1),('c24ea676a19ad4214aab7fdc','Stock','STK','SQLs','WEB',1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `rolId` char(5) NOT NULL,
  `rolDescripcion` varchar(60) DEFAULT NULL,
  `rolNivel` int DEFAULT NULL,
  PRIMARY KEY (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES ('ADMIN','Administrador',0),('CONS','Consultor',0),('DESA','Desarrollador',0);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarea`
--

DROP TABLE IF EXISTS `tarea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarea` (
  `tareaId` char(24) NOT NULL,
  `tareaNombre` varchar(45) DEFAULT NULL,
  `tareaRol` char(5) DEFAULT NULL,
  PRIMARY KEY (`tareaId`),
  UNIQUE KEY `tarea_index_5` (`tareaId`,`tareaRol`),
  KEY `tareaRol` (`tareaRol`),
  CONSTRAINT `tarea_ibfk_1` FOREIGN KEY (`tareaRol`) REFERENCES `rol` (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarea`
--

LOCK TABLES `tarea` WRITE;
/*!40000 ALTER TABLE `tarea` DISABLE KEYS */;
INSERT INTO `tarea` VALUES ('0a2cd2e6258e8ba3f1fbacec','Aprobar','CONS'),('25d7027c41a75ab963ebe537','Testeo General','CONS'),('3ee49de94e1dc7398ebad197','Testear','CONS'),('40240518a035242eb0d8e65a','Analizar','CONS'),('46c57154204a6dcf024c5f85','Autorizar','ADMIN'),('4ac8c7bd4d647e75e28eda93','Desarrollar','DESA'),('56e8801a608c8975fe1e122c','Estimar','DESA'),('7ce7a3c0607fb22a8d77fec4','Liberacion','ADMIN'),('c11d3979df46a61d4e519ef8','Ingreso','ADMIN'),('c1a5e7940180c994bdbb606f','Distribuir','DESA'),('e16ac576f37dc484386c4b99','Documentar','CONS'),('ef73df7e140144880f32aa7a','Presupuestar','ADMIN'),('f1b888780129e9b8e5471881','Consolidar','DESA');
/*!40000 ALTER TABLE `tarea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipoevento`
--

DROP TABLE IF EXISTS `tipoevento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipoevento` (
  `tipoEventoId` char(3) NOT NULL,
  `tipoEventoDesc` varchar(60) DEFAULT NULL,
  `tipoEventoActivo` tinyint(1) DEFAULT NULL,
  `tipoEventoColor` char(7) DEFAULT NULL,
  `tipoEventoPropio` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tipoEventoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoevento`
--

LOCK TABLES `tipoevento` WRITE;
/*!40000 ALTER TABLE `tipoevento` DISABLE KEYS */;
INSERT INTO `tipoevento` VALUES ('CAS','Arreglos',1,'#fb8b9f',0),('CUS','Customziacion',1,'#2624cc',0),('I+D','Investigacion',1,'#bd0900',1),('MEJ','Mejora',1,'#c9e76e',0),('ORG','Eventos de la organizacion',1,'#3fb194',1);
/*!40000 ALTER TABLE `tipoevento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuarioId` char(24) NOT NULL,
  `usuarioNombre` varchar(45) NOT NULL,
  `usuarioApellido` varchar(45) DEFAULT NULL,
  `usuarioMail` varchar(60) NOT NULL,
  `usuarioUsuario` varchar(45) NOT NULL,
  `usuarioPass` varchar(25) NOT NULL,
  `usuarioRol` char(5) NOT NULL,
  `usuarioActivo` tinyint(1) DEFAULT NULL,
  `usuarioColor` char(7) DEFAULT NULL,
  PRIMARY KEY (`usuarioId`),
  KEY `usuario_index_3` (`usuarioUsuario`),
  KEY `usuario_index_4` (`usuarioRol`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`usuarioRol`) REFERENCES `rol` (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('264b0ce34fa762a3dba657fe','Julian','Torossian','julian.torossian@outlook.com','JTAdmin','123','ADMIN',1,'#3ACEE5'),('2f0727442b3125f656ec12de','Julian','Torossian','jtorossian@gaci.com.ar','JTDesa','123','DESA',1,'#180A97'),('60dba550879c88cfdd2d4906','Julian','Torossian','jtorossian@gaci.com.ar','JTCons','123','CONS',1,'#117CC1'),('b092296c495f89e0ef2ebdfa','juli','toro','julitoro2009@gaci.com.ar','JuliDesa','123','DESA',1,'#D677A1');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'gacieventos'
--

--
-- Dumping routines for database 'gacieventos'
--
/*!50003 DROP FUNCTION IF EXISTS `getCantEventosxCliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxCliente`(id char(24)) RETURNS int
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoCliente = id
                    );
	RETURN cantidad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getCantEventosxProducto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxProducto`(id char(24)) RETURNS int
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoProducto = id
                    );
	RETURN cantidad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getCantEventosxTipoEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxTipoEvento`(tipo CHAR(3)) RETURNS int
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(eventoId)
						FROM evento
						WHERE 	eventoTipo = tipo AND
								eventoCerrado = false
                    );
	RETURN cantidad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getCantEventosxUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxUsuario`(id CHAR(24)) RETURNS int
BEGIN
    DECLARE cantidad INT;
	SET cantidad = (	SELECT count(ae.audiEId) 
						FROM audievento AS ae
						INNER JOIN evento AS e ON e.eventoId = ae.audiEEvento
						WHERE 	ae.audiEEvento = id      	AND
								e.eventoCerrado = false		AND
								e.eventoEtapa = ae.audiEEtapa
                    );
	RETURN cantidad;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getEtapaAnt_evento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getEtapaAnt_evento`(tipo CHAR(3), etapa int) RETURNS int
BEGIN
    DECLARE antEtapa INT;
	SET antEtapa = (	SELECT etEtapaRollback
						FROM evento_tarea
						WHERE 	etEvento = tipo AND
								etEtapa = etapa
                    );
	RETURN antEtapa;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getEtapaSig_evento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getEtapaSig_evento`(tipo CHAR(3), etapa int) RETURNS int
BEGIN
    DECLARE proxEtapa INT;
	SET proxEtapa = (	SELECT et.etEtapa AS etapa
						FROM evento_tarea AS et
						WHERE et.etEvento = tipo
						AND   et.etEtapa > etapa
						ORDER BY et.etEtapa
						LIMIT 1 
                    );
	RETURN proxEtapa;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getNewId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getNewId`() RETURNS char(24) CHARSET utf8mb4
BEGIN
    DECLARE id CHAR(24);
	SET id = (SELECT SUBSTR(MD5(RAND()),1,24) AS RandomString);
	RETURN id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getNombreTarea_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getNombreTarea_eventos`(tipo CHAR(3), etapa int) RETURNS varchar(45) CHARSET utf8mb4
BEGIN
    DECLARE nombre VARCHAR(45);
	SET nombre = (	SELECT t.tareaNombre
					FROM tarea AS t
                    INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId
                    WHERE et.etEvento = tipo
                    AND   et.etEtapa = etapa
                    );
	RETURN nombre;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `getUltimoNumero_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getUltimoNumero_eventos`(tipo CHAR(3)) RETURNS int
BEGIN
    DECLARE ultimoNumero INT;
	SET ultimoNumero = (SELECT eventoNumero FROM evento WHERE eventoTipo = tipo ORDER BY eventoNumero DESC LIMIT 1);
	RETURN ultimoNumero;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `circular_evento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `circular_evento`(id char(24), etapa int, usuario char(24))
BEGIN

	SET @etapaActual = (SELECT audiEEtapa FROM audievento WHERE audiEEvento = id ORDER BY audiEFecha DESC LIMIT 1);

	IF etapa > @etapaActual THEN
		SET @accion = "AVANZO";
	ELSE
		SET @accion = "RETROCESO";
    END IF;
	UPDATE evento
    SET eventoEtapa = etapa
	WHERE eventoId = id;
    
    CALL insert_audiEvento(id, etapa, usuario, null, @accion);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `comentar_evento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `comentar_evento`(eventoId char(24), comentario TEXT, usuario char(24), tieneFile boolean, pathFile varchar(255), nameFile varchar(255), mimeFile varchar(100))
BEGIN
	
    SELECT eventoId AS EVENTO;

	SET @id = (SELECT getNewId());
    
    SET @etapaActual = (SELECT audiEEtapa FROM audievento WHERE audiEEvento = eventoId ORDER BY audiEFecha DESC LIMIT 1);
    
    SELECT @id  , eventoId , "COMENTARIO", comentario, @etapaActual;
    
	INSERT INTO eventoadicion(eAdId, eAdEvento, eAdTipo     , eAdComentario, eAdAdjFile, eAdPathFile, eAdNombreFile, eAdMimeFile, eAdFecha)
    VALUES 					 (@id  , eventoId , "COMENTARIO", comentario   , tieneFile, pathFile, nameFile, mimeFile, now());
    
    CALL insert_audiEvento(eventoId, @etapaActual, usuario, @id, "COMENTARIO");
    
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_cliente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_cliente`(id char(24))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxCliente(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE cliente
		SET clienteActivo = false
		WHERE clienteId = id
		;
    ELSE
		DELETE FROM cliente
		WHERE clienteId = id
		;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_eventos`(eventoCodigo char(24), usuario char(24), accion char(10))
BEGIN
    
    UPDATE evento
    SET
		eventoCerrado = true
	WHERE
		eventoId = eventoCodigo
	;
    
    IF usuario != "" THEN
		SET @etapaActual = (SELECT audiEEtapa FROM audievento WHERE audiEEvento = eventoCodigo ORDER BY audiEFecha DESC LIMIT 1);
		CALL insert_audiEvento(eventoCodigo, @etapaActual, usuario, null, accion);
    END IF;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_producto` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_producto`(id char(24))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxProducto(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE producto
		SET productoActivo = false
		WHERE productoId = id
		;
    ELSE
		DELETE FROM producto
		WHERE productoId = id
		;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_tipoEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_tipoEvento`(id CHAR(3))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxTipoEvento(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE tipoevento 
		SET tipoEventoActivo = false
		WHERE tipoEventoId = id
		;
    ELSE
		DELETE FROM tipoevento
		WHERE tipoEventoId = id
		;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_usuario`(id char(24))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxUsuario(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE usuario
		SET usuarioActivo = false
		WHERE usuarioId = id
		;
    ELSE
		DELETE FROM usuario
		WHERE usuarioId = id
		;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_audiEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `insert_audiEvento`(evento char(24), etapa int, usuario char(24), adicional char(24), accion char(10))
BEGIN
    SET @id = (SELECT getNewId());
    
    INSERT INTO audievento(audiEId, audiEEvento, audiEEtapa, audiEUsuario, audiEFecha, audiEAdi, audiEAccion)
    VALUES (@id, evento, etapa, usuario, now(), adicional, accion);
	
    COMMIT;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insert_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `insert_eventos`(tipo char(3), titulo varchar(200), cliente char(24), producto char(24), usuario char(24))
BEGIN
	SET @numero = (SELECT getUltimoNumero_eventos(tipo)) + 1;
    
    IF ISNULL(@numero) OR @numero <= 0 THEN
		SET @numero = 1000;
    END IF;
    
    SET @eventoId = (SELECT getNewId());
    
	INSERT INTO evento(eventoId, eventoTipo,eventoNumero,eventoTitulo,eventoCerrado,eventoEtapa,eventoCliente,eventoProducto,eventoUsuarioAlta,eventoFechaAlta) 
	VALUES ( @eventoId, tipo,@numero,titulo,0,1,cliente,producto,usuario,now());

    CALL insert_audiEvento(@eventoId, 1, usuario, null, "CREO");
    
    SELECT @eventoId AS eventoId;
    
    COMMIT;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `select_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos`(paginacion boolean, pagina int, cantidad int)
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT e.eventoId,
								e.eventoTipo,
								e.eventoNumero,
								e.eventoTitulo,
								ta.tareaNombre,
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo' 
						FROM evento as e
						INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea
						WHERE	e.eventoEtapa = tet.etEtapa
                        AND     e.eventoCerrado = false
                        LIMIT ",
                        (pagina - 1) * cantidad,
                        ",",
                        cantidad
                        );
	ELSE
		SET @query ="SELECT e.eventoId,
								e.eventoTipo,
								e.eventoNumero,
								e.eventoTitulo,
								ta.tareaNombre,
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta' 
						FROM evento as e
						INNER JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						INNER JOIN tarea as ta ON ta.tareaId = tet.etTarea
						WHERE	e.eventoEtapa = tet.etEtapa
                        AND     e.eventoCerrado = false
                        ";
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `select_eventos_rol` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos_rol`(paginacion boolean, pagina int, cantidad int, rol VARCHAR(5))
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.eventoId,
									e.eventoTipo,
									e.eventoNumero,
									e.eventoTitulo,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
							FROM audiEvento AS auE
							INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario
							WHERE 	auE.audiEEtapa = e.eventoEtapa
							AND 	usu.usuarioRol = '", rol, "' 
							LIMIT ",
							(pagina - 1) * cantidad,
							",",
							cantidad
							);
	ELSE
		SET @query = CONCAT("SELECT  e.eventoId,
									e.eventoTipo,
									e.eventoNumero,
									e.eventoTitulo,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta'
							FROM audiEvento AS auE
							INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							INNER JOIN usuario as usu ON usu.usuarioId = auE.audiEUsuario
							WHERE 	auE.audiEEtapa = e.eventoEtapa
							AND 	usu.usuarioRol = '", rol, "'"
                    );
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `select_eventos_usuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos_usuario`(paginacion boolean, pagina int, cantidad int, usuario char(24))
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.eventoId,
									 e.eventoTipo,
									 e.eventoNumero,
									 e.eventoTitulo,
									 (SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									 (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									 (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									 (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta',
									 (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo'
							 FROM audiEvento AS auE
							 INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							 WHERE 	auE.audiEEtapa = e.eventoEtapa
							 AND    e.eventoCerrado = false
							 AND 	auE.audiEUsuario = '", usuario, "'
							LIMIT ",
							(pagina - 1) * cantidad,
							",",
							cantidad,
							"GROUP BY e.eventoId");
	ELSE
		SET @query = CONCAT("SELECT e.eventoId,
							e.eventoTipo,
							e.eventoNumero,
							e.eventoTitulo,
							(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'tareaNombre',
							(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
							(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
							(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta',
							(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo'
					FROM audiEvento AS auE
					INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
					WHERE 	auE.audiEEtapa = e.eventoEtapa
                    AND     e.eventoCerrado = false
					AND 	auE.audiEUsuario = '", usuario,"'
                    GROUP BY e.eventoId"
                    );
    END IF;
    
                        
	PREPARE qry FROM @query;
    EXECUTE qry;
	
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `update_eventos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `update_eventos`(eventoCodigo char(24), titulo varchar(200), cliente char(24), producto char(24))
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL INSERTAR REGISTRO";
	END;
	
    UPDATE evento
    SET
		eventoTitulo = titulo,
        eventoCliente = cliente,
        eventoProducto = producto
	WHERE
		eventoId = eventoCodigo
	;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-20  0:33:58
