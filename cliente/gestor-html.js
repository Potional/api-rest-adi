//Funcion que se usa para mostrar el Registro
//Recibe nada
//Devuelve el html del registro
function mostrarRegistro(){
    return  '<div class="container container-login">' +
    '<div class="card card-register mx-auto mt-5">' +
    '<div class="card-header">Register an Account</div>' +
    '<div class="card-body">' +
        '<form>' +
        '<div class="form-group">' +
            '<div class="form-row">' +
            '<div class="col-md-6">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="firstName">First name</label>' +
                '<input type="text" id="firstName" class="form-control input-login" style="margin-left: 25%" placeholder="First name" required="required" autofocus="autofocus">' +
                '</div>' +
            '</div>' +
            '<div class="col-md-6">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="lastName">Last name</label>' +
                '<input type="text" id="lastName" style="margin-left: 25%" class="form-control input-login" placeholder="Last name" required="required">' +
                '</div>' +
            '</div>' +
            '</div>' +
        '</div>' +
        '<div class="form-group">' +
            '<div class="form-label-group">' +
            '<label class="label-login" for="inputEmail">Email address</label>' +
            '<input type="email" id="inputEmail" class="form-control input-login" placeholder="Email address" required="required">' +
            '</div>' +
        '</div>' +
        '<div class="form-group">' +
            '<div class="form-row">' +
            '<div class="col-md-6">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="inputPassword">Password</label>' +
                '<input type="password" style="margin-left: 25%; " id="inputPassword" class="form-control input-login" placeholder="Password" required="required">' +
                '</div>' +
            '</div>' +
            '<div class="col-md-6">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="confirmPassword">Confirm</label>' +
                '<input type="password" style="margin-left: 25%" id="confirmPassword" class="form-control input-login" placeholder="Confirm password" required="required">' +
                '</div>' +
            '</div>' +
            '</div>' +
        '</div>' +
        '<a class="btn btn-primary btn-block" href="login.html">Register</a>' +
        '</form>' +
        '<div class="text-center">' +
        '<a class="d-block small mt-3" href="/" id="login-link">Login Page</a>' +
        '</div>' +
    '</div>' +
    '</div>' +
'</div>';
}

export{mostrarRegistro}

//Funcion que muestra el login
//Recibe nada
//Devuelve el html del registro
function mostrarLogin(){
    return  '<div class="container container-login">' +
    '<div class="card card-login mx-auto mt-5">' +
    '<div class="card-header">Login</div>' +
    '<div class="card-body">' +
        '<form>' +
            '<div class="form-group">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="inputEmail">Nombre Usuario</label>' +
                '<input type="text" id="inputEmail" class="form-control input-login" placeholder="Nombre Usuario" required="required" autofocus="autofocus">' +
                '</div>' +
            '</div>' +
            '<div class="form-group">' +
                '<div class="form-label-group">' +
                '<label class="label-login" for="inputPassword">Contraseña</label>' +
                '<input type="password" id="inputPassword" class="form-control input-login" placeholder="Contraseña" required="required">' +
                '</div>' +
            '</div>' +
            '<a class="btn btn-primary btn-block" id="btn_login">Login</a>' +
        '</form>' +
        '<div class="text-center">' +
        '<a class="d-block small mt-3" href="#registro" id="registro-link">Registro</a>' +
        '</div>' +
    '</div>' +
    '</div>' +
'</div>';
}

export{mostrarLogin}

//Funcion que sirve para mostrar el navbar con el nombre de usuario
//Recibe nada
//Devuelve el html del navbar
function mostrarNavbar(){
    var tokenJSON = JSON.parse(localStorage.getItem('username'));
    return '<nav id="navbar" class="navbar navbar-dark bg-navbar">' +
        '<a class="navbar-brand" href="/">Practica ADI</a>' +
        '<div class="navbar-nav navbar-display-mio">' +
        '<a class="nav-item nav-link nav-item-mio" href="/">Juegos</a>' +
            '<a class="nav-item nav-link nav-item-mio" href="#">Companyias</a>' +
            '<a class="nav-item nav-link nav-item-mio" href="#">Comprar</a>' +
        '<span class="navbar-text username nav-item-mio">' +
            tokenJSON.user +
        '</span>' +
        '<a class="nav-link nav-item-mio" id="btn-logout" href="#">LogOut</a>' +
        '</div>' +
    '</nav>';
}

//Funcion que sirve para mostrar el formulario de añadir juegos
//Recibe nada
//Devuelve el html del formulario para añadir juegos
function mostarFormAñadirJuego(){
    return '<div class="container container-tabla" id="form">' +
    '<form>' +
        '<div class="form-group">' +
            '<label for="inputnombre">Nombre</label>' +
            '<input type="text" class="form-control" id="inputnombre" placeholder="Inserta un nombre">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputdescripcion">Descripcion</label>' +
            '<input type="text" class="form-control" id="inputdescripcion" placeholder="Inserta una descripcion">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputtrailer">Trailer</label>' +
            '<input type="text" class="form-control" id="inputtrailer" placeholder="Inserta una url del trailer (youtube)">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputedad">Edad Recomendada</label>' +
            '<input type="number" class="form-control" id="inputedad" placeholder="Inserta una edad">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputrequerimirntos">Requisitos</label>' +
            '<input type="text" class="form-control" id="inputrequerimirntos" placeholder="Inserta los requisitos del sistema">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputprecio">Precio</label>' +
            '<input type="number" class="form-control" id="inputprecio" placeholder="Inserta un precio (USD)">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="inputdesarrolladora">Desarrolladora</label>' +
            '<input type="number" class="form-control" id="inputdesarrolladora" placeholder="Inserta el ID de la desarrolladora">' +
        '</div>' +
        '<button type="button" id="btn-addjuego" class="btn btn-primary">Añadir</button>' +
    '</form>' +
    '</div>';
}

//Funcion que sirve para mostrar la lista de juegos
//Recibe un boolean por si existe el navbar y la lista de juegos a mostrar
//Devuelve el html de la pagina del listado de juegos, incluyendo el navbar y el formulario para añadir mas juegos
function mostrarListado(existenavbar, juegos){
    var html_completo = "";
        html_completo = mostrarNavbar();
    var sourcelista = '<div class="container container-tabla" id="tabla">' +
        '<table class="table">' +
            '<thead class="thead-dark">' +
            '<tr>' +
                '<th scope="col">ID</th>' +
                '<th scope="col">Nombre</th>' +
                '<th scope="col">Descripcion</th>' +
                '<th scope="col">Edad recomendada</th>' +
                '<th scope="col">Precio (USD)</th>' +
                '<th scope="col">Detalles</th>' +
                '<th scope="col">Eliminar</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>';

    juegos.forEach(juego => {
        sourcelista += '<tr>' +
                    '<th scope="row" id="' + juego.ID + '" >' + juego.ID + '</th>' +
                    '<th scope="row">' + juego.nombre + '</th>' +
                    '<td>' + juego.descripcion + '</td>' +
                    '<td>' + juego.edad_recomendada + '</td>' +
                    '<td>' + juego.precio + '</td>' +
                    '<td><a href="#" id="detalles' + juego.ID + '">Ver detalles</a></td>' +
                    '<td><a href="#" id="eliminar' + juego.ID + '">Eliminar</a></td>' +
                    '</tr>';
                });

            sourcelista += '</tbody>' +
        '</table>' +
    '</div>';
    html_completo += sourcelista;
    html_completo += mostarFormAñadirJuego();
    return html_completo;
}

export{mostrarListado}

//Funcion que se usa para mostrar los detalles del juego en cuestion
//Recibe los datos del juego
//Devuelve el html de la pagina de detalles del juego incluyendo el navbar
//Si la url del trailer no es valida, en vez de aparecer el video aparecera un mensaje de error
function mostrarDetalles(detalles){
    var html_completo = "";
    html_completo = mostrarNavbar();
    html_completo += '<div class="container container-login container-tabla">' +
                    '<h1>Detalles de ' + detalles.nombre + '</h1>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Nombre: </p></div>' +
                        '<div class="col"><p>' + detalles.nombre + '</p></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Descripcion: </p></div>' +
                        '<div class="col"><p>' + detalles.descripcion + '</p></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Trailer: </p></div>' +
                        '<div class="col">';
                        if(detalles.trailer.includes("https://www.youtube.com/embed/")){
                            html_completo += '<iframe width="560" height="315" src="' + detalles.trailer + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        } else {
                            html_completo += '<p>El video no existe o la url es incorrecta</p>'
                        }
    html_completo +=    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Edad Recomendada: </p></div>' +
                        '<div class="col"><p>' + detalles.edad_recomendada + '</p></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Requisitos del sistema: </p></div>' +
                        '<div class="col"><p>' + detalles.Requerimientos + '</p></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Precio: </p></div>' +
                        '<div class="col"><p>' + detalles.precio + '</p></div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col"><p class="font-weight-bold">Desarrolladora ID: </p></div>' +
                        '<div class="col"><p>' + detalles.desarrolladora_id + '</p></div>' +
                    '</div>' +
                    '<a href="/"><button type="button" class="btn btn-primary">>Volver</button></a>' +
                '</div>';
    return html_completo;
}

export{mostrarDetalles}