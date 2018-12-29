'use strict'
///////////////////////////MOSTRAR REGISTRO////////////////////////////////////
import {mostrarRegistro} from './gestor-html';

//Funcion que muestra el registro modificando el html de la pagina
function muestraRegistro(){
    document.getElementById('pag_title').innerText = "Registro";
    document.getElementById('cuerpo').innerHTML = mostrarRegistro();
    document.getElementById('login-link').addEventListener('click', ()=>(muestraLogin()));
}

//////////////////////////MOSTRAR LOGIN////////////////////////////////////////
import {mostrarLogin} from './gestor-html';

//Esto se ejecuta cuendo el html esta cargado y muestra el login
document.addEventListener('DOMContentLoaded', function() {
    muestraLogin();
})

//Funcion que muestra el login modificando el html de la pagina,
//si ya existe un token en el localStorage, intenta logarse con ese token
//en caso de que sea invalido, se vuelve a pedir el login
function muestraLogin(){
    var resp = logado().then((resp) => {
        if(resp){
            mostrarPaginaLista()
        } else {
            document.getElementById('pag_title').innerText = "Login";
            document.getElementById('cuerpo').innerHTML = mostrarLogin();
            document.getElementById('btn_login').addEventListener('click',()=>(logarse()));
            document.getElementById('registro-link').addEventListener('click',()=>(muestraRegistro()));
        }
    });
    }

/////////////////////LOGARSE///////////////////////////////////////////////////
import {login} from './gestor-API';

//Funcion que se usa para logarse, si el login es incorrecto(credenciales no validos)
//se muestra por pantalla un mensaje de error
//en caso de que el login sea correcto, se guarda en el local storage el token del usuario y
// su nombre de usuario para poder usarlo mas tarde
function logarse(){
    var user = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;
    login(user,pass).then((datos) => {
        if(datos.status == 401){
            if(!document.getElementById('alerta-login')){
                document.getElementById('btn_login').insertAdjacentHTML('afterend','<div id="alerta-login" class="alert alert-danger alert-login" role="alert">El usuario o contraseña son erroneos</div>');
            }
        } else {
            datos.text().then((token) => {
                localStorage.setItem('token-user', JSON.stringify({"token" : token}));
                localStorage.setItem('username', JSON.stringify({"user" : user}));
                mostrarPaginaLista();
            })
        }
    })
}

///////////////////////COMPROBACION DEL LOGIN///////////////////////////
import {autenticacionValida} from './gestor-API';

//Funcion que comprueba si existe el token, en caso afirmativo comprueba que el token sea valido
//Devueve una promesa, si existe el token devuelve la respuesta del metodo autenticacionValida del gestor API
//si no existe devuelve una promesa que devuelve false
function logado(){
    if(localStorage.getItem('token-user')){
        var tokenJSON = JSON.parse(localStorage.getItem('token-user'));
        return autenticacionValida(tokenJSON.token).then((resp)=>{
            return resp;
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(function(){
            resolve(false);
            }, 10);
        });
    }
}

///////////////////////LOGOUT////////////////////////////////////////////
//Funcion pque hace logOut, para ello limpia el localStorage y vuelve a mostrar el login
function desconectar(){
    localStorage.clear();
    muestraLogin();
}
/////////////////////////////CREAR JUEGO//////////////////////////////////
import {crearJuegoAPI} from './gestor-API';

//Funcion que usa el formulario para poder crear un juego, primero comprueba que los campoes esten correctos
// si no es asi aparece un mensaje de error, en caso afirmativo llama al metodo crerJuegoAPI del
//gestor-API y actualiza la pagina
function crearJuego(){
    var nombre = document.getElementById('inputnombre').value
    var desc = document.getElementById('inputdescripcion').value
    var url = document.getElementById('inputtrailer').value
    var edad = document.getElementById('inputedad').value
    var requi = document.getElementById('inputrequerimirntos').value
    var precio = document.getElementById('inputprecio').value
    var desid = document.getElementById('inputdesarrolladora').value
    if((nombre == "" || nombre == null) && (!document.getElementById('alerta-nombreJ'))){
        document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-nombreJ" class="alert alert-danger alert-login" role="alert">El nombre no puede estar vacio</div>')
    }
    else if((edad == "" || edad == null) && !document.getElementById('alerta-edadJ')){
        document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-edadJ" class="alert alert-danger alert-login" role="alert">La edad no puede estar vacia</div>')
    }
    else if((precio == "" || precio == null) && !document.getElementById('alerta-precioJ')){
        document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-precioJ" class="alert alert-danger alert-login" role="alert">El precio no puede estar vacio</div>')
    }
    else if((desid == "" || desid == null) && !document.getElementById('alerta-desidJ')){
        document.getElementById('btn-addjuego').insertAdjacentHTML('afterend', '<div id="alerta-desidJ" class="alert alert-danger alert-login" role="alert">El id de la desarrolladora no puede estar vacio</div>')
    } else {
        crearJuegoAPI(JSON.stringify({"nombre" : nombre, "descripcion" : desc, "trailer" : url, "edad_recomendada" : edad, "Requerimientos" : requi, "precio" : precio, "desarrolladora_id" : desid})).then((datos) => {
            mostrarPaginaLista();
        })
    }
}

/////////////////////////////MOSTRAR PAGINA LISTA/////////////////////////
import {mostrarListado} from './gestor-html';
import {obtenerlistajuegos} from './gestor-API';

//Funcion que muestra la pagina de la lista, primero obtiene los videojuegos a mostrar
// y una vezx obtenidos llama a mostrarListado de gestor-html para montar la pagina
//una vez que ya esta cargado el html se añaden los eventos con la funcion generaEventos
function mostrarPaginaLista(){
    obtenerlistajuegos().then((juegitos) => {
        document.getElementById('pag_title').innerText = "Listado";
            document.getElementById('cuerpo').innerHTML = mostrarListado(false, juegitos);
            document.getElementById('btn-logout').addEventListener('click', ()=>(desconectar()));
        document.getElementById('btn-addjuego').addEventListener('click', ()=>(crearJuego()));
        generaEventos(juegitos);
    })
}

//Funcion que asigna los eventos de click en detalles y eliminar de la lista de juegos
//para ello recorre le lista de juegos y le asigna al boton correspondiente su funcion
//Recibe la lista de juegos
function generaEventos(juegitos){
    juegitos.forEach(juego => {
        document.getElementById('detalles' + juego.ID).addEventListener('click', () => (detalles(juego.ID)));
        document.getElementById('eliminar' + juego.ID).addEventListener('click', () => (eliminar(juego.ID)));
    });
}

///////////////////ELIMINAR//////////////////////////////////////////////
import {borrarJuego} from './gestor-API';

//Funcion que llama a borrarJuego para borrar un juego y recarga la lista
//Recibe la ID el juego
function eliminar(e){
    borrarJuego(e).then((datos) => {
        mostrarPaginaLista();
    });
}

////////////////////////DETALLES/////////////////////////////////////////
import {mostrarDetalles} from './gestor-html';
import {obtenerdetallesjuego} from './gestor-API';

//Funcion para mostrar los detalles de un videojuego
//Recibe la ID del videojuego a mostrar
function detalles(e){
    obtenerdetallesjuego(e).then((detalles) => {
        document.getElementById('pag_title').innerText = "Detalles";
        document.getElementById('cuerpo').innerHTML = mostrarDetalles(detalles);
    })
}
