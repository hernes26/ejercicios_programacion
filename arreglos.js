// ejercicios de arreglo

let nombres = ["felipe", "Danilo", "Laura"];

console.log(nombres);


// agregar el elementos al arreglos de nombres
nombres.push("eifer");
console.log(nombres);

let equipo =["cali", "pasto", "medellin","junior", "tolima",]

console.log(equipo[1]);


//Averiguar el total de elemento
let motos =["yamah", "kawasaki","honda", "suzuki", "docati"];

//moto.length
console.log(motos.length);

//sumar los nuemros de un arreglos
let numeros =[2, 7, 5, 3, 2];
let suma = numeros.reduce( (acumulador, valorActual) =>acumulador + valorActual, 0);
console.log(suma);

//encontrar el número mayor de un arreglo
let numeroMayor = math.max(...numeros);
console.log(numerosMayor);

//invertir los texto de un arreglo
let frutas = ["manzana", "pera", "guayaba", "lulo", "mango"];
let frutasInvertidas = frutas.slice().reverse();
console.log(frutasInvertidas);

// Agrupar arreglos en un nuevo arreglo
let mujeres = ["Laura", "Sofia", "Valentina", "Daniela"];
let hombres = ["Felipe", "Danilo", "stywrt", "Brayan"];
let personas = [...mujeres, ...hombres];
console.log(personas);

//poner en mayúscula el segunda elenmento
let mayusculas = mujeres[2].toUpperCase();
console.log(mayusculas);



