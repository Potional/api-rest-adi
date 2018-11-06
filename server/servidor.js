'use strict'

const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var moment = require('moment');  //para trabajar cómodamente con fechas
var secret = '1234567890';
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.json());

//###########Conexion a la base de datos###################################

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./basedatosadi.db"
    }
});

//##########################Metodos Admin################################

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
        res.status(200);
        res.send(datos);
    })
});

app.route('/juego/:id/:coin')
.get(function(req, res) {
    detallesJuego(parseInt(req.params.id), req.params.coin,function(datos){
        if(!datos[0]){
            res.status(404);
            res.send("El recurso solicitado no existe");
        } else {
            res.status(200);
            res.send(datos);
        }
    })
});

app.route('/companyias')
.get(function(req,res){
    mostrarCompanyias(function(datos){
        res.status(200);
        res.send(datos);
    });
})
.post(checkCompanyiaFields,function(req,res){
    var body = req.body;
    crearCompanyia(body ,function(datos){
        res.status(201);
        res.send(datos);
    });
});

app.route('/companyias/:id')
.get(function(req,res){
    mostrarDatosCompanyia(parseInt(req.params.id),function(datos){
        if(!datos[0]){
            res.status(404);
            res.send("El recurso solicitado no existe");
        }
        res.status(200);
        res.send(datos);
    });
})
.delete(function(req,res){
    try{
        borrarCompanyia(parseInt(req.params.id), function(datos){
            res.status(200);
            res.send(datos);
        })
    } catch(err){
        res.status(404);
        res.send("El recurso solicitado no existe");
    }
})
.put(checkCompanyiaFields,function(req,res){
    actualizarCompanyia(parseInt(req.params.id), req.body,function(datos){
        if(!datos[0]){
            res.status(404);
            res.send("El recurso solicitado no existe");
        } else {
            res.status(200);
            res.send(datos);
        }
    });
});

app.route('/categorias')
.get(function(req,res){
    listarCategorias(function(datos){
        res.status(200);
        res.send(datos)
    })
});

app.route('/login')
.post(function(req,res){
    var body = req.body;
    logarse(body,function(datos){
        if(!datos[0]){
            res.status(401);
            res.send("Error en la autenticacion");
        } else {
            res.status(200);
            res.send(datos);
        }
        
    })
});

app.route('/usuario/:id')
.get(checkAuth,function(req,res){
    mostrarDatosUsuario(parseInt(req.params.id),req.get('Authorization'),function(datos){
        if(datos == 'Error 401'){
        res.status(401);
        } else if(datos == 'Error 404'){
            res.status(404);
        } else {
            res.status(200);
        }
        res.send(datos)
    })
})

//################################################################################

function checkAuth(req,res,next){
    if(req.get('Authorization')){
        var decoded = jwt.decode(req.get('Authorization').split(' ')[1],secret);
            if(decoded.exp < moment().add(30,'seconds').valueOf()){
                res.status(401);
                res.send("La cuenta ha expirado")
            } else {
                next();
            }
    } else {
        res.status(401);
        res.send("Debes de registrarte para acceder a esta informacion")
    }
}

function checkCompanyiaFields(req,res,next){
    try{
        if(req.body.nombre != "" && req.body.direccion != "" && req.body.nif != "" && req.body.telefono != ""){
            next();
        }else {
            res.status(400);
            res.send("Faltan datos o no son correctos");
        }
    } catch (err){
        res.status(400);
        res.send("Faltan datos o no son correctos");
    }
}

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
    try{
        knex.select().from('Usuario').where({login: body.login}).where({password: body.password}).then(function(datos){
            if(!datos[0]){
                callback(datos)
            } else {
                //suponiendo que esta todo bien
                var payload = {
                    login: body.login,
                    exp: moment().add(30,'minutes').valueOf()
                };
                var token = jwt.encode(payload,secret);
                callback(token);
            }
        })
    } catch(err){
        var datos = [];
        callback(datos);
    }
}

function mostrarDatosUsuario(idurl,token,callback){
    var decoded = jwt.decode(token.split(' ')[1],secret);
    if(decoded){
        knex.select().from('Usuario').where({ID: idurl}).then(function(datos){
            if(!datos[0]){
                callback('Error 404');        
            } else if(datos[0].login == decoded.login){
                callback(datos);
            }else{
                callback('Error 401');        
            }
        })
    } else {
        callback('Error 401');
    }
}

function detallesJuego(idurl,coinurl,callback){
    knex('Juego').where('ID',idurl).then(
        function(datos){
            var monedaBase = 'USD' + coinurl;
            if(datos[0]){
                fetch('http://apilayer.net/api/live?access_key=cbd17f850c1e2205f8181421d5eb6d1a&currencies=' + coinurl)
                .then(res => res.json())
                .then((respapi) => {
                if(respapi.success == true){
                    var stringi = JSON.stringify(respapi['quotes']);
                    var quotes = JSON.parse(stringi);
                    datos[0].precio = parseFloat(datos[0].precio) * parseFloat(quotes[monedaBase]);
                } else {
                    datos = [];
                }
                callback(datos);
                }).catch(function(err){console.log()});
            } else {
            callback(datos);
            }
        }
    )
}
//################################################################################

app.listen(3000,function(){
    console.log("El servidor esta corriendo en el puerto 3000");
});

module.exports = app;