// Funciones - Function declaration

// Parametros por default: cuando se declara la funcion, dentro de los parentesis declarando la funcion se indica inicializando la variable que tiene un parametro por default. Ejemplo: sumar(a = 0, b = 0)

function sumar(a = 0,b = 0){
    if(typeof a !== "number" || typeof b !== "number"){
        alert("Tienen que ser dos numeros")
        return
    }
    return a + b
}

const suma = sumar(20,15)
console.log(suma)

// Se puede retornar mas de un valor de una funcion 

function sumaResta(a = 0,b = 0){
    if(typeof a !== "number" || typeof b !== "number"){
        alert("Tienen que ser dos numeros")
        return
    }
    return [a + b, a - b]
}

const [sum, resta] = sumaResta(35,20)
console.log(sum)
console.log(resta)

