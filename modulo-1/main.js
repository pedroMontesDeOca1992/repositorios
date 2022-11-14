/*Ejercicio 1*/

console.log("Hola mundo! ");

/* Ejercicio 2 */

var nombre = "pedro";
var edad = 30;
var mayorDeEdad = true;

var direccion = {
  nombre: "5 de mayo",
  numero: 22,
};

coloresFavoritos = ["negro", "Azul", "Gris", "Cafe", "Blanco"];
var lenguajesFavoritos = ["JavaScript", "PHP", "Java", "Node"];
var mejorLenguaje = lenguajesFavoritos[0];
var peorLenguaje = lenguajesFavoritos[3];

console.log(mejorLenguaje);
console.log(peorLenguaje);

/* Ejercicio 3 */

var numero1 = 20;
var numero2 = 10;

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);

/* Ejercicio 4 */

var saludo = "hola";

if (saludo == "hola") {
  console.log("Ha saludado");
}

/* Ejercicio 5 */

var pokemons = ["Pikachu", "Charizard", "Snorllax", "chicorita"];

console.log(pokemons[0]);
console.log(pokemons[1]);
console.log(pokemons[2]);
console.log(pokemons[3]);

console.log(pokemons.toString());

for (var i = 0; i < pokemons.length; i++) {
  console.log(pokemons[i]);
}

const Arraypokemos = [
  {
    nombre: "Pikachu",
    tipoDePokemon: "Electricidad",
  },
  {
    nombre: "Charizard",
    tipoDePokemon: "Fuego",
  },
  {
    nombre: "Chicorita",
    tipoDePokemon: "Tierra",
  },
];

 Arraypokemos.forEach(pokemon => {
  if(pokemon.tipoDePokemon === 'Fuego'){
    console.log("es un pokemon de fuego!");
   }
});





// if(edad > 5){
//    console.log("Mayor que 5");
// } else if( edad < 3){
//   console.log("Es menor que 3");
// }else {
//   console.log("No sé lo que es.")
// }

/**
 if
else
else if
Operadores lógicos
&&
||
!
Operadores de comparación
==
===
!=
!==
Operadores de comparación numéricos
 */
