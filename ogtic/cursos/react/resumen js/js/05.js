// Objetos - Manipulacion

const producto = {
    nombre : "iPhone 13",
    precio : 1500,
    disponible : true
}

// Con freeze no se puede reescribir, ni añadir, ni eliminar una propiedad de un objeto.
Object.freeze(producto)

// Con Seal se puede modificar, pero no se puede añadir ninguna propiedad
Object.seal(producto)

producto.nombre = "iPhone 13 Pro Max"

//En caso que no exista, lo va a añadir
producto.imagen = "imagen.jpg"

// Para eliminar, seria:

delete producto.disponibilidad

//En caso de borrar una propiedad que no exista, no dara error pero igualmente se debe evitar.

console.table(producto)