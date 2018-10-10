'use strict'

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('basedatosadi.db');

//###########Seed de la base de datos###################################

db.serialize(function() {
    db.run("CREATE TABLE `Categoria` (`ID` INTEGER PRIMARY KEY AUTOINCREMENT,`nombre` TEXT NOT NULL)");
    db.run("CREATE TABLE `Companyia` (`ID`	INTEGER PRIMARY KEY AUTOINCREMENT,`nombre`	TEXT,`direccion`	TEXT,`nif`	TEXT,`telefono`	NUMERIC)");
    db.run("CREATE TABLE `Usuario` (`ID`	INTEGER PRIMARY KEY AUTOINCREMENT,`login`	TEXT,`password`	TEXT,`nombre`	TEXT,`apellidos`	TEXT,`email`	NUMERIC,`fecha_nacimiento`	TEXT,`tarjeta`	NUMERIC)");
    db.run("CREATE TABLE `Juego` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `nombre` TEXT, `descripcion` TEXT, `trailer` BLOB, `edad_recomendada` INTEGER, `Requerimientos` TEXT, `desarrolladora_id` INTEGER, FOREIGN KEY(`desarrolladora_id`) REFERENCES `Categoria`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE `Opinion` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario_id` INTEGER, `juego_id` INTEGER, `comentario` TEXT, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE SET NULL, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE `Categorias_Juego` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `categoria_id` INTEGER, `juego_id` INTEGER, FOREIGN KEY(`categoria_id`) REFERENCES `Categoria`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE `Amigos` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario1_id` INTEGER, `usuario2_id` INTEGER, FOREIGN KEY(`usuario1_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`usuario2_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE `Juegos_Usuario` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `juego_id` INTEGER, `usuario_id` INTEGER, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE )");
    db.run("CREATE TABLE `Usuario_compra` ( `ID` INTEGER PRIMARY KEY AUTOINCREMENT, `usuario_id` INTEGER, `juego_id` INTEGER, `cantidad` INTEGER, FOREIGN KEY(`usuario_id`) REFERENCES `Usuario`(`ID`) ON DELETE CASCADE, FOREIGN KEY(`juego_id`) REFERENCES `Juego`(`ID`) ON DELETE CASCADE )");

    /*var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();
    db.run("");
    */
});

db.close();