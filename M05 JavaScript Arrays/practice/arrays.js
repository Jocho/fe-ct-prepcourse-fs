// // var listaDeCompras = [];

// // listaDeCompras[3] = 'Tomates';
// // listaDeCompras[1] = 'Lechuga';

// // console.log(listaDeCompras);

// // var elementoDelArray = listaDeCompras[1]
// // console.log(elementoDelArray)


// // // Lenght
// // var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
// // console.log(nombres);

// // // Lenght
// // var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
// // console.log(nombres);

// // // Funcion flecha
// // // EVERY

// // var numeros = [19,6,8,9];
// // var cumplenCondicion = numeros.every((num) => {
// //     return num > 5;
// // });

// // console.log(cumplenCondicion);

// // // SPLIT

// // var palabra = 'Henri';
// // var palabraSeparada = palabra.split('');

// // console.log('Palabra separada: ',palabraSeparada );


// //SPLIT palabra Jos3

// var palabra = 'Jos3';
// var separarPalabra = palabra.split('');
// separarPalabra.pop();
// separarPalabra.push('é');
// console.log(separarPalabra);


// var palabraUnida = separarPalabra.join('');
// console.log(palabraUnida);

// // Metodo recorrido

// // El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

var numeros = [ 1,2,3,4,5];

// var porCadaNum = numeros.forEach((num => console.log(num))); 
// numeros.forEach((num => console.log(num)));
// // un forEach de todos los numeros iguales a 3, tenemos

// numeros.forEach(num => {if (num === 3) {console.log(num);}});

// Sumar 1(uno) al arreglo

var masUno = numeros.map(num => {
    return num + 0;
});

console.log(masUno);

