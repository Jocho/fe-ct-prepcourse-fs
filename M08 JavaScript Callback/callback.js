var devuelveUsuario = function() {
    return "Camilo";
}

var devuelvoSaludo = function() {
    return "Hola";
}

var saludar = function(cb1, cb2) {
    return cb1() + " " + cb2();
}

var resultado = saludar(devuelvoSaludo, devuelveUsuario);
console.log(resultado);


// function devuelvoUsuario() {
//     return 'CAMILO';
//  }
//  function devuelvoSaludo() {
//     return 'Hola';
//  }
//  function saludar(cb1, cb2) {
//     return cb1() + ' ' + cb2();
//  }
//  var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
//  console.log(resultado);