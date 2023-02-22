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
INSERT INTO `audievento` VALUES ('28958eef9ed880431142959f','1840555980b13add9ee5d49f',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:55',NULL,'CREO'),('2a8fdeba8b85cfca9dee3066','4b63a8bbd9005c79ddef546a',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:03',NULL,'AVANZO'),('30d81e6c58c024c76ee17986','68778349c24c4b7b4ea84db1',4,'264b0ce34fa762a3dba657fe','2023-02-17 20:02:58','587bea847599e989eedd7562','COMENTARIO'),('3cd556dd0cbde7ae6f477f23','68778349c24c4b7b4ea84db1',4,'264b0ce34fa762a3dba657fe','2023-02-17 20:30:53','ac89288884bbed512ebbd14e','COMENTARIO'),('493f49767025b95f8c040626','69abf03efd8b500f50fe948b',2,'2f0727442b3125f656ec12de','2023-02-10 22:25:37',NULL,'AVANZO'),('4b29eb8ac5284ebc51a0764e','68778349c24c4b7b4ea84db1',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:29',NULL,'AVANZO'),('4d333bef188fa712b8a3e25c','69abf03efd8b500f50fe948b',4,'2f0727442b3125f656ec12de','2023-02-16 12:34:48',NULL,'AVANZO'),('54050098dc1ec00866cfacae','da086a75dea411e7aab6bdee',1,'264b0ce34fa762a3dba657fe','2023-02-17 01:32:58',NULL,'CREO'),('5ab436c6fa3c460ee846d09f','69abf03efd8b500f50fe948b',3,'2f0727442b3125f656ec12de','2023-02-16 12:32:52',NULL,'AVANZO'),('607afc85f827c967bbfda4c2','c1d42fd550cc5aa2b14521ea',3,'264b0ce34fa762a3dba657fe','2023-02-08 16:44:12',NULL,'AVANZO'),('6db94403efa92f54e0478b69','c1d42fd550cc5aa2b14521ea',1,'2f0727442b3125f656ec12de','2023-02-08 13:21:03',NULL,'CREO'),('70157c42a35694dfa1f6ad89','12a91c947f7b377227c52354',2,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:31',NULL,'AVANZO'),('74c19734df0a8c3cb8ce031e','d5d3cc4b908393afc74ee6e6',2,'264b0ce34fa762a3dba657fe','2023-02-17 22:46:43','ccb8d68f46c2b94924ac7d0d','COMENTARIO'),('7e793c55e7a4db41a10842d8','52723a0f7a66f396fbde3bbe',1,'264b0ce34fa762a3dba657fe','2023-02-08 13:03:42',NULL,'CREO'),('85a932f44e10500ad8d193c0','c1d42fd550cc5aa2b14521ea',2,'2f0727442b3125f656ec12de','2023-02-08 16:42:25',NULL,'AVANZO'),('85fcf9b3e3cf44e6855ef154','d11fda2252bcf016101a5bf1',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:12',NULL,'CREO'),('8752a1be0c73e1dd4a5cc151','12a91c947f7b377227c52354',1,'264b0ce34fa762a3dba657fe','2023-02-08 21:12:00',NULL,'CREO'),('8a46d7cfcbc1db4a9b61f704','69abf03efd8b500f50fe948b',5,'264b0ce34fa762a3dba657fe','2023-02-16 23:41:21',NULL,'AVANZO'),('8d7b9a9ba59a12081f4c4b73','da086a75dea411e7aab6bdee',2,'2f0727442b3125f656ec12de','2023-02-17 13:13:45',NULL,'AVANZO'),('a69163ad5114d9a093b6660a','68778349c24c4b7b4ea84db1',3,'264b0ce34fa762a3dba657fe','2023-02-09 17:49:36',NULL,'AVANZO'),('ab76f6dfd02a3ab5756a268f','d5d3cc4b908393afc74ee6e6',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:44',NULL,'CREO'),('b7cc20f93363b7913cf4e492','68778349c24c4b7b4ea84db1',4,'60dba550879c88cfdd2d4906','2023-02-16 23:08:07',NULL,'AVANZO'),('c9cd9058de304df04d304bd8','d5d3cc4b908393afc74ee6e6',2,'b092296c495f89e0ef2ebdfa','2023-02-16 23:08:14',NULL,'AVANZO'),('da605ff1293fc24e59c11641','69abf03efd8b500f50fe948b',2,'2f0727442b3125f656ec12de','2023-02-15 23:53:55','cde25d494a04e110bcbf0d07','COMENTARIO'),('e3a4984e82d7e189440ec379','69abf03efd8b500f50fe948b',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:14',NULL,'CREO'),('e5eb1dd9bdf981e14c6f604d','68778349c24c4b7b4ea84db1',4,'264b0ce34fa762a3dba657fe','2023-02-17 20:18:29','997d56fa0fa130cca49e6e6b','COMENTARIO'),('eea228d15c6d32132efe0183','68778349c24c4b7b4ea84db1',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:46:26',NULL,'CREO'),('f3901e6436eee6e8c7b209df','63ca9be191f963f31d560788',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:26',NULL,'CREO'),('f49156906c2285920929aed5','69abf03efd8b500f50fe948b',2,'2f0727442b3125f656ec12de','2023-02-15 23:53:39','a3dd9ce74d05528a2ebcd0d3','COMENTARIO'),('f5b2c54f17e84141de5912b8','c1d42fd550cc5aa2b14521ea',4,'264b0ce34fa762a3dba657fe','2023-02-08 16:45:23',NULL,'AVANZO'),('fc335b763ed6a9fd568535b3','e5570b20a7697952c2cb4981',1,'264b0ce34fa762a3dba657fe','2023-02-08 22:40:50',NULL,'CREO'),('fe3a739dc8a3094da68d4c98','4b63a8bbd9005c79ddef546a',1,'264b0ce34fa762a3dba657fe','2023-02-09 17:47:04',NULL,'CREO');
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
INSERT INTO `cliente` VALUES ('93690cd79f38c1b8566afdda','FAVF','Favaloro Fundacion',1),('af66bd7b4c0bd2e1148fffbe','FAVU','Favaloro Universidad',1),('f281bbfb095705cb80e54c79','GACI','Diltacross',1),('f82320961678b5fecd0c127e','CMP','Comercial CMP',1);
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
INSERT INTO `evento` VALUES ('12a91c947f7b377227c52354','CUS',1002,'Evento desde la web',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 21:12:00',NULL),('1840555980b13add9ee5d49f','CUS',1003,'sdads',0,1,'af66bd7b4c0bd2e1148fffbe','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:55',NULL),('4b63a8bbd9005c79ddef546a','TEC',1001,'dad',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:04',NULL),('52723a0f7a66f396fbde3bbe','CUS',1000,'Gestion WEB',1,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 13:03:42',NULL),('63ca9be191f963f31d560788','ORG',1001,'desa',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:26',NULL),('68778349c24c4b7b4ea84db1','CAS',1000,'Algun CAS',0,4,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:26',NULL),('69abf03efd8b500f50fe948b','CAS',1001,'asdasdasdasdfs',0,5,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:47:14',NULL),('c1d42fd550cc5aa2b14521ea','CUS',1001,'Evento desde usuario de desarrollo',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','2f0727442b3125f656ec12de','2023-02-08 13:21:03',NULL),('d11fda2252bcf016101a5bf1','I+D',1000,'Alguna investigacion',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:12',NULL),('d5d3cc4b908393afc74ee6e6','TEC',1000,'TEXC1',0,2,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-09 17:46:44',NULL),('da086a75dea411e7aab6bdee','CUS',1004,'probando el dashboard',0,2,'f281bbfb095705cb80e54c79','421b6dd71960c2f08fdfb72e','264b0ce34fa762a3dba657fe','2023-02-17 01:32:58',NULL),('e5570b20a7697952c2cb4981','ORG',1000,'hola',0,1,'f281bbfb095705cb80e54c79','73dccb02d1d3524d977d18a1','264b0ce34fa762a3dba657fe','2023-02-08 22:40:50',NULL);
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
  PRIMARY KEY (`eAdId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventoadicion`
--

LOCK TABLES `eventoadicion` WRITE;
/*!40000 ALTER TABLE `eventoadicion` DISABLE KEYS */;
INSERT INTO `eventoadicion` VALUES ('587bea847599e989eedd7562','68778349c24c4b7b4ea84db1','COMENTARIO','<p>Este comentario esta hecho desde el editor</p>',0,NULL,'2023-02-17 20:02:58'),('997d56fa0fa130cca49e6e6b','68778349c24c4b7b4ea84db1','COMENTARIO','<p>Este es un comentario probando distintas cosas</p><pre><code class=\"language-plaintext\">Como el bloque de codigo</code></pre><figure class=\"table\"><table><tbody><tr><td>Como</td><td>una</td></tr><tr><td>tabla</td><td>!</td></tr></tbody></table></figure><p><code>Codigo en linea</code></p><p><mark class=\"marker-yellow\">Algun </mark><mark class=\"pen-red\">resaltado</mark></p><ul class=\"todo-list\"><li><label class=\"todo-list__label\"><input type=\"checkbox\" disabled=\"disabled\"><span class=\"todo-list__label__description\">y la lista de tareas</span></label></li><li><label class=\"todo-list__label\"><input type=\"checkbox\" disabled=\"disabled\"><span class=\"todo-list__label__description\">como esta</span></label></li></ul>',0,NULL,'2023-02-17 20:18:29'),('a3dd9ce74d05528a2ebcd0d3','69abf03efd8b500f50fe948b','COMENTARIO','Primer comentario',0,NULL,'2023-02-15 23:53:39'),('ac89288884bbed512ebbd14e','68778349c24c4b7b4ea84db1','COMENTARIO','<ul class=\"todo-list\"><li><label class=\"todo-list__label\"><input type=\"checkbox\" disabled=\"disabled\"><span class=\"todo-list__label__description\">y la lista de tareas</span></label></li><li><label class=\"todo-list__label\"><input type=\"checkbox\" disabled=\"disabled\" checked=\"checked\"><span class=\"todo-list__label__description\">como esta</span></label></li></ul>',0,NULL,'2023-02-17 20:30:53'),('ccb8d68f46c2b94924ac7d0d','d5d3cc4b908393afc74ee6e6','COMENTARIO','<p>Primer comentario del TEC</p>',0,NULL,'2023-02-17 22:46:43'),('cde25d494a04e110bcbf0d07','69abf03efd8b500f50fe948b','COMENTARIO','Segundo comentario',0,NULL,'2023-02-15 23:53:55');
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
INSERT INTO `modulo` VALUES ('MSQL','MySQL',NULL),('STK','Stock',NULL),('STKT','Stock Textil','STK'),('VEN','Ventas',NULL);
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
INSERT INTO `producto` VALUES ('421b6dd71960c2f08fdfb72e','Stock textil','STKT','MSQL','WEB',1),('73dccb02d1d3524d977d18a1','Gestion Web','VEN','MSQL','WEB',1);
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
  `tipoEventoColor` char(7) DEFAULT NULL,
  PRIMARY KEY (`tipoEventoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipoevento`
--

LOCK TABLES `tipoevento` WRITE;
/*!40000 ALTER TABLE `tipoevento` DISABLE KEYS */;
INSERT INTO `tipoevento` VALUES ('CAS','Arreglos para el cliente',1,'#0CE0FA'),('CUS','Custom',1,'#ACFE30'),('I+D','Investigacion y desarrollo',1,'#C188DD'),('ORG','Organizacion',1,'#320E12'),('TEC','Tecnico',1,'#C37280');
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-22  0:12:05
