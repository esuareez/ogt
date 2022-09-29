// Objetos - Destructuring con 2 o mas objetos

const producto = {
    nombre : "iPhone 13",
    precio : 1500,
    disponible : true
}

const cliente = {
    nombre: "Eliam",
    premium: true
}

const {nombre, precio, disponible} = producto

// En caso que dos objetos tengan el mismo se puede colocar de la siguiente manera para evitar que hayan problemas
const {nombre : nombreCliente, premium} = cliente