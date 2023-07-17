
// Operadores Logicos

// Funcion Mayor y menor la cual verificara si el numero recibido es menor a 10 y mayor a 5

function mayoryYMenor(num){
    if(num > 5 && num < 10){
        console.log(true);
    } else {
        console.log(false);
    }
};

mayoryYMenor(9);
mayoryYMenor(12);


// function mayorYMenor2(num){
//     if(num > 5 && num < 10)console.log(true);
//     else console.log(false);
// }

function mayoryYMenorYPar(num){
    if(num > 5 && num < 10 && num % 2 == 0){
        console.log(true);
    } else {
        console.log(false);
    }
};

mayoryYMenorYPar(9);
mayoryYMenorYPar(8);

// OR
function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
}
operadorOr('Henry'); //true
operadorOr('Javascript'); //false
operadorOr('H'); //true`

// NOT
function negacion(permiso) {
   if (permiso) console.log('Tiene permiso');
}
negacion(true);
negacion(false);