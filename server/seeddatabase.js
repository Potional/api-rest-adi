'use strict'

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('basedatosadi.db');

//###########Seed de la base de datos###################################

db.serialize(function() {
    db.run("DROP TABLE IF EXISTS `Categoria`");
    db.run("DROP TABLE IF EXISTS `Companyia`");
    db.run("DROP TABLE IF EXISTS `Usuario`");
    db.run("DROP TABLE IF EXISTS `Juego`");
    db.run("DROP TABLE IF EXISTS `Opinion`");
    db.run("DROP TABLE IF EXISTS `Categorias_Juego`");
    db.run("DROP TABLE IF EXISTS `Amigos`");
    db.run("DROP TABLE IF EXISTS `Juegos_Usuario`");
    db.run("DROP TABLE IF EXISTS `Usuario_compra`");
    db.run("CREATE TABLE IF NOT EXISTS `Categoria` (`ID` INTEGER PRIMARY KEY AUTOINCREMENT,`nombre` TEXT NOT NULL)");
    db.run("CREATE TABLE IF NOT EXISTS `Companyia` (`ID`	INTEGER PRIMARY KEY AUTOINCREMENT,`nombre`	TEXT,`direccion`	TEXT,`nif`	TEXT,`telefono`	NUMERIC)");
    db.run("CREATE TABLE IF NOT EXISTS `Usuario` (`ID`	INTEGER PRIMARY KEY AUTOINCREMENT,`login`	TEXT,`password`	TEXT,`nombre`	TEXT,`apellidos`	TEXT,`email`	NUMERIC,`fecha_nacimiento`	TEXT,`tarjeta`	NUMERIC,`permisos`	INTEGER)");
    db.run("CREATE TABLE IF NOT EXISTS `Juego` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `nombre` TEXT, `descripcion` TEXT, `trailer` BLOB, `edad_recomendada` INTEGER, `Requerimientos` TEXT,`precio` INTEGER,`desarrolladora_id` INTEGER, FOREIGN KEY(`desarrolladora_id`) REFERENCES `Categoria`(`ID`) ON DELETE SET NULL )");
    db.run("CREATE TABLE IF NOT EXISTS `Opinion` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario_id` INTEGER, `juego_id` INTEGER, `comentario` TEXT, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE SET NULL, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE IF NOT EXISTS `Categorias_Juego` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `categoria_id` INTEGER, `juego_id` INTEGER, FOREIGN KEY(`categoria_id`) REFERENCES `Categoria`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE IF NOT EXISTS `Amigos` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario1_id` INTEGER, `usuario2_id` INTEGER, FOREIGN KEY(`usuario1_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`usuario2_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE IF NOT EXISTS `Juegos_Usuario` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `juego_id` INTEGER, `usuario_id` INTEGER, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE IF NOT EXISTS `Usuario_compra` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario_id` INTEGER, `juego_id` INTEGER, `cantidad` INTEGER, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Accion')");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Aventuras')");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Disparos')");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Estrategia')");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Deportes')");
    db.run("INSERT INTO `Categoria`(`ID`,`nombre`) VALUES (NULL,'Adultos')");
    db.run("INSERT INTO `Companyia`(`ID`,`nombre`,`direccion`,`nif`,`telefono`) VALUES (NULL,'Bugisoft','Units 106-107 - Twofour 54-Building - Abu Dhabi - United Arab Emirates','7788477884','0097122344612');");
    db.run("INSERT INTO `Companyia`(`ID`,`nombre`,`direccion`,`nif`,`telefono`) VALUES (NULL,'Electronic Arts','Edificio 3 Parque Empresarial Cristalia, Calle Vía de los Poblados, Madrid, Álava','7539514682 ','123456789');");
    db.run("INSERT INTO `Companyia`(`ID`,`nombre`,`direccion`,`nif`,`telefono`) VALUES (NULL,'Insomniac','2255 N Ontario St.Suite 550 Burbank, CA 91504','741963852','789456123');");
    db.run("INSERT INTO `Companyia`(`ID`,`nombre`,`direccion`,`nif`,`telefono`) VALUES (NULL,'Platinum Games','8F Tower West, Umeda Sky Building 1-1-30 Oyodonaka, Kita-ku, Osaka 531-6108 Japan','8974561231','84561356489');");
    db.run("INSERT INTO `Usuario`(`ID`,`login`,`password`,`nombre`,`apellidos`,`email`,`fecha_nacimiento`,`tarjeta`, `permisos`) VALUES (NULL,'admin','admin','Jorge','Martin Abad','mrtin.abad.jorge@hotmail.com','28-11-1995','7777777777',0);");
    db.run("INSERT INTO `Usuario`(`ID`,`login`,`password`,`nombre`,`apellidos`,`email`,`fecha_nacimiento`,`tarjeta`, `permisos`) VALUES (NULL,'prueba1','prueba1','Prueba1','Prueba Prueba','prueba1@gmail.com','10-10-2018','111111111',1);");
    db.run("INSERT INTO `Usuario`(`ID`,`login`,`password`,`nombre`,`apellidos`,`email`,`fecha_nacimiento`,`tarjeta`, `permisos`) VALUES (NULL,'prueba2','prueba2','Prueba2','Prueba Prueba','prueba2@gmail.com','10-10-2018','222222222',1);");
    db.run("INSERT INTO `Usuario`(`ID`,`login`,`password`,`nombre`,`apellidos`,`email`,`fecha_nacimiento`,`tarjeta`, `permisos`) VALUES (NULL,'prueba3','prueba3','Prueba3','Prueba Prueba','prueba3@gmail.com','10-10-2018','333333333',1);");
    db.run("INSERT INTO `Juego`(`ID`,`nombre`,`descripcion`,`trailer`,`edad_recomendada`,`Requerimientos`,`precio`,`desarrolladora_id`) VALUES (NULL,'Assasins Creed Odyssey','Un juego de assasins creed mas','https://www.youtube.com/embed/_ddQqzwH__4',18,'OS: Windows 7 SP1, Windows 8.1, Windows 10 (64bit versions only)" 
    + "Processor: AMD FX 6300 @ 3.8 GHz, Ryzen 3 - 1200, Intel Core i5 2400 @ 3.1 GHz Memory: 8 GB RAM Graphics: AMD Radeon R9 285, NVIDIA GeForce GTX 660 (2GB VRAM with Shader Model 5.0) DirectX: Version 11 Storage: 46+ GB available space Video Preset: Lowest (720p)',60,1);");
    db.run("INSERT INTO `Juego`(`ID`,`nombre`,`descripcion`,`trailer`,`edad_recomendada`,`Requerimientos`,`precio`,`desarrolladora_id`) VALUES (NULL,'Star Wars: Battlefront','Juego magnifico 10/10 - IGN','https://www.youtube.com/embed/V2xp-qtUlsQ',18,'Windows 64-bits',60,2);");
    db.run("INSERT INTO `Juego`(`ID`,`nombre`,`descripcion`,`trailer`,`edad_recomendada`,`Requerimientos`,`precio`,`desarrolladora_id`) VALUES (NULL,'Spiderman','Un buen juego de Spiderman','https://www.youtube.com/embed/q4GdJVvdxss',18,'PS4',60,3);");
    db.run("INSERT INTO `Juego`(`ID`,`nombre`,`descripcion`,`trailer`,`edad_recomendada`,`Requerimientos`,`precio`,`desarrolladora_id`) VALUES (NULL,'Nier:Automata','Un buen juego de Nier','https://www.youtube.com/embed/wJxNhJ8fjFk',18,'PS4',60,4);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,1,1);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,1,2);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,1,3);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,1,4);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,2,1);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,2,4);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,3,3);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,4,1);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,4,3);");
    db.run("INSERT INTO `Juegos_Usuario`(`ID`,`juego_id`,`usuario_id`) VALUES (NULL,4,4);");
    

    /*var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
    db.run("");
    */
});

db.close();