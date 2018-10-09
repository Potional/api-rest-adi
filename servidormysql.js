'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');
var execSQL = require('exec-sql');

const app = express();
app.use(bodyParser);

//###########Conexion a la base de datos###################################

execSQL.connect({
    'host': 'localhost',
    'database': 'sys',
    'user': 'root',
    'password': 'babala'
});

execSQL.executeFile(__dirname + '/db.sql',function(err) {
    if (err) throw err;
    console.log("Ejecutado el script");
    execSQL.disconnect();
});

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "adi",
    password: "babala",
    database: "basedatosadi"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//###############################################################################


app.listen(3000,function(){
    console.log("¿Esta corriendo el servidor en el puerto 3000? Pa k kiere saber eso, jaja salu2");
});