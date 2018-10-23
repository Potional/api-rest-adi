'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var moment = require('moment');  //para trabajar cómodamente con fechas
var secret = '1234567890';

const app = express();
app.use(bodyParser.json());

//###########Conexion a la base de datos###################################

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./basedatosadi.db"
    }
});

//###################Metodos Auxiliares !!!BORRAR!!!!############################

app.route('/usuarios')
.get(function(req,res){
    knex.select().from('Usuario').then(function(datos){
        res.send(datos)
    })
})

//##################################Routas#######################################

app.route('/juegos')
.get(function(req, res) {
    listarJuegos(function(datos){
        res.send(datos)
    })
})
.post(function(req, res) {
    var body = req.body;
});

app.route('/companyias')
.get(function(req,res){
    mostrarCompanyias(function(datos){
        res.send(datos);
    });
})
.post(function(req,res){
    var body = req.body;
    crearCompanyia(body ,function(datos){
        res.send(datos);
    });
});

app.route('/companyias/:id')
.get(function(req,res){
    mostrarDatosCompanyia(parseInt(req.params.id),function(datos){
        res.send(datos);
    });
})
.delete(function(req,res){
    borrarCompanyia(parseInt(req.params.id), function(datos){
        res.send(datos);
    })
})
.put(function(req,res){
    actualizarCompanyia(parseInt(req.params.id), req.body,function(datos){
        res.send(datos);
    })
});

app.route('/categorias')
.get(function(req,res){
    listarCategorias(function(datos){
        res.send(datos)
    })
});

app.route('/login')
.post(function(req,res){
    var body = req.body;
    logarse(body,function(datos){
        res.send(datos);
    })
});

app.route('/usuario/:id')
.get(function(req,res){
    mostrarDatosUsuario(parseInt(req.params.id),req.get('Authorization'),function(datos){
        res.send(datos)
    })
})

//################################################################################
//##################################Acceso a datos################################
function listarJuegos(callback) {
    knex.select().from('Juego')
    .then(function(datos){
    callback(datos)
    })
}

function crearCompanyia(body,callback) {
    knex('Companyia').insert({ID: null, nombre: body.nombre, direccion: body.direccion, nif: body.nif, telefono: body.telefono}).then(function(datos){
        var json = {};
        json.ID = datos[0];
        callback(json)
    })
}

function mostrarCompanyias(callback) {
    knex.select().from('Companyia').then(function(datos){
        callback(datos)
    })
}

function mostrarDatosCompanyia(idurl,callback){
    knex.select().from('Companyia').where({ID: idurl}).then(function(datos){
        callback(datos)
    })
}

function borrarCompanyia(idurl,callback) {
    knex('Companyia').where('ID', idurl).del().then(function(datos){
        callback('Companyia borrada con exito')
    })
}

function actualizarCompanyia(idurl,body,callback) {
    knex('Companyia').where('ID', idurl).update({nombre: body.nombre, direccion: body.direccion, nif: body.nif, telefono: body.telefono}).then(function(datos){
        knex.select().from('Companyia').where({ID: idurl}).then(function(datos){
            callback(datos)
        });
    })
}

function listarCategorias(callback){
    knex.select().from('Categoria').then(function(datos){
        callback(datos)
    })
}

function logarse(body,callback){
    knex.select().from('Usuario').where({login: body.login}).where({password: body.password}).then(function(datos){
        //suponiendo que esta todo bien
        var payload = {
            login: body.login,
            exp: moment().add(30,'minutes').valueOf()
        };
        var token = jwt.encode(payload,secret);
        callback(token);
    })
}

function mostrarDatosUsuario(idurl,token,callback){

    var decoded = jwt.decode(token.split(' ')[1],secret);
    console.log(decoded)
    if(decoded){
        knex.select().from('Usuario').where({ID: idurl}).then(function(datos){
            if(datos[0].login == decoded.login){
                callback(datos);
            }else{
                callback('Error 401');        
            }
        })
    } else {
        callback('Error 401');
    }
}
//################################################################################

app.listen(3000,function(){
    console.log("¿Esta corriendo el servidor en el puerto 3000? Pa k kiere saber eso, jaja salu2");
});