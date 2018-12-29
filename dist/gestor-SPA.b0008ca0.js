// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"gestor-html.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarRegistro = mostrarRegistro;
exports.mostrarLogin = mostrarLogin;
exports.mostrarListado = mostrarListado;
exports.mostrarDetalles = mostrarDetalles;

//Funcion que se usa para mostrar el Registro
//Recibe nada
//Devuelve el html del registro
function mostrarRegistro() {
  return '<div class="container container-login">' + '<div class="card card-register mx-auto mt-5">' + '<div class="card-header">Register an Account</div>' + '<div class="card-body">' + '<form>' + '<div class="form-group">' + '<div class="form-row">' + '<div class="col-md-6">' + '<div class="form-label-group">' + '<label class="label-login" for="firstName">First name</label>' + '<input type="text" id="firstName" class="form-control input-login" style="margin-left: 25%" placeholder="First name" required="required" autofocus="autofocus">' + '</div>' + '</div>' + '<div class="col-md-6">' + '<div class="form-label-group">' + '<label class="label-login" for="lastName">Last name</label>' + '<input type="text" id="lastName" style="margin-left: 25%" class="form-control input-login" placeholder="Last name" required="required">' + '</div>' + '</div>' + '</div>' + '</div>' + '<div class="form-group">' + '<div class="form-label-group">' + '<label class="label-login" for="inputEmail">Email address</label>' + '<input type="email" id="inputEmail" class="form-control input-login" placeholder="Email address" required="required">' + '</div>' + '</div>' + '<div class="form-group">' + '<div class="form-row">' + '<div class="col-md-6">' + '<div class="form-label-group">' + '<label class="label-login" for="inputPassword">Password</label>' + '<input type="password" style="margin-left: 25%; " id="inputPassword" class="form-control input-login" placeholder="Password" required="required">' + '</div>' + '</div>' + '<div class="col-md-6">' + '<div class="form-label-group">' + '<label class="label-login" for="confirmPassword">Confirm</label>' + '<input type="password" style="margin-left: 25%" id="confirmPassword" class="form-control input-login" placeholder="Confirm password" required="required">' + '</div>' + '</div>' + '</div>' + '</div>' + '<a class="btn btn-primary btn-block" href="login.html">Register</a>' + '</form>' + '<div class="text-center">' + '<a class="d-block small mt-3" href="/" id="login-link">Login Page</a>' + '</div>' + '</div>' + '</div>' + '</div>';
}

//Funcion que muestra el login
//Recibe nada
//Devuelve el html del registro
function mostrarLogin() {
  return '<div class="container container-login">' + '<div class="card card-login mx-auto mt-5">' + '<div class="card-header">Login</div>' + '<div class="card-body">' + '<form>' + '<div class="form-group">' + '<div class="form-label-group">' + '<label class="label-login" for="inputEmail">Nombre Usuario</label>' + '<input type="text" id="inputEmail" class="form-control input-login" placeholder="Nombre Usuario" required="required" autofocus="autofocus">' + '</div>' + '</div>' + '<div class="form-group">' + '<div class="form-label-group">' + '<label class="label-login" for="inputPassword">Contraseña</label>' + '<input type="password" id="inputPassword" class="form-control input-login" placeholder="Contraseña" required="required">' + '</div>' + '</div>' + '<a class="btn btn-primary btn-block" id="btn_login">Login</a>' + '</form>' + '<div class="text-center">' + '<a class="d-block small mt-3" href="#registro" id="registro-link">Registro</a>' + '</div>' + '</div>' + '</div>' + '</div>';
}

//Funcion que sirve para mostrar el navbar con el nombre de usuario
//Recibe nada
//Devuelve el html del navbar
function mostrarNavbar() {
  var tokenJSON = JSON.parse(localStorage.getItem('username'));
  return '<nav id="navbar" class="navbar navbar-dark bg-navbar">' + '<a class="navbar-brand" href="/">Practica ADI</a>' + '<div class="navbar-nav navbar-display-mio">' + '<a class="nav-item nav-link nav-item-mio" href="/">Juegos</a>' + '<a class="nav-item nav-link nav-item-mio" href="#">Companyias</a>' + '<a class="nav-item nav-link nav-item-mio" href="#">Comprar</a>' + '<span class="navbar-text username nav-item-mio">' + tokenJSON.user + '</span>' + '<a class="nav-link nav-item-mio" id="btn-logout" href="#">LogOut</a>' + '</div>' + '</nav>';
} //Funcion que sirve para mostrar el formulario de añadir juegos
//Recibe nada
//Devuelve el html del formulario para añadir juegos


function mostarFormAñadirJuego() {
  return '<div class="container container-tabla" id="form">' + '<form>' + '<div class="form-group">' + '<label for="inputnombre">Nombre</label>' + '<input type="text" class="form-control" id="inputnombre" placeholder="Inserta un nombre">' + '</div>' + '<div class="form-group">' + '<label for="inputdescripcion">Descripcion</label>' + '<input type="text" class="form-control" id="inputdescripcion" placeholder="Inserta una descripcion">' + '</div>' + '<div class="form-group">' + '<label for="inputtrailer">Trailer</label>' + '<input type="text" class="form-control" id="inputtrailer" placeholder="Inserta una url del trailer (youtube)">' + '</div>' + '<div class="form-group">' + '<label for="inputedad">Edad Recomendada</label>' + '<input type="number" class="form-control" id="inputedad" placeholder="Inserta una edad">' + '</div>' + '<div class="form-group">' + '<label for="inputrequerimirntos">Requisitos</label>' + '<input type="text" class="form-control" id="inputrequerimirntos" placeholder="Inserta los requisitos del sistema">' + '</div>' + '<div class="form-group">' + '<label for="inputprecio">Precio</label>' + '<input type="number" class="form-control" id="inputprecio" placeholder="Inserta un precio (USD)">' + '</div>' + '<div class="form-group">' + '<label for="inputdesarrolladora">Desarrolladora</label>' + '<input type="number" class="form-control" id="inputdesarrolladora" placeholder="Inserta el ID de la desarrolladora">' + '</div>' + '<button type="button" id="btn-addjuego" class="btn btn-primary">Añadir</button>' + '</form>' + '</div>';
} //Funcion que sirve para mostrar la lista de juegos
//Recibe un boolean por si existe el navbar y la lista de juegos a mostrar
//Devuelve el html de la pagina del listado de juegos, incluyendo el navbar y el formulario para añadir mas juegos


function mostrarListado(existenavbar, juegos) {
  var html_completo = "";
  html_completo = mostrarNavbar();
  var sourcelista = '<div class="container container-tabla" id="tabla">' + '<table class="table">' + '<thead class="thead-dark">' + '<tr>' + '<th scope="col">ID</th>' + '<th scope="col">Nombre</th>' + '<th scope="col">Descripcion</th>' + '<th scope="col">Edad recomendada</th>' + '<th scope="col">Precio (USD)</th>' + '<th scope="col">Detalles</th>' + '<th scope="col">Eliminar</th>' + '</tr>' + '</thead>' + '<tbody>';
  juegos.forEach(function (juego) {
    sourcelista += '<tr>' + '<th scope="row" id="' + juego.ID + '" >' + juego.ID + '</th>' + '<th scope="row">' + juego.nombre + '</th>' + '<td>' + juego.descripcion + '</td>' + '<td>' + juego.edad_recomendada + '</td>' + '<td>' + juego.precio + '</td>' + '<td><a href="#" id="detalles' + juego.ID + '">Ver detalles</a></td>' + '<td><a href="#" id="eliminar' + juego.ID + '">Eliminar</a></td>' + '</tr>';
  });
  sourcelista += '</tbody>' + '</table>' + '</div>';
  html_completo += sourcelista;
  html_completo += mostarFormAñadirJuego();
  return html_completo;
}

//Funcion que se usa para mostrar los detalles del juego en cuestion
//Recibe los datos del juego
//Devuelve el html de la pagina de detalles del juego incluyendo el navbar
//Si la url del trailer no es valida, en vez de aparecer el video aparecera un mensaje de error
function mostrarDetalles(detalles) {
  var html_completo = "";
  html_completo = mostrarNavbar();
  html_completo += '<div class="container container-login container-tabla">' + '<h1>Detalles de ' + detalles.nombre + '</h1>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Nombre: </p></div>' + '<div class="col"><p>' + detalles.nombre + '</p></div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Descripcion: </p></div>' + '<div class="col"><p>' + detalles.descripcion + '</p></div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Trailer: </p></div>' + '<div class="col">';

  if (detalles.trailer.includes("https://www.youtube.com/embed/")) {
    html_completo += '<iframe width="560" height="315" src="' + detalles.trailer + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  } else {
    html_completo += '<p>El video no existe o la url es incorrecta</p>';
  }

  html_completo += '</div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Edad Recomendada: </p></div>' + '<div class="col"><p>' + detalles.edad_recomendada + '</p></div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Requisitos del sistema: </p></div>' + '<div class="col"><p>' + detalles.Requerimientos + '</p></div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Precio: </p></div>' + '<div class="col"><p>' + detalles.precio + '</p></div>' + '</div>' + '<div class="row">' + '<div class="col"><p class="font-weight-bold">Desarrolladora ID: </p></div>' + '<div class="col"><p>' + detalles.desarrolladora_id + '</p></div>' + '</div>' + '<a href="/"><button type="button" class="btn btn-primary">>Volver</button></a>' + '</div>';
  return html_completo;
}
},{}],"node_modules/node-fetch/browser.js":[function(require,module,exports) {

"use strict"; // ref: https://github.com/tc39/proposal-global

var getGlobal = function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

exports.default = global.fetch.bind(global);
exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}],"gestor-API.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.autenticacionValida = autenticacionValida;
exports.obtenerlistajuegos = obtenerlistajuegos;
exports.crearJuegoAPI = crearJuegoAPI;
exports.borrarJuego = borrarJuego;
exports.obtenerdetallesjuego = obtenerdetallesjuego;

var fetch = require('node-fetch'); //Funcion que se usa para que el usuario pueda logarse en la web
//La funcion recibe el nombre de usuario y la contraseña
//La funcion devuelve una promesa que que retorna la respuesta del servidor (token y estado de la respuesta)


function login(user, pass) {
  var usere = {
    "login": user,
    "password": pass
  };
  var aux = JSON.stringify(usere);
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: aux
  }).then(function (datos) {
    return datos;
  });
}

//Funcion que comprueba si el token que tiene el usuario en el localStorage es valido
//es decir que no ha sido modifica o expirado.
//Recibe el token del usuario
//Devuekve una promesa que devuelve status 200 si esta bien y 401 si el token es erroneo
function autenticacionValida(tokena) {
  return fetch('http://localhost:3000/checkAuth', {
    method: 'POST',
    headers: {
      'Accept': 'application/text',
      'Content-Type': 'application/text',
      'Authorization': 'Bearer ' + tokena
    },
    body: 'Nada'
  }).then(function (datos) {
    if (datos.status == 200) {
      return true;
    } else {
      return false;
    }
  });
}

//Funcion que obtiene la lista de todos los videojuegos
//No recibe nada
//Devuelve una promesa que devuelve la lista de todos los videojuegos
function obtenerlistajuegos() {
  return fetch('http://localhost:3000/juegos').then(function (datos) {
    return datos.json().then(function (masdatos) {
      return masdatos;
    });
  });
}

//Funcion que crea un objeto en la base de datos del servidor
//Recibe un JSON con los datos del juego que ha introducido el usuario
//Devuelve una promesa que devuelve true si se ha creado o false si ha fallado
function crearJuegoAPI(jeison) {
  return fetch('http://localhost:3000/juegos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: jeison
  }).then(function (datos) {
    if (datos.status == 201) {
      return true;
    } else {
      return false;
    }
  });
}

//Funcion que borra un juego de la base de datos del servidor
//Recibe la ID del juego a borrar
//Devuelve una promesa que devuelve true si se ha borrado el elemento y false si no se ha pododo borrar
function borrarJuego(id) {
  return fetch('http://localhost:3000/juego/' + id + '/USD', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/text',
      'Content-Type': 'application/text'
    },
    body: 'nada'
  }).then(function (datos) {
    if (datos.status == 200) {
      return true;
    } else {
      return false;
    }
  });
}

//Funcion que obtine los detalles de un juego en concreto
//Recibe la ID del juego a mostrar los detalles
//Devuelve una promesa que devuelve la informacion del juego en cuestion, en caso de que no exista devuelve una cadena vacia
function obtenerdetallesjuego(id) {
  return fetch('http://localhost:3000/juego/' + id + '/USD').then(function (datos) {
    return datos.json().then(function (masdata) {
      if (datos.status == 200) {
        return masdata[0];
      } else {
        return masdata[0];
      }
    });
  });
}
},{"node-fetch":"node_modules/node-fetch/browser.js"}],"gestor-SPA.js":[function(require,module,exports) {
'use strict'; ///////////////////////////MOSTRAR REGISTRO////////////////////////////////////

var _gestorHtml = require("./gestor-html");

var _gestorAPI = require("./gestor-API");

//Funcion que muestra el registro modificando el html de la pagina
function muestraRegistro() {
  document.getElementById('pag_title').innerText = "Registro";
  document.getElementById('cuerpo').innerHTML = (0, _gestorHtml.mostrarRegistro)();
  document.getElementById('login-link').addEventListener('click', function () {
    return muestraLogin();
  });
} //////////////////////////MOSTRAR LOGIN////////////////////////////////////////


//Esto se ejecuta cuendo el html esta cargado y muestra el login
document.addEventListener('DOMContentLoaded', function () {
  muestraLogin();
}); //Funcion que muestra el login modificando el html de la pagina,
//si ya existe un token en el localStorage, intenta logarse con ese token
//en caso de que sea invalido, se vuelve a pedir el login

function muestraLogin() {
  var resp = logado().then(function (resp) {
    if (resp) {
      mostrarPaginaLista();
    } else {
      document.getElementById('pag_title').innerText = "Login";
      document.getElementById('cuerpo').innerHTML = (0, _gestorHtml.mostrarLogin)();
      document.getElementById('btn_login').addEventListener('click', function () {
        return logarse();
      });
      document.getElementById('registro-link').addEventListener('click', function () {
        return muestraRegistro();
      });
    }
  });
} /////////////////////LOGARSE///////////////////////////////////////////////////


//Funcion que se usa para logarse, si el login es incorrecto(credenciales no validos)
//se muestra por pantalla un mensaje de error
//en caso de que el login sea correcto, se guarda en el local storage el token del usuario y
// su nombre de usuario para poder usarlo mas tarde
function logarse() {
  var user = document.getElementById('inputEmail').value;
  var pass = document.getElementById('inputPassword').value;
  (0, _gestorAPI.login)(user, pass).then(function (datos) {
    if (datos.status == 401) {
      if (!document.getElementById('alerta-login')) {
        document.getElementById('btn_login').insertAdjacentHTML('afterend', '<div id="alerta-login" class="alert alert-danger alert-login" role="alert">El usuario o contraseña son erroneos</div>');
      }
    } else {
      datos.text().then(function (token) {
        localStorage.setItem('token-user', JSON.stringify({
          "token": token
        }));
        localStorage.setItem('username', JSON.stringify({
          "user": user
        }));
        mostrarPaginaLista();
      });
    }
  });
} ///////////////////////COMPROBACION DEL LOGIN///////////////////////////


//Funcion que comprueba si existe el token, en caso afirmativo comprueba que el token sea valido
//Devueve una promesa, si existe el token devuelve la respuesta del metodo autenticacionValida del gestor API
//si no existe devuelve una promesa que devuelve false
function logado() {
  if (localStorage.getItem('token-user')) {
    var tokenJSON = JSON.parse(localStorage.getItem('token-user'));
    return (0, _gestorAPI.autenticacionValida)(tokenJSON.token).then(function (resp) {
      return resp;
    });
  } else {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(false);
      }, 10);
    });
  }
} ///////////////////////LOGOUT////////////////////////////////////////////
//Funcion pque hace logOut, para ello limpia el localStorage y vuelve a mostrar el login


function desconectar() {
  localStorage.clear();
  muestraLogin();
} /////////////////////////////CREAR JUEGO//////////////////////////////////


//Funcion que usa el formulario para poder crear un juego, primero comprueba que los campoes esten correctos
// si no es asi aparece un mensaje de error, en caso afirmativo llama al metodo crerJuegoAPI del
//gestor-API y actualiza la pagina
function crearJuego() {
  var nombre = document.getElementById('inputnombre').value;
  var desc = document.getElementById('inputdescripcion').value;
  var url = document.getElementById('inputtrailer').value;
  var edad = document.getElementById('inputedad').value;
  var requi = document.getElementById('inputrequerimirntos').value;
  var precio = document.getElementById('inputprecio').value;
  var desid = document.getElementById('inputdesarrolladora').value;

  if ((nombre == "" || nombre == null) && !document.getElementById('alerta-nombreJ')) {
    document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-nombreJ" class="alert alert-danger alert-login" role="alert">El nombre no puede estar vacio</div>');
  } else if ((edad == "" || edad == null) && !document.getElementById('alerta-edadJ')) {
    document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-edadJ" class="alert alert-danger alert-login" role="alert">La edad no puede estar vacia</div>');
  } else if ((precio == "" || precio == null) && !document.getElementById('alerta-precioJ')) {
    document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-precioJ" class="alert alert-danger alert-login" role="alert">El precio no puede estar vacio</div>');
  } else if ((desid == "" || desid == null) && !document.getElementById('alerta-desidJ')) {
    document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-desidJ" class="alert alert-danger alert-login" role="alert">El id de la desarrolladora no puede estar vacio</div>');
  } else {
    (0, _gestorAPI.crearJuegoAPI)(JSON.stringify({
      "nombre": nombre,
      "descripcion": desc,
      "trailer": url,
      "edad_recomendada": edad,
      "Requerimientos": requi,
      "precio": precio,
      "desarrolladora_id": desid
    })).then(function (datos) {
      mostrarPaginaLista();
    });
  }
} /////////////////////////////MOSTRAR PAGINA LISTA/////////////////////////


//Funcion que muestra la pagina de la lista, primero obtiene los videojuegos a mostrar
// y una vezx obtenidos llama a mostrarListado de gestor-html para montar la pagina
//una vez que ya esta cargado el html se añaden los eventos con la funcion generaEventos
function mostrarPaginaLista() {
  (0, _gestorAPI.obtenerlistajuegos)().then(function (juegitos) {
    document.getElementById('pag_title').innerText = "Listado";
    document.getElementById('cuerpo').innerHTML = (0, _gestorHtml.mostrarListado)(false, juegitos);
    document.getElementById('btn-logout').addEventListener('click', function () {
      return desconectar();
    });
    document.getElementById('btn-addjuego').addEventListener('click', function () {
      return crearJuego();
    });
    generaEventos(juegitos);
  });
} //Funcion que asigna los eventos de click en detalles y eliminar de la lista de juegos
//para ello recorre le lista de juegos y le asigna al boton correspondiente su funcion
//Recibe la lista de juegos


function generaEventos(juegitos) {
  juegitos.forEach(function (juego) {
    document.getElementById('detalles' + juego.ID).addEventListener('click', function () {
      return detalles(juego.ID);
    });
    document.getElementById('eliminar' + juego.ID).addEventListener('click', function () {
      return eliminar(juego.ID);
    });
  });
} ///////////////////ELIMINAR//////////////////////////////////////////////


//Funcion que llama a borrarJuego para borrar un juego y recarga la lista
//Recibe la ID el juego
function eliminar(e) {
  (0, _gestorAPI.borrarJuego)(e).then(function (datos) {
    mostrarPaginaLista();
  });
} ////////////////////////DETALLES/////////////////////////////////////////


//Funcion para mostrar los detalles de un videojuego
//Recibe la ID del videojuego a mostrar
function detalles(e) {
  (0, _gestorAPI.obtenerdetallesjuego)(e).then(function (detalles) {
    document.getElementById('pag_title').innerText = "Detalles";
    document.getElementById('cuerpo').innerHTML = (0, _gestorHtml.mostrarDetalles)(detalles);
  });
}
},{"./gestor-html":"gestor-html.js","./gestor-API":"gestor-API.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38059" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/lib/builtins/hmr-runtime.js","gestor-SPA.js"], null)
//# sourceMappingURL=/gestor-SPA.b0008ca0.map