// Iteradores en JS
tecnologias = ['JS','HTML','CSS']


// Se pueden usar otros iteradores, pero los que mas se usan en JS son:

// forEach: solo retorna elementos

const arrayforEach = tecnologias.forEach(element => {
    return element
});

// En react se usa map, ya que crea un arreglo nuevo. No lo crea automaticamente.

const arrayMap = tecnologias.map(element => {
    return element
})


console.log(arrayforEach)
console.log(arrayMap)
