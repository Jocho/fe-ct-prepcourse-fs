// EXPRESION DE CLASE ò ES6:

// class Auto {
//     constructor(puertas, color, marca, año) {
//         this.puertas = puertas;
//         this.color = color;
//         this.marca = marca;
//         this.año = año;
//         this.ruedas = ruedas;
//     } 
// }   
// let miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);
// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);


// Class in English

class Car{
    // Constructor method
    constructor (doors, colour, make, year, wheels){
        this.door = doors;
        this.colour = colour;
        this.make = make;
        this.year = year;
        this.wheels = wheels;
    }
}

var mySecondCar = new Car(2, "Red", "Renault", "2001", 4);

console.log(mySecondCar);
console.log(mySecondCar.make);
console.log(mySecondCar.colour);


