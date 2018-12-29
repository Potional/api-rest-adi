const fetch = require('node-fetch');


//Funcion que se usa para que el usuario pueda logarse en la web
//La funcion recibe el nombre de usuario y la contraseña
//La funcion devuelve una promesa que que retorna la respuesta del servidor (token y estado de la respuesta)
function login(user,pass){
    var usere = {"login": user, "password": pass};
    var aux = JSON.stringify(usere);
    return fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: aux
    }).then((datos)=>{
        return datos;
    });
}

export{login};

//Funcion que comprueba si el token que tiene el usuario en el localStorage es valido
//es decir que no ha sido modifica o expirado.
//Recibe el token del usuario
//Devuekve una promesa que devuelve status 200 si esta bien y 401 si el token es erroneo
function autenticacionValida(tokena){
    return fetch('http://localhost:3000/checkAuth', {
        method: 'POST',
        headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/text',
            'Authorization': 'Bearer ' + tokena
        },
        body: 'Nada'
    }).then((datos) => {
        if(datos.status == 200){
            return true;
        } else {
            return false;
        }
    })
}

export{autenticacionValida}

//Funcion que obtiene la lista de todos los videojuegos
//No recibe nada
//Devuelve una promesa que devuelve la lista de todos los videojuegos
function obtenerlistajuegos(){
    return fetch('http://localhost:3000/juegos').then((datos) => {
        return datos.json().then((masdatos) => {
            return masdatos;
        })
    })
}

export {obtenerlistajuegos}

//Funcion que crea un objeto en la base de datos del servidor
//Recibe un JSON con los datos del juego que ha introducido el usuario
//Devuelve una promesa que devuelve true si se ha creado o false si ha fallado
function crearJuegoAPI(jeison){
    return fetch('http://localhost:3000/juegos', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jeison
    }).then((datos) => {
        if(datos.status == 201){
            return true;
        } else {
            return false;
        }
    });
}

export{crearJuegoAPI}

//Funcion que borra un juego de la base de datos del servidor
//Recibe la ID del juego a borrar
//Devuelve una promesa que devuelve true si se ha borrado el elemento y false si no se ha pododo borrar
function borrarJuego(id){
    return fetch('http://localhost:3000/juego/' + id + '/USD', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/text',
            'Content-Type': 'application/text'
        },
        body: 'nada'
    }).then((datos) => {
        if(datos.status == 200){
            return true;
        } else {
            return false;
        }
    });
}

export{borrarJuego}

//Funcion que obtine los detalles de un juego en concreto
//Recibe la ID del juego a mostrar los detalles
//Devuelve una promesa que devuelve la informacion del juego en cuestion, en caso de que no exista devuelve una cadena vacia
function obtenerdetallesjuego(id){
    return fetch('http://localhost:3000/juego/' + id + '/USD').then((datos) => {
        return datos.json().then((masdata) =>{
            if(datos.status == 200){
                return masdata[0];
            } else {
                return masdata[0];
            }
        })
    });
}

export{obtenerdetallesjuego}