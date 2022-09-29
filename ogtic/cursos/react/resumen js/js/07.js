// Unir 2 objetos


const producto = {
    nombre : "iPhone 13",
    precio : 1500,
    disponible : true
}

const cliente = {
    nombre: "Eliam",
    premium: true
}


const nuevoObjeto = Object.assign(producto,cliente)


const nuevoObjeto2 = {producto: {...producto}, cliente: {...cliente}}