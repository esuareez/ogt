const tecnologias = ['JS','HTML','CSS']
const numeros = [10,20,30]

let nuevoArray

// Filter

nuevoArray = tecnologias.filter(tech => tech !== 'HTML')

// Include - Para comprobar si un elemento existe en el array
const resultI = tecnologias.includes('HTML')


// Some - Para saber cuantos existen dentro de un array
const resultS = numeros.some(numero => numero > 15)

// Find - Para saber cual(es) son los valores que cumplen la condicion

const resultF = numeros.find(numero => numero = 10)

// Every - retorna true o false si todos cumplen la condicion

const resultE = numeros.every(numero => numero > 9)

// Reduce

const resultR = numeros.reduce( (total,numero) => numero + total,0)

//Filter - Crea un nuevo array en base a una condicion
const resultFA = tecnologias.filter(tech => tech !== 'HTML')
const resultFAN = numeros.filter(tech => tech > 15)

console.log(resultFAN)

tecnologias.forEach((element, index) => 
     console.log(index)
);

// En react se usa map, ya que crea un arreglo nuevo. No lo crea automaticamente.

const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)

// EN REACT EVITAR LOS QUE MUTAN