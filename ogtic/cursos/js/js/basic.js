let cadena = "Klk wawawa"

console.log(cadena.toLowerCase());

console.log(cadena.indexOf("a"));

console.log(cadena);
console.log(cadena.replace("wawawa", "manito"));

console.log(cadena.substring(0,7));

let cadena2 = "     Bueno, estamos en una prueba de cadenas. Esta es la prueba 201."
console.log(cadena2.trim());


console.log(cadena.startsWith("w",4));
console.log(cadena.endsWith("wawawa"));

let cadena3 = "Prueba";
console.log(cadena3.repeat(2));

let nombre = "Eliam";
let apellido = "Pimentel";
let edad = 20;

console.log("Hola "+nombre+" "+apellido+". Tienes "+edad+" años.");
console.log("Hola %s %s. Tienes %d años.",nombre,apellido,edad);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años `);
console.log("Hola %s %s. EL año que viene tendrás %d años.",nombre,apellido,edad+1);