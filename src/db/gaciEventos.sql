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
  `audiEId` char(24) NOT NULL,
  `audiEEvento` char(24) NOT NULL,
  `audiEEtapa` int NOT NULL,
  `audiEUsuario` char(24) NOT NULL,
  `audiEFecha` datetime NOT NULL DEFAULT (now()),
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
INSERT INTO `audievento` VALUES ('28958eef9ed880431142959f','1840555980b13add9ee5d49f',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:55'),('2a8fdeba8b85cfca9dee3066','4b63a8bbd9005c79ddef546a',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:03'),('493f49767025b95f8c040626','69abf03efd8b500f50fe948b',2,'2f0727442b3125f656ec12de','2023-02-10 22:25:37'),('4b29eb8ac5284ebc51a0764e','68778349c24c4b7b4ea84db1',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:29'),('607afc85f827c967bbfda4c2','c1d42fd550cc5aa2b14521ea',3,'264b0ce34fa762a3dba657fe','2023-02-08 16:44:12'),('6db94403efa92f54e0478b69','c1d42fd550cc5aa2b14521ea',1,'2f0727442b3125f656ec12de','2023-02-08 13:21:03'),('70157c42a35694dfa1f6ad89','12a91c947f7b377227c52354',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:31'),('7e793c55e7a4db41a10842d8','52723a0f7a66f396fbde3bbe',1,'264b0ce34fa762a3dba657fe','2023-02-08 13:03:42'),('85a932f44e10500ad8d193c0','c1d42fd550cc5aa2b14521ea',2,'2f0727442b3125f656ec12de','2023-02-08 16:42:25'),('85fcf9b3e3cf44e6855ef154','d11fda2252bcf016101a5bf1',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:12'),('8752a1be0c73e1dd4a5cc151','12a91c947f7b377227c52354',1,'264b0ce34fa762a3dba657fe','2023-02-08 21:12:00'),('a69163ad5114d9a093b6660a','68778349c24c4b7b4ea84db1',3,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:36'),('ab76f6dfd02a3ab5756a268f','d5d3cc4b908393afc74ee6e6',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:44'),('e3a4984e82d7e189440ec379','69abf03efd8b500f50fe948b',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:14'),('eea228d15c6d32132efe0183','68778349c24c4b7b4ea84db1',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:26'),('f3901e6436eee6e8c7b209df','63ca9be191f963f31d560788',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:26'),('f5b2c54f17e84141de5912b8','c1d42fd550cc5aa2b14521ea',4,'264b0ce34fa762a3dba657fe','2023-02-08 16:45:23'),('fc335b763ed6a9fd568535b3','e5570b20a7697952c2cb4981',1,'264b0ce34fa762a3dba657fe','2023-02-08 22:40:50'),('fe3a739dc8a3094da68d4c98','4b63a8bbd9005c79ddef546a',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:04');
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
INSERT INTO `cliente` VALUES ('af66bd7b4c0bd2e1148fffbe','FAVU','Favaloro Universidad',1),('f281bbfb095705cb80e54c79','GACI','Diltacross',1),('f82320961678b5fecd0c127e','CMP','Comercial CMP',1);
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
INSERT INTO `entorno` VALUES ('WEB','Navegador Web');
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
INSERT INTO `evento` VALUES ('12a91c947f7b377227c52354','CUS',1002,'Evento desde la web',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 21:12:00',NULL),('1840555980b13add9ee5d49f','CUS',1003,'sdads',0,1,'af66bd7b4c0bd2e1148fffbe','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:55',NULL),('4b63a8bbd9005c79ddef546a','TEC',1001,'dad',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:04',NULL),('52723a0f7a66f396fbde3bbe','CUS',1000,'Gestion WEB',1,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 13:03:42',NULL),('63ca9be191f963f31d560788','ORG',1001,'desa',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:26',NULL),('68778349c24c4b7b4ea84db1','CAS',1000,'Algun CAS',0,3,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:26',NULL),('69abf03efd8b500f50fe948b','CAS',1001,'asdasdasdasdfs',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:14',NULL),('c1d42fd550cc5aa2b14521ea','CUS',1001,'Evento desde usuario de desarrollo',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','2f0727442b3125f656ec12de','2023-02-08 13:21:03',NULL),('d11fda2252bcf016101a5bf1','I+D',1000,'Alguna investigacion',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:12',NULL),('d5d3cc4b908393afc74ee6e6','TEC',1000,'TEXC1',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:44',NULL),('e5570b20a7697952c2cb4981','ORG',1000,'hola',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 22:40:50',NULL);
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
INSERT INTO `evento_tarea` VALUES ('CAS','a7e444e107b75d1678b7b225',1),('CUS','a7e444e107b75d1678b7b225',1),('I+D','a7e444e107b75d1678b7b225',1),('ORG','45b9bb57fe5c6e37fe38ea04',1),('TEC','a7e444e107b75d1678b7b225',1),('CAS','014c94b3aabcd9350bf2a09e',2),('CUS','c096637e7b2b54cd51dcd104',2),('I+D','c096637e7b2b54cd51dcd104',2),('TEC','c096637e7b2b54cd51dcd104',2),('CAS','c096637e7b2b54cd51dcd104',3),('CUS','2b497beb4e01f572989ac9d7',3),('TEC','014c94b3aabcd9350bf2a09e',3),('CAS','3b9f5878cfd07a4afabbc163',4),('CUS','3b9f5878cfd07a4afabbc163',4),('TEC','3b9f5878cfd07a4afabbc163',4),('CAS','2b497beb4e01f572989ac9d7',5);
/*!40000 ALTER TABLE `evento_tarea` ENABLE KEYS */;
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
INSERT INTO `modulo` VALUES ('MSQL','MySQL',NULL),('VEN','Ventas',NULL);
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
INSERT INTO `producto` VALUES ('73dccb02d1d3524d977d18a1','Gestion Web','VEN','MSQL','WEB',1);
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
INSERT INTO `tarea` VALUES ('014c94b3aabcd9350bf2a09e','Testeo','CONS'),('2b497beb4e01f572989ac9d7','Testeo General','CONS'),('3b9f5878cfd07a4afabbc163','Liberacion','CONS'),('45b9bb57fe5c6e37fe38ea04','Propio','ADMIN'),('a7e444e107b75d1678b7b225','Ingreso','ADMIN'),('c096637e7b2b54cd51dcd104','Desarrollo','DESA');
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
  PRIMARY KEY (`tipoEventoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoevento`
--

LOCK TABLES `tipoevento` WRITE;
/*!40000 ALTER TABLE `tipoevento` DISABLE KEYS */;
INSERT INTO `tipoevento` VALUES ('CAS','Arreglos para el cliente',1),('CUS','Custom',1),('I+D','Investigacion y desarrollo',1),('ORG','Organizacion',1),('TEC','Tecnico',1);
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
INSERT INTO `usuario` VALUES ('264b0ce34fa762a3dba657fe','Julian','Torossian','julian.torossian@outlook.com','JTAdmin','123','ADMIN',1),('2f0727442b3125f656ec12de','Julian','Torossian','jtorossian@gaci.com.ar','JTDesa','123','DESA',1);
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` FUNCTION `getEtapaAnt_evento`(tipo CHAR(3), etapa int) RETURNS int
BEGIN
    DECLARE antEtapa INT;
	SET antEtapa = (	SELECT et.etEtapa AS etapa
						FROM evento_tarea AS et
						WHERE et.etEvento = tipo
						AND   et.etEtapa < etapa
						ORDER BY et.etEtapa DESC
						LIMIT 1 
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
	UPDATE evento
    SET eventoEtapa = etapa
	WHERE eventoId = id;
    
    CALL insert_audiEvento(id, etapa, usuario);
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`localhost` PROCEDURE `delete_eventos`(eventoCodigo char(24))
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
	BEGIN
		ROLLBACK;
        SELECT "ERROR AL ELIMINAR REGISTRO";
	END;
    
    UPDATE evento
    SET
		eventoCerrado = true
	WHERE
		eventoId = eventoCodigo
	;
    
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
CREATE DEFINER=`sa`@`localhost` PROCEDURE `insert_audiEvento`(evento char(24), etapa int, usuario char(24))
BEGIN
    SET @id = (SELECT getNewId());
    
    INSERT INTO audievento(audiEId, audiEEvento, audiEEtapa, audiEUsuario, audiEFecha)
    VALUES (@id, evento, etapa, usuario, now());
	
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

    CALL insert_audiEvento(@eventoId, 1, usuario);
    
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
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
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
							cantidad
							);
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
					AND 	auE.audiEUsuario = '", usuario,"'"
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

-- Dump completed on 2023-02-13  0:35:01
