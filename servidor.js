'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//app.use(bodyParser);

//###########Conexion a la base de datos###################################

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./basedatosadi.db"
    }
});

//###############################################################################

//##################################Routas#######################################

app.route('/juegos')
.get(function(req, res) {
  console.log('Lista de juegos');
    listarJuegos(function(datos){
        resp.send(datos)
    })
})
.post(function(req, res) {
    console.log('Añadir un juego');
});
//################################################################################
//##################################Acceso a datos################################
function listarUsuarios(callback) {
    knex.select().from('Juego')
    .then(function(datos){
      callback(datos)
    })
}
//################################################################################

app.listen(3000,function(){
    console.log("¿Esta corriendo el servidor en el puerto 3000? Pa k kiere saber eso, jaja salu2");
});