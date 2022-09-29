// Funciones - Function Expression

// Una de las diferencias entre function declaration y expression, es que JS registra todas las funciones en una fase de ejecucion y en la segunda la ejecuta, entonces a diferencia de la function expression. Las variables no las registra, por lo que no la va a encontrar.

// Siempre debe llamarse despues que se declara
const sumar = function(a = 0,b = 0) {
    console.log(a+b)
}

sumar(10,20)