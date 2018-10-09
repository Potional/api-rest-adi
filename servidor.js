'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser);

//###########Conexion a la base de datos###################################

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./basedatosadi.db"
    }
});

//###############################################################################

app.listen(3000,function(){
    console.log("¿Esta corriendo el servidor en el puerto 3000? Pa k kiere saber eso, jaja salu2");
});