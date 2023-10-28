-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gacieventos
-- ------------------------------------------------------
-- Server version	8.0.29

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
  `audiEId` char(36) NOT NULL,
  `audiEEvento` char(36) NOT NULL,
  `audiEEtapa` int NOT NULL,
  `audiEUsuario` char(36) NOT NULL,
  `audiEFecha` datetime NOT NULL DEFAULT (now()),
  `audiEAdi` char(36) DEFAULT NULL,
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
INSERT INTO `audievento` VALUES ('03c3b2b8-71af-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:18:19',NULL,'CREO'),('04297ac0-7406-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',3,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-26 10:46:08','041e16de-7406-11ee-b265-00090faa0001','ADJUNTO'),('05babfd5-740c-11ee-b265-00090faa0001','c449b0d2-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:29:07',NULL,'AVANZO'),('0747996c-7411-11ee-b265-00090faa0001','073f9a9e-7411-11ee-b265-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-26 12:04:58',NULL,'CREO'),('07c8e69c-740d-11ee-b265-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:36:20',NULL,'ESTIMAR'),('09cd1a74-740d-11ee-b265-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-26 11:36:24',NULL,'AVANZO'),('0bcecfa0-7411-11ee-b265-00090faa0001','073f9a9e-7411-11ee-b265-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 12:05:05',NULL,'AVANZO'),('23df125c-71b5-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 12:02:09','23dd770a-71b5-11ee-ad39-00090faa0001','ADJUNTO'),('35f91ae6-71af-11ee-ad39-00090faa0001','35f81307-71af-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:19:43',NULL,'CREO'),('391f3677-71ae-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:12:39',NULL,'CREO'),('5948ceb0-740d-11ee-b265-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',4,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:38:37',NULL,'AVANZO'),('59fd8266-7410-11ee-b265-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',5,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-26 12:00:07',NULL,'AVANZO'),('5d75b69d-71af-11ee-ad39-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:20:49',NULL,'CREO'),('6c8f59ef-71b4-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:57:02','6c8e4b2e-71b4-11ee-ad39-00090faa0001','ADJUNTO'),('70389502-71af-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:21',NULL,'AVANZO'),('71164c7c-71ae-11ee-ad39-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:14:13',NULL,'CREO'),('717cf01d-71af-11ee-ad39-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:23',NULL,'AVANZO'),('7287ed1b-71af-11ee-ad39-00090faa0001','9bf175a0-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:24',NULL,'AVANZO'),('74b05e5a-71af-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:28',NULL,'AVANZO'),('7e1ca519-7410-11ee-b265-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',4,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 12:01:07',NULL,'RETROCESO'),('80a03f25-71af-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:48',NULL,'ESTIMAR'),('84ac6b48-71af-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:21:55',NULL,'ESTIMAR'),('869b7e17-71af-11ee-ad39-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:21:58',NULL,'AVANZO'),('881b0232-71af-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:22:01',NULL,'AVANZO'),('89b28896-71af-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:22:03',NULL,'AVANZO'),('91681853-71af-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:22:16',NULL,'ESTIMAR'),('93f4100d-71af-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:22:21',NULL,'ESTIMAR'),('94e943b4-71af-11ee-ad39-00090faa0001','39161c55-71ae-11ee-ad39-00090faa0001',4,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-23 11:22:22',NULL,'AVANZO'),('9bf482f8-71ae-11ee-ad39-00090faa0001','9bf175a0-71ae-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:15:24',NULL,'CREO'),('a4cb6a8d-740f-11ee-b265-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-26 11:55:03',NULL,'ESTIMAR'),('a60b933b-740f-11ee-b265-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',4,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:55:05',NULL,'AVANZO'),('b4f9f703-740b-11ee-b265-00090faa0001','71157870-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:26:52',NULL,'AVANZO'),('c44a7ff7-71ae-11ee-ad39-00090faa0001','c449b0d2-71ae-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:16:32',NULL,'CREO'),('c7c4bf9b-740c-11ee-b265-00090faa0001','ed09149a-71ae-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:34:33',NULL,'AVANZO'),('c82d5163-740b-11ee-b265-00090faa0001','35f81307-71af-11ee-ad39-00090faa0001',2,'1138c392-9ed2-45cb-858b-3de37745cb62','2023-10-26 11:27:24',NULL,'AVANZO'),('cdddfcdb-71b4-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001',3,'eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','2023-10-23 11:59:45','cddce7bf-71b4-11ee-ad39-00090faa0001','COMENTARIO'),('ed0a14f8-71ae-11ee-ad39-00090faa0001','ed09149a-71ae-11ee-ad39-00090faa0001',1,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:17:41',NULL,'CREO'),('faa64e19-7405-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',3,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-26 10:45:52','faa1c47c-7405-11ee-b265-00090faa0001','COMENTARIO'),('fe326b62-7405-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001',3,'3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-26 10:45:58','fe3153a9-7405-11ee-b265-00090faa0001','ADJUNTO');
/*!40000 ALTER TABLE `audievento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `clienteId` char(36) NOT NULL,
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
INSERT INTO `cliente` VALUES ('6fd2f827-71a9-11ee-ad39-00090faa0001','CMP','Comercial CMP',1),('8137072d-71a9-11ee-ad39-00090faa0001','UNFA','Universidad Favaloro',1);
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
INSERT INTO `entorno` VALUES ('WEB','Web'),('WIN','win');
/*!40000 ALTER TABLE `entorno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento`
--

DROP TABLE IF EXISTS `evento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento` (
  `eventoId` char(36) NOT NULL,
  `eventoTipo` char(3) DEFAULT NULL,
  `eventoNumero` int DEFAULT NULL,
  `eventoTitulo` varchar(200) DEFAULT NULL,
  `eventoCerrado` tinyint(1) DEFAULT NULL,
  `eventoEtapa` int DEFAULT NULL,
  `eventoCliente` char(36) DEFAULT NULL,
  `eventoProducto` char(36) DEFAULT NULL,
  `eventoUsuarioAlta` char(36) DEFAULT NULL,
  `eventoFechaAlta` datetime NOT NULL DEFAULT (now()),
  `eventoEstimacion` double DEFAULT NULL,
  `eventoPrioridad` int DEFAULT NULL,
  `eventoEsMadre` tinyint(1) DEFAULT '0',
  `eventoMadre` char(36) DEFAULT NULL,
  `eventoModulo` char(4) DEFAULT NULL,
  `eventoDesc` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`eventoId`),
  UNIQUE KEY `evento_index_7` (`eventoTipo`,`eventoNumero`),
  KEY `evento_index_8` (`eventoCliente`),
  KEY `eventoProducto` (`eventoProducto`),
  KEY `eventoUsuarioAlta` (`eventoUsuarioAlta`),
  KEY `evento_ibfk_5` (`eventoModulo`),
  CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`eventoTipo`) REFERENCES `tipoevento` (`tipoEventoId`),
  CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`eventoCliente`) REFERENCES `cliente` (`clienteId`),
  CONSTRAINT `evento_ibfk_3` FOREIGN KEY (`eventoProducto`) REFERENCES `producto` (`productoId`),
  CONSTRAINT `evento_ibfk_4` FOREIGN KEY (`eventoUsuarioAlta`) REFERENCES `usuario` (`usuarioId`),
  CONSTRAINT `evento_ibfk_5` FOREIGN KEY (`eventoModulo`) REFERENCES `modulo` (`moduloId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento`
--

LOCK TABLES `evento` WRITE;
/*!40000 ALTER TABLE `evento` DISABLE KEYS */;
INSERT INTO `evento` VALUES ('03c2ddce-71af-11ee-ad39-00090faa0001','CUS',1003,'Evento 6',0,4,'6fd2f827-71a9-11ee-ad39-00090faa0001','930a9bf4-7725-4781-a5d7-bdd96b0ed5b9','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:18:19',105,5,0,NULL,'STK',''),('073f9a9e-7411-11ee-b265-00090faa0001','CUS',1004,'testeo de mails',0,2,'6fd2f827-71a9-11ee-ad39-00090faa0001','930a9bf4-7725-4781-a5d7-bdd96b0ed5b9','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-26 12:04:57',NULL,5,0,NULL,'STK',''),('35f81307-71af-11ee-ad39-00090faa0001','CAS',1002,'Evento 7',0,2,'6fd2f827-71a9-11ee-ad39-00090faa0001','ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:19:43',NULL,5,0,NULL,'STK',''),('39161c55-71ae-11ee-ad39-00090faa0001','CUS',1000,'Evento 1',0,4,'6fd2f827-71a9-11ee-ad39-00090faa0001','930a9bf4-7725-4781-a5d7-bdd96b0ed5b9','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:12:39',62,5,0,NULL,'STK','Descripcion del evento 1'),('5d750a88-71af-11ee-ad39-00090faa0001','CAS',1003,'Evento 8',0,3,'6fd2f827-71a9-11ee-ad39-00090faa0001','930a9bf4-7725-4781-a5d7-bdd96b0ed5b9','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:20:49',NULL,5,0,NULL,'STK',''),('71157870-71ae-11ee-ad39-00090faa0001','CUS',1001,'Evento 2',0,4,'8137072d-71a9-11ee-ad39-00090faa0001','ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:14:13',80,5,0,NULL,'VEN','Descripcion evento 2'),('9bf175a0-71ae-11ee-ad39-00090faa0001','CAS',1000,'Evento 3',0,2,'6fd2f827-71a9-11ee-ad39-00090faa0001','ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:15:24',NULL,5,0,NULL,'STK',''),('c449b0d2-71ae-11ee-ad39-00090faa0001','CAS',1001,'Evento 4',0,2,'6fd2f827-71a9-11ee-ad39-00090faa0001','ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:16:32',NULL,5,0,NULL,'STK','ad'),('ed09149a-71ae-11ee-ad39-00090faa0001','CUS',1002,'Evento 5',0,2,'6fd2f827-71a9-11ee-ad39-00090faa0001','ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','3c3d3557-7dab-46eb-ab9e-c373442c360c','2023-10-23 11:17:41',NULL,5,0,NULL,'VEN','daad');
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
  `etTarea` char(36) NOT NULL,
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
INSERT INTO `evento_tarea` VALUES ('CAS','cdf95f9d-71a4-11ee-ad39-00090faa0001',1,NULL),('CAS','d2e4f939-71a8-11ee-ad39-00090faa0001',2,NULL),('CAS','f3e047fc-71a8-11ee-ad39-00090faa0001',3,2),('CAS','f9e6ac1b-71a8-11ee-ad39-00090faa0001',4,NULL),('CUS','cdf95f9d-71a4-11ee-ad39-00090faa0001',1,NULL),('CUS','d2e4f939-71a8-11ee-ad39-00090faa0001',4,NULL),('CUS','e3ff5d57-71a8-11ee-ad39-00090faa0001',2,NULL),('CUS','ed30e1e7-71a8-11ee-ad39-00090faa0001',3,NULL),('CUS','f3e047fc-71a8-11ee-ad39-00090faa0001',5,4),('CUS','f9e6ac1b-71a8-11ee-ad39-00090faa0001',6,NULL);
/*!40000 ALTER TABLE `evento_tarea` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventoadicion`
--

DROP TABLE IF EXISTS `eventoadicion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoadicion` (
  `eAdId` char(36) NOT NULL,
  `eAdEvento` char(36) DEFAULT NULL,
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
INSERT INTO `eventoadicion` VALUES ('041e16de-7406-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001','ADJUNTO',NULL,1,'C:\\Users\\jtorossian\\Documents\\Proyectos\\Gaci\\Makima-API\\temp\\5d750a88-71af-11ee-ad39-00090faa0001\\1698327968269&G_Erp.png','2023-10-26 10:46:08','image/png','G_Erp.png'),('6c8e4b2e-71b4-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001','ADJUNTO',NULL,1,'C:\\Users\\jtorossian\\Documents\\Proyectos\\Gaci\\Makima-API\\temp\\03c2ddce-71af-11ee-ad39-00090faa0001\\1698073022337&G_Erp.png','2023-10-23 11:57:02','image/png','G_Erp.png'),('cddce7bf-71b4-11ee-ad39-00090faa0001','03c2ddce-71af-11ee-ad39-00090faa0001','COMENTARIO','<p>Primer comentario</p>',0,NULL,'2023-10-23 11:59:45',NULL,NULL),('faa1c47c-7405-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001','COMENTARIO','<p>yola</p>',0,NULL,'2023-10-26 10:45:52',NULL,NULL),('fe3153a9-7405-11ee-b265-00090faa0001','5d750a88-71af-11ee-ad39-00090faa0001','ADJUNTO',NULL,1,'C:\\Users\\jtorossian\\Documents\\Proyectos\\Gaci\\Makima-API\\temp\\5d750a88-71af-11ee-ad39-00090faa0001\\1698327958315&04cdbeff-d69b-41b3-863e-4fb1520d2420.doc','2023-10-26 10:45:58','application/msword','04cdbeff-d69b-41b3-863e-4fb1520d2420.doc');
/*!40000 ALTER TABLE `eventoadicion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventoadj`
--

DROP TABLE IF EXISTS `eventoadj`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoadj` (
  `evAdjId` char(36) NOT NULL,
  `evAdjEvento` char(36) NOT NULL,
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
-- Table structure for table `eventoestimacion`
--

DROP TABLE IF EXISTS `eventoestimacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventoestimacion` (
  `eEstId` char(36) NOT NULL,
  `eEstEvento` char(36) DEFAULT NULL,
  `eEstUsuario` char(36) DEFAULT NULL,
  `eEstRol` char(5) DEFAULT NULL,
  `eEstEstimacion` int DEFAULT NULL,
  PRIMARY KEY (`eEstId`),
  UNIQUE KEY `eEstEstimacion` (`eEstEvento`,`eEstUsuario`,`eEstRol`),
  KEY `eEstUsuario` (`eEstUsuario`) /*!80000 INVISIBLE */,
  CONSTRAINT `eventoestimacion_ibfk_1` FOREIGN KEY (`eEstEvento`) REFERENCES `evento` (`eventoId`),
  CONSTRAINT `eventoestimacion_ibfk_2` FOREIGN KEY (`eEstUsuario`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventoestimacion`
--

LOCK TABLES `eventoestimacion` WRITE;
/*!40000 ALTER TABLE `eventoestimacion` DISABLE KEYS */;
INSERT INTO `eventoestimacion` VALUES ('1e27c958-2fc7-44ea-b9cb-29145c879691','71157870-71ae-11ee-ad39-00090faa0001','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','FUNC',20),('30842755-4754-420d-9e95-0782dd8715a8','03c2ddce-71af-11ee-ad39-00090faa0001','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','FUNC',60),('38130ded-c7ea-4395-9f25-ef130b164ef0','03c2ddce-71af-11ee-ad39-00090faa0001','1138c392-9ed2-45cb-858b-3de37745cb62','DESA',45),('b190032b-affa-4a13-be2f-80a4e0aca7a3','71157870-71ae-11ee-ad39-00090faa0001','1138c392-9ed2-45cb-858b-3de37745cb62','DESA',60),('b724e506-a4d9-42ae-b5fb-0dd276d3d90d','39161c55-71ae-11ee-ad39-00090faa0001','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','FUNC',2),('f646f257-ceab-460e-8d5e-c8c68dc759d1','39161c55-71ae-11ee-ad39-00090faa0001','1138c392-9ed2-45cb-858b-3de37745cb62','DESA',60);
/*!40000 ALTER TABLE `eventoestimacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hora`
--

DROP TABLE IF EXISTS `hora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hora` (
  `horaId` char(36) NOT NULL,
  `horaRegistro` char(36) NOT NULL,
  `horaEvento` char(36) NOT NULL,
  `horaInicio` time NOT NULL,
  `horaFinal` time NOT NULL,
  `horaTotal` decimal(5,2) DEFAULT NULL,
  `horaObs` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`horaId`),
  KEY `horaEvento` (`horaEvento`),
  KEY `horaRegistro` (`horaRegistro`),
  CONSTRAINT `hora_ibfk_1` FOREIGN KEY (`horaEvento`) REFERENCES `evento` (`eventoId`),
  CONSTRAINT `hora_ibfk_2` FOREIGN KEY (`horaRegistro`) REFERENCES `registrohora` (`regHoraId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hora`
--

LOCK TABLES `hora` WRITE;
/*!40000 ALTER TABLE `hora` DISABLE KEYS */;
INSERT INTO `hora` VALUES ('0qYXB20Wf3WPLDJfgzvK6yOn','5G2CZyz6OxZRs0JbyjAQCamH','9bf175a0-71ae-11ee-ad39-00090faa0001','10:00:00','17:00:00',7.00,'Desarrollo'),('4GVOqZYOxhZJRI7JN6Cz1LcL','uKJppROynRgDYEUmSmCEfxFG','03c2ddce-71af-11ee-ad39-00090faa0001','10:00:00','15:00:00',5.00,'Calculo de estimacion'),('B5wbFaBPXbSqn3zRy3oPUDEj','EMSBnBZblkFcFqRSP1GTT1wm','03c2ddce-71af-11ee-ad39-00090faa0001','16:00:00','18:00:00',2.00,'Estimacion'),('i1fUo6gyTNyMHd4LYhVXtFcb','e4kvpwbwEPkKRrFL3RjpgM18','5d750a88-71af-11ee-ad39-00090faa0001','16:00:00','18:00:00',2.00,'Desarrollo'),('J5OsX66hB57zJ3wjwCxKbCx6','x3OExwY45fBQsg6cg9RwhRSZ','5d750a88-71af-11ee-ad39-00090faa0001','10:00:00','18:00:00',8.00,'Testeo General'),('ldO52MJDyv228xRSt7zx6WZ1','uKJppROynRgDYEUmSmCEfxFG','5d750a88-71af-11ee-ad39-00090faa0001','15:00:00','18:00:00',3.00,'Calculo de estimacion'),('mGCRtZVHoTPgwfbuL5FjFYRa','EMSBnBZblkFcFqRSP1GTT1wm','5d750a88-71af-11ee-ad39-00090faa0001','10:00:00','16:00:00',6.00,'Estimacion'),('mPSAtOLPzsuhoanHqWDxCIGQ','e4kvpwbwEPkKRrFL3RjpgM18','39161c55-71ae-11ee-ad39-00090faa0001','13:00:00','16:00:00',3.00,'Desarrollo'),('N8DJPknljLpxqBCfyc6NT4Hu','8gHrWwXj4337b3LUddL5QeEY','39161c55-71ae-11ee-ad39-00090faa0001','10:00:00','12:00:00',2.00,'Estimacion'),('W6fc64Qemlcnw1ELwL83yCbE','e4kvpwbwEPkKRrFL3RjpgM18','39161c55-71ae-11ee-ad39-00090faa0001','10:00:00','12:00:00',2.00,'Calculo de estimacion');
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
INSERT INTO `modulo` VALUES ('STK','Stock',NULL),('VEN','Ventas',NULL);
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
/*!40000 ALTER TABLE `parametros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `productoId` char(36) NOT NULL,
  `productoNombre` varchar(60) DEFAULT NULL,
  `productoEntorno` char(5) DEFAULT NULL,
  `productoActivo` tinyint(1) DEFAULT NULL,
  `productoSigla` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`productoId`),
  KEY `producto_index_2` (`productoEntorno`),
  CONSTRAINT `producto_ibfk_3` FOREIGN KEY (`productoEntorno`) REFERENCES `entorno` (`entornoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES ('930a9bf4-7725-4781-a5d7-bdd96b0ed5b9','Gestion WEB','WEB',1,'GWEB'),('ee94fe5d-d4f2-4ec3-892c-aa03d625b5c6','Portal Proveedores','WEB',1,'PPrv');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrohora`
--

DROP TABLE IF EXISTS `registrohora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrohora` (
  `regHoraId` char(36) NOT NULL,
  `regHoraFecha` date NOT NULL,
  `regHoraUsuario` char(36) NOT NULL,
  PRIMARY KEY (`regHoraId`),
  KEY `regHoraUsuario` (`regHoraUsuario`),
  CONSTRAINT `registrohora_ibfk_1` FOREIGN KEY (`regHoraUsuario`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrohora`
--

LOCK TABLES `registrohora` WRITE;
/*!40000 ALTER TABLE `registrohora` DISABLE KEYS */;
INSERT INTO `registrohora` VALUES ('5G2CZyz6OxZRs0JbyjAQCamH','2023-10-22','1138c392-9ed2-45cb-858b-3de37745cb62'),('8gHrWwXj4337b3LUddL5QeEY','2023-10-21','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6'),('e4kvpwbwEPkKRrFL3RjpgM18','2023-10-21','1138c392-9ed2-45cb-858b-3de37745cb62'),('EMSBnBZblkFcFqRSP1GTT1wm','2023-10-20','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6'),('uKJppROynRgDYEUmSmCEfxFG','2023-10-20','1138c392-9ed2-45cb-858b-3de37745cb62'),('x3OExwY45fBQsg6cg9RwhRSZ','2023-10-22','eb4fc4c3-1c25-4d73-a930-97eb7d992dc6');
/*!40000 ALTER TABLE `registrohora` ENABLE KEYS */;
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
  `rolCtrlTotal` tinyint(1) DEFAULT NULL,
  `rolCtrlEvento` tinyint(1) DEFAULT NULL,
  `rolCtrlCliente` tinyint(1) DEFAULT NULL,
  `rolCtrlProducto` tinyint(1) DEFAULT NULL,
  `rolCtrlTipo` tinyint(1) DEFAULT NULL,
  `rolCtrlUsuario` tinyint(1) DEFAULT NULL,
  `rolCtrlHora` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES ('ADMIN','Administrador',1,1,1,1,1,1,1),('DESA','Desarrollo',0,0,0,0,0,0,0),('FUNC','Funcional',0,1,0,0,0,0,0);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolpermiso`
--

DROP TABLE IF EXISTS `rolpermiso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolpermiso` (
  `rolPRol` char(5) NOT NULL,
  `rolPClave` char(5) NOT NULL,
  `rolPNivel` int DEFAULT NULL,
  PRIMARY KEY (`rolPRol`,`rolPClave`),
  CONSTRAINT `rolpermiso_ibfk_1` FOREIGN KEY (`rolPRol`) REFERENCES `rol` (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolpermiso`
--

LOCK TABLES `rolpermiso` WRITE;
/*!40000 ALTER TABLE `rolpermiso` DISABLE KEYS */;
INSERT INTO `rolpermiso` VALUES ('ADMIN','ADM',NULL),('DESA','EVT',1),('FUNC','CLI',1),('FUNC','EVT',2),('FUNC','PRD',1);
/*!40000 ALTER TABLE `rolpermiso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarea`
--

DROP TABLE IF EXISTS `tarea`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarea` (
  `tareaId` char(36) NOT NULL,
  `tareaNombre` varchar(45) DEFAULT NULL,
  `tareaRol` char(5) DEFAULT NULL,
  `tareaControla` tinyint(1) DEFAULT NULL,
  `tareaClave` char(10) DEFAULT NULL,
  `tareaComentario` tinyint(1) DEFAULT NULL,
  `tareaColor` char(7) DEFAULT NULL,
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
INSERT INTO `tarea` VALUES ('cdf95f9d-71a4-11ee-ad39-00090faa0001','Ingreso','ADMIN',0,NULL,0,'#9FFD35'),('d2e4f939-71a8-11ee-ad39-00090faa0001','Desarrollo','DESA',0,NULL,1,'#71E7EF'),('e3ff5d57-71a8-11ee-ad39-00090faa0001','Estimacion 1','DESA',1,'ESTIMAR',0,'#5C9C91'),('ed30e1e7-71a8-11ee-ad39-00090faa0001','Estimacion 2','FUNC',1,'ESTIMAR',1,'#C1AEFE'),('f3e047fc-71a8-11ee-ad39-00090faa0001','Testeo','FUNC',0,NULL,1,'#FF9961'),('f9e6ac1b-71a8-11ee-ad39-00090faa0001','Envio','ADMIN',0,NULL,0,'#F9D17D');
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
INSERT INTO `tipoevento` VALUES ('CAS','cas',1,'#8D5392',0),('CUS','Custom',1,'#165E06',0);
/*!40000 ALTER TABLE `tipoevento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuarioId` char(36) NOT NULL,
  `usuarioNombre` varchar(45) NOT NULL,
  `usuarioApellido` varchar(45) DEFAULT NULL,
  `usuarioMail` varchar(60) NOT NULL,
  `usuarioUsuario` varchar(45) NOT NULL,
  `usuarioPass` varchar(25) NOT NULL,
  `usuarioActivo` tinyint(1) DEFAULT NULL,
  `usuarioColor` char(7) DEFAULT NULL,
  `usuarioSesionToken` char(18) DEFAULT NULL,
  `usuarioFchUltLogin` datetime DEFAULT NULL,
  PRIMARY KEY (`usuarioId`),
  KEY `usuario_index_3` (`usuarioUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('1138c392-9ed2-45cb-858b-3de37745cb62','julian','torossian','julian.torossian@outlook.com','JDESA','G3U4IjzqPdNqJSDPrePNhg==',1,'#99AE16','RhWKd0DEaUJZ4cQ2xu','2023-10-26 15:33:12'),('3c3d3557-7dab-46eb-ab9e-c373442c360c','Julian','Torossian','jtorossian@gaci.com.ar','JADMIN','G3U4IjzqPdNqJSDPrePNhg==',1,'#5F44D4','nJhdAw37oIyq7JEbtm','2023-10-26 16:56:48'),('eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','julian','torossian','julitoro2009@gmail.com','JFUNC','G3U4IjzqPdNqJSDPrePNhg==',1,'#42F616','2EnwuT7sayiVgsC2ck','2023-10-26 14:17:11');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariopreferencia`
--

DROP TABLE IF EXISTS `usuariopreferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariopreferencia` (
  `usuPUsuario` char(36) NOT NULL,
  `usuPClave` char(12) NOT NULL,
  PRIMARY KEY (`usuPUsuario`,`usuPClave`),
  CONSTRAINT `usuariopreferencia_ibfk_1` FOREIGN KEY (`usuPUsuario`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariopreferencia`
--

LOCK TABLES `usuariopreferencia` WRITE;
/*!40000 ALTER TABLE `usuariopreferencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuariopreferencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariorol`
--

DROP TABLE IF EXISTS `usuariorol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuariorol` (
  `usuRolUsuario` char(36) NOT NULL,
  `usuRolRol` char(5) NOT NULL,
  PRIMARY KEY (`usuRolUsuario`,`usuRolRol`),
  KEY `usuRolRol` (`usuRolRol`),
  CONSTRAINT `usuariorol_ibfk_1` FOREIGN KEY (`usuRolUsuario`) REFERENCES `usuario` (`usuarioId`),
  CONSTRAINT `usuariorol_ibfk_2` FOREIGN KEY (`usuRolRol`) REFERENCES `rol` (`rolId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariorol`
--

LOCK TABLES `usuariorol` WRITE;
/*!40000 ALTER TABLE `usuariorol` DISABLE KEYS */;
INSERT INTO `usuariorol` VALUES ('3c3d3557-7dab-46eb-ab9e-c373442c360c','ADMIN'),('1138c392-9ed2-45cb-858b-3de37745cb62','DESA'),('eb4fc4c3-1c25-4d73-a930-97eb7d992dc6','FUNC');
/*!40000 ALTER TABLE `usuariorol` ENABLE KEYS */;
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
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxCliente`(id char(36)) RETURNS int
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
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxProducto`(id char(36)) RETURNS int
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
CREATE DEFINER=`sa`@`localhost` FUNCTION `getCantEventosxUsuario`(id char(36)) RETURNS int
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
/*!50003 DROP FUNCTION IF EXISTS `getHorasTotalesEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` FUNCTION `getHorasTotalesEvento`(evento char(36)) RETURNS decimal(10,2)
BEGIN
	DECLARE total DECIMAL(10,2);
	SET total = (	SELECT 	sum(horaTotal)
					FROM registrohora
					INNER JOIN hora ON horaRegistro = regHoraId
					WHERE horaEvento = evento
					ORDER BY regHoraFecha, horaInicio
                 );
	RETURN total;
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
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getNewId`() RETURNS char(36) CHARSET utf8mb4
BEGIN
    DECLARE id char(36);
	SET id = (SELECT UUID());
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
/*!50003 DROP FUNCTION IF EXISTS `getRolActivoEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` FUNCTION `getRolActivoEvento`(eventoId char(36)) RETURNS char(5) CHARSET utf8mb4
BEGIN
    DECLARE rol CHAR(5);
    SET rol = ( SELECT u.usuarioRol 
				FROM usuario AS u 
				INNER JOIN audiEvento AS ae ON ae.audiEUsuario = u.usuarioId
				WHERE 	ae.audiEEvento = eventoId AND 
						ae.audiEEtapa = (SELECT e.eventoEtapa FROM evento AS e WHERE e.eventoId = eventoId) AND
						(ae.audiEAccion = 'AVANZO' OR ae.audiEAccion = 'REASIGNO' OR ae.audiEAccion = 'REVIRTIO')
				ORDER BY ae.audiEFecha DESC
				LIMIT 1
			  );
	RETURN rol;
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
/*!50003 DROP FUNCTION IF EXISTS `getUsuarioActivoEvento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` FUNCTION `getUsuarioActivoEvento`(eventoId char(36)) RETURNS char(36) CHARSET utf8mb4
BEGIN
    DECLARE usuario char(36);
    SET usuario = ( SELECT u.usuarioId 
					FROM usuario AS u 
					INNER JOIN audiEvento AS ae ON ae.audiEUsuario = u.usuarioId
					WHERE 	ae.audiEEvento = eventoId AND 
							ae.audiEEtapa = (SELECT e.eventoEtapa FROM evento AS e WHERE e.eventoId = eventoId) AND
							(ae.audiEAccion = 'AVANZO' OR ae.audiEAccion = 'REASIGNO' OR ae.audiEAccion = 'REVIRTIO' OR ae.audiEAccion = 'CREO' OR ae.audiEAccion = 'CERRO')
					ORDER BY ae.audiEFecha DESC
					LIMIT 1
				  );
	RETURN usuario;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `adjuntar_evento` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `adjuntar_evento`(eventoId char(36), usuario char(36), pathFile varchar(255), nameFile varchar(255), mimeFile varchar(100))
BEGIN
	SET @id = (SELECT getNewId());
    
    SET @etapaActual = (SELECT audiEEtapa FROM audievento WHERE audiEEvento = eventoId ORDER BY audiEFecha DESC LIMIT 1);
    
	INSERT INTO eventoadicion(eAdId, eAdEvento, eAdTipo  , eAdAdjFile, eAdPathFile, eAdNombreFile, eAdMimeFile, eAdFecha)
    VALUES 					 (@id  , eventoId , "ADJUNTO", true      , pathFile    , nameFile    , mimeFile   , now());
    
    CALL insert_audiEvento(eventoId, @etapaActual, usuario, @id, "ADJUNTO");
    
    COMMIT;
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
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `circular_evento`(id char(36), etapa int, usuario char(36), comentario TEXT)
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
    
    SET @adicionId = NULL;
    
    IF NOT ISNULL(comentario) THEN
		SET @adicionId = (SELECT getNewId());
		INSERT INTO eventoadicion(eAdId, eAdEvento, eAdTipo , eAdComentario, eAdAdjFile, eAdFecha) VALUES (@adicionId, id, "COMENTARIO", comentario, 0, Now());
    END IF;    
    
    CALL insert_audiEvento(id, etapa, usuario, @adicionId, @accion);
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
CREATE DEFINER=`sa`@`%` PROCEDURE `comentar_evento`(eventoId char(36), comentario TEXT, usuario char(36))
BEGIN
	
    SELECT eventoId AS EVENTO;

	SET @id = (SELECT getNewId());
    
    SET @etapaActual = (SELECT audiEEtapa FROM audievento WHERE audiEEvento = eventoId ORDER BY audiEFecha DESC LIMIT 1);
    
    
	INSERT INTO eventoadicion(eAdId, eAdEvento, eAdTipo     , eAdComentario, eAdAdjFile, eAdFecha)
    VALUES 					 (@id  , eventoId , "COMENTARIO", comentario   , false, now());
    
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_cliente`(id char(36))
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_eventos`(eventoCodigo char(36), usuario char(36), accion char(10))
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_producto`(id char(36))
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_usuario`(id char(36))
BEGIN

	DECLARE cantidadEventos INT;
    SET cantidadEventos = (SELECT getCantEventosxUsuario(id));
    
    IF cantidadEventos > 0 THEN
		UPDATE usuario
		SET usuarioActivo = false
		WHERE usuarioId = id
		;
    ELSE
        DELETE FROM usuarioRol
        WHERE usuRolUsuario = id
        ;
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
/*!50003 DROP PROCEDURE IF EXISTS `getEventosAsignadosUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `getEventosAsignadosUsuario`(usuario char(36))
BEGIN
	SELECT 	DISTINCT e.eventoTipo, 
			(SELECT COUNT(e2.eventoTipo) 
			 FROM evento AS e2 
			 WHERE getUsuarioActivoEvento(e2.eventoId) = usuario
			 AND e2.eventoCerrado != true 
			 AND e2.eventoTipo = e.eventoTipo
			 ) AS cantidadEventos,
			(SELECT t.tareaNombre
			FROM tarea AS t
			INNER JOIN evento_tarea AS et ON et.etTarea = t.tareaId
			WHERE et.etEvento = e.eventoTipo AND et.etEtapa = e.eventoEtapa) AS tarea
	FROM evento AS e
	LEFT JOIN tipoevento AS tp ON tp.tipoEventoId = e.eventoTipo
	WHERE getUsuarioActivoEvento(e.eventoId) = usuario
	AND   e.eventoCerrado = false
	AND   tp.tipoEventoPropio = false
	;
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `insert_audiEvento`(evento char(36), etapa int, usuario char(36), adicional char(36), accion char(10))
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `insert_eventos`(tipo char(3), titulo varchar(200), cliente char(36), producto char(36), modulo CHAR(4), usuario char(36), prioridad INT, descripcion VARCHAR(1000))
BEGIN
	SET @numero = (SELECT getUltimoNumero_eventos(tipo)) + 1;
    
    IF ISNULL(@numero) OR @numero <= 0 THEN
		SET @numero = 1000;
    END IF;
    
    SET @eventoId = (SELECT getNewId());
    
	INSERT INTO evento(eventoId, eventoTipo, eventoNumero, eventoTitulo, eventoCerrado, eventoEtapa, eventoCliente, eventoProducto, eventoModulo, eventoUsuarioAlta, eventoPrioridad, eventoDesc, eventoFechaAlta) 
	VALUES ( @eventoId, tipo, @numero, titulo, 0, 1, cliente, producto, modulo, usuario, prioridad, descripcion, now());

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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos`(paginacion boolean, pagina int, cantidad int)
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT e.*,
								ta.tareaNombre,
								te.tipoEventoPropio AS 'eventoPropio',
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo'
						FROM evento as e
						LEFT JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						LEFT JOIN tarea as ta ON ta.tareaId = tet.etTarea
						LEFT JOIN tipoevento AS te ON te.tipoEventoId = e.eventoTipo
						WHERE	e.eventoEtapa = tet.etEtapa
						OR		te.tipoEventoPropio = true
                        LIMIT ",
                        (pagina - 1) * cantidad,
                        ",",
                        cantidad
                        );
	ELSE
		SET @query ="SELECT e.*,
								ta.tareaNombre,
								te.tipoEventoPropio AS 'eventoPropio',
								(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
								(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
								(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta'
						FROM evento as e
						LEFT JOIN evento_tarea as tet ON tet.etEvento = e.eventoTipo
						LEFT JOIN tarea as ta ON ta.tareaId = tet.etTarea
						LEFT JOIN tipoevento AS te ON te.tipoEventoId = e.eventoTipo
						WHERE	e.eventoEtapa = tet.etEtapa
						OR		te.tipoEventoPropio = true
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
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos_rol`(paginacion boolean, pagina int, cantidad int, rol VARCHAR(5))
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.*,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta',
                                (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) AS 'eventoPropio'
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
		SET @query = CONCAT("SELECT  e.*,
									(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta',
                                (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) AS 'eventoPropio'
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `select_eventos_usuario`(paginacion boolean, pagina int, cantidad int, usuario char(36))
BEGIN
	
    -- SET @page = 1;
    -- SET @cant = 5;
    IF paginacion = true THEN
        SET @query = CONCAT("SELECT  e.*,
									 (SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'Tarea Nombre',
									 (SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
									 (SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
									 (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'Usuario Alta',
									 (SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo',
                                (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) AS 'eventoPropio'
							 FROM audiEvento AS auE
							 INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
							 WHERE 	auE.audiEEtapa = e.eventoEtapa
							 AND 	auE.audiEUsuario = '", usuario, "'
							 AND     (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) != true
							LIMIT ",
							(pagina - 1) * cantidad,
							",",
							cantidad,
							"GROUP BY e.eventoId");
	ELSE
		SET @query = CONCAT("SELECT e.*,
							(SELECT getNombreTarea_eventos(e.eventoTipo, e.eventoEtapa)) as 'tareaNombre',
							(SELECT clienteNombre FROM cliente as cl WHERE cl.clienteId = e.eventoCliente) as 'cliente',
							(SELECT productoNombre FROM producto as pr WHERE pr.productoId = e.eventoProducto) as 'producto',
							(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = e.eventoUsuarioAlta) as 'usuarioAlta',
							(SELECT us.usuarioUsuario FROM usuario as us WHERE us.usuarioId = auE.audiEUsuario) as 'usuarioActivo',
                                (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) AS 'eventoPropio'
					FROM audiEvento AS auE
					INNER JOIN evento AS e ON e.eventoId = auE.audiEEvento
					WHERE 	auE.audiEEtapa = e.eventoEtapa
					AND 	(SELECT getUsuarioActivoEvento(e.eventoId)) = '", usuario,"'
                    AND     (SELECT te.tipoEventoPropio FROM tipoEvento AS te WHERE te.tipoEventoId = e.eventoTipo) != true
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
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `update_eventos`(eventoCodigo char(36), titulo varchar(200), cliente char(36), producto char(36), modulo CHAR(4), prioridad INT)
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
        eventoProducto = producto,
        eventoModulo = modulo,
        eventoPrioridad = prioridad
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

-- Dump completed on 2023-10-28  9:48:53
