// Objetos

const producto = {
    nombre : "iPhone 13",
    precio : 1500,
    disponible : true
}

console.log(producto.nombre) 

// Destructuring

// Cuando no existe la propiedad, si se coloca igualmente, el destructuring crea esa variable en el objeto

const { nombre, precio, disponible } = producto 

console.log(nombre)
console.log(precio)
console.log(disponible)


// Object Literal Enhacement

// Las variables que estan fuera de un objeto, colocarlas dentro de un objeto.

const autenticado = true
const usuario = "Eliam"

const newObject = {

    // Se puede colocar el mismo nombre de la variable de arriba, porque se llaman igual. En caso de no llamarse igual esta mal
    autenticado,
    usuario
}

console.table(newObject)